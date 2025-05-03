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
        <img src="{{ '/assets/images/webp/trailmq_logo_with_text_without_background.webp' | relative_url }}"
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
        <h2 class="section-title">
          <img src="{{ '/assets/images/webp/why_trailmq.webp' | relative_url }}" alt="Audit Icon" class="inline-icon" />
          What is TrailMQ?
        </h2>

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
            <img src="{{ '/assets/images/webp/features/feature_icon_' | append: icon | append: '.svg' | relative_url }}" alt="">
          </button>
          {% endfor %}
        </div>
        <div id="pipeline-info" class="pipeline-info">
          <img id="pipeline-icon" src="{{ '/assets/images/webp/features/feature_icon_mqtt.webp' | relative_url }}" alt="" class="info-icon">
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
          <img src="{{ '/assets/images/webp/features/feature_icon_secure_gateway.webp' | relative_url }}" alt="Security" class="icon">
          <h2>Secure Communication</h2>
          <p>TLS/mTLS, IP whitelisting, RBAC & JWT for regulated environments.</p>
        </div>
        <div class="feature-card">
          <img src="{{ '/assets/images/webp/features/feature_icon_message_queue.webp' | relative_url }}" alt="Queue" class="icon">
          <h2>Persistent Queues</h2>
          <p>Stored messages with TTL and audit-ready retention policies.</p>
        </div>
        <div class="feature-card">
          <img src="{{ '/assets/images/webp/features/feature_icon_audit_trail.webp' | relative_url }}" alt="Audit Trail" class="icon">
          <h2>Audit Trail</h2>
          <p>Full traceability with export to JSON, CSV, or PDF for compliance.</p>
        </div>
        <div class="feature-card">
          <img src="{{ '/assets/images/webp/features/feature_icon_plugin_slot.webp' | relative_url }}" alt="Plugins" class="icon">
          <h2>Plugin-Ready</h2>
          <p>Modular AI plugins for filtering, routing, and automatic responses.</p>
        </div>
      </div>
    </section>

  <!-- ──────────── WHY GMP / REGULATED ──────────── -->
  <section id="gmp" class="content-section alt-bg container">
<h2 class="section-title">
  <img src="{{ '/assets/images/webp/security_icon.webp' | relative_url }}" alt="Security Icon" class="inline-icon" />
  Built for GMP &amp; Regulated Workflows
</h2>
    <ul class="bullet-list check-list">
      <li><strong>Segregation of Duties:</strong> each TrailMQ node (Production, Lab, Analytics) has a clearly validated scope.</li>
      <li><strong>Auditable Messaging:</strong> every sent / received packet is logged &amp; hash‑chained.</li>
      <li><strong>Detectable Failures:</strong> missing replies trigger alarm topics and REST‑visible events.</li>
      <li><strong>Tamper‑proof Transport:</strong> TLS/mTLS&nbsp;+ JWT + immutable audit trail.</li>
      <li><strong>Fail‑Safe Design:</strong> DLQ, offsets, heartbeats &amp; targeted alerts.</li>
    </ul>
  </section>

