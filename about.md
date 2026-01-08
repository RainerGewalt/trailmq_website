---
layout: default
title: About TrailMQ
description: Learn about TrailMQ - the audit-first MQTT platform designed for regulated industries where communication must be provable, traceable and reviewable.
permalink: /about/
---

# About TrailMQ

TrailMQ is an **audit-first MQTT platform** designed for regulated industries where
communication must be **provable, traceable and reviewable** — not just fast.

It was created to bridge the gap between **machine-level messaging** and the
requirements of **GMP, GxP and regulated manufacturing environments**.

---

## Why TrailMQ exists

Standard MQTT brokers are optimized for throughput and simplicity.
In regulated environments, this is not enough.

Quality assurance, validation teams and auditors need answers to questions like:

- *What exactly happened?*
- *In which order?*
- *Who sent what, and under which policy?*
- *Was anything lost, modified or blocked?*

TrailMQ exists to make these questions **technically answerable**.

---

## Audit-first, not audit-later

TrailMQ treats auditability as a **core design principle**, not an afterthought.

Instead of relying on log files and external tooling, TrailMQ embeds:

- Policy-driven enforcement
- Hash-chained audit trails
- Retention and sequencing rules
- Explicit violation handling

directly into the messaging layer.

---

## Explain, don't expose

TrailMQ explains decisions and enforcement without exposing message content or secrets.

You will see:

- Who connected, when, and with what permissions
- Which policies were enforced and why
- What decisions were made at each step
- Exportable audit evidence for compliance

You will not see:

- Raw message payloads
- Live message streams
- Content inspection or debugging tools

This is by design. Evidence over observation.

---

## Built for regulated environments

TrailMQ is designed to **support validated systems**, not to replace validation
processes or claim certifications.

It provides **audit-ready technical evidence** that can be used within existing
quality, validation and compliance frameworks.

TrailMQ supports workflows aligned with:

- GMP / GxP requirements
- 21 CFR Part 11 (electronic records)
- Annex 11 (computerized systems)
- GAMP 5 guidelines

---

## Deployment Model

TrailMQ follows an **evaluation-first model**:

- **Free to evaluate**: Deploy via Docker, test locally, integrate into your workflows
- **No registration required**: Clone the GitHub repo and run docker compose
- **Commercial licensing**: Production use in regulated or commercial environments requires a valid license

The deployment files are available on [GitHub](https://github.com/RainerGewalt/TrailMQ).
Container images are hosted on Docker Hub:
- [trailmq-backend](https://hub.docker.com/r/rainergewalt/trailmq-backend)
- [trailmq-frontend](https://hub.docker.com/r/rainergewalt/trailmq-frontend)

---

## About the Author

TrailMQ is maintained by **Florian Przybylak**, working on the architecture of regulated industrial systems, data pipelines, and trustworthy automation.

[LinkedIn](https://www.linkedin.com/in/florian-p-6a27ab1b8/)

---

## Contact

For questions, feedback or enterprise inquiries:

**contact@trailmq.com**