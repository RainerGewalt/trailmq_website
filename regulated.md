---
layout: page
title: "MQTT in GxP and GMP-regulated environments"
seo_title: "MQTT in GxP & GMP-Regulated Environments · TrailMQ"
crumb: "Regulated environments"
description: "Where an MQTT broker can support GxP, GMP, GAMP 5, Annex 11 and Part 11 processes — the technical controls it contributes, and where it stops."
subtitle: "A broker is a technical control, not a compliance outcome. This page is about what TrailMQ can contribute to a regulated assessment, and where it stops."
permalink: /regulated/
updated: September 2026
last_modified_at: 2026-09-14
faq:
  - q: "Can an MQTT broker be GxP compliant?"
    a: "No product is GxP compliant by itself. MQTT is a protocol and a broker is a component; compliance is a property of a validated system operated under a quality system. A broker can contribute technical controls such as access enforcement, attributable records and change context, which are then assessed within your validation strategy."
  - q: "Can MQTT be used in GMP-regulated manufacturing?"
    a: "Yes, where the surrounding system controls access, validates configuration, handles failures explicitly and preserves reviewable evidence for GMP-relevant message decisions. The protocol is not the deciding factor; the controls around it are."
  - q: "Does TrailMQ make a system compliant?"
    a: "No. TrailMQ provides technical controls and reviewable records that can support an assessment. Validation, risk assessment and procedural controls remain the responsibility of the regulated organisation. TrailMQ is not a certification, not WORM storage, not an Annex 11 package and not a 21 CFR Part 11 package."
  - q: "Does TrailMQ provide tamper-proof records of MQTT decisions?"
    a: "No. The hash-linked chain covers system and action entries such as sign-ins, administrative changes and policy changes. MQTT message evidence, including publish and subscribe refusals, sits outside it and is labelled Outside validated scope. The chain is not externally anchored and not digitally signed, so it demonstrates internal consistency rather than third-party custody."
---

This content previously sat on the TrailMQ homepage. It moved here so the homepage can
answer the question most visitors actually arrive with — *why was this allowed or
denied?* — while the regulated-environment detail stays available in full for the
teams that need it.

## Start with the honest answer

**No product is GxP compliant by itself.** Compliance is a property of a validated
system operated under a quality system, not of a component you install. MQTT is a
protocol; a broker is a component. Neither is compliant or non-compliant.

What a broker can do is contribute technical controls that a validation strategy can
then assess. That is the frame for everything below.

## Reliability in a GMP context means more than delivery

MQTT's own reliability features — QoS levels, persistent sessions, retained messages —
address transport behaviour. They answer "did the packet arrive?"

GMP-relevant reliability asks a broader set of questions:

- Was it the **right client**, authenticated and attributable?
- Was the **right policy** active at that moment?
- Were **failures handled explicitly**, rather than discarded silently?
- Can the **record be reviewed** months later, by someone who was not there?

The first and last of these are where a conventional broker most often leaves a gap.

Three areas to design deliberately:

**Transport behaviour.** Choose QoS, retained state and session behaviour on purpose,
then document where message loss, duplication, replay and reconnect behaviour can
affect a process decision. Note in particular that a denied QoS 0 publish is silently
discarded — the protocol has no acknowledgement to refuse with. If a control path
depends on a client noticing a rejection, QoS 0 is the wrong choice.

**Controlled decisions.** Design each publish and subscribe path so that client
identity, role, effective topic policy and configuration state can be reviewed when an
allowed or blocked action is investigated.

**Reviewable evidence.** Review identity, client, operation, topic, outcome and denial
reason as structured records rather than relying on broker logs alone — and assess the
scope of any integrity check explicitly rather than assuming it covers everything.

[The full checklist: reliable MQTT messaging in GMP-regulated manufacturing →]({{ '/wiki/reliable-mqtt-gmp-manufacturing/' | relative_url }})

## What TrailMQ can contribute