<!-- ──────────── TRAILMQ QUICK TOUR ──────────── -->
<section id="quick-tour" class="rope-tour container">

  <!-- Rope SVG + clickable nodes -->

        <!-- Skalierbarer Wrapper -->
        <div class="rope-wrapper">
            <svg viewBox="0 -40 1200 380" preserveAspectRatio="xMidYMid meet"
                 class="rope-svg" aria-hidden="true">
                <defs>
                    <filter id="ropeShadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="2" stdDeviation="2"
                                      flood-color="#000" flood-opacity="0.15"/>
                    </filter>
                    <path id="trailmq-rope"
                          d="M 0,120 C 75,280 225,-60 300,80 C 375,240 525,-20 600,230 C 675,360 825,0 900,160 C 975,300 1125,20 1200,100"
                          fill="none"/>
                </defs>
                <path d="M 0,120 C 75,280 225,-60 300,80 C 375,240 525,-20 600,230 C 675,360 825,0 900,160 C 975,300 1125,20 1200,100"
                      fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"
                      stroke-dasharray="10 8" class="rope-stroke" filter="url(#ropeShadow)" />
                <circle r="7" fill="currentColor" class="rope-dot">
                    <animateMotion repeatCount="indefinite" dur="7s">
                        <mpath href="#trailmq-rope"/>
                    </animateMotion>
                </circle>
            </svg>

            <ul class="rope-nodes">
                <li style="--x:0; --y:120;">
                    <a href="#topics" data-hover="{{ '/assets/images/webp/smart_topic.webp' | relative_url }}">
                        <img src="{{ '/assets/images/webp/smart_topic.webp' | relative_url }}" alt="" class="icon">
                        <span>Topics</span>
                    </a>
                </li>
                <li style="--x:300; --y:80;">
                    <a href="#audit" data-hover="{{ '/assets/images/webp/audit_trail_logo_bright.webp' | relative_url }}">
                        <img src="{{ '/assets/images/webp/audit_trail_icon.webp' | relative_url }}" alt="" class="icon">
                        <span>Audit Logs</span>
                    </a>
                </li>
                <li style="--x:600; --y:230;">
                    <a href="#security" data-hover="{{ '/assets/images/webp/security_logo_bright.webp' | relative_url }}">
                        <img src="{{ '/assets/images/webp/security_icon.webp' | relative_url }}" alt="" class="icon">
                        <span>Security</span>
                    </a>
                </li>
                <li style="--x:900; --y:160;">
                    <a href="#builder" data-hover="{{ '/assets/images/webp/logo_trail_builder_bright.webp' | relative_url }}">
                        <img src="{{ '/assets/images/webp/logo_trail_builder.webp' | relative_url }}" alt="" class="icon">
                        <span>TrailBuilder</span>
                    </a>
                </li>
                <li style="--x:1200; --y:100;">
                    <a href="#link" data-hover="{{ '/assets/images/webp/logo_trail_link_bright.webp' | relative_url }}">
                        <img src="{{ '/assets/images/webp/logo_trail_link.webp' | relative_url }}" alt="" class="icon">
                        <span>TrailLink</span>
                    </a>
                </li>
            </ul>
        </div>

        <!-- Fallback-Menü für kleine Screens -->
        <ul class="simple-menu">
            <li><a href="#topics">Topics</a></li>
            <li><a href="#audit">Audit Logs</a></li>
            <li><a href="#security">Security</a></li>
            <li><a href="#builder">TrailBuilder</a></li>
            <li><a href="#link">TrailLink</a></li>
        </ul>

    <script defer src="{{ '/assets/js/menu.js' | relative_url }}"></script>

  <!-- ───────── DETAIL CARDS (one per step) ───────── -->
  <div class="rope-steps">

    <!-- 🟠 Topics -->
