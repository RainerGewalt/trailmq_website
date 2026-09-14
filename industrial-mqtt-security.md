---
layout: page
title: "Industrial MQTT security for OT networks"
seo_title: "Industrial MQTT Security for OT Networks · TrailMQ"
crumb: "Industrial MQTT security"
description: "Practical MQTT security for OT networks: TLS, per-device identity, least privilege on topics, fail-closed namespaces and reviewable access decisions."
subtitle: "In an OT network the risk is not only an outsider getting in. It is an authenticated client writing to a topic nobody meant it to reach."
permalink: /industrial-mqtt-security/
updated: September 2026
last_modified_at: 2026-09-14
faq:
  - q: "Is MQTT secure for industrial use?"
    a: "MQTT can be operated securely, but the protocol provides no security by itself. It defines no encryption, no identity model and no authorization model. Security comes from TLS, per-device identity, topic-level least privilege and the broker's enforcement, all of which are deployment choices rather than protocol features."
  - q: "Should every device have its own MQTT credentials?"
    a: "Yes. A shared account across a fleet makes revocation all-or-nothing and makes attribution impossible: a record naming the shared account cannot tell you which device acted. Per-device identity is what makes both revocation and investigation practical."
  - q: "What is the biggest MQTT risk in an OT network?"
    a: "Over-broad publish rights. A client that only needs to report a temperature but holds a wildcard publish permission can write to command and setpoint topics. This is an authorization design problem, not a network problem, and network segmentation does not mitigate it."
  - q: "Does network segmentation remove the need for MQTT access control?"
    a: "No. Segmentation limits who can reach the broker. It says nothing about what an authenticated client inside the segment may do once connected, which is where the consequential actions are."
---

MQTT was designed for constrained devices and unreliable links. It is deliberately
minimal, and that minimalism is the point — but it means the protocol itself provides
**no encryption, no identity model and no authorization model**. Every security
property in an MQTT deployment is something the deployment added.

In an OT network this matters more than in most places, because the messages are not
telemetry alone. Some of them are setpoints.

## The threat that actually materialises

Perimeter discussions dominate, but the failure most industrial MQTT deployments
eventually hit is duller and more common: **an authenticated client writing to a topic
nobody intended it to reach.**

A temperature sensor's gateway is commissioned with a broad publish permission because
that was quickest during a commissioning window. Nothing malicious follows. But now a
device on the plant floor holds write access to command namespaces, that access is not
visible in any review, and when something does write an unexpected setpoint, nobody can
establish afterwards whether it was allowed to.

Network segmentation does not mitigate this. Segmentation decides who can reach the
broker. It says nothing about what they may do once connected.

## The controls that matter, in order of payoff

### 1. TLS, with certificates you actually verify

Encrypt transport, and verify the broker certificate against the CA you expect.
A client configured to skip verification is common in commissioning and rarely removed
afterwards. It is worth testing explicitly: point a client at the broker with the
*wrong* CA and confirm it fails.

MQTT over TLS conventionally uses port 8883. Plaintext 1883 should not be reachable
from anywhere you care about.

### 2. Per-device identity

One account per device or service, never one shared across a fleet.

Two reasons, and the second is the one usually overlooked. **Revocation:** a shared
account can only be revoked for everyone at once, which in practice means never.
**Attribution:** a record naming the shared account `plant-gateway` cannot tell you
which of forty gateways acted. Both the authenticated identity and the MQTT client id
need to be recorded for a record to be findable later.

### 3. Least privilege on topics, not just on devices

This is where the real risk concentrates. A device that reports a temperature needs
publish rights on one path — not a wildcard.

The useful structure is a namespace hierarchy that reflects consequence, not
convenience:

| Namespace tier | Contents | Who may publish |
| --- | --- | --- |
| Telemetry | readings, states, counters | the devices producing them, each scoped to its own path |
| Aggregated | derived values, line-level rollups | the aggregating service |
| Command / setpoint | anything that changes physical behaviour | a small, explicitly enumerated set |

Separating *permission* from *scope* helps here: a role says what an identity may do, a
topic rule says where that applies. Requiring both means a broad role grant cannot
silently become plant-wide write access.
[How the two-gate model works →]({{ '/mqtt-access-control/' | relative_url }})

### 4. Fail closed on unconfigured namespaces

An action on a topic no rule covers should be denied. New namespaces then get
commissioned deliberately rather than appearing because someone typed a new path.

The predictable cost: a missing rule is indistinguishable from a broken client unless
the broker says which it was. That is an argument for recording the reason, not for
failing open.

### 5. Make refusals visible

A refusal nobody sees is a misconfiguration that persists, or a probe nobody
investigates.

Both readings are important. A rising refusal count can mean a device was
reconfigured, a rule was deleted, a certificate rotated badly — or that something is
enumerating your topic space. You cannot distinguish them without the refusals being
surfaced with their identity, client and topic attached.

### 6. Know what your evidence is worth before the incident

The time to establish what your records actually prove is not during an incident
review.

Specifically: does the system record refusals or only the resulting disconnect? Does
any integrity check cover the access decisions, or only administrative changes? Is that
check anchored or signed, or does it only demonstrate internal consistency?

Products vary enormously here, and the difference is rarely visible in a feature list.
[What an MQTT decision record should contain →]({{ '/mqtt-decision-records/' | relative_url }})

## Protocol behaviour with security consequences

Three MQTT specifics are worth knowing before you design around them.

**A denied QoS 0 publish is silently discarded.** There is no acknowledgement in the
protocol to refuse with, so the client exits cleanly and the message is dropped. Any
control path that relies on a client noticing a rejection must not use QoS 0.

**MQTT 3.1.1 cannot express "not authorized" on a publish.** `PUBACK` carries no reason
code, so brokers typically close the connection instead, which clients report as a
transport fault. MQTT 5 adds reason codes — if both ends implement them.

**Retained messages outlive the publisher.** A retained message on a command topic is
delivered to every future subscriber. Whoever may publish to such a topic can leave
something behind for clients that connect later. Treat retain rights on command
namespaces as a separate decision.

## Where TrailMQ fits

TrailMQ is a self-hosted MQTT broker that enforces role and topic access policy and
records each decision as it makes it, with the actor, role, client id, topic, outcome
and a reason in prose. Standard MQTT clients connect directly — no SDK, proxy or
sidecar — and the whole stack runs on your own infrastructure with no cloud dependency
and no telemetry.

It is a technical control, not a security programme. It does not do network
segmentation, device attestation, firmware integrity or intrusion detection, and it is
not a CE declaration or a conformity assessment. What it does is make the access
decisions at the broker boundary enforceable and reviewable in one place.

<div class="doc-cta">
  <h3>See an access decision</h3>
  <p>A denied publish traced from the client-side error to the recorded reason — and the integrity verdict's own stated limits.</p>
  <div class="actions">
    <a href="{{ '/#demo' | relative_url }}" class="btn btn--primary">See a decision</a>
    <a href="{{ '/#try' | relative_url }}" class="btn btn--outline" style="color:#fff;border-color:rgba(255,255,255,0.3)">Try it yourself</a>
  </div>
</div>

## Related

- [MQTT access control: who may publish or subscribe]({{ '/mqtt-access-control/' | relative_url }})
- [Why was my MQTT publish denied?]({{ '/wiki/why-mqtt-publish-denied/' | relative_url }})
- [MQTT audit trail and decision records]({{ '/mqtt-decision-records/' | relative_url }})
- [MQTT in GxP and GMP-regulated environments]({{ '/regulated/' | relative_url }})
