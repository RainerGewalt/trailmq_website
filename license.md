---
layout: page
title: "Licensing & Usage"
seo_title: "TrailMQ Proprietary Evaluation License & Usage"
crumb: License
description: Plain-English TrailMQ evaluation license summary covering permitted local non-production use, restrictions and the current status of production licensing.
subtitle: TrailMQ is distributed under a proprietary evaluation license. The public package is free for local, non-production technical evaluation within the binding license terms.
updated: November 2026
permalink: /license/
last_modified_at: 2026-11-07
---

<div class="callout callout--accent">
  <span class="callout__ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v4h1"/></svg></span>
  <div><p><strong>This page is a plain-English summary, not the binding license.</strong> Review the <a href="https://github.com/RainerGewalt/TrailMQ/blob/master/LICENSE" target="_blank" rel="noopener">TrailMQ Proprietary Evaluation License</a> in the public repository before use.</p></div>
</div>

## Usage overview

| Usage type | License |
|------------|---------|
| Personal learning and local demos | Permitted under the evaluation license |
| Local, non-production technical evaluation | Permitted under the evaluation license |
| Internal demonstrations | Permitted under the evaluation license |
| Production, commercial or customer-facing use | Separate written agreement required |
| Managed hosting or offering TrailMQ as a service | Separate written agreement required |
| Redistribution, sale or sublicensing | Not permitted without a separate agreement |

The backend and frontend are delivered as proprietary Docker images. Their source is not included in the public distribution.

## What is included in the evaluation

The TrailMQ {{ site.product_version }} public distribution provides a self-hosted evaluation stack:

**Backend**
- MQTT broker with TLS (port 8883) and WebSocket transport
- Two-gate role plus namespace/topic policy enforcement
- Attributed MQTT decision records for allowed operations and refusals
- A separate hash-linked system/action chain with an explicit validation scope
- Authenticated evaluation users and roles
- Connected client visibility
- Queue state and dead-letter visibility
- REST API at `/api/v1` for the functions documented by the public recipe

**Frontend**
- Review-first React Preview served at `/trailmq/`
- Overview, Access, Clients and Activity surfaces
- REST API and configuration workflow for operational changes

**Deployment**
- Docker Compose setup via GitHub deployment repository
- `./trailmq quickstart` with local certificate and evaluation credential generation
- Self-hosted — no cloud dependency, no telemetry

The system/action integrity check does not cover the separate MQTT message-evidence store, including publish and subscribe refusals. The Preview is not a payload browser, and counters alone are not subscriber-delivery proof.

The evaluation package is intended for local, non-production technical evaluation. Demo certificates and generated users are not deployment-ready. Production, commercial, managed-hosting, redistribution and customer-facing use require a separate written agreement.

## Production licensing today

There is no production licence offer today. The binding license ties production use to a separately assessed TrailMQ production offering, and the evaluation release is not that version. No price list, edition, support package or service commitment exists yet, and none is implied by this page.

If you would need TrailMQ beyond evaluation, say what for: in an [evaluation report](https://github.com/RainerGewalt/TrailMQ/issues/new?template=evaluation-report.yml){:target="_blank" rel="noopener"} or by email to [contact@trailmq.com](mailto:contact@trailmq.com). Whether production terms will exist, and which rights they cover, depends on answers like that. No SLA, support package, validation deliverable or production right is granted by the public evaluation license or by this website summary.

## Support

Support is best effort from the maintainer: issues and emails are read and answered, without a guaranteed response time, support contract or SLA. There is no paid support.

## Why the evaluation boundary?

The public package answers technical-fit questions locally, before anyone has to trust or pay for anything: run it, trigger your own denial and read the record. The boundary around production, commercial, hosted and redistributed use stays in place until a version exists that has been assessed for that use.

## Getting started

**GitHub repository (deployment)** — [github.com/RainerGewalt/TrailMQ](https://github.com/RainerGewalt/TrailMQ){:target="_blank" rel="noopener"}

**Binding license** — [TrailMQ Proprietary Evaluation License](https://github.com/RainerGewalt/TrailMQ/blob/master/LICENSE){:target="_blank" rel="noopener"}

**Docker Hub images**

- [rainergewalt/trailmq-backend](https://hub.docker.com/r/rainergewalt/trailmq-backend){:target="_blank" rel="noopener"}
- [rainergewalt/trailmq-frontend](https://hub.docker.com/r/rainergewalt/trailmq-frontend){:target="_blank" rel="noopener"}

<div class="doc-cta">
  <h3>Need more than evaluation?</h3>
  <p>Tell us what you would use TrailMQ for. It decides whether production terms will exist.</p>
  <div class="actions">
    <a href="https://github.com/RainerGewalt/TrailMQ/issues/new?template=evaluation-report.yml" target="_blank" rel="noopener" class="btn btn--primary">Write an evaluation report</a>
    <a href="mailto:contact@trailmq.com" class="btn btn--outline" style="color:#fff;border-color:rgba(255,255,255,0.3)">contact@trailmq.com</a>
    <a href="https://github.com/RainerGewalt/TrailMQ" target="_blank" rel="noopener" class="btn btn--outline" style="color:#fff;border-color:rgba(255,255,255,0.3)">View on GitHub</a>
  </div>
</div>
