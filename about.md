---
layout: default
title: About TrailMQ
description: Learn about TrailMQ - the audit-first MQTT evidence layer for industrial systems where machine communication must be understandable, comparable and reviewable.
keywords: TrailMQ, MQTT evidence layer, industrial MQTT, audit-first MQTT, domain context, historical baseline, KPI deviation, GMP, GxP, IIoT, traceability
permalink: /about/
---

# About TrailMQ

TrailMQ is an **audit-first MQTT evidence layer** for industrial systems where
machine communication must be **understandable, comparable and reviewable** —
not just fast.

It was created to bridge the gap between **machine-level messaging** and the
requirements of **regulated, quality-critical and audit-heavy environments**.

TrailMQ started with secure MQTT control and audit evidence. Its planned plugin
layer extends that idea: live MQTT messages can be enriched with domain context,
compared against historical baselines and linked to decision traces.

---

## Why TrailMQ exists

Standard MQTT brokers are optimized for throughput and simplicity.
In industrial and regulated environments, this is often not enough.

Quality assurance, validation teams, OT engineers and platform owners need
answers to questions like:

- *What exactly happened?*
- *In which order?*
- *Who sent what, and under which policy?*
- *Why was a message accepted, denied or rate-limited?*
- *What does this MQTT message mean in machine, batch or process context?*
- *Which historical baseline was used for this value?*
- *Was the value normal, warning-level or critical?*
- *Was a calculation completed, deferred or failed?*
- *Was anything lost, modified or blocked?*

TrailMQ exists to make these questions **technically answerable**.

If you are evaluating MQTT in a regulated environment, start with:
[Can an MQTT broker be GxP compliant?](/wiki/gxp-compliant-mqtt-broker/)

---

## From transport to evidence

A standard broker answers one basic question:

> Did the message move?

TrailMQ is designed to answer more useful questions:

> What did the message mean?  
> Which policy applied?  
> Which context was attached?  
> Which historical reference was used?  
> Which decision was made?  
> Can the result be reviewed later?

That turns MQTT from a pure transport mechanism into a source of structured,
reviewable evidence.

---

## Audit-first, not audit-later

TrailMQ treats auditability as a **core design principle**, not an afterthought.

Instead of relying on log files and external tooling, TrailMQ embeds:

- Policy-driven enforcement
- Hash-chained audit trails
- Retention and sequencing rules
- Explicit violation handling
- Queue and dead-letter visibility
- Evidence-oriented API surfaces

directly into the messaging layer.

---

## Planned plugin layer

TrailMQ's planned plugin layer is focused on one practical goal:

> Make MQTT messages more understandable, comparable and reviewable.

The first planned embedded plugins are:

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

This is the direction of TrailMQ: not just secure MQTT transport, but
**contextual, comparable and reviewable machine communication**.

---

## Explain, don't expose

TrailMQ explains decisions and enforcement without turning itself into a raw
message inspection tool.

You will see:

- Who connected, when, and with what permissions
- Which policies were enforced and why
- What decisions were made at each step
- Which domain context was attached
- Which historical baseline was used
- Whether calculations were completed, deferred or failed
- Exportable audit evidence for review

You do not need to expose TrailMQ as a general-purpose live debugging console.

This is by design: **evidence over observation**.

---

## Built for regulated and quality-critical environments

TrailMQ is designed to **support validated systems**, not to replace validation
processes or claim certifications.

It provides **audit-ready technical evidence** that can be used within existing
quality, validation and compliance frameworks.

TrailMQ supports workflows aligned with:

- GMP / GxP requirements
- 21 CFR Part 11 (electronic records)
- Annex 11 (computerized systems)
- GAMP 5 guidelines
- industrial traceability and review workflows
- quality-critical IIoT architectures

---

## Beyond pharma

Pharma and life sciences are the clearest starting point because auditability,
traceability and data integrity are explicit requirements.

But the same product logic applies anywhere machine communication needs to be
understood and reviewed later:

- Automotive production and test stands
- Food and beverage manufacturing
- Chemical and process industries
- Energy and utilities
- Rail and maintenance operations
- Building automation
- Logistics and cold-chain monitoring

The common question is always the same:

> What happened, why was it relevant, and can we prove it later?

---

## Deployment Model

TrailMQ follows an **evaluation-first model**:

- **Free to evaluate**: Deploy via Docker, test locally, integrate into your workflows
- **No registration required**: Clone the GitHub repo and run the launcher
- **Commercial licensing**: Production use in regulated or commercial environments requires a valid license

The deployment files are available on [GitHub](https://github.com/RainerGewalt/TrailMQ).

Container images are hosted on Docker Hub:

- [trailmq-backend](https://hub.docker.com/r/rainergewalt/trailmq-backend)
- [trailmq-frontend](https://hub.docker.com/r/rainergewalt/trailmq-frontend)

---

## About the Author

TrailMQ is maintained by **Florian Przybylak**, working on the architecture of
regulated industrial systems, data pipelines and trustworthy automation.

[LinkedIn](https://www.linkedin.com/in/florian-p-6a27ab1b8/)

---

## Contact

For questions, feedback or enterprise inquiries:

**contact@trailmq.com**