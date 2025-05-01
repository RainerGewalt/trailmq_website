---
layout: default
title: TrailMQ – Open Source Messaging for Regulated Industries
description: Lightweight, secure, and auditable MQTT platform for Pharma and IIoT.
---

<main id="top">
  <section class="trailmq-landing">
    <!-- Hero Section -->
        <div class="hero container">
          <a href="{{ '/' | relative_url }}">
            <img src="{{ '/assets/images/logos/trailmq_logo_with_text.svg' | relative_url }}"
                 alt="TrailMQ Logo" class="hero-logo" style="margin-inline: auto; max-width: 240px;" />
          </a>
          <p class="hero-tagline lead">
            Secure&nbsp;&middot;&nbsp;Auditable&nbsp;&middot;&nbsp;Open&nbsp;Source
          </p>
          <p class="lead">
            A modern MQTT‑based broker with audit trail, security &amp; plugin‑based edge intelligence.
          </p>
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

    <!-- Getting Started -->
    <section id="getting-started" class="content-section container">
      <h2 class="section-title">📘 Getting Started</h2>
      <p class="section-lead">TrailMQ is easy to get up and running in your environment. Start testing in minutes.</p>
      <pre><code>git clone https://github.com/trailforge/trailmq.git
cd trailmq
go run main.go</code></pre>
<p>Or run it via Docker:</p>
<pre><code>docker run -p 1883:1883 -v $(pwd)/config.yml:/app/config.yml trailforge/trailmq</code></pre>
<h3 class="subtitle">Example Configuration</h3>
<pre><code>mqtt:
port: 1883
tls: true
cert_file: "/certs/server.crt"
key_file: "/certs/server.key"
rest:
enabled: true
port: 8080
queue:
persist: true
max_messages: 1000</code></pre>
<p>Send a test MQTT message:</p>
<pre><code>mosquitto_pub -h localhost -t "lab/temperature" -m "22.5"</code></pre>
<p class="centered-link">Visit our <a href="https://github.com/trailforge/trailmq">GitHub Repo</a> for full documentation.</p>
</section>

    <!-- Architecture Overview -->
    <section id="architecture" class="content-section alt-bg container">
      <h2 class="section-title">🧱 Architecture Overview</h2>
      <p class="section-lead">TrailMQ is composed of modular components designed for performance, reliability &amp; compliance.</p>
      <img src="/assets/images/architecture-diagram.svg" alt="TrailMQ Architecture Diagram" class="arch-img" />
      <ul class="bullet-list check-list">
        <li><strong>MQTT Core:</strong> Handles subscriptions, connections &amp; message delivery.</li>
        <li><strong>Queue Manager:</strong> Stores messages persistently for regulated access.</li>
        <li><strong>Audit Trail:</strong> Logs all activity for traceability &amp; compliance.</li>
        <li><strong>REST API:</strong> Allows query access &amp; export of data.</li>
        <li><strong>Plugins:</strong> Extend functionality for AI, security &amp; routing.</li>
      </ul>
    </section>

    <!-- Comparison -->
    <section id="comparison" class="content-section container">
      <h2 class="section-title">📊 Why TrailMQ?</h2>
      <div class="table-wrapper">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Feature</th><th>TrailMQ ✅</th><th>Mosquitto</th><th>HiveMQ</th><th>EMQX</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Audit Trail for Compliance</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
            <tr><td>Plugin‑Based Filtering</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
            <tr><td>PDF/CSV Export</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
            <tr><td>GMP/GxP Support</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Use Cases -->
    <section id="use-cases" class="content-section alt-bg container">
      <h2 class="section-title">🧠 Use Cases</h2>
      <ul class="bullet-list icon-list">
        <li>🧪 A laboratory sends test results → TrailMQ filters &amp; audits → Routes to Quality Management System</li>
        <li>🌐 An IIoT sensor network emits alarms → TrailRouteMind prioritises → Only critical data sent to the cloud</li>
      </ul>
    </section>

    <!-- Security -->
    <section id="security" class="content-section container">
      <h2 class="section-title">🔐 Security</h2>
      <p class="section-lead">TrailMQ is built with strong security foundations suitable for regulated industries.</p>
      <ul class="bullet-list check-list two-col">
        <li>TLS/mTLS with certificate rotation</li>
        <li>JWT Authentication for REST APIs</li>
        <li>Role‑Based Access Control (RBAC)</li>
        <li>Dynamic Access Control Lists (ACLs)</li>
        <li>IP Whitelisting &amp; OCSP certificate status checks</li>
      </ul>
    </section>

    <!-- About Us -->
    <section id="about" class="content-section alt-bg container">
      <h2 class="section-title">👥 About TrailForge</h2>
      <p>We are engineers &amp; open‑source enthusiasts passionate about building smart &amp; secure edge solutions for critical industries like pharma &amp; IIoT.</p>
      <p class="centered-link">Connect with us on <a href="https://github.com/trailforge">GitHub</a> or <a href="https://linkedin.com/company/trailforge">LinkedIn</a>.</p>
      <p class="callout">🚀 <strong>We're looking for contributors!</strong> Join us in making industrial messaging safe &amp; powerful.</p>
    </section>

    <!-- Contact -->
    <section id="contact" class="content-section container">
      <h2 class="section-title">📬 Contact &amp; Support</h2>
      <p>Questions or feedback? Reach out via:</p>
      <ul class="contact-list">
        <li>Email: <a href="mailto:support@trailforge.io">support@trailforge.io</a></li>
        <li>GitHub: <a href="https://github.com/trailforge/trailmq/issues">Issue Tracker</a></li>
        <li>Community (coming soon): Slack or Discord</li>
      </ul>
    </section> 
</main>

