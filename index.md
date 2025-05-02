---
layout: default
title: TrailMQ – Open‑Source Messaging for Regulated Industries
description: Lightweight, secure, and auditable MQTT platform for Pharma and IIoT.
---

<main id="top">
 


<main id="top">
  <!-- ──────────── HERO ──────────── -->
  <section class="trailmq-landing">
    <div class="hero container">
      <a href="{{ '/' | relative_url }}">
        <img src="{{ '/assets/images/logos/trailmq_logo_with_text.svg' | relative_url }}"
             alt="TrailMQ Logo" class="hero-logo" style="margin-inline:auto;max-width:240px;" />
      </a>
      <p class="hero-tagline lead">
        Secure&nbsp;&middot;&nbsp;Auditable&nbsp;&middot;&nbsp;Open&nbsp;Source
      </p>
      <p class="lead">
        A modern MQTT broker with audit trail, military‑grade security and plugin‑based edge intelligence.
      </p>
    </div>
  </section>

  <!-- ──────────── WHAT IS TRAILMQ ──────────── -->
  <section id="overview" class="content-section container">
    <h2 class="section-title">🔍 What is TrailMQ?</h2>
    <p>
      TrailMQ is a <strong>modular messaging &amp; automation platform</strong> that connects machines,
      processes and systems over MQTT, augmented with audit logging, alarms, smart filtering and optional AI plugins.
      It’s purpose‑built for GMP‑compliant environments, IIoT &amp; smart manufacturing where
      <em>traceability</em> and <em>data integrity</em> are non‑negotiable.
    </p>
  </section>
 

    <!-- Feature Wheel -->
    <section class="wheel-section">
      <div id="pipeline-widget" class="pipeline-widget">
        <div id="pipeline-circle" class="circle">
          {% assign icons = "mqtt,secure_gateway,message_queue,audit_trail,rule_engine,plugin_slot,semantic_router,receiver" | split: "," %}
          {% for icon in icons %}
          <button class="station{% if forloop.first %} active{% endif %}" style="--i:{{ forloop.index0 }}">
            <img src="{{ '/assets/images/logos/features/feature_icon_' | append: icon | append: '.svg' | relative_url }}" alt="">
          </button>
          {% endfor %}
        </div>
        <div id="pipeline-info" class="pipeline-info">
          <img id="pipeline-icon" src="{{ '/assets/images/logos/features/feature_icon_mqtt.svg' | relative_url }}" alt="" class="info-icon">
          <h3 id="pipeline-title">MQTT Source</h3>
          <p id="pipeline-desc">Ultra-fast MQTT from edge to core. Minimal overhead.</p>
        </div>
      </div>
      <script src="{{ '/assets/js/pipeline.js' | relative_url }}"></script>
    </section>

    <!-- Feature Cards -->
    <section class="features-section">
      <div class="features-grid">
        <div class="feature-card">
          <img src="{{ '/assets/images/logos/features/feature_icon_secure_gateway.svg' | relative_url }}" alt="Security" class="icon">
          <h2>Secure Communication</h2>
          <p>TLS/mTLS, IP whitelisting, RBAC & JWT for regulated environments.</p>
        </div>
        <div class="feature-card">
          <img src="{{ '/assets/images/logos/features/feature_icon_message_queue.svg' | relative_url }}" alt="Queue" class="icon">
          <h2>Persistent Queues</h2>
          <p>Stored messages with TTL and audit-ready retention policies.</p>
        </div>
        <div class="feature-card">
          <img src="{{ '/assets/images/logos/features/feature_icon_audit_trail.svg' | relative_url }}" alt="Audit Trail" class="icon">
          <h2>Audit Trail</h2>
          <p>Full traceability with export to JSON, CSV, or PDF for compliance.</p>
        </div>
        <div class="feature-card">
          <img src="{{ '/assets/images/logos/features/feature_icon_plugin_slot.svg' | relative_url }}" alt="Plugins" class="icon">
          <h2>Plugin-Ready</h2>
          <p>Modular AI plugins for filtering, routing, and automatic responses.</p>
        </div>
      </div>
    </section>

  <!-- ──────────── WHY GMP / REGULATED ──────────── -->
  <section id="gmp" class="content-section alt-bg container">
    <h2 class="section-title">🔐 Built for GMP &amp; Regulated Workflows</h2>
    <ul class="bullet-list check-list">
      <li><strong>Segregation of Duties:</strong> each TrailMQ node (Production, Lab, Analytics) has a clearly validated scope.</li>
      <li><strong>Auditable Messaging:</strong> every sent / received packet is logged &amp; hash‑chained.</li>
      <li><strong>Detectable Failures:</strong> missing replies trigger alarm topics and REST‑visible events.</li>
      <li><strong>Tamper‑proof Transport:</strong> TLS/mTLS&nbsp;+ JWT + immutable audit trail.</li>
      <li><strong>Fail‑Safe Design:</strong> DLQ, offsets, heartbeats &amp; targeted alerts.</li>
    </ul>
  </section>

  <!-- ──────────── TRAILLINK ──────────── -->
  <section id="traillink" class="content-section container">
    <h2 class="section-title">🔗 TrailLink – Secure Node‑to‑Node Bridge</h2>
    <p>
      TrailLink forms a validated, bidirectional bridge between two TrailMQ instances.<br/>
      Heartbeats, hash verification and auto‑refeed guarantee <em>zero‑loss</em> data transfer —
      with full audit coverage.
    </p>
    <pre><code class="nohighlight">/value/deviceX  →  TrailLink  →  /msg/deviceX
      ▲                                     │
      └──── if lost: /alarm/connection_lost ┘</code></pre>
  </section>

  <!-- ──────────── AI PLUGINS ──────────── -->
  <section id="ai" class="content-section alt-bg container">
    <h2 class="section-title">🧠 TrailAI Plugins</h2>
    <table class="comparison-table skinny">
      <thead><tr><th>Module</th><th>Purpose</th></tr></thead>
      <tbody>
        <tr><td>TrailGuard</td><td>Anomaly detection &amp; drift alerts</td></tr>
        <tr><td>RouteMind</td><td>Semantic content‑aware routing</td></tr>
        <tr><td>SemanticSwitch</td><td>Classification &amp; priority filtering</td></tr>
        <tr><td>Responder</td><td>Auto‑response / self‑healing actions</td></tr>
      </tbody>
    </table>
    <p class="section-lead">
      Ask in natural language: <em>“Which devices had latency issues today?”</em> — TrailMQ will answer.
    </p>
  </section>

  <!-- ──────────── UI / TOPIC MANAGEMENT ──────────── -->
  <section id="ui" class="content-section container">
    <h2 class="section-title">🌐 Smart Topic Management</h2>
    <ul class="bullet-list">
      <li>Wildcard parents (#, +) auto‑propagate security &amp; queueing rules.</li>
      <li>Colour‑coded badges for inactive or inherited topics.</li>
      <li>Live discovery with auto‑tagging (“unassigned”, “critical”).</li>
      <li>Soft / hard / manual cleanup policies for stale data.</li>
    </ul>
  </section>

  <!-- ──────────── ARCHITECTURE ──────────── -->
  <section id="architecture" class="content-section alt-bg container">
    <!-- same architecture diagram + list ... -->
  </section>

  <!-- ──────────── COMPARISON TABLE ──────────── -->
  <section id="comparison" class="content-section container">
    <!-- same table ... -->
  </section>

  <!-- ──────────── LICENSING / ENTRY ──────────── -->
  <section id="licensing" class="content-section container">
    <h2 class="section-title">🚀 Licensing &amp; Deployment</h2>
    <p><strong>Free &amp; Open Source (Core):</strong> MIT/Apache license, Docker image, REST API, audit export.</p>
    <p><strong>Commercial Add‑ons:</strong> AI plugins, clustering, OEM branding, SLA support — enabled via signed JSON license.</p>
    <pre><code class="nohighlight">docker run -p 1883:1883 -p 8080:8080 trailforge/trailmq</code></pre>
  </section>

  <!-- ──────────── WHY UNIQUE ──────────── -->
  <section id="unique" class="content-section alt-bg container">
    <h2 class="section-title">🌍 Why TrailMQ Stands Out</h2>
    <p>
      The only lightweight MQTT platform combining <strong>audit trail, alarms,
      AI extensions and GMP‑grade validation</strong> in an easy plug‑and‑play stack.
      TrailMQ is not just a broker — it’s an <em>architecture strategy</em> for verifiable communication.
    </p>
  </section>

  <!-- ──────────── COMMUNITY ──────────── -->
  <section id="community" class="content-section container">
    <h2 class="section-title">👥 Join the Community</h2>
    <p>
      Built by engineers for engineers. Star the repo, open issues, or create pull requests —
      we’re excited to collaborate!
    </p>
    <p class="centered-link">→ <a href="https://github.com/trailforge/trailmq">TrailMQ on GitHub</a></p>
  </section>
</main>