<article id="step-topics"
         class="rope-card"
         data-step="topics"> 
      <h3>
  <img src="{{ '/assets/images/webp/smart_topic.webp' | relative_url }}" alt="Smart Topic Icon" class="inline-icon" />Topics &amp; Wildcards</h3>
      <p>TrailMQ auto‑discovers topics, applies wildcard rules and shows live status.</p>
      <ul>
        <li>Auto‑tagging (<code>unassigned</code>, <code>critical</code>)</li>
        <li>Colour badges &amp; inactivity markers</li>
        <li>Bulk cleanup &amp; wildcard inheritance</li> 
      <li>Wildcard parents (#, +) auto‑propagate security &amp; queueing rules.</li>
      <li>Colour‑coded badges for inactive or inherited topics.</li>
      <li>Live discovery with auto‑tagging (“unassigned”, “critical”).</li>
      <li>Soft / hard / manual cleanup policies for stale data.</li>
      </ul>
    </article>

    <!-- 🔵 Audit Logs --> 

<article id="step-audit"
         class="rope-card"
         data-step="audit">
      <h3><img src="{{ '/assets/images/webp/audit_trail_icon.webp' | relative_url }}" alt="Audit Logs Icon" class="inline-icon" />Full Audit Trails</h3>
      <p>Every packet is hash‑chained &amp; exportable – ready for GMP/GxP review.</p>
      <ul>
        <li>JSON / CSV / PDF export</li>
        <li>REST access to events &amp; failures</li>
        <li>Validatable for regulators</li>
      </ul>
    </article>

    <!-- 🛡️ Security -->
<article id="step-security"
         class="rope-card"
         data-step="security"> 
      <h3>
                        <img src="{{ '/assets/images/webp/security_icon.webp' | relative_url }}" alt="" class="icon">Regulation‑Grade Security</h3>
      <p>TLS/mTLS transport, granular RBAC and live manipulation checks.</p>
      <ul>
        <li>Cert rotation &amp; OCSP</li>
        <li>JWT‑auth + dynamic ACLs</li>
        <li>Heartbeats &amp; hash validation</li>
      </ul>
    </article>

    <!-- 🧱 TrailBuilder -->
<article id="step-builder"
         class="rope-card"
         data-step="builder">
      <h3>
                        <img src="{{ '/assets/images/webp/logo_trail_builder.webp' | relative_url }}" alt="" class="icon">Visual Builder</h3>
      <p>Low‑code UI to design routes, filters and plugin flows.</p>
      <ul>
        <li>Drag‑and‑drop topic matrix</li>
        <li>Zone‑based configs for GMP</li>
        <li>Exportable, versioned JSON</li>
      </ul>
    </article>

    <!-- 🔗 TrailLink -->
<article id="step-link"
         class="rope-card"
         data-step="link">
      <h3>
                        <img src="{{ '/assets/images/webp/logo_trail_link.webp' | relative_url }}" alt="" class="icon">Distributed Messaging</h3>
      <p>TrailLink bridges two validated zones with loss‑free replication.</p>
      <ul>
        <li>Heartbeat &amp; alarm topics</li>
        <li>Auto‑refeed on failure</li>
        <li>Hash‑verified packets</li>
      </ul>
    <p>
      TrailLink forms a validated, bidirectional bridge between two TrailMQ instances.<br/>
      Heartbeats, hash verification and auto‑refeed guarantee <em>zero‑loss</em> data transfer —
      with full audit coverage.
    </p>
    <pre><code class="nohighlight">/value/deviceX  →  TrailLink  →  /msg/deviceX
      ▲                                     │
      └──── if lost: /alarm/connection_lost ┘</code></pre>
    </article>

  </div>
</section>

 

<!-- ──────────── AI PLUGINS ──────────── -->
<section id="ai" class="content-section alt-bg container">
  <h2 class="section-title">
    <img src="{{ '/assets/images/webp/features/ai_plugins.webp' | relative_url }}" alt="AI Plugin Icon" class="inline-icon" />
    TrailAI Plugins
  </h2>
  <table class="comparison-table skinny">
    <thead>
      <tr><th>Module</th><th>Purpose</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <img src="{{ '/assets/images/webp/logo_trailguard.webp' | relative_url }}" alt="TrailGuard Icon" class="inline-icon" />
          TrailGuard
        </td>
        <td>Anomaly detection &amp; drift alerts</td>
      </tr>
      <tr>
        <td>
          <img src="{{ '/assets/images/webp/logo_trail_route_mind.webp' | relative_url }}" alt="RouteMind Icon" class="inline-icon" />
          RouteMind
        </td>
        <td>Semantic content‑aware routing</td>
      </tr>
      <tr>
        <td>
          <img src="{{ '/assets/images/webp/logo_trail_semantic_switch.webp' | relative_url }}" alt="SemanticSwitch Icon" class="inline-icon" />
          SemanticSwitch
        </td>
        <td>Classification &amp; priority filtering</td>
      </tr>
      <tr>
        <td>
          <img src="{{ '/assets/images/webp/logo_trail_responder.webp' | relative_url }}" alt="Responder Icon" class="inline-icon" />
          Responder
        </td>
        <td>Auto‑response / self‑healing actions</td>
      </tr>
    </tbody>
  </table>
  <p class="section-lead">
    Ask in natural language: <em>“Which devices had latency issues today?”</em> — TrailMQ will answer.
  </p>
</section>

 
 
  <!-- ──────────── LICENSING / ENTRY ──────────── -->
  <section id="licensing" class="content-section container">
<h2 class="section-title">
  <img src="{{ '/assets/images/webp/licensing.webp' | relative_url }}" alt="Licensing Icon" class="inline-icon" />
  Licensing &amp; Deployment
</h2>
    <p><strong>Free &amp; Open Source (Core):</strong> MIT/Apache license, Docker image, REST API, audit export.</p>
    <p><strong>Commercial Add‑ons:</strong> AI plugins, clustering, OEM branding, SLA support — enabled via signed JSON license.</p>
    <pre><code class="nohighlight">docker run -p 1883:1883 -p 8080:8080 trailforge/trailmq</code></pre>
  </section>

  <!-- ──────────── WHY UNIQUE ──────────── -->
  <section id="unique" class="content-section alt-bg container">
<h2 class="section-title">
  <img src="{{ '/assets/images/webp/why_unique.webp' | relative_url }}" alt="Global Icon" class="inline-icon" />
  Why TrailMQ Stands Out
</h2>
    <p>
      The only lightweight MQTT platform combining <strong>audit trail, alarms,
      AI extensions and GMP‑grade validation</strong> in an easy plug‑and‑play stack.
      TrailMQ is not just a broker — it’s an <em>architecture strategy</em> for verifiable communication.
    </p>
  </section>

  <!-- ──────────── COMMUNITY ──────────── -->
  <section id="community" class="content-section container">
<h2 class="section-title">
  <img src="{{ '/assets/images/webp/userroles_permissions_icon.webp' | relative_url }}" alt="Community Icon" class="inline-icon" />
  Join the Community
</h2>
    <p>
      Built by engineers for engineers. Star the repo, open issues, or create pull requests —
      we’re excited to collaborate!
    </p>
    <p class="centered-link">→ <a href="https://github.com/trailforge/trailmq">TrailMQ on GitHub</a></p>
  </section>
</main>