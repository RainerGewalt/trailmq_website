---
layout: default
title: TrailMQ – Open Source Messaging for Regulated Industries
description: Lightweight, secure, and auditable MQTT platform for Pharma and IIoT.
---

<section class="trailmq-landing">
  <!-- Hero Section -->
  <div class="hero">
    <img src="/assets/images/logos/trailmq_logo_with_text.svg" alt="TrailMQ Logo" class="logo">
    <h1>TrailMQ</h1>
    <p><strong>Secure. Auditable. Open Source.</strong><br>
    A modern MQTT-based broker with audit trail, security, and plugin-based edge intelligence.</p>
  </div>

  <!-- =========================================
       TrailMQ Rope Menu
       ========================================= -->
  <section class="menu-section">
    <nav id="trailmq-menu" class="rope-menu">
      <svg viewBox="0 -40 1200 380" preserveAspectRatio="xMidYMid meet" class="rope-svg" aria-hidden="true">
        <defs>
          <filter id="ropeShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.15"/>
          </filter>
          <path id="trailmq-rope" d="M 0,120 C 75,280 225,-60 300,80 C 375,240 525,-20 600,230 C 675,360 825,0 900,160 C 975,300 1125,20 1200,100" fill="none" />
        </defs>

        <path d="M 0,120 C 75,280 225,-60 300,80 C 375,240 525,-20 600,230 C 675,360 825,0 900,160 C 975,300 1125,20 1200,100"
              fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"
              stroke-dasharray="10 8" class="rope-stroke" filter="url(#ropeShadow)" />

        <circle r="7" fill="currentColor" class="rope-dot">
          <animateMotion repeatCount="indefinite" dur="7s">
            <mpath href="#trailmq-rope" />
          </animateMotion>
        </circle>
      </svg>

      <ul class="rope-nodes">
        <li style="--x:0;   --y:120;"><a href="#topics"><img src="/assets/images/menu/topics_icon.svg" alt="" class="icon"><span>Topics</span></a></li>
        <li style="--x:300; --y:80;"><a href="#audit"><img src="/assets/images/menu/audit_trail_icon.svg" alt="" class="icon"><span>Audit Logs</span></a></li>
        <li style="--x:600; --y:230;"><a href="#security"><img src="/assets/images/menu/security_icon.svg" alt="" class="icon"><span>Security</span></a></li>
        <li style="--x:900; --y:160;"><a href="#builder"><img src="/assets/images/menu/trail_builder_logo.svg" alt="" class="icon"><span>TrailBuilder</span></a></li>
        <li style="--x:1200; --y:100;"><a href="#link"><img src="/assets/images/menu/logo_trail_link.svg" alt="" class="icon"><span>TrailLink</span></a></li>
      </ul>
    </nav>
    <script src="/assets/js/menu.js"></script>
  </section>

  <!-- =========================================
       TrailMQ Feature Wheel
       ========================================= -->
  <section class="wheel-section">
    <div id="pipeline-widget" class="pipeline-widget">
      <div id="pipeline-circle" class="circle">
        <button class="station" style="--i:0"><img src="/assets/images/logos/features/feature_icon_mqtt.svg" alt=""></button>
        <button class="station" style="--i:1"><img src="/assets/images/logos/features/feature_icon_secure_gateway.svg" alt=""></button>
        <button class="station" style="--i:2"><img src="/assets/images/logos/features/feature_icon_message_queue.svg" alt=""></button>
        <button class="station" style="--i:3"><img src="/assets/images/logos/features/feature_icon_audit_trail.svg" alt=""></button>
        <button class="station" style="--i:4"><img src="/assets/images/logos/features/feature_icon_rule_engine.svg" alt=""></button>
        <button class="station" style="--i:5"><img src="/assets/images/logos/features/feature_icon_plugin_slot.svg" alt=""></button>
        <button class="station" style="--i:6"><img src="/assets/images/logos/features/feature_icon_semantic_router.svg" alt=""></button>
        <button class="station" style="--i:7"><img src="/assets/images/logos/features/feature_icon_receiver.svg" alt=""></button>
      </div>
      <div id="pipeline-info" class="pipeline-info">
        <img id="pipeline-icon" src="/assets/images/logos/features/feature_icon_mqtt.svg" alt="" class="info-icon">
        <h3 id="pipeline-title">MQTT Source</h3>
        <p id="pipeline-desc">Ultra-fast MQTT from edge to core. Minimal overhead.</p>
      </div>
    </div>
    <script src="/assets/js/pipeline.js"></script>
  </section>

  <!-- =========================================
       TrailMQ Features Overview
       ========================================= -->
  <section class="features-section">
    <div class="features-grid">
      <div class="feature-card">
        <img src="/assets/images/logos/features/feature_icon_secure_gateway.svg" alt="Security" class="icon">
        <h2>Secure Communication</h2>
        <p>TLS/mTLS, IP whitelisting, RBAC & JWT for regulated environments.</p>
      </div>
      <div class="feature-card">
        <img src="/assets/images/logos/features/feature_icon_message_queue.svg" alt="Queue" class="icon">
        <h2>Persistent Queues</h2>
        <p>Stored messages with TTL and audit-ready retention policies.</p>
      </div>
      <div class="feature-card">
        <img src="/assets/images/logos/features/feature_icon_audit_trail.svg" alt="Audit Trail" class="icon">
        <h2>Audit Trail</h2>
        <p>Full traceability with export to JSON, CSV, or PDF for compliance.</p>
      </div>
      <div class="feature-card">
        <img src="/assets/images/logos/features/feature_icon_plugin_slot.svg" alt="Plugins" class="icon">
        <h2>Plugin-Ready</h2>
        <p>Modular AI plugins for filtering, routing, and automatic responses.</p>
      </div>
    </div>
  </section>

  <!-- =========================================
       Call To Action
       ========================================= -->
  <section class="cta">
    <h2>🚀 Coming Soon!</h2>
    <p>The first public release of TrailMQ is underway. Designed for IIoT, Pharma, and secure edge environments.</p>
    <p>📬 <a href="mailto:trailmq@yourdomain.com">trailmq@yourdomain.com</a> — get notified or join the early access list.</p>
    <p>🔗 <strong>GitHub:</strong> <a href="https://github.com/trailforge/trailmq" target="_blank">trailforge/trailmq</a></p>
  </section>
</section>
