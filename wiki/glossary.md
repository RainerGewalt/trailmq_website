---
layout: wiki-base
title: "Glossary"
description: "Core terms used throughout this wiki to describe trust, context, auditability and architecture in regulated systems."
permalink: /wiki/glossary/
---

<div class="glossary">
  <div class="glossary-header">
    <h1>Glossary</h1>
    <p class="glossary-intro">
      This glossary defines core terms as they are used throughout this wiki.
      The goal is not to provide dictionary definitions, but to make <strong>conceptual boundaries explicit</strong>.
    </p>
    <p class="glossary-note">
      Most failures in regulated and industrial systems originate from blurred meanings, not missing technology.
    </p>
  </div>

  <div class="glossary-list">

    <!-- Audit Trail -->
    <article class="glossary-term" id="audit-trail">
      <div class="glossary-term__header">
        <span class="glossary-term__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <path d="M14 2v6h6"/>
            <path d="M16 13H8"/>
            <path d="M16 17H8"/>
            <path d="M10 9H8"/>
          </svg>
        </span>
        <h2 class="glossary-term__title">Audit Trail</h2>
      </div>
      <div class="glossary-term__body">
        <p class="glossary-term__definition">
          A <strong>tamper-evident, time-ordered record</strong> that explains how and why a system behaved the way it did.
        </p>
        <p>It links events, decisions, transformations, responsibility, and time into a coherent chain.</p>
        <div class="glossary-term__clarification">
          <div class="clarification clarification--negative">
            <span class="clarification__label">Is not:</span>
            <span class="clarification__text">A collection of logs, files, or database entries created after the fact.</span>
          </div>
          <div class="clarification clarification--warning">
            <span class="clarification__label">Common misunderstanding:</span>
            <span class="clarification__text">Assuming that detailed logging automatically provides auditability.</span>
          </div>
        </div>
      </div>
    </article>

    <!-- Logging -->
    <article class="glossary-term" id="logging">
      <div class="glossary-term__header">
        <span class="glossary-term__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
        </span>
        <h2 class="glossary-term__title">Logging</h2>
      </div>
      <div class="glossary-term__body">
        <p class="glossary-term__definition">
          Recording <strong>what happened</strong> in a system.
        </p>
        <p>Logs are factual, chronological, and useful for debugging and monitoring. They do not explain intent, authority, or decision logic.</p>
        <div class="glossary-term__clarification">
          <div class="clarification clarification--negative">
            <span class="clarification__label">Is not:</span>
            <span class="clarification__text">An explanation of system behavior.</span>
          </div>
          <div class="clarification clarification--warning">
            <span class="clarification__label">Common misunderstanding:</span>
            <span class="clarification__text">Using logs as a substitute for audit trails in regulated environments.</span>
          </div>
        </div>
      </div>
    </article>

    <!-- Decision -->
    <article class="glossary-term" id="decision">
      <div class="glossary-term__header">
        <span class="glossary-term__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 16v-4"/>
            <path d="M12 8h.01"/>
          </svg>
        </span>
        <h2 class="glossary-term__title">Decision</h2>
      </div>
      <div class="glossary-term__body">
        <p class="glossary-term__definition">
          A <strong>moment where a system commits to a course of action</strong> based on available context, rules, or models.
        </p>
        <p>Decisions have inputs, conditions, authority, and consequences. They must be explainable long after execution.</p>
        <div class="glossary-term__clarification">
          <div class="clarification clarification--negative">
            <span class="clarification__label">Is not:</span>
            <span class="clarification__text">A computed value or derived metric.</span>
          </div>
          <div class="clarification clarification--warning">
            <span class="clarification__label">Common misunderstanding:</span>
            <span class="clarification__text">Treating decisions as implicit side effects of data processing.</span>
          </div>
        </div>
      </div>
    </article>

    <!-- Context -->
    <article class="glossary-term" id="context">
      <div class="glossary-term__header">
        <span class="glossary-term__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <line x1="3" y1="9" x2="21" y2="9"/>
            <line x1="9" y1="21" x2="9" y2="9"/>
          </svg>
        </span>
        <h2 class="glossary-term__title">Context</h2>
      </div>
      <div class="glossary-term__body">
        <p class="glossary-term__definition">
          The <strong>set of conditions that give data meaning at a specific moment in time</strong>.
        </p>
        <p>This includes process state, timing, configuration, product or batch identity, and system state.</p>
        <div class="glossary-term__clarification">
          <div class="clarification clarification--negative">
            <span class="clarification__label">Is not:</span>
            <span class="clarification__text">Metadata reconstructed later from logs or external systems.</span>
          </div>
          <div class="clarification clarification--warning">
            <span class="clarification__label">Common misunderstanding:</span>
            <span class="clarification__text">Assuming context can always be rebuilt after a decision has been made.</span>
          </div>
        </div>
      </div>
    </article>

    <!-- Interval -->
    <article class="glossary-term" id="interval">
      <div class="glossary-term__header">
        <span class="glossary-term__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        </span>
        <h2 class="glossary-term__title">Interval</h2>
      </div>
      <div class="glossary-term__body">
        <p class="glossary-term__definition">
          A <strong>formal commitment that defines a meaningful slice of time</strong>.
        </p>
        <p>Intervals determine what belongs together, what can be compared, and which conclusions are valid.</p>
        <div class="glossary-term__clarification">
          <div class="clarification clarification--negative">
            <span class="clarification__label">Is not:</span>
            <span class="clarification__text">A convenient aggregation window chosen during analysis.</span>
          </div>
          <div class="clarification clarification--warning">
            <span class="clarification__label">Common misunderstanding:</span>
            <span class="clarification__text">Treating interval selection as a technical detail rather than an architectural decision.</span>
          </div>
        </div>
      </div>
    </article>

    <!-- Trust -->
    <article class="glossary-term" id="trust">
      <div class="glossary-term__header">
        <span class="glossary-term__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </span>
        <h2 class="glossary-term__title">Trust</h2>
      </div>
      <div class="glossary-term__body">
        <p class="glossary-term__definition">
          The ability to <strong>explain and defend system behavior retrospectively</strong>.
        </p>
        <p>It is tested after execution, during audits, incidents, or regulatory review.</p>
        <div class="glossary-term__clarification">
          <div class="clarification clarification--negative">
            <span class="clarification__label">Is not:</span>
            <span class="clarification__text">Visibility, dashboards, or real-time monitoring.</span>
          </div>
          <div class="clarification clarification--warning">
            <span class="clarification__label">Common misunderstanding:</span>
            <span class="clarification__text">Believing that transparency alone creates trust.</span>
          </div>
        </div>
      </div>
    </article>

    <!-- Proximity -->
    <article class="glossary-term" id="proximity">
      <div class="glossary-term__header">
        <span class="glossary-term__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/>
            <polyline points="2 17 12 22 22 17"/>
            <polyline points="2 12 12 17 22 12"/>
          </svg>
        </span>
        <h2 class="glossary-term__title">Proximity</h2>
      </div>
      <div class="glossary-term__body">
        <p class="glossary-term__definition">
          How <strong>close a system operates to physical process execution</strong>.
        </p>
        <p>As proximity increases, requirements for time resolution, causality, and determinism tighten.</p>
        <div class="glossary-term__clarification">
          <div class="clarification clarification--negative">
            <span class="clarification__label">Is not:</span>
            <span class="clarification__text">A software layer or deployment location.</span>
          </div>
          <div class="clarification clarification--warning">
            <span class="clarification__label">Common misunderstanding:</span>
            <span class="clarification__text">Applying the same compliance strategy across ERP, MES, and PLC layers.</span>
          </div>
        </div>
      </div>
    </article>

    <!-- Operational Twin -->
    <article class="glossary-term" id="operational-twin">
      <div class="glossary-term__header">
        <span class="glossary-term__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        </span>
        <h2 class="glossary-term__title">Operational Twin</h2>
      </div>
      <div class="glossary-term__body">
        <p class="glossary-term__definition">
          A <strong>translation layer</strong> that aligns physical process reality with meaningful, comparable, and auditable representations.
        </p>
        <p>Its purpose is understanding and reuse, not visualization.</p>
        <div class="glossary-term__clarification">
          <div class="clarification clarification--negative">
            <span class="clarification__label">Is not:</span>
            <span class="clarification__text">A 3D model or UI representation of a machine.</span>
          </div>
          <div class="clarification clarification--warning">
            <span class="clarification__label">Common misunderstanding:</span>
            <span class="clarification__text">Equating digital twins with dashboards or simulations.</span>
          </div>
        </div>
      </div>
    </article>

  </div>

  <div class="glossary-footer">
    <p>
      The terms in this glossary are intentionally precise. They are designed to reduce ambiguity, not to introduce new jargon.
      If a concept feels uncomfortable or restrictive, that usually indicates an implicit assumption being made explicit.
    </p>
  </div>

</div>
