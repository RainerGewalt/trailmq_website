---
layout: page
title: "MQTT access control: who may publish or subscribe, and why"
seo_title: "MQTT Access Control: Who May Publish or Subscribe · TrailMQ"
crumb: "MQTT access control"
description: "How MQTT access control works: authentication versus authorization, roles and permissions, topic ACLs, wildcard scope and fail-closed defaults."
subtitle: "Authentication tells a broker who is connecting. Access control decides what that identity may do on every publish and subscribe that follows."
permalink: /mqtt-access-control/
updated: September 2026
last_modified_at: 2026-09-14
faq:
  - q: "What is MQTT access control?"
    a: "MQTT access control is the set of rules that decide which authenticated identity may publish to or subscribe to which topics. It is evaluated on every operation, separately from the authentication that happens once at CONNECT."
  - q: "Does MQTT have built-in access control?"
    a: "No. The MQTT specification defines the protocol, not an authorization model. Access control is a broker feature, so the model, the syntax and the wildcard semantics differ between implementations and are not portable."
  - q: "What is the difference between an MQTT ACL and a role?"
    a: "A role groups permissions attached to an identity, such as may publish or may subscribe. An ACL or topic rule scopes where those permissions apply. Systems that use both require each action to satisfy both, so a broad role permission can still be refused by topic scope."
  - q: "Should an MQTT broker fail open or fail closed?"
    a: "Fail closed. An action on a topic that no rule covers should be denied rather than allowed, so that commissioning a new namespace is a deliberate act. The cost is that a missing rule looks like a broken client, which is why the denial needs a reason attached."
---

MQTT's specification defines a transport protocol. It does not define an
authorization model, which is why "how do I control who can publish here?" is
answered differently from one broker to the next — and why access rules written for
one are rarely portable to another.

This page describes the model that most production deployments converge on, the places
it commonly goes wrong, and how TrailMQ implements it.

## Authentication is not access control

These are different checks at different times, and confusing them is the most common
source of wasted debugging time.

| | Authentication | Authorization / access control |
| --- | --- | --- |
| Question | Who are you? | What may you do? |
| Evaluated | Once, at `CONNECT` | On every `PUBLISH` and `SUBSCRIBE` |
| Inputs | username/password, client certificate, token | identity, role, permissions, topic rules |
| Failure | Connection refused | Connection fine; operations silently fail |

An identity that authenticates successfully and is authorized for nothing is a normal,
valid state. It is also almost invisible from the client side — see
[why a denied publish is so hard to diagnose]({{ '/wiki/why-mqtt-publish-denied/' | relative_url }}).

## The building blocks

### Identity

An account, a service or a device. Two identifiers matter, and both need to be
recorded: the **authenticated account** and the **MQTT client id**. Either one alone
makes a later investigation harder than it needs to be — the account tells you who,
the client id tells you which of their twelve gateways.

### Role and permissions

A role groups what an identity may do: publish, subscribe, and over which topic
filters. Roles are what keeps access reviewable — enumerating permissions per device
stops scaling at about the second production line.

### Topic rules and ACLs

A topic rule scopes *where* a permission applies. This is the layer that maps onto the
plant: a namespace per line, per cell, per criticality tier.

### The default for everything else

The most consequential design decision in the whole model. An action on a topic that no
rule covers is either allowed (fail open) or denied (fail closed).

Fail closed is the correct default for industrial systems, and it has one predictable
cost: a missing rule is indistinguishable from a broken client unless the broker tells
you which it was. That cost is exactly what a recorded decision buys back.

## Two gates, not one

Splitting "may this identity do this?" from "does this topic fall in scope?" is what
makes an access model auditable rather than merely functional. TrailMQ requires both:

1. **Gate 1 — role permission.** The identity's role allows the action and the MQTT
   topic filter.
2. **Gate 2 — topic rule.** A rule brings the requested path into scope for a role the
   identity holds.

