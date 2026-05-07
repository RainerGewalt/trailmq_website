---
layout: default
title: "TrailMQ – Make Machine Messages Reviewable"
description: "TrailMQ turns MQTT traffic into reviewable evidence by adding policy control, domain context, historical baselines and audit-linked decision traces."
keywords: MQTT broker, MQTT audit trail, MQTT evidence layer, industrial MQTT, IIoT, domain context, historical baselines, KPI deviation, GxP, GMP, audit evidence, traceability, trusted industrial AI, AI-ready industrial data, regulated industries, validation, docker, freemium
author: TrailMQ Team
---

<div id="top" class="trailmq-page">

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

      <span class="hero__badge">Built for regulated and quality-critical systems</span>

      <h1 class="hero__headline">
        Make machine messages <em>understandable, comparable and reviewable</em>
      </h1>

      <p class="hero__subline">
        Standard brokers move MQTT messages. TrailMQ adds context, comparison and audit evidence.
      </p>

      <p class="hero__desc">
        TrailMQ helps industrial teams control MQTT access, explain broker decisions,
        enrich machine messages with domain context and turn live values into
        reviewable evidence. Start with the guided launcher, choose a Starter Kit
        and run the stack locally in minutes.
      </p>

      <ul class="hero__proof" role="list">
        <li>Add machine, batch and metric context</li>
        <li>Compare live values with historical baselines</li>
        <li>Keep every decision linked to audit evidence</li>
      </ul>

      <div class="hero__cta">
        <a href="https://github.com/RainerGewalt/TrailMQ" class="btn btn--primary" target="_blank" rel="noopener">
          Launch from GitHub
        </a>

        <a href="#evidence-flow" class="btn btn--ghost">
          See examples
        </a>
      </div>
    </div>

    <!-- Visual Flow -->
    <div class="hero__flow" aria-hidden="true">
      <div class="flow-line">
        <span class="flow-node">Machine Message</span>
        <span class="flow-arrow">→</span>
        <span class="flow-node">MQTT</span>
        <span class="flow-arrow">→</span>
        <span class="flow-node flow-node--highlight">Context + Decision Layer</span>
        <span class="flow-arrow">→</span>
        <span class="flow-node">Historical Baseline</span>
        <span class="flow-arrow">→</span>
        <span class="flow-node">Audit Evidence</span>
      </div>
    </div>

    <div class="hero__bg" aria-hidden="true"></div>
  </section>


  <!-- ══════════════ THE PROBLEM ══════════════ -->
  <section id="overview" class="section section--light">
    <div class="container">

      <div class="intro-text">
        <p>Fast transport is easy. Explaining it later is hard.</p>

        <div class="intro-text__highlight">
          <p class="highlight-main">
            Later, teams often need to explain who changed what,
            which policy was active, what a machine message meant and why
            something was allowed, blocked, deferred or calculated.
          </p>
          <p class="highlight-definition">
            Standard MQTT brokers tell you messages moved. They do not tell you
            who changed what, which policy was active, what machine or batch context
            was attached, which historical baseline was used or why a value became
            a deviation. TrailMQ keeps that evidence structured and reviewable
            from the moment it happens.
          </p>
          <p class="highlight-scope">
            Designed for GMP, GxP, IIoT and quality-critical environments where traceability is not optional.
          </p>
        </div>

        <p class="intro-replaces">
          You keep MQTT. TrailMQ adds a control and evidence layer on top.
          No change to your machines, no change to your broker, no proprietary lock-in.
        </p>

        <p class="intro-learn-more">
          New to regulated MQTT?
          <a href="{{ '/wiki/gxp-compliant-mqtt-broker/' | relative_url }}">
            Read why MQTT itself is not GxP compliant or non-compliant.
          </a>
        </p>
      </div>

    </div>
  </section>


  <!-- ══════════════ CONTEXTUAL EVIDENCE FLOW ══════════════ -->
  <section id="evidence-flow" class="section section--subtle">
    <div class="container">
      <h2 class="section__title">From MQTT message to reviewable evidence</h2>

      <p class="section__lead">
        TrailMQ is designed to turn live MQTT traffic into contextual evidence:
        a machine message can be enriched with domain context, compared against
        historical baselines and linked to an audit trail.
      </p>

      <div class="audience-grid">
        <div class="audience-card">
          <div class="audience-card__icon">🏷️</div>
          <h3>1. Add domain context</h3>
          <p>
            Extract line, machine, batch and metric information from MQTT topics
            and payload headers.
          </p>
          <p><code>production/line1/filler/batch/4711/temperature</code></p>
        </div>

        <div class="audience-card">
          <div class="audience-card__icon">📊</div>
          <h3>2. Compare with history</h3>
          <p>
            Feed historical baselines through REST and let TrailMQ compare live
            values against expected or historical reference values.
          </p>
          <p><code>28.4 °C vs 22.5 °C baseline</code></p>
        </div>

        <div class="audience-card">
          <div class="audience-card__icon">🔍</div>
          <h3>3. Explain the decision</h3>
          <p>
            Link policy decisions, context extraction, baseline resolution and KPI
            deviations to reviewable audit evidence.
          </p>
          <p><code>accepted → context → baseline → deviation → audit</code></p>
        </div>
      </div>

      <p class="section__footnote">
        This planned plugin flow makes TrailMQ useful beyond transport: machine
        communication becomes understandable, comparable and reviewable.
      </p>
    </div>
  </section>


  <!-- ══════════════ WHO IS IT FOR ══════════════ -->
  <section id="audience" class="section section--subtle">
    <div class="container">
      <h2 class="section__title">Built for teams that need to explain later</h2>

      <p class="section__lead">
        Whether you run a production line, manage pharma infrastructure or
        build systems that have to pass an audit — TrailMQ is the layer between
        your MQTT traffic and your reviewable evidence.
      </p>

      <div class="audience-grid">
        <div class="audience-card">
          <div class="audience-card__icon">🏭</div>
          <h3>OT and Production Teams</h3>
          <p>You need to know who changed a setpoint, when it happened, whether
          the right policy was active and what the message meant in machine,
          batch or metric context. TrailMQ keeps that record without touching
          your PLCs or sensors.</p>
        </div>

        <div class="audience-card">
          <div class="audience-card__icon">🧪</div>
          <h3>Pharma and Life Sciences</h3>
          <p>You operate under GMP. Auditors ask questions months later.
          TrailMQ gives you structured, reviewable evidence for message decisions,
          deviations and technical controls, ready when you need it.</p>
        </div>

        <div class="audience-card">
          <div class="audience-card__icon">🔧</div>
          <h3>IIoT Platform Engineers</h3>
          <p>You build the infrastructure others rely on.
          TrailMQ runs as a Docker-based Starter Kit, integrates without code changes
          and produces evidence that downstream systems can consume.</p>
        </div>
      </div>
    </div>
  </section>


  <!-- ══════════════ CORE CAPABILITIES ══════════════ -->
  <section id="capabilities" class="section section--dark">
    <div class="container">
      <h2 class="section__title section__title--light">Not just transport. Contextual messaging.</h2>
      <p class="section__lead">
        TrailMQ does not replace your broker. It sits in front of it and adds
        control, domain context, historical comparison and reviewable evidence.
      </p>

      <div class="capabilities-grid">

        <article class="capability-card capability-card--featured">
          <div class="capability-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <h3>Policy-controlled topic access</h3>
          <p>Define who can publish or subscribe to which topics, under which conditions.
          Policies are versioned and always part of the audit record — so you can prove
          not just what happened, but which rule allowed or blocked it.</p>
        </article>

        <article class="capability-card">
          <div class="capability-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
          <h3>Immutable audit trail</h3>
          <p>Every decision is written to a structured, append-only log that stays
          readable and reviewable later. No post-processing required.</p>
        </article>

        <article class="capability-card">
          <div class="capability-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
          </div>
          <h3>Identity and change tracking</h3>
          <p>Know which client, user or service triggered a message. Know when a
          configuration changed and who changed it. TrailMQ connects identity
          to every event in the system.</p>
        </article>

        <article class="capability-card">
          <div class="capability-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </div>
          <h3>Structured, readable evidence</h3>
          <p>Not raw logs. Not binary blobs. Structured records that a validation engineer,
          auditor, QA team or OT owner can review without a developer in the room.</p>
        </article>

        <article class="capability-card">
          <div class="capability-card__icon">🏷️</div>
          <h3>Domain context enrichment</h3>
          <p>
            Planned plugins can turn technical MQTT topics into readable machine,
            batch and metric context. This makes audit records understandable for
            QA, OT and engineering teams.
          </p>
        </article>

        <article class="capability-card">
          <div class="capability-card__icon">📈</div>
          <h3>Live vs historical comparison</h3>
          <p>
            Planned plugins can compare live MQTT values against REST-fed historical
            baselines and record KPI deviations as audit-linked evidence.
          </p>
        </article>

      </div>
    </div>
  </section>


  <!-- ══════════════ COMPARISON ══════════════ -->
  <section id="comparison" class="section section--light">
    <div class="container">
      <h2 class="section__title">Standard broker vs. TrailMQ</h2>

      <p class="section__lead">A standard broker tells you messages moved. Here is what it cannot answer.</p>

      <div class="comparison-table-wrap">
        <table class="comparison-table" role="table">
          <thead>
            <tr>
              <th scope="col">Question you need to answer</th>
              <th scope="col">Standard broker</th>
              <th scope="col" class="highlight-col">With TrailMQ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Who changed this topic configuration?</td>
              <td>No record</td>
              <td class="highlight-col"><strong>Identity tracked</strong></td>
            </tr>
            <tr>
              <td>Which policy was active when this message was sent?</td>
              <td>Not tracked</td>
              <td class="highlight-col"><strong>Policy version in audit log</strong></td>
            </tr>
            <tr>
              <td>Why was this message blocked?</td>
              <td>No explanation</td>
              <td class="highlight-col"><strong>Decision recorded with reason</strong></td>
            </tr>
            <tr>
              <td>What does this MQTT value mean in process context?</td>
              <td>Topic string only</td>
              <td class="highlight-col"><strong>Machine, batch and metric context</strong></td>
            </tr>
            <tr>
              <td>Was this live value normal or deviating?</td>
              <td>Not available</td>
              <td class="highlight-col"><strong>Compared with historical baseline</strong></td>
            </tr>
            <tr>
              <td>What happened when required context was missing?</td>
              <td>Usually invisible</td>
              <td class="highlight-col"><strong>Deferred, queued or audited explicitly</strong></td>
            </tr>
            <tr>
              <td>Can I prove this data was not modified in transit?</td>
              <td>No</td>
              <td class="highlight-col"><strong>Tamper-evident log</strong></td>
            </tr>
            <tr>
              <td>Is this evidence ready for a GMP audit?</td>
              <td>No</td>
              <td class="highlight-col"><strong>Structured, reviewable records</strong></td>
            </tr>
          </tbody>
        </table>
        <p class="comparison-closer">
          <strong>TrailMQ does not compete with your broker.</strong>
          It makes broker decisions, machine context and deviation evidence visible,
          reviewable and explainable.
          <a href="{{ '/wiki/gxp-compliant-mqtt-broker/' | relative_url }}">
            Learn what this means for GxP and MQTT.
          </a>
        </p>
      </div>
    </div>
  </section>


  <!-- ══════════════ FAQ / GXP MQTT ══════════════ -->
  <section id="faq" class="section section--light">
    <div class="container container--narrow">
      <h2 class="section__title">Can MQTT be used in GxP environments?</h2>

      <p class="section__lead">
        MQTT can be used in regulated manufacturing, but a broker alone is not enough.
        The relevant question is whether message decisions can be controlled, explained and reviewed later.
      </p>

      <div class="faq-list">
        <article class="faq-item">
          <h3>Can an MQTT broker be GxP compliant?</h3>
          <p>
            MQTT itself is not GxP compliant or non-compliant. It is a messaging protocol.
            Compliance depends on the surrounding controls: identity, access policies, audit trails,
            data integrity, change control and validation evidence.
          </p>
        </article>

        <article class="faq-item">
          <h3>What about data integrity and audit trails?</h3>
          <p>
            Standard brokers move messages. They usually do not explain who changed what,
            which policy was active, why a message was allowed or blocked, and whether the evidence
            is complete enough for later review.
          </p>
        </article>

        <article class="faq-item">
          <h3>Does TrailMQ make a system automatically compliant?</h3>
          <p>
            No. TrailMQ supports compliance by generating technical evidence.
            Validation, risk assessment and procedural controls still remain the responsibility
            of the regulated organization.
          </p>
        </article>
      </div>

      <p class="section__footnote">
        <a href="{{ '/wiki/gxp-compliant-mqtt-broker/' | relative_url }}">
          Read the full explanation: Can an MQTT broker be GxP compliant? →
        </a>
      </p>
    </div>
  </section>


  <!-- ══════════════ GMP / REGULATED ══════════════ -->
  <section id="gmp" class="section section--accent">
    <div class="container">
      <h2 class="section__title">Built for regulated environments</h2>

      <ul class="check-list" role="list" style="max-width:44rem;margin-inline:auto;">
        <li><strong>Immutable audit evidence</strong> — hash-chained, tamper-evident trails</li>
        <li><strong>Segregation of duties</strong> — user and role-based access controls</li>
        <li><strong>Data integrity controls</strong> — message-level verification</li>
        <li><strong>Supports validation workflows</strong> — IQ/OQ/PQ documentation ready</li>
        <li><strong>GAMP alignment</strong> — topic-level permissions across validation phases</li>
      </ul>

      <p class="section__footnote">
        TrailMQ serves as a technical control in support of compliance processes; it does not replace full regulatory assessment or validation.
      </p>
    </div>
  </section>


  <!-- ══════════════ PLATFORM OVERVIEW ══════════════ -->
  <section id="tour" class="section section--light">
    <div class="container">
      <h2 class="section__title">A layer, not a replacement</h2>
      <p class="section__lead">
        TrailMQ works as a control proxy between your MQTT clients and your broker.
        Nothing about your existing setup needs to change.
      </p>

      <div class="tour-grid">

        <article class="tour-card tour-card--featured">
          <div class="tour-card__header">
            <div class="tour-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3>Proxy mode: transparent to your clients</h3>
          </div>
          <p>
            Clients connect to TrailMQ instead of directly to the broker. TrailMQ applies policies,
            records decisions and forwards messages. Your clients see no difference. Your broker
            sees no difference. Your audit trail sees everything.
          </p>
          <span class="tour-card__usecase">Same MQTT protocol. Same client libraries. No code changes.</span>
        </article>

        <article class="tour-card">
          <div class="tour-card__header">
            <div class="tour-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <h3>Audit log</h3>
          </div>
          <p>
            An immutable, searchable event timeline showing who sent what, when and why.
            Answer compliance questions months later without rebuilding context from logs.
          </p>
          <span class="tour-card__usecase">Useful when: an auditor asks what happened six months ago.</span>
        </article>

      </div>
    </div>
  </section>


  <!-- ══════════════ API AND REVIEW SURFACES ══════════════ -->
  <section id="api" class="section section--subtle">
    <div class="container">
      <h2 class="section__title">Built to be controlled, fed and reviewed</h2>

      <p class="section__lead">
        TrailMQ is not only a Web UI. The same product functions are exposed
        through a REST API so teams can integrate TrailMQ into scripts,
        local checks, CI pipelines, monitoring tools and external systems.
      </p>

      <div class="audience-grid">
        <div class="audience-card">
          <div class="audience-card__icon">🧭</div>
          <h3>Topic and policy control</h3>
          <p>
            Inspect controlled MQTT topics, review effective settings and resolve
            which policy applies to a concrete message path.
          </p>
        </div>

        <div class="audience-card">
          <div class="audience-card__icon">📦</div>
          <h3>Queue and dead-letter review</h3>
          <p>
            See what is queued, delayed or dead-lettered instead of losing
            visibility when delivery or context-dependent processing cannot happen immediately.
          </p>
        </div>

        <div class="audience-card">
          <div class="audience-card__icon">🔍</div>
          <h3>Audit and trust views</h3>
          <p>
            Review audit records, validate the audit chain and export
            evidence-oriented records for later inspection.
          </p>
        </div>

        <div class="audience-card">
          <div class="audience-card__icon">📈</div>
          <h3>Historical context feed</h3>
          <p>
            Planned REST endpoints allow external systems to provide historical
            baselines that can be used by plugins for live-vs-historical deviation checks.
          </p>
        </div>
      </div>

      <p class="section__footnote">
        REST is not only for administration. It is also the planned integration surface
        for historical baselines, plugin configuration and reviewable decision traces.
      </p>
    </div>
  </section>


  <!-- ══════════════ PLANNED PLUGIN LAYER ══════════════ -->
  <section id="plugins" class="section section--light">
    <div class="container">
      <h2 class="section__title">Planned plugin layer</h2>

      <p class="section__lead">
        TrailMQ's planned plugin layer starts with a focused goal:
        making MQTT messages more understandable, comparable and reviewable.
      </p>

      <div class="audience-grid">
        <div class="audience-card">
          <div class="audience-card__icon">🧾</div>
          <h3>Decision Trace</h3>
          <p>
            Explains why accept, deny or rate-limit decisions happened and links
            them to policies, clients, topics and audit evidence.
          </p>
        </div>

        <div class="audience-card">
          <div class="audience-card__icon">🏷️</div>
          <h3>Domain Context Lite</h3>
          <p>
            Extracts machine, batch and metric context from topic patterns and
            payload headers so MQTT events become domain-readable.
          </p>
        </div>

        <div class="audience-card">
          <div class="audience-card__icon">📥</div>
          <h3>Historical Context Feed</h3>
          <p>
            Accepts historical comparison values through REST and makes them
            available to other plugin capabilities.
          </p>
        </div>

        <div class="audience-card">
          <div class="audience-card__icon">📊</div>
          <h3>KPI Lite</h3>
          <p>
            Compares live MQTT values with historical baselines and records
            deviation metrics as audit-linked evidence.
          </p>
        </div>
      </div>

      <p class="section__footnote">
        The first plugin layer is planned as embedded Standard Edition functionality:
        simple to evaluate, deterministic by default and designed around explicit
        context, queues and audit records. This creates an AI-ready evidence layer
        without turning TrailMQ into an AI platform.
      </p>
    </div>
  </section>


  <!-- ══════════════ PLUGIN EXAMPLE ══════════════ -->
  <section id="example-live-kpi" class="section section--subtle">
    <div class="container container--narrow">
      <h2 class="section__title">Example: Live vs historical KPI</h2>

      <p class="section__lead">
        A machine publishes a live temperature value through MQTT. TrailMQ extracts
        the domain context, resolves a historical baseline and records the deviation
        as reviewable evidence.
      </p>

      <div class="faq-list">
        <article class="faq-item">
          <h3>1. Feed a historical baseline through REST</h3>
          <p>
            An external system provides a baseline for <code>line1 / filler / temperature</code>.
          </p>
          <pre><code>{
"context_key": {
"line": "line1",
"machine": "filler",
"metric": "temperature"
},
"baseline": {
"value": 22.5,
"unit": "C",
"source": "historical_average_30d"
},
"limits": {
"warning_percent": 10,
"critical_percent": 20
}
}</code></pre>
</article>

        <article class="faq-item">
          <h3>2. Receive a live MQTT value</h3>
          <p>
            A machine publishes <code>28.4 °C</code> to
            <code>production/line1/filler/batch/4711/temperature</code>.
          </p>
        </article>

        <article class="faq-item">
          <h3>3. Produce audit-linked deviation evidence</h3>
          <p>
            TrailMQ can link the live value, domain context, historical baseline,
            calculated deviation and decision trace into one reviewable path.
          </p>
          <pre><code>{
"metric": "temperature",
"live_value": 28.4,
"historical_value": 22.5,
"deviation_percent": 26.22,
"severity": "critical",
"context": {
"line": "line1",
"machine": "filler",
"batch_id": "4711",
"metric": "temperature"
}
}</code></pre>
</article>
</div>

      <p class="section__footnote">
        If required historical context is missing, TrailMQ should not silently skip
        the calculation. The planned queue behavior makes missing context explicit:
        deferred, retryable and reviewable.
      </p>
    </div>
  </section>


  <!-- ══════════════ TRUSTED INDUSTRIAL AI FOUNDATION ══════════════ -->
  <section id="industrial-ai-trust" class="section section--light">
    <div class="container container--narrow">
      <h2 class="section__title">A foundation for trusted Industrial AI</h2>

      <p class="section__lead">
        In GMP and quality-critical environments, the question is not only
        whether an AI model is powerful. The question is whether the data,
        context and decisions around that model can be trusted and reviewed.
      </p>

      <div class="faq-list">
        <article class="faq-item">
          <h3>AI needs more than raw machine data</h3>
          <p>
            A raw MQTT value is rarely enough. Before an AI system can reason
            about industrial data, the value needs domain context: machine,
            line, batch, metric, policy state and process relevance.
          </p>
        </article>

        <article class="faq-item">
          <h3>Deterministic context before AI recommendations</h3>
          <p>
            TrailMQ's planned plugin layer starts with deterministic context and
            KPI logic: extract domain context, resolve historical baselines,
            calculate deviations and link the result to audit evidence.
          </p>
        </article>

        <article class="faq-item">
          <h3>Trust comes from traceability</h3>
          <p>
            If AI later suggests, prioritizes or explains an event, TrailMQ can
            provide the surrounding evidence layer: what data was used, which
            context was attached, which baseline was resolved and which decision
            path was recorded.
          </p>
        </article>
      </div>

      <p class="section__footnote">
        TrailMQ is not positioned as an AI model or analytics platform. It is
        designed as the controlled MQTT evidence layer that trusted Industrial AI
        can build on.
      </p>
    </div>
  </section>


  <!-- ══════════════ VERIFICATION PHILOSOPHY ══════════════ -->
  <section id="verification" class="section section--light">
    <div class="container container--narrow">
      <h2 class="section__title">Verified for more than message transport</h2>

      <p class="section__lead">
        TrailMQ is developed with a scenario-based verification approach.
        The goal is not only to check whether MQTT messages can be transported.
        The goal is to check whether MQTT behavior remains controllable,
        inspectable and reviewable under realistic conditions.
      </p>

      <div class="faq-list">
        <article class="faq-item">
          <h3>Runtime behavior</h3>
          <p>
            TrailMQ is exercised through MQTT over TLS, REST authentication,
            topic control, policy resolution, queue handling and dead-letter paths.
          </p>
        </article>

        <article class="faq-item">
          <h3>Evidence behavior</h3>
          <p>
            Audit recording, audit-chain validation, readiness checks and
            evidence-oriented exports are part of the internal verification mindset.
          </p>
        </article>

        <article class="faq-item">
          <h3>Failure behavior</h3>
          <p>
            Negative inputs, restricted actions, queue pressure, missing context and
            security-relevant paths are treated as product scenarios, not only as
            technical edge cases.
          </p>
        </article>
      </div>

      <p class="section__footnote">
        TrailMQ should not only move MQTT messages. It should help teams explain
        what happened around those messages.
      </p>
    </div>
  </section>


  <!-- ══════════════ QUICKSTART ══════════════ -->
  <section id="quickstart" class="section section--cta">
    <div class="container">
      <h2 class="section__title section__title--light">Start TrailMQ with one command</h2>

      <p class="section__lead">
        Clone the repo, run the guided launcher and choose your first Starter Kit.
        TrailMQ prepares the stack for you.
      </p>

      <div class="quickstart-content">
        <div class="quickstart-text">
          <p>
            TrailMQ now ships with a guided launcher. It prepares runtime folders,
            creates local demo certificates when needed, generates evaluation credentials
            and starts the selected recipe.
          </p>

          <p>
            After launch, you can use the Web UI or the REST API to inspect topics,
            resolve policies, review queues and validate audit evidence.
          </p>

          <p>
            No migration. No downtime. No code changes on your MQTT clients.
          </p>

          <p class="quickstart-assurance">
            Free to evaluate. Contact us for production licensing.
          </p>

          <p class="quickstart-note">
            TrailMQ is early-stage software. Evaluate it carefully before using it in
            critical production environments.
          </p>

          <div class="docker-images">
            <div class="docker-images__title">Images used by the launcher</div>
            <div class="docker-images__grid">
              <a href="https://hub.docker.com/r/rainergewalt/trailmq-backend" class="docker-image-link" target="_blank" rel="noopener">
                trailmq-backend
              </a>
              <a href="https://hub.docker.com/r/rainergewalt/trailmq-frontend" class="docker-image-link" target="_blank" rel="noopener">
                trailmq-frontend
              </a>
            </div>
          </div>
        </div>

        <div class="quickstart-code">
          <div class="code-block">
            <code><span class="code-comment"># Clone the TrailMQ deployment repo</span>