| Control | What it provides |
| --- | --- |
| Attributable MQTT decisions | Reviewable allow and deny records carrying actor, role, client id, action, topic, time, outcome and reason |
| Role and topic authorization | Two independent gates; unconfigured namespaces stay closed until a rule opens them |
| Change context | Sign-ins, administrative changes, identity, role, policy and topic-rule changes recorded as system and action entries |
| Scope-defined integrity check | A hash-linked chain over those system and action entries, reporting its verdict, the entries checked **and** the entries it does not cover |
| Explicit boundaries | The product states its own exclusions in the interface, next to the verdict |

The relevant regulatory context this can feed into: **GMP** (manufacturing quality),
**GAMP 5** (risk-based validation), **21 CFR Part 11** and **EU GMP Annex 11**
(electronic records and signatures), and **ALCOA+** data-integrity principles.

Naming those frameworks describes the context TrailMQ is designed to be assessed in.
It is not a claim of conformity to any of them.

## Where it stops — read this part carefully

TrailMQ is **not**:

- a compliance certification or conformity assessment
- a GMP/GxP validation package, an Annex 11 package or a 21 CFR Part 11 package
- a CE declaration
- WORM storage or a notarization service
- a guarantee of message delivery

And specifically on integrity, because this is the claim most often overstated in this
market:

The hash-linked chain walks the **system and action store**: sign-ins, administrative
changes, identity and role changes, policy and topic-rule changes. It reports the
number of entries checked.

It does **not** walk MQTT message evidence, **including publish and subscribe
refusals**, which live in their own store. The product labels those records
`Outside validated scope` and repeats the limit beside the verdict. The chain is also
**not externally anchored** and **not digitally signed**, so it demonstrates internal
consistency rather than third-party custody.

If your requirement is a tamper-checked record of every individual MQTT decision,
TrailMQ {{ site.product_version }} does not provide that today. Extending integrity
coverage over MQTT decision records is planned for 3.2 and is not available now.

Two further boundaries worth knowing during evaluation:

- **The public package is for local, non-production evaluation.** Demo certificates and
  generated users are not deployment-ready.
- **Configuration sync uses merge semantics.** Removing a user from `config.yaml` does
  not revoke a user already persisted in the runtime database. Follow the documented
  offboarding path.

Validation, risk assessment, supplier assessment and procedural controls remain the
responsibility of the regulated organisation.

## Who this tends to be relevant for

**Pharma and life sciences.** You operate under GMP and reviewers ask questions months
later. The value here is structured MQTT decision records and stated technical
controls to evaluate — not a shortcut through validation.

**OT and production teams.** You need to review who attempted an MQTT action, which
client and topic were involved, and why the broker allowed or denied it.

**IIoT platform engineers.** You build the infrastructure others rely on, and you need
a broker that accepts existing MQTT clients and exposes reviewable records through a UI
and a REST API.

## Further reading

- [Can an MQTT broker be GxP compliant?]({{ '/wiki/gxp-compliant-mqtt-broker/' | relative_url }})
- [How to ensure reliable MQTT messaging in GMP-regulated manufacturing]({{ '/wiki/reliable-mqtt-gmp-manufacturing/' | relative_url }})
- [MQTT data transaction audit trails]({{ '/wiki/mqtt-data-transaction-audit-trail/' | relative_url }})
- [Logs are not audit trails]({{ '/wiki/logs-vs-audit/' | relative_url }})
- [MQTT audit trail and decision records]({{ '/mqtt-decision-records/' | relative_url }})

<div class="doc-cta">
  <h3>Evaluate the technical controls directly</h3>
  <p>Trigger a denial yourself and read the record it produces, including the integrity verdict's stated exclusions.</p>
  <div class="actions">
    <a href="{{ '/#demo' | relative_url }}" class="btn btn--primary">See a decision</a>
    <a href="{{ '/#try' | relative_url }}" class="btn btn--outline" style="color:#fff;border-color:rgba(255,255,255,0.3)">Try it yourself</a>
  </div>
</div>