Both must allow the action. The consequence is worth stating plainly: **a role holding
`publish:*` can still be refused**, because the second gate never opened that path.
This is a feature — it means a broad permission grant cannot quietly become plant-wide
write access — but it is also why the denial reason has to distinguish the two.

The default evaluation policy in the public TrailMQ package is deliberately easy to
test:

| Namespace | Default behaviour |
| --- | --- |
| `public/#` | Available to authenticated roles, subject to role permissions |
| `restricted/#` | Admin only |
| everything else | Denied until a topic rule explicitly grants roles |

## Wildcards: check the semantics, do not assume them

MQTT subscription matching defines `+` as exactly one level and `#` as this level and
everything below. **Authorization matching is not obliged to follow those rules**, and
several systems deliberately make it stricter.

TrailMQ is one of them: `controlled/batch/#` covers `controlled/batch/line1` and
everything under it, but **not** `controlled/batch` itself. Ending a name with `#`, or
using `+`, makes it an area — one rule for every topic *below* it, including topics
that appear later. That last part matters operationally: a rule written today covers
the line commissioned next quarter.

If you are porting ACLs between brokers, this is the first thing to re-test and the
easiest to get silently wrong.

## Where access control usually breaks

- **The rule exists, for a slightly different string.** `line-4/temperature` versus
  `line4/temperature`. Nothing is misconfigured; nothing matches.
- **A broad role grant masks a missing scope.** Someone sees `publish:*` on the role
  and concludes authorization is fine.
- **Deleting a rule does not remove the topic.** Traffic already seen keeps appearing
  as an observation rather than a rule. TrailMQ surfaces these explicitly as
  *"Seen in traffic, not configured"*, which is usually the fastest way to spot a
  namespace nobody governs.
- **Offboarding through the config file only.** Where configuration is merged rather
  than replaced, removing a user from a file does not revoke a user already persisted
  in the runtime. TrailMQ documents this and provides an explicit offboarding path —
  worth checking for whichever broker you run.

## Enforcement without review is only half the control

A broker can enforce a policy perfectly and still leave you unable to answer the
question that matters three months later: *why was this refused, and who tried?*

That answer has to be produced at the moment of the decision. Reconstructing it
afterwards means correlating an ACL file whose current state may differ from its state
at the time, a connection log with client ids but no usernames, and an application log
with usernames but no topics.

TrailMQ records each decision as it makes it — actor, role, client id, action, topic,
time, outcome, and a reason in prose that names which gate refused. It also states
what that evidence is worth: the hash-linked integrity chain covers system and action
entries, and MQTT decision records are labelled `Outside validated scope` because the
chain does not walk them.

[What a reviewable MQTT decision record contains →]({{ '/mqtt-decision-records/' | relative_url }})

## Try the enforcement path locally

```bash
git clone https://github.com/RainerGewalt/TrailMQ.git
cd TrailMQ
./trailmq quickstart
./trailmq verify
```

`verify` runs seven checks, including an authorized publish observed arriving at a real
subscriber and an unauthorized one that is blocked and recorded. Then publish to a
topic your role does not cover and read the record it produces.

<div class="doc-cta">
  <h3>See it before you install it</h3>
  <p>A denied publish, traced from the client error to the recorded reason and the integrity verdict.</p>
  <div class="actions">
    <a href="{{ '/#demo' | relative_url }}" class="btn btn--primary">See a decision</a>
    <a href="{{ '/#try' | relative_url }}" class="btn btn--outline" style="color:#fff;border-color:rgba(255,255,255,0.3)">Try it yourself</a>
  </div>
</div>

## Related

- [Why was my MQTT publish denied?]({{ '/wiki/why-mqtt-publish-denied/' | relative_url }})
- [MQTT audit trail and decision records]({{ '/mqtt-decision-records/' | relative_url }})
- [Industrial MQTT security for OT networks]({{ '/industrial-mqtt-security/' | relative_url }})
- [MQTT in GxP and GMP-regulated environments]({{ '/regulated/' | relative_url }})
