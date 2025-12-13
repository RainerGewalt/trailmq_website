---
layout: default
title: TrailMQ – Audit-First MQTT Platform for Regulated Industries
description: The world's first audit-first MQTT platform. Built for GMP, GxP and regulated manufacturing. Audit trails, security policies and validation evidence – without changing your machines.
keywords: MQTT broker, audit trail, GMP compliance, GxP, pharma messaging, IIoT, industrial IoT, message queue, regulated industries, validation, traceability
author: TrailMQ Team
---

<main id="top" class="trailmq-page">

  <!-- ══════════════ HERO ══════════════ -->
  <section class="hero">
    <div class="hero__inner">
      <a href="/" class="hero__logo-link" aria-label="TrailMQ Home">
        <img src="{{ '/assets/images/webp/trailmq_logo_with_text_without_background.webp' | relative_url }}"
             alt="TrailMQ Logo" 
             class="hero__logo" 
             width="280" 
             height="80" />
      </a>

      <span class="hero__badge">Audit-First by Design</span>
      
      <h1 class="hero__headline">
        The world's first <em>audit-first</em> MQTT platform for regulated industries
      </h1>
      
      <p class="hero__subline">
        TrailMQ replaces custom audit scripts, log parsing pipelines and fragile compliance workflows.
      </p>
      
      <p class="hero__desc">
        Add audit trails, security policies and validation evidence to MQTT — so audits no longer depend on custom scripts or tribal knowledge.
      </p>
      
      <ul class="hero__proof" role="list">
        <li>GMP / GxP aligned messaging</li>
        <li>Zero-loss queues with full audit history</li>
        <li>Docker-based — deployable in minutes</li>
      </ul>
      
      <div class="hero__cta">
        <a href="#quickstart" class="btn btn--primary">Run TrailMQ locally in 5 minutes</a>
        <a href="#gmp" class="btn btn--ghost">How TrailMQ supports GMP</a>
      </div>
    </div>
    
    <!-- Visual Flow -->
    <div class="hero__flow" aria-hidden="true">
      <div class="flow-line">
        <span class="flow-node">Device</span>
        <span class="flow-arrow">→</span>
        <span class="flow-node flow-node--highlight">TrailMQ</span>
        <span class="flow-arrow">→</span>
        <span class="flow-node">Audit Evidence</span>
      </div>
    </div>
    
    <div class="hero__bg" aria-hidden="true"></div>
  </section>


  <!-- ══════════════ WHAT IS TRAILMQ ══════════════ -->
  <section id="overview" class="section section--light">
    <div class="container">
      <h2 class="section__title">What is TrailMQ?</h2>

      <div class="intro-text">
        <p>
          TrailMQ is a lightweight messaging platform built on MQTT — designed for environments where communication must be <strong>provable</strong>, not just fast.
        </p>
        <p>
          It bridges the gap between machine-level messaging and the strict requirements of GMP, GxP and regulated manufacturing.
        </p>
        
        <div class="intro-text__highlight">
          <p class="highlight-main">
            You keep MQTT.<br>
            TrailMQ adds traceability, security controls and audit-ready evidence.
          </p>
          <p class="highlight-definition">
            <strong>"Audit-first"</strong> means traceability, evidence and validation are core design principles — not optional add-ons.
          </p>
        </div>
        
        <p class="intro-replaces">
          TrailMQ replaces custom audit scripts, log parsing pipelines and fragile Excel-based compliance workflows that are typically built around standard MQTT brokers.
        </p>
      </div>
    </div>
  </section>


  <!-- ══════════════ WHO IS IT FOR ══════════════ -->
  <section id="audience" class="section section--subtle">
    <div class="container">
      <h2 class="section__title">Who is TrailMQ for?</h2>

      <p class="section__lead">
        TrailMQ is designed for teams operating validated systems in regulated environments.
      </p>
      
      <div class="audience-grid">
        <div class="audience-card">
          <div class="audience-card__icon">⚙️</div>
          <h3>Automation & IIoT</h3>
          <p>When messaging reliability and auditability become your responsibility — not QA's.</p>
        </div>
        
        <div class="audience-card">
          <div class="audience-card__icon">✓</div>
          <h3>QA / CSV Teams</h3>
          <p>When logs are no longer sufficient as validation evidence.</p>
        </div>
        
        <div class="audience-card">
          <div class="audience-card__icon">🏗</div>
          <h3>Platform & Architecture</h3>
          <p>When messaging must scale across zones without breaking validation.</p>
        </div>
      </div>
    </div>
  </section>


  <!-- ══════════════ CORE CAPABILITIES ══════════════ -->
  <section id="capabilities" class="section section--dark">
    <div class="container">
      <h2 class="section__title section__title--light">Core Capabilities</h2>

      <div class="capabilities-grid">
        
        <article class="capability-card capability-card--featured">
          <div class="capability-card__icon">
            <img src="{{ '/assets/images/webp/feature_icon_audit_trail.webp' | relative_url }}" alt="" width="48" height="48" loading="lazy" />
          </div>
          <h3>Audit-Ready Messaging</h3>
          <p>Every message is evidence — not just a log entry. Hash-chained, correlation-aware and tamper-detectable. Ready for QA reviews without manual log correlation.</p>
        </article>

        <article class="capability-card">
          <div class="capability-card__icon">
            <img src="{{ '/assets/images/webp/feature_icon_secure_gateway.webp' | relative_url }}" alt="" width="48" height="48" loading="lazy" />
          </div>
          <h3>Security by Policy</h3>
          <p>TLS/mTLS, RBAC, dynamic ACLs and zone-based segregation. Short-lived credentials, token revocation and MFA-ready integrations.</p>
        </article>

        <article class="capability-card">
          <div class="capability-card__icon">
            <img src="{{ '/assets/images/webp/feature_icon_message_queue.webp' | relative_url }}" alt="" width="48" height="48" loading="lazy" />
          </div>
          <h3>Fail-Safe Messaging</h3>
          <p>Persistent queues, DLQs, offsets and heartbeats guarantee zero-loss messaging — so no data gaps need to be explained later.</p>
        </article>

        <article class="capability-card">
          <div class="capability-card__icon">
            <img src="{{ '/assets/images/webp/feature_icon_plugin_slot.webp' | relative_url }}" alt="" width="48" height="48" loading="lazy" />
          </div>
          <h3>Privacy by Design</h3>
          <p>Data minimization, retention enforcement and optional identifier hashing. High-sensitivity topics support payload encryption.</p>
        </article>

      </div>
    </div>
  </section>


  <!-- ══════════════ WHY NOT STANDARD MQTT ══════════════ -->
  <section id="comparison" class="section section--light">
    <div class="container">
      <h2 class="section__title">Why not a standard MQTT broker?</h2>

      <p class="section__lead">Most MQTT brokers focus on throughput. TrailMQ focuses on <strong>trust</strong>.</p>
      
      <div class="comparison-table-wrap">
        <table class="comparison-table" role="table">
          <thead>
            <tr>
              <th scope="col">Standard MQTT</th>
              <th scope="col" class="highlight-col">TrailMQ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fast messaging</td>
              <td class="highlight-col"><strong>Fast and auditable</strong></td>
            </tr>
            <tr>
              <td>Logs as text files</td>
              <td class="highlight-col"><strong>Structured audit evidence</strong></td>
            </tr>
            <tr>
              <td>Logs after the fact</td>
              <td class="highlight-col"><strong>Evidence by design</strong></td>
            </tr>
            <tr>
              <td>Security as config</td>
              <td class="highlight-col"><strong>Security as policy</strong></td>
            </tr>
            <tr>
              <td>DIY compliance</td>
              <td class="highlight-col"><strong>Compliance-ready</strong></td>
            </tr>
          </tbody>
        </table>
        <p class="comparison-closer">
          Standard brokers require compliance to be added afterwards.<br>
          <strong>TrailMQ makes compliance part of the message flow itself.</strong>
        </p>
      </div>
    </div>
  </section>


  <!-- ══════════════ GMP / REGULATED ══════════════ -->
  <section id="gmp" class="section section--accent">
    <div class="container">
      <h2 class="section__title">Built for Regulated Environments</h2>

      <p class="section__lead">
        Built for environments where you must explain what happened — months later.
      </p>
      
      <div class="gmp-grid">
        <ul class="check-list" role="list">
          <li><strong>Segregation of duties</strong> across GMP zones with independent scopes</li>
          <li><strong>Immutable, hash-chained audit trails</strong> — exportable for regulators</li>
          <li><strong>Exportable evidence</strong> in JSON, CSV, or PDF format</li>
          <li><strong>Alarm-ready</strong> for deviations, missing acks and data gaps</li>
          <li><strong>GDPR-aligned</strong> with data minimization and retention policies</li>
        </ul>
        
        <div class="gmp-badge">
          <span class="gmp-badge__icon">🛡</span>
          <span class="gmp-badge__text">GMP-Aligned</span>
          <span class="gmp-badge__sub">Designed to support validated systems</span>
        </div>
      </div>
      
      <p class="section__footnote">
        TrailMQ does not certify your system — it provides the technical foundation to support validation and audits.
      </p>
    </div>
  </section>


  <!-- ══════════════ PRODUCT TOUR ══════════════ -->
  <section id="tour" class="section section--light">
    <div class="container">
      <h2 class="section__title">Platform Overview</h2>

      <div class="tour-grid">
        
        <article class="tour-card tour-card--featured" id="audit">
          <div class="tour-card__header">
            <img src="{{ '/assets/images/webp/audit_trail_icon.webp' | relative_url }}" alt="" class="tour-card__icon" width="44" height="44" loading="lazy" />
            <h3>Full Audit Trails</h3>
          </div>
          <p>Every packet is hash-chained, correlation-aware and exportable — JSON, CSV, PDF.</p>
          <span class="tour-card__usecase">Used when message history must be exported as inspection-ready evidence.</span>
        </article>

        <article class="tour-card" id="topics">
          <div class="tour-card__header">
            <img src="{{ '/assets/images/webp/smart_topic.webp' | relative_url }}" alt="" class="tour-card__icon" width="44" height="44" loading="lazy" />
            <h3>Topics & Wildcards</h3>
          </div>
          <p>Auto-discovery with wildcard rules. Auto-tagging, bulk cleanup and inheritance.</p>
        </article>

        <article class="tour-card" id="security">
          <div class="tour-card__header">
            <img src="{{ '/assets/images/webp/security_icon.webp' | relative_url }}" alt="" class="tour-card__icon" width="44" height="44" loading="lazy" />
            <h3>Regulation-Grade Security</h3>
          </div>
          <p>TLS/mTLS, RBAC, JWT-auth with dynamic ACLs. Cert rotation and OCSP.</p>
        </article>

        <article class="tour-card" id="builder">
          <div class="tour-card__header">
            <img src="{{ '/assets/images/webp/logo_trail_builder.webp' | relative_url }}" alt="" class="tour-card__icon" width="44" height="44" loading="lazy" />
            <h3>TrailBuilder</h3>
          </div>
          <p>Visual low-code UI for route design and zone configs.</p>
          <span class="tour-card__usecase">Used for workflow versioning without code changes.</span>
        </article>

        <article class="tour-card" id="link">
          <div class="tour-card__header">
            <img src="{{ '/assets/images/webp/logo_trail_link.webp' | relative_url }}" alt="" class="tour-card__icon" width="44" height="44" loading="lazy" />
            <h3>TrailLink</h3>
          </div>
          <p>Validated bidirectional bridge with heartbeat and auto-refeed.</p>
          <span class="tour-card__usecase">Used when data must cross validated zones without breaking audit continuity.</span>
        </article>

      </div>
    </div>
  </section>


  <!-- ══════════════ AI PLUGINS ══════════════ -->
  <section id="ai" class="section section--subtle">
    <div class="container">
      <h2 class="section__title section__title--secondary">TrailAI Plugins</h2>

      <p class="section__lead section__lead--secondary">
        Optional AI-assisted analysis on validated audit data. Does not alter the original message flow.
      </p>
      
      <div class="plugins-grid">
        <div class="plugin-item">
          <img src="{{ '/assets/images/webp/logo_trailguard.webp' | relative_url }}" alt="" width="32" height="32" loading="lazy" />
          <div><strong>TrailGuard</strong><span>Anomaly detection</span></div>
        </div>
        <div class="plugin-item">
          <img src="{{ '/assets/images/webp/logo_trail_route_mind.webp' | relative_url }}" alt="" width="32" height="32" loading="lazy" />
          <div><strong>RouteMind</strong><span>Semantic routing</span></div>
        </div>
        <div class="plugin-item">
          <img src="{{ '/assets/images/webp/logo_trail_semantic_switch.webp' | relative_url }}" alt="" width="32" height="32" loading="lazy" />
          <div><strong>SemanticSwitch</strong><span>Classification</span></div>
        </div>
        <div class="plugin-item">
          <img src="{{ '/assets/images/webp/logo_trail_responder.webp' | relative_url }}" alt="" width="32" height="32" loading="lazy" />
          <div><strong>Responder</strong><span>Auto-response</span></div>
        </div>
      </div>
    </div>
  </section>


  <!-- ══════════════ QUICKSTART ══════════════ -->
  <section id="quickstart" class="section section--cta">
    <div class="container">
      <h2 class="section__title section__title--light">Start free. Scale when validated.</h2>

      <div class="quickstart-content">
        <div class="quickstart-text">
          <p>
            TrailMQ Core is available as a <strong>free Community Edition</strong> via Docker Hub.
          </p>
          <p class="quickstart-assurance">
            No registration. No lock-in. No production commitment.
          </p>
          <p>
            Commercial extensions are enabled via signed licenses for validated production environments.
          </p>
        </div>
        
        <div class="quickstart-code">
          <div class="code-block">
            <code><span class="code-comment"># Pull and run TrailMQ</span>
docker pull trailforge/trailmq
docker run -p 1883:1883 -p 8080:8080 trailforge/trailmq</code>
</div>
<a href="https://hub.docker.com/r/trailforge/trailmq"
class="btn btn--secondary"
target="_blank"
rel="noopener">
Get TrailMQ on Docker Hub
</a>
</div>
</div>
</div>
  </section>


  <!-- ══════════════ COMMUNITY ══════════════ -->
  <section id="community" class="section section--light">
    <div class="container container--narrow">
      <h2 class="section__title">Built by engineers for regulated environments</h2>

      <p class="section__lead">
        Start locally, evaluate freely and integrate at your own pace.
      </p>
      
      <div class="community-links">
        <a href="https://hub.docker.com/r/trailforge/trailmq" 
           class="btn btn--primary" 
           target="_blank" 
           rel="noopener">
          Get TrailMQ
        </a>
      </div>
    </div>
  </section>


  <!-- ══════════════ CLOSING ══════════════ -->
  <section class="section section--closing">
    <div class="container container--narrow">
      <blockquote class="closing-quote">
        TrailMQ is MQTT for environments where you must <em>prove</em> what happened — not just process it.
      </blockquote>
    </div>
  </section>

</main>