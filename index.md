---
layout: default
title: TrailMQ – Audit-First MQTT Platform for Regulated Industries
description: The world's first audit-first MQTT platform. Built for GMP, GxP and regulated manufacturing. Audit trails, security policies and validation evidence – without changing your machines.
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
        <li>Deploy in minutes with Docker</li>
        <li>Free to use — Enterprise add-ons available</li>
      </ul>
      
      <div class="hero__cta">
        <!-- Primary: GitHub for easy deploy -->
        <a href="https://github.com/RainerGewalt/TrailMQ" class="btn btn--primary" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          Deploy from GitHub
        </a>
        <!-- Secondary: Docker Hub -->
        <a href="https://hub.docker.com/r/rainergewalt/trailmq-backend" class="btn btn--ghost" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg>
          View on Docker Hub
        </a>
      </div>
    </div>
    
    <!-- Visual Flow -->
    <div class="hero__flow" aria-hidden="true">
      <div class="flow-line">
        <span class="flow-node">Sensor</span>
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
          <div class="audience-card__icon">🏭</div>
          <h3>Automation & IIoT</h3>
          <p>Real-time messaging in manufacturing and lab systems, with built-in traceability and structured event histories.</p>
        </div>
        
        <div class="audience-card">
          <div class="audience-card__icon">✓</div>
          <h3>QA / CSV Teams</h3>
          <p>Built-in audit trails, user attribution, and GMP-ready architecture to simplify validation and compliance audits.</p>
        </div>
        
        <div class="audience-card">
          <div class="audience-card__icon">🔧</div>
          <h3>Platform & Architecture</h3>
          <p>Run on-premise, route with ease—flexible enough for hybrid architectures with modern tooling.</p>
        </div>
      </div>
    </div>
  </section>


  <!-- ══════════════ CORE CAPABILITIES ══════════════ -->
  <section id="capabilities" class="section section--dark">
    <div class="container">
      <h2 class="section__title section__title--light">Core Capabilities</h2>
      <p class="section__lead">Lightweight infrastructure for traceable, audit-first messaging.</p>

      <div class="capabilities-grid">
        
        <!-- Featured: Audit-Ready Messaging -->
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
          <h3>Audit-Ready Messaging</h3>
          <p>Each message includes a full audit payload with user context, timestamps and metadata—traceable, ready for compliance review without extra effort.</p>
        </article>

        <!-- Security by Policy -->
        <article class="capability-card">
          <div class="capability-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
          <h3>Security by Policy</h3>
          <p>Role- and ACL-based access to your channels via topics. Fine-grained control over who can publish, subscribe, and configure.</p>
        </article>

        <!-- Fail-Safe Messaging -->
        <article class="capability-card">
          <div class="capability-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
          </div>
          <h3>Fail-Safe Messaging</h3>
          <p>Message persistence (optional), configurable retries, and persistent pub/sub ensure delivery, even during connectivity interruptions.</p>
        </article>

        <!-- Privacy by Design -->
        <article class="capability-card">
          <div class="capability-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </div>
          <h3>Privacy by Design</h3>
          <p>All sensitive data is handled locally on your infrastructure for full control over sensitive data.</p>
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
              <td>Manual correlation</td>
              <td class="highlight-col"><strong>Hash-chained trails</strong></td>
            </tr>
            <tr>
              <td>Basic auth</td>
              <td class="highlight-col"><strong>TLS + JWT + RBAC</strong></td>
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
          <li><strong>Segregation of duties</strong> via user ACM (topics and design level triggers)</li>
          <li><strong>Immutable, hash-chained audit trails</strong>—impossible for "post-hoc edits"</li>
          <li><strong>Controlled vocabulary</strong> — XSLT, JSON / XST tags</li>
          <li><strong>Data integrity</strong> via message-level hashing (SHA-256 fingerprint)</li>
          <li><strong>GAMP alignment</strong> with topic-level permission across validation process</li>
        </ul>
        
        <div class="gmp-badge">
          <div class="gmp-badge__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <polyline points="9 12 11 14 15 10"/>
            </svg>
          </div>
          <span class="gmp-badge__text">GMP Aligned</span>
          <span class="gmp-badge__sub">Audit-Ready Architecture</span>
        </div>
      </div>
      
      <p class="section__footnote">
        TrailMQ serves as a technical control in support of compliance processes; it does not replace full regulatory assessment or validation.
      </p>
    </div>
  </section>


  <!-- ══════════════ PRODUCT TOUR ══════════════ -->
  <section id="tour" class="section section--light">
    <div class="container">
      <h2 class="section__title">Platform Overview</h2>
      <p class="section__lead">Built-in primitives to support orchestration, evidence and compliance—from IQ/OQ to live.</p>

      <div class="tour-grid">
        
        <!-- Featured: Full Audit Trails -->
        <article class="tour-card tour-card--featured" id="audit">
          <div class="tour-card__header">
            <div class="tour-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <h3>Full Audit Trails</h3>
          </div>
          <p>An immutable, searchable event timeline showing who sent what, when and why—covering over IQ/OQ to live.</p>
          <p>Ideal for answering ad-hoc compliance questions after the fact, without rebuilding context from logs.</p>
          <span class="tour-card__usecase">Use case: Instant, evidence-ready answers to audit questions</span>
        </article>

        <!-- Topics & Wildcards -->
        <article class="tour-card" id="topics">
          <div class="tour-card__header">
            <div class="tour-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h3>Topics & Wildcards</h3>
          </div>
          <p>Use familiar MQTT topics for routing. Pattern-based subscriptions let teams filter messages by context—lab, device, event type.</p>
          <span class="tour-card__usecase">Use case: Multi-area monitoring, context-aware routing</span>
        </article>

        <!-- Regulation-Ready -->
        <article class="tour-card" id="security">
          <div class="tour-card__header">
            <div class="tour-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h3>Regulation-Ready</h3>
          </div>
          <p>Supports MQTT, JSON, and audit-first defaults—fits cleanly into CSV-ready IQ/OQ workflows.</p>
          <span class="tour-card__usecase">Use case: Faster validation, IQ/OQ documentation</span>
        </article>

        <!-- TrailBuilder -->
        <article class="tour-card" id="builder">
          <div class="tour-card__header">
            <div class="tour-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <h3>TrailBuilder</h3>
          </div>
          <p>Quickly build and test messaging-only flows with a built-in event orchestration tool.</p>
          <span class="tour-card__usecase">Use case: Prototyping message flows, debugging pipelines</span>
        </article>

        <!-- TrailLink -->
        <article class="tour-card" id="link">
          <div class="tour-card__header">
            <div class="tour-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            <h3>TrailLink</h3>
          </div>
          <p>Ingress/multi-tenant message logs with optional enrichment for OPC UA, S7, and standard IoT bridges.</p>
          <span class="tour-card__usecase">Use case: Bridging legacy systems, multi-protocol support</span>
        </article>

      </div>
    </div>
  </section>


  <!-- ══════════════ AI PLUGINS ══════════════ -->
  <section id="ai" class="section section--subtle">
    <div class="container">
      <h2 class="section__title section__title--secondary">TrailAI Plugins</h2>

      <p class="section__lead section__lead--secondary">
        Extend the platform with validated plugins or bring your own. Each plugin is sandboxed with declarative metadata.
      </p>
      
      <div class="plugins-grid">
        <div class="plugin-item">
          <div class="plugin-item__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div><strong>TrailGuard</strong><span>Anomaly detection</span></div>
        </div>
        <div class="plugin-item">
          <div class="plugin-item__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
            </svg>
          </div>
          <div><strong>RouteMind</strong><span>Semantic routing</span></div>
        </div>
        <div class="plugin-item">
          <div class="plugin-item__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="3" y1="9" x2="21" y2="9"/>
              <line x1="9" y1="21" x2="9" y2="9"/>
            </svg>
          </div>
          <div><strong>SemanticSwitch</strong><span>Classification</span></div>
        </div>
        <div class="plugin-item">
          <div class="plugin-item__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <div><strong>Responder</strong><span>Auto-response</span></div>
        </div>
      </div>
    </div>
  </section>


  <!-- ══════════════ QUICKSTART ══════════════ -->
  <section id="quickstart" class="section section--cta">
    <div class="container">
      <h2 class="section__title section__title--light">Start free. Scale when validated.</h2>
      <p class="section__lead">TrailMQ is free to deploy and use. Enterprise add-ons available for production environments.</p>

      <div class="quickstart-content">
        <div class="quickstart-text">
          <p>
            <strong>No registration, no trials, no per-environment cost.</strong>
          </p>
          <p>
            Clone the repo, run docker compose, and you're live in minutes. The deployment files are on GitHub — the container images are hosted on Docker Hub.
          </p>
          <p>
            Enterprise licenses and support packages are available after validation for production use.
          </p>
          <p class="quickstart-assurance">
            <a href="https://github.com/RainerGewalt/TrailMQ" target="_blank" rel="noopener" style="color:var(--clr-accent-light);text-decoration:underline">
              Get the Starter Kit on GitHub →
            </a>
          </p>
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
      </div>
    </div>
  </section>


  <!-- ══════════════ COMMUNITY ══════════════ -->
  <section id="community" class="section section--light">
    <div class="container container--narrow">
      <h2 class="section__title">Built by engineers for regulated environments</h2>

      <p class="section__lead">
        Start locally, validate early, and migrate to your own setup.
      </p>
      
      <div class="community-links">
        <a href="https://github.com/RainerGewalt/TrailMQ" class="btn btn--github" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          Deploy from GitHub
        </a>
        <a href="https://hub.docker.com/r/rainergewalt/trailmq-backend" class="btn btn--docker" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg>
          View on Docker Hub
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
