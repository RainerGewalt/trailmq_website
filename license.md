---
layout: page
title: "Licensing & Usage"
crumb: License
description: TrailMQ licensing information - commercial license with free evaluation access.
subtitle: TrailMQ is distributed under a commercial license with free evaluation access. Docker images are publicly available for evaluation, testing and internal proof-of-concept deployments.
updated: June 2026
permalink: /license/
---

<div class="callout callout--accent">
  <span class="callout__ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v4h1"/></svg></span>
  <div><p><strong>Production use in regulated or commercial environments requires a valid license.</strong> The source code is not open source.</p></div>
</div>

## Usage overview

| Usage type | License |
|------------|---------|
| Evaluation / PoC | Free |
| Internal testing | Free |
| Production use | Commercial license required |
| Redistribution | Not permitted |
| Source code modification | Not permitted |

## What is included in the evaluation

The evaluation build provides the full TrailMQ stack as Docker images:

**Backend**
- MQTT broker with TLS (port 8883) and WebSocket transport
- Policy engine: versioned access rules for publish and subscribe
- Hash-chained, tamper-evident audit trail
- User and role management with authentication
- Connected client visibility
- Queue state and dead-letter visibility
- REST API at `/api/v1` with full programmatic access to all controls
- Plugin architecture with capability discovery

**Frontend**
- React-based admin UI served at `/trailmq/`
- Topic management, user management, policy review, audit evidence, queue status

**Deployment**
- Docker Compose setup via GitHub deployment repository
- Guided launcher with evaluation credential generation
- Self-hosted — no cloud dependency, no telemetry

The evaluation build is intended for local testing, proof-of-concept work and integration evaluation. It is not licensed for production use in regulated or commercial environments.

## Enterprise licenses

For validated production environments, commercial licenses and support packages are available:

- Priority support and SLA
- Extended retention and archiving
- Custom integrations
- Validation documentation support
- On-premise deployment assistance

## Why commercial licensing?

Licensing TrailMQ is about **accountability and trust**, not feature gating.

Regulated environments require clarity about software provenance, support commitments and long-term maintenance. A commercial license provides that clarity.

## Getting started

**GitHub repository (deployment)** — [github.com/RainerGewalt/TrailMQ](https://github.com/RainerGewalt/TrailMQ){:target="_blank" rel="noopener"}

**Docker Hub images**

- [rainergewalt/trailmq-backend](https://hub.docker.com/r/rainergewalt/trailmq-backend){:target="_blank" rel="noopener"}
- [rainergewalt/trailmq-frontend](https://hub.docker.com/r/rainergewalt/trailmq-frontend){:target="_blank" rel="noopener"}

<div class="doc-cta">
  <h3>Licensing inquiries</h3>
  <p>For licensing questions or enterprise discussions, get in touch.</p>
  <div class="actions">
    <a href="mailto:contact@trailmq.com" class="btn btn--primary">contact@trailmq.com</a>
    <a href="https://github.com/RainerGewalt/TrailMQ" target="_blank" rel="noopener" class="btn btn--outline" style="color:#fff;border-color:rgba(255,255,255,0.3)">View on GitHub</a>
  </div>
</div>
