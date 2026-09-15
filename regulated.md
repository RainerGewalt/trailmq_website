---
layout: page
title: "MQTT in GxP and GMP-regulated environments"
seo_title: "MQTT in GxP & GMP-Regulated Environments · TrailMQ"
crumb: "Regulated environments"
description: "What TrailMQ contributes to a regulated assessment, where it stops, and which guides cover the underlying questions."
subtitle: "TrailMQ is a technical control, not a compliance outcome. This page states its boundaries and points to the guides that cover the rest."
permalink: /regulated/
updated: September 2026
last_modified_at: 2026-09-15
faq:
  - q: "Does TrailMQ make a system compliant?"
    a: "No. TrailMQ provides technical controls and reviewable records that can support an assessment. Validation, risk assessment and procedural controls remain the responsibility of the regulated organisation. TrailMQ is not a certification, not WORM storage, not an Annex 11 package and not a 21 CFR Part 11 package."
  - q: "Does TrailMQ provide tamper-proof records of MQTT decisions?"
    a: "No. The hash-linked chain covers system and action entries such as sign-ins, administrative changes and policy changes. MQTT message evidence, including publish and subscribe refusals, sits outside it and is labelled Outside validated scope. The chain is not externally anchored and not digitally signed, so it demonstrates internal consistency rather than third-party custody."
  - q: "Can an MQTT broker be GxP compliant?"
    a: "No product is GxP compliant by itself. MQTT is a protocol and a broker is a component; compliance is a property of a validated system operated under a quality system. A broker can contribute technical controls, which are then assessed within your validation strategy."
---

{%- comment -%}
  This is a routing page with one piece of unique content: TrailMQ's own product
  boundaries in a regulated context. Everything conceptual lives in the wiki and
  is linked, not restated — an earlier draft duplicated both
  gxp-compliant-mqtt-broker and reliable-mqtt-gmp-manufacturing almost entirely.

  Do not add a framework here that the site does not already carry elsewhere. An
  earlier draft named EU GMP Annex 11 affirmatively, where it previously appeared
  only inside a denial; that was removed on owner instruction.
{%- endcomment -%}

No product is GxP compliant by itself. Compliance is a property of a validated
system operated under a quality system, not of a component you install. What a
broker can do is contribute technical controls that a validation strategy then
assesses.

The context TrailMQ is designed to be assessed in: **GMP** (manufacturing
quality), **GAMP 5** (risk-based validation), **21 CFR Part 11** (electronic
records) and **ALCOA+** data-integrity principles. Naming them describes the
context, not conformity.

## What TrailMQ contributes

Two independent authorization gates, with unconfigured namespaces closed until a
rule opens them. Attributable allow and deny records carrying actor, role, client
id, action, topic, time, outcome and reason. Sign-ins, administrative changes and
policy or topic-rule changes recorded as system and action entries. And a
hash-linked integrity chain over those entries that reports its own scope,
including what it excludes.

[See a decision]({{ '/#demo' | relative_url }}) ·
[what a decision record contains]({{ '/mqtt-decision-records/' | relative_url }})

## Where it stops

TrailMQ is **not** a compliance certification or conformity assessment, a
GMP/GxP validation package, an Annex 11 package, a 21 CFR Part 11 package, a CE
declaration, WORM storage, a notarization service, or a guarantee of message
delivery.

On integrity specifically, because this is the claim most often overstated in
this market: the hash-linked chain walks the **system and action store** —
sign-ins, administrative changes, identity and role changes, policy and
topic-rule changes. It does **not** walk MQTT message evidence, **including
publish and subscribe refusals**, which live in their own store. The product
labels those records `Outside validated scope` and repeats the limit beside the
verdict. The chain is also **not externally anchored** and **not digitally
signed**, so it demonstrates internal consistency rather than third-party
custody.

If your requirement is a tamper-checked record of every individual MQTT
decision, TrailMQ {{ site.product_version }} does not provide that today.
Extending integrity coverage over MQTT decision records is planned for 3.2 and
is not available now.

Two further boundaries worth knowing during evaluation. The public package is
for **local, non-production evaluation**; demo certificates and generated users
are not deployment-ready. And **configuration sync uses merge semantics**, so
removing a user from `config.yaml` does not revoke a user already persisted in
the runtime database — follow the documented offboarding path.

Validation, risk assessment, supplier assessment and procedural controls remain
the responsibility of the regulated organisation.

## The underlying questions, in depth

- [Can an MQTT broker be GxP compliant?]({{ '/wiki/gxp-compliant-mqtt-broker/' | relative_url }}) — where GxP relevance begins, and what an audit-ready record needs
- [How to ensure reliable MQTT messaging in GMP-regulated manufacturing]({{ '/wiki/reliable-mqtt-gmp-manufacturing/' | relative_url }}) — QoS, failure handling and validation, as a checklist
- [MQTT data transaction audit trails]({{ '/wiki/mqtt-data-transaction-audit-trail/' | relative_url }}) — testing an integrity claim against its stated scope
- [Logs are not audit trails]({{ '/wiki/logs-vs-audit/' | relative_url }})

<div class="doc-cta">
  <h3>Evaluate the technical controls directly</h3>
  <p>Trigger a denial yourself and read the record it produces, including the integrity verdict's stated exclusions.</p>
  <div class="actions">
    <a href="{{ '/#try' | relative_url }}" class="btn btn--primary">Try it yourself</a>
  </div>
</div>
