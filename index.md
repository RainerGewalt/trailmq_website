---
layout: default
title: TrailMQ – Open Source Messaging for Regulated Industries
description: Lightweight, secure, and auditable MQTT platform for Pharma and IIoT.
---

<main id="top">
  <section class="trailmq-landing">
    <!-- Hero Section -->
    <div class="hero">
       <h1>TrailMQ</h1>
      <p><strong>Secure. Auditable. Open Source.</strong><br>
        A modern MQTT-based broker with audit trail, security, and plugin-based edge intelligence.</p>
    </div>

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

    <!-- Call To Action -->
    <section class="cta">
      <h2>🚀 Coming Soon!</h2>
      <p>The first public release of TrailMQ is underway. Designed for IIoT, Pharma, and secure edge environments.</p>
      <p>📬 <a href="mailto:trailmq@yourdomain.com">trailmq@yourdomain.com</a> — get notified or join the early access list.</p>
      <p>🔗 <strong>GitHub:</strong> <a href="https://github.com/trailforge/trailmq" target="_blank" rel="noopener">trailforge/trailmq</a></p>
    </section>
  </section>
</main>

<footer class="site-footer">
  <p>&copy; {{ site.time | date: "%Y" }} TrailMQ. MIT-licensed, built with ❤️.</p>
  <div class="footer-links">
    <a href="https://github.com/trailforge/trailmq" target="_blank" rel="noopener">GitHub</a>
    <a href="mailto:trailmq@yourdomain.com">Contact</a>
    <a href="#top" onclick="window.scrollTo({top:0,behavior:'smooth'})">Back&nbsp;to&nbsp;top</a>
  </div>
</footer>
