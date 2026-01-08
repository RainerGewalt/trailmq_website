---
layout: wiki-base
title: "Overview"
description: "A conceptual framework for thinking about regulated systems, industrial data, trust and AI readiness."
permalink: /wiki/
---

<div class="wiki-hero">
  <h1 class="wiki-hero__title">Overview</h1>
  <p class="wiki-hero__lead">This wiki is a thinking space.</p>
  <p class="wiki-hero__desc">
    It explores how regulated, industrial, and automated systems should be designed when <strong>trust</strong>, <strong>traceability</strong>, and <strong>explainability</strong> matter as much as performance or scale.
  </p>
</div>

<!-- What this wiki is about -->
<section class="wiki-intro">
  <h2>What this wiki is about</h2>
  <p>This wiki looks at questions such as:</p>
  <ul class="wiki-questions">
    <li>Why do systems with "all the data" still fail audits?</li>
    <li>Why does AI remain stuck in pilots despite technical maturity?</li>
    <li>Why do dashboards increase visibility but not trust?</li>
    <li>Why does compliance break long before regulation is involved?</li>
  </ul>
  <p>The answers are rarely technical. They are <strong>architectural</strong>.</p>
</section>

<!-- Reading Paths -->
<section class="reading-paths">
  <h2>Reading Paths</h2>
  <p class="reading-paths__intro">If you are new here, these guided paths may help.</p>
  
  <div class="reading-paths__grid">
    
    <!-- Path 1: Understanding Regulated Systems -->
    <div class="reading-path">
      <div class="reading-path__header">
        <div class="reading-path__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/>
          </svg>
        </div>
        <div class="reading-path__meta">
          <span class="reading-path__number">Path 1</span>
          <h3 class="reading-path__title">Understanding Regulated Systems</h3>
        </div>
      </div>
      <p class="reading-path__desc">
        For readers who sense that compliance and GMP are often discussed incorrectly, but cannot quite articulate why.
      </p>
      <ol class="reading-path__steps">
        <li>
          <a href="{{ '/wiki/gmp-shaped-by-time/' | relative_url }}">
            <span class="step-title">GMP is shaped by time</span>
            <span class="step-arrow">→</span>
          </a>
        </li>
        <li>
          <a href="{{ '/wiki/audit-is-not-logging/' | relative_url }}">
            <span class="step-title">Audit is not logging</span>
            <span class="step-arrow">→</span>
          </a>
        </li>
        <li>
          <a href="{{ '/wiki/gmp-proximity/' | relative_url }}">
            <span class="step-title">GMP is not binary – it scales with proximity</span>
            <span class="step-arrow">→</span>
          </a>
        </li>
      </ol>
      <div class="reading-path__outcome">
        <strong>Outcome:</strong> Reframe regulation as a question of time, context, and architectural responsibility — not paperwork.
      </div>
    </div>
    
    <!-- Path 2: Designing Trustworthy Architectures -->
    <div class="reading-path">
      <div class="reading-path__header">
        <div class="reading-path__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          </svg>
        </div>
        <div class="reading-path__meta">
          <span class="reading-path__number">Path 2</span>
          <h3 class="reading-path__title">Designing Trustworthy Architectures</h3>
        </div>
      </div>
      <p class="reading-path__desc">
        For architects, lead engineers, and system designers working across IT, OT, and data layers.
      </p>
      <ol class="reading-path__steps">
        <li>
          <a href="{{ '/wiki/decision-centric-architecture/' | relative_url }}">
            <span class="step-title">Decision-centric architecture</span>
            <span class="step-arrow">→</span>
          </a>
        </li>
        <li>
          <a href="{{ '/wiki/context-at-decision-time/' | relative_url }}">
            <span class="step-title">Why context must exist at decision time</span>
            <span class="step-arrow">→</span>
          </a>
        </li>
        <li>
          <a href="{{ '/wiki/intervals-commitments/' | relative_url }}">
            <span class="step-title">Intervals are not abstractions – they are commitments</span>
            <span class="step-arrow">→</span>
          </a>
        </li>
        <li>
          <a href="{{ '/wiki/cant-automate-trust/' | relative_url }}">
            <span class="step-title">We can't automate trust</span>
            <span class="step-arrow">→</span>
          </a>
        </li>
      </ol>
      <div class="reading-path__outcome">
        <strong>Outcome:</strong> Understand where systems silently lose explainability and how architectural choices determine long-term trust.
      </div>
    </div>
    
    <!-- Path 3: AI in Regulated Environments -->
    <div class="reading-path">
      <div class="reading-path__header">
        <div class="reading-path__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
        </div>
        <div class="reading-path__meta">
          <span class="reading-path__number">Path 3</span>
          <h3 class="reading-path__title">AI in Regulated Environments</h3>
        </div>
      </div>
      <p class="reading-path__desc">
        For readers involved in AI, data platforms, innovation, or digital transformation.
      </p>
      <ol class="reading-path__steps">
        <li>
          <a href="{{ '/wiki/manufacturing-trust/' | relative_url }}">
            <span class="step-title">Manufacturing is not behind in AI – it is behind in trust</span>
            <span class="step-arrow">→</span>
          </a>
        </li>
        <li>
          <a href="{{ '/wiki/process-understanding/' | relative_url }}">
            <span class="step-title">AI is not the solution when the process is not understood</span>
            <span class="step-arrow">→</span>
          </a>
        </li>
        <li>
          <a href="{{ '/wiki/data-pipelines-ai/' | relative_url }}">
            <span class="step-title">Why data pipelines decide whether regulated AI will succeed</span>
            <span class="step-arrow">→</span>
          </a>
        </li>
        <li>
          <a href="{{ '/wiki/ai-does-not-break-gmp/' | relative_url }}">
            <span class="step-title">Why AI does not break GMP</span>
            <span class="step-arrow">→</span>
          </a>
        </li>
      </ol>
      <div class="reading-path__outcome">
        <strong>Outcome:</strong> See why AI success depends less on models and more on context, pipelines, and accountability.
      </div>
    </div>
    
  </div>
