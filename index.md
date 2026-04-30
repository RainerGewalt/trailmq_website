---
layout: default
title: "TrailMQ – Make MQTT Reviewable"
description: "TrailMQ helps regulated teams control topic access, track changes and prove what happened on their MQTT systems. Not just a broker. A control and evidence layer."
keywords: MQTT broker, audit trail, GMP compliance, GxP, pharma messaging, IIoT, industrial IoT, message queue, regulated industries, validation, traceability, docker, freemium
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

      <span class="hero__badge">Built for regulated systems</span>

      <h1 class="hero__headline">
        Make MQTT <em>reviewable</em>
      </h1>

      <p class="hero__subline">
        Standard brokers move messages. TrailMQ helps you prove what happened.
      </p>

      <p class="hero__desc">
        TrailMQ helps regulated teams control access, track changes and keep
        reviewable audit evidence on top of MQTT.
      </p>

      <ul class="hero__proof" role="list">
        <li>Know who changed what</li>
        <li>Control access by policy</li>
        <li>Keep reviewable audit evidence</li>
      </ul>

      <div class="hero__cta">
        <a href="https://github.com/RainerGewalt/TrailMQ" class="btn btn--primary" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          Deploy from GitHub
        </a>
        <a href="https://hub.docker.com/r/rainergewalt/trailmq-backend" class="btn btn--ghost" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg>
          View on Docker Hub
        </a>
      </div>
    </div>

    <!-- Visual Flow -->
    <div class="hero__flow" aria-hidden="true">
      <div class="flow-line">
        <span class="flow-node">Your Machines</span>
        <span class="flow-arrow">→</span>
        <span class="flow-node">MQTT</span>
        <span class="flow-arrow">→</span>
        <span class="flow-node flow-node--highlight">TrailMQ Layer</span>
        <span class="flow-arrow">→</span>
        <span class="flow-node">Broker / Apps</span>
        <span class="flow-arrow">→</span>
        <span class="flow-node">Reviewable Evidence</span>
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
            which policy was active and why something was allowed,
            blocked or reconfigured.
          </p>
          <p class="highlight-definition">
            Standard MQTT brokers tell you messages moved. They do not tell you
            who changed what, which policy was active or why something was allowed
            or blocked. TrailMQ keeps that evidence structured and reviewable
            from the moment it happens.
          </p>
          <p class="highlight-scope">
            Designed for GMP, GxP and IIoT environments where traceability is not optional.
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
          <p>You need to know who changed a setpoint, when it happened and whether
          the right policy was active. TrailMQ keeps that record without touching
          your PLCs or sensors.</p>
        </div>

        <div class="audience-card">
          <div class="audience-card__icon">🧪</div>
          <h3>Pharma and Life Sciences</h3>
          <p>You operate under GMP. Auditors ask questions months later.
          TrailMQ gives you structured, reviewable evidence for every
          message decision, ready when you need it.</p>
        </div>

        <div class="audience-card">
          <div class="audience-card__icon">🔧</div>
          <h3>IIoT Platform Engineers</h3>
          <p>You build the infrastructure others rely on.
          TrailMQ runs as a Docker container, integrates without code changes
          and produces audit evidence that downstream systems can consume.</p>
        </div>
      </div>
    </div>
  </section>


  <!-- ══════════════ CORE CAPABILITIES ══════════════ -->
  <section id="capabilities" class="section section--dark">
    <div class="container">
      <h2 class="section__title section__title--light">Not just transport. Controlled messaging.</h2>
      <p class="section__lead">TrailMQ does not replace your broker. It sits in front of it and gives every message decision a clear, reviewable record.</p>

      <div class="capabilities-grid">

        <!-- Featured: Policy Access -->
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

        <!-- Immutable audit trail -->
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

        <!-- Identity tracking -->
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

        <!-- Structured evidence -->
        <article class="capability-card">
          <div class="capability-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </div>
          <h3>Structured, readable evidence</h3>
          <p>Not raw logs. Not binary blobs. Structured records that a validation engineer,
          auditor or QA team can review without a developer in the room.</p>
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
          It makes broker decisions visible, reviewable and explainable.
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
      <p class="section__lead">TrailMQ works as a control proxy between your MQTT clients and your broker. Nothing about your existing setup needs to change.</p>

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
          <p>Clients connect to TrailMQ instead of directly to the broker. TrailMQ applies policies, records decisions and forwards messages. Your clients see no difference. Your broker sees no difference. Your audit trail sees everything.</p>
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
          <p>An immutable, searchable event timeline showing who sent what, when and why. Answer compliance questions months later without rebuilding context from logs.</p>
          <span class="tour-card__usecase">Useful when: an auditor asks what happened six months ago.</span>
        </article>

      </div>
    </div>
  </section>


  <!-- ══════════════ QUICKSTART ══════════════ -->
  <section id="quickstart" class="section section--cta">
    <div class="container">
      <h2 class="section__title section__title--light">Get started in minutes</h2>
      <p class="section__lead">Clone the repo, run Docker Compose, define your first policy. Your MQTT traffic stays exactly as it is.</p>

      <div class="quickstart-content">
        <div class="quickstart-text">
          <p>
            TrailMQ runs as a transparent proxy. Your clients connect to TrailMQ.
            TrailMQ connects to your existing broker. No migration, no downtime,
            no code changes on your clients.
          </p>
          <p class="quickstart-assurance">
            Free to evaluate. Contact us for production licensing.
          </p>
          <p class="quickstart-note">
            TrailMQ is early-stage software. Evaluate it carefully before using it in
            critical production environments.
          </p>

          <!-- Docker Hub Images Links -->
          <div class="docker-images">
            <div class="docker-images__title">Docker Hub Images</div>
            <div class="docker-images__grid">
              <a href="https://hub.docker.com/r/rainergewalt/trailmq-backend" class="docker-image-link" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg>
                trailmq-backend
              </a>
              <a href="https://hub.docker.com/r/rainergewalt/trailmq-frontend" class="docker-image-link" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg>
                trailmq-frontend
              </a>
            </div>
          </div>
        </div>

        <div class="quickstart-code">
          <div class="code-block">
            <code><span class="code-comment"># Clone the deployment repo</span>
git clone https://github.com/RainerGewalt/TrailMQ.git
cd TrailMQ

<span class="code-comment"># Start all services (pulls images from Docker Hub)</span>
docker compose up -d

<span class="code-comment"># Open the Web UI</span>
open http://localhost/trailmq/</code>
</div>

          <div class="code-block">
            <code><span class="code-comment"># Example: define a topic policy</span>
{
"topic": "factory/line-1/#",
"allow": ["line-operator", "qa-team"],
"deny":  ["*"],
"version": "2025-03-01"
}</code>
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
        Standard brokers move messages.<br>
        <em>TrailMQ helps you prove what happened.</em>
      </blockquote>

      <div class="hero__cta" style="margin-top:3rem;">
        <a href="https://github.com/RainerGewalt/TrailMQ" class="btn btn--primary" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          Deploy from GitHub
        </a>
        <a href="https://hub.docker.com/r/rainergewalt/trailmq-backend" class="btn btn--ghost" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg>
          Docker Hub
        </a>
        <a href="{{ '/wiki/' | relative_url }}" class="btn btn--ghost">Concepts</a>
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
      }
    ]
  }
  </script>

</main>