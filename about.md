---
layout: page
title: About TrailMQ
crumb: About
description: Learn about TrailMQ - the audit-first MQTT evidence layer for industrial systems where machine communication must be understandable, comparable and reviewable.
subtitle: An audit-first MQTT evidence layer for industrial systems where machine communication must be understandable, comparable and reviewable — not just fast.
keywords: TrailMQ, MQTT evidence layer, industrial MQTT, audit-first MQTT, domain context, historical baseline, KPI deviation, GMP, GxP, IIoT, traceability
permalink: /about/
---

TrailMQ was created to bridge the gap between **machine-level messaging** and the requirements of **regulated, quality-critical and audit-heavy environments**.

It started with secure MQTT control and audit evidence. Its planned plugin layer extends that idea: live MQTT messages can be enriched with domain context, compared against historical baselines and linked to decision traces.

<div class="callout">
  <span class="callout__ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
  <div><p>If you are evaluating MQTT in a regulated environment, start with <a href="{{ '/wiki/gxp-compliant-mqtt-broker/' | relative_url }}">Can an MQTT broker be GxP compliant?</a></p></div>
</div>

## Why TrailMQ exists

Standard MQTT brokers are optimized for throughput and simplicity. In industrial and regulated environments, this is often not enough.

Quality assurance, validation teams, OT engineers and platform owners need answers to questions like:

- What exactly happened, and in which order?
- Who sent what, and under which policy?
- Why was a message accepted, denied or rate-limited?
- What does this MQTT message mean in machine, batch or process context?
- Which historical baseline was used for this value?
- Was the value normal, warning-level or critical?
- Was a calculation completed, deferred or failed?
- Was anything lost, modified or blocked?

TrailMQ exists to make these questions **technically answerable**.

## From transport to evidence

A standard broker answers one basic question: *did the message move?*

TrailMQ is designed to answer more useful questions — what the message meant, which policy applied, which context was attached, which historical reference was used, which decision was made, and whether the result can be reviewed later.

That turns MQTT from a pure transport mechanism into a source of structured, reviewable evidence.

## Audit-first, not audit-later

TrailMQ treats auditability as a **core design principle**, not an afterthought. Instead of relying on log files and external tooling, it embeds the following directly into the messaging layer:

- Policy-driven enforcement
- Hash-chained audit trails
- Retention and sequencing rules
- Explicit violation handling
- Queue and dead-letter visibility
- Evidence-oriented API surfaces

## Planned plugin layer

The planned plugin layer is focused on one practical goal: make MQTT messages more understandable, comparable and reviewable. The first planned embedded plugins are:

- **Decision Trace** — explains why accept, deny or rate-limit decisions happened
- **Domain Context Lite** — extracts machine, batch and metric context from topics and payload headers
- **Historical Context Feed** — accepts historical comparison values through REST
- **KPI Lite** — compares live MQTT values with historical baselines and records deviations

Together, these plugins support a concrete flow:

1. A live MQTT value arrives.
2. TrailMQ extracts domain context from topic and payload data.
3. A historical baseline is resolved through the context layer.
4. KPI Lite calculates the deviation.
5. The result is linked to the audit chain.
6. If context is missing, the calculation is deferred instead of silently skipped.

## Explain, don't expose

TrailMQ explains decisions and enforcement without turning itself into a raw message inspection tool. You will see who connected and with what permissions, which policies were enforced and why, what decisions were made at each step, which domain context was attached, which historical baseline was used, whether calculations were completed, deferred or failed, and exportable audit evidence for review.

You do not need to expose TrailMQ as a general-purpose live debugging console. This is by design: **evidence over observation**.

## Built for regulated and quality-critical environments

TrailMQ is designed to **support validated systems**, not to replace validation processes or claim certifications. It provides **audit-ready technical evidence** that can be used within existing quality, validation and compliance frameworks.

TrailMQ supports workflows aligned with GMP / GxP requirements, 21 CFR Part 11 (electronic records), Annex 11 (computerized systems), GAMP 5 guidelines, industrial traceability and review workflows, and quality-critical IIoT architectures.

## Beyond pharma

Pharma and life sciences are the clearest starting point because auditability, traceability and data integrity are explicit requirements. But the same product logic applies anywhere machine communication needs to be understood and reviewed later:

- Automotive production and test stands
- Food and beverage manufacturing
- Chemical and process industries
- Energy and utilities
- Rail and maintenance operations
- Building automation
- Logistics and cold-chain monitoring

The common question is always the same: *what happened, why was it relevant, and can we prove it later?*

## Deployment model

TrailMQ follows an **evaluation-first model**:

- **Free to evaluate** — deploy via Docker, test locally, integrate into your workflows
- **No registration required** — clone the GitHub repo and run the launcher
- **Commercial licensing** — production use in regulated or commercial environments requires a valid license

The deployment files are available on [GitHub](https://github.com/RainerGewalt/TrailMQ){:target="_blank" rel="noopener"}. Container images are hosted on Docker Hub: [trailmq-backend](https://hub.docker.com/r/rainergewalt/trailmq-backend){:target="_blank" rel="noopener"} and [trailmq-frontend](https://hub.docker.com/r/rainergewalt/trailmq-frontend){:target="_blank" rel="noopener"}.

## About the author

TrailMQ is maintained by **Florian Przybylak**, working on the architecture of regulated industrial systems, data pipelines and trustworthy automation. — [LinkedIn](https://www.linkedin.com/in/florian-p-6a27ab1b8/){:target="_blank" rel="noopener"}

<div class="doc-cta">
  <h3>Questions, feedback or enterprise inquiries?</h3>
  <p>Reach out — we're happy to discuss evaluation, licensing and regulated deployments.</p>
  <div class="actions">
    <a href="mailto:contact@trailmq.com" class="btn btn--primary">contact@trailmq.com</a>
    <a href="{{ '/wiki/' | relative_url }}" class="btn btn--outline" style="color:#fff;border-color:rgba(255,255,255,0.3)">Explore the concepts</a>
  </div>
</div>
