---
layout: page
title: About TrailMQ
seo_title: "About TrailMQ: Auditable, Policy-Controlled MQTT"
crumb: About
description: Learn how TrailMQ combines a self-hosted MQTT broker, policy enforcement and attributable decision records for industrial and regulated systems.
subtitle: An MQTT broker built for auditable, policy-controlled messaging in review-sensitive systems.
permalink: /about/
last_modified_at: 2026-08-12
---

TrailMQ was created to bridge the gap between **machine-level messaging** and the requirements of **regulated, quality-critical and audit-heavy environments**. Standard MQTT clients connect directly to TrailMQ; it is the broker for the evaluated message path, not a proxy added in front of another broker.

The current product focus is deliberately narrow: authenticated MQTT transport, policy enforcement and attributable decision records. GxP, GMP and data integrity are important use cases for that core, not the definition of the product.

<div class="callout">
  <span class="callout__ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
  <div><p>If you are evaluating MQTT in a regulated environment, start with <a href="{{ '/wiki/gxp-compliant-mqtt-broker/' | relative_url }}">Can an MQTT broker be GxP compliant?</a></p></div>
</div>

## Why TrailMQ exists

Standard MQTT brokers are optimized for throughput and simplicity. In industrial and regulated environments, this is often not enough.

Quality assurance, validation teams, OT engineers and platform owners need answers to questions like:

- What exactly happened, and in which order?
- Who sent what, and under which policy?
- Why was an MQTT action accepted or denied?
- Which authenticated user, client, role and topic were involved?
- Was anything lost, modified or blocked?

TrailMQ {{ site.product_version }} makes the identity, access and outcome questions **technically answerable**. Domain context, historical baselines, deviation calculations and decision traces are explicitly planned plugin capabilities, not current ones.

## From transport to evidence

A conventional broker can provide secure transport, identities and ACLs. Review often still requires teams to correlate configuration and logs after the fact.

TrailMQ combines transport and enforcement with an attributed decision record: who acted, through which MQTT client, on which topic, with which outcome and, for denials, which canonical reason was recorded.

That turns broker access decisions into structured, reviewable evidence. It does not by itself prove downstream subscriber delivery or make the complete deployed system compliant.

## What is available now

The current public distribution is TrailMQ **{{ site.product_version }}**, a self-hosted evaluation stack:

**MQTT broker**
TLS on port 8883 and WebSocket transport. Standard MQTT clients connect without modification.

**Policy enforcement**
Every MQTT action must pass two gates: the identity's role permission and the namespace/topic rule. Unknown namespaces are denied until a rule grants the role access.

**Two evidence paths with an explicit boundary**
MQTT operations and refusals are stored as message decisions. A separate hash-linked chain covers system and action entries such as sign-ins, administrative changes, identities, roles and topic-rule changes. The chain verdict does not cover MQTT message evidence, and the product states that exclusion.

**Identity and user management**
The Evaluation Preview exposes users and roles primarily for review. Lifecycle operations use the REST API and configuration workflow.

**Connected client visibility**
The REST API surfaces which MQTT clients are currently connected and what topics they access.

**Queue and dead-letter visibility**
Queue state and dead-letter entries are inspectable through the REST API without requiring broker-level access.

**REST API**
Programmatic access at `/api/v1` covers authentication, topics, clients, users, policies, queue state and both evidence paths documented by the public recipe.

**Evaluation Preview**
A review-first React interface at `/trailmq/` covers Overview, Access, Clients and Activity. Operational changes use the REST API and configuration in the public evaluation package.

**No client-specific integration layer**
Standard clients such as `mosquitto`, `paho-mqtt`, `mqtt.js` and browser WebSocket clients connect without a TrailMQ SDK, proxy or sidecar.

## Product direction beyond the current core