</section>

<!-- Browse by Category -->
<section class="wiki-categories">
  <h2>Browse by Category</h2>
  
  <div class="category-cards">
    
    <a href="{{ '/wiki/category/foundations/' | relative_url }}" class="category-card">
      <div class="category-card__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/>
        </svg>
      </div>
      <div class="category-card__content">
        <h3 class="category-card__title">Foundations</h3>
        <p class="category-card__desc">Core principles behind trustworthy systems</p>
      </div>
      <span class="category-card__arrow">→</span>
    </a>
    
    <a href="{{ '/wiki/category/distinctions/' | relative_url }}" class="category-card">
      <div class="category-card__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        </svg>
      </div>
      <div class="category-card__content">
        <h3 class="category-card__title">Distinctions</h3>
        <p class="category-card__desc">Concepts that are often confused</p>
      </div>
      <span class="category-card__arrow">→</span>
    </a>
    
    <a href="{{ '/wiki/category/models/' | relative_url }}" class="category-card">
      <div class="category-card__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      </div>
      <div class="category-card__content">
        <h3 class="category-card__title">Models</h3>
        <p class="category-card__desc">Architectural ways of structuring complexity</p>
      </div>
      <span class="category-card__arrow">→</span>
    </a>
    
    <a href="{{ '/wiki/category/implications/' | relative_url }}" class="category-card">
      <div class="category-card__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      </div>
      <div class="category-card__content">
        <h3 class="category-card__title">Implications</h3>
        <p class="category-card__desc">What this means for AI, IIoT, and automation</p>
      </div>
      <span class="category-card__arrow">→</span>
    </a>
    
  </div>
</section>

<!-- Note on Scope -->
<section class="wiki-note">
  <div class="wiki-note__icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
    </svg>
  </div>
  <div class="wiki-note__content">
    <h3>A note on scope</h3>
    <p>
      The ideas in this wiki intentionally stop <strong>before implementation</strong>.
      Not because implementation is unimportant, but because architecture must be understood before solutions make sense.
    </p>
  </div>
</section>

---

**Author**

This wiki is maintained by **Florian Przybylak**, working on the architecture of regulated industrial systems, data pipelines, and trustworthy automation.

[LinkedIn](https://www.linkedin.com/in/florian-p-6a27ab1b8/)