git clone https://github.com/RainerGewalt/TrailMQ.git
cd TrailMQ

<span class="code-comment"># Start the guided launcher</span>
./trailmq launch</code>
</div>

          <div class="code-block">
            <code><span class="code-comment"># Choose your Starter Kit</span>
[1] Secure MQTT Core

<span class="code-comment"># The launcher prepares the runtime</span>
✓ Runtime folders prepared
✓ Config ready
✓ Evaluation credentials generated
✓ Active recipe set
✓ Stack is up</code>
</div>

          <div class="code-block">
            <code><span class="code-comment"># Open TrailMQ</span>
Web UI    http://localhost/trailmq/
REST API  http://localhost/api/v1
MQTT TLS  localhost:8883
MQTT WS   ws://localhost/mqtt</code>
</div>

          <div class="code-block">
            <code><span class="code-comment"># Useful commands</span>
./trailmq status
./trailmq logs
./trailmq doctor
./trailmq down
./trailmq reset</code>
</div>

          <a href="{{ '/wiki/' | relative_url }}"
             class="btn btn--ghost"
             style="margin-top: 0.5rem;">
            Read the concepts →
          </a>
        </div>
      </div>
    </div>
  </section>


  <!-- ══════════════ CLOSING ══════════════ -->
  <section class="section section--closing">
    <div class="container container--narrow" style="text-align:center;">
      <blockquote class="closing-quote">
        Standard brokers move MQTT messages.<br>
        <em>TrailMQ makes machine communication understandable, comparable and reviewable.</em>
      </blockquote>

      <div class="hero__cta" style="margin-top:3rem;">
        <a href="https://github.com/RainerGewalt/TrailMQ" class="btn btn--primary" target="_blank" rel="noopener">
          Launch from GitHub
        </a>

        <a href="#quickstart" class="btn btn--ghost">
          Quickstart
        </a>

        <a href="{{ '/wiki/' | relative_url }}" class="btn btn--ghost">
          Concepts
        </a>
      </div>

      <p style="margin-top: 2.5rem; font-size: 0.875rem; color: rgba(255,255,255,0.35);">
        Free to evaluate. No cloud dependency. No vendor lock-in.<br>
        Contact <a href="mailto:contact@trailmq.com" style="color:rgba(255,255,255,0.5);">contact@trailmq.com</a> for licensing.
      </p>
    </div>
  </section>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can an MQTT broker be GxP compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MQTT itself is not GxP compliant or non-compliant. It is a messaging protocol. Compliance depends on the surrounding controls such as identity, access policies, audit trails, data integrity, change control and validation evidence."
        }
      },
      {
        "@type": "Question",
        "name": "Can MQTT be used in GMP-regulated manufacturing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, MQTT can be used in GMP-regulated manufacturing, but the broker alone is not enough. The system must be able to control, explain and review message decisions later."
        }
      },
      {
        "@type": "Question",
        "name": "Does TrailMQ make a system automatically compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. TrailMQ supports compliance by generating technical evidence. Validation, risk assessment and procedural controls remain the responsibility of the regulated organization."
        }
      },
      {
        "@type": "Question",
        "name": "Does TrailMQ provide a REST API?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. TrailMQ exposes product functions through a REST API so teams can inspect topics, resolve policies, review queues, validate audit evidence and integrate TrailMQ with scripts, checks, monitoring tools or external systems."
        }
      },
      {
        "@type": "Question",
        "name": "What is the planned TrailMQ plugin layer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TrailMQ's planned plugin layer focuses on making MQTT messages more understandable, comparable and reviewable. Planned plugins include Decision Trace, Domain Context Lite, Historical Context Feed and KPI Lite."
        }
      },
      {
        "@type": "Question",
        "name": "Can TrailMQ compare live MQTT values with historical baselines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This is part of the planned plugin layer. Historical baselines can be provided through REST, live MQTT values can be enriched with domain context, and KPI Lite can calculate deviation metrics that are linked to audit evidence."
        }
      },
      {
        "@type": "Question",
        "name": "Is TrailMQ an Industrial AI platform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. TrailMQ is not positioned as an AI model or analytics platform. It provides a controlled MQTT evidence layer with policy control, domain context, historical baselines, KPI deviations and decision traces that can support trusted Industrial AI use cases."
        }
      }
    ]
  }
  </script>

</div>