Domain context, historical baselines, deviation calculations and richer decision traces remain planned concepts. They do not ship in TrailMQ {{ site.product_version }} and are not part of the current product claim. Their status and intended boundaries are documented in the public [plugin notes](https://github.com/RainerGewalt/TrailMQ/blob/master/docs/plugins.md){:target="_blank" rel="noopener"}.

## Audit-first, not audit-later

TrailMQ treats auditability as a **core design principle**, not an afterthought. The current core provides:

- Policy-driven enforcement
- A hash-linked system/action chain with a stated validation scope
- A separate attributed MQTT decision store
- Retention and sequencing rules
- Explicit violation handling
- Queue and dead-letter visibility
- Evidence-oriented API surfaces

## Explain, don't expose

TrailMQ explains decisions and enforcement without turning the Preview into a raw payload browser. The core surfaces identity, role, action, topic, outcome and denial reason. The planned plugin layer would add domain context, historical baselines and calculation outcomes.

You do not need to expose TrailMQ as a general-purpose live debugging console. This is by design: **evidence over observation**.

## Built for regulated and quality-critical environments

TrailMQ is designed to provide **technical evidence for assessment within validated systems**, not to replace validation processes or claim certifications.

TrailMQ is not by itself a CRA conformity assessment, CE declaration, GMP/GxP validation, Annex 11 package or 21 CFR Part 11 package. The regulated organization remains responsible for intended use, risk assessment, validation, procedures, retention and review.

## Beyond pharma

Pharma and life sciences are the clearest starting point because auditability, traceability and data integrity are explicit requirements. But the same product logic applies anywhere machine communication needs to be understood and reviewed later:

- Automotive production and test stands
- Food and beverage manufacturing
- Chemical and process industries
- Energy and utilities
- Rail and maintenance operations
- Building automation
- Logistics and cold-chain monitoring

The common question is always the same: *what happened, why was it allowed or denied, and what record remains for later review?*

## Deployment model

TrailMQ follows an **evaluation-first model**:

- **Free to evaluate** — deploy via Docker for local, non-production technical evaluation
- **No registration required** — clone the GitHub repo and run `./trailmq quickstart`
- **Commercial licensing** — production use in regulated or commercial environments requires a valid license

The deployment files and exact evaluation boundaries are available on [GitHub](https://github.com/RainerGewalt/TrailMQ){:target="_blank" rel="noopener"}. Review the [{{ site.product_version }} release notes]({{ site.product_release_url }}){:target="_blank" rel="noopener"} for distribution identity and validation status. Container images are hosted on Docker Hub: [trailmq-backend](https://hub.docker.com/r/rainergewalt/trailmq-backend){:target="_blank" rel="noopener"} and [trailmq-frontend](https://hub.docker.com/r/rainergewalt/trailmq-frontend){:target="_blank" rel="noopener"}.

## Maintainer and public distribution

The TrailMQ website and product communication are maintained by **Florian Przybylak**, working on the architecture of regulated industrial systems, data pipelines and trustworthy automation. — [LinkedIn](https://www.linkedin.com/in/florian-p-6a27ab1b8/){:target="_blank" rel="noopener"}

The public evaluation distribution is published through the [RainerGewalt GitHub account](https://github.com/RainerGewalt/TrailMQ){:target="_blank" rel="noopener"}. The binding proprietary evaluation license names **Rainer Gewalt** as copyright holder. These roles are stated separately so the public repository, license and website can be traced without ambiguity.

<div class="doc-cta">
  <h3>Questions, feedback or enterprise inquiries?</h3>
  <p>Reach out — we're happy to discuss evaluation, licensing and regulated deployments.</p>
  <div class="actions">
    <a href="mailto:contact@trailmq.com" class="btn btn--primary">contact@trailmq.com</a>
    <a href="{{ '/wiki/' | relative_url }}" class="btn btn--outline" style="color:#fff;border-color:rgba(255,255,255,0.3)">Explore the concepts</a>
  </div>
</div>
