---
layout: wiki-base
title: TrailMQ Wiki
description: Concepts, architecture notes and explainers for TrailMQ.
permalink: /wiki/
---

<nav class="breadcrumbs" aria-label="Breadcrumb">
  <a href="{{ '/' | relative_url }}">Home</a>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="m9 18 6-6-6-6"/>
  </svg>
  <span aria-current="page">Wiki</span>
</nav>

<header class="article-header">
  <h1 class="article-header__title">TrailMQ Wiki</h1>
  <p class="article-header__lead">
    Concepts, architecture notes and explainers around audit-first MQTT, regulated data flows,
    evidence trails and industrial messaging.
  </p>
</header>

{% assign wiki_articles = site.wiki_articles | sort: "order" %}

{% if wiki_articles.size == 0 %}
  {% assign wiki_articles = site.pages | where: "layout", "wiki-article" | sort: "order" %}
{% endif %}

{% if site.data.wiki_nav %}
<section class="related-articles">
  <h2 style="font-size: clamp(1.3rem, 2.5vw, 1.6rem); margin-bottom: 1rem; letter-spacing: -0.02em;">
    Browse by topic
  </h2>

  <div class="concepts-grid">
    {% for item in site.data.wiki_nav %}
      {% unless item.url == '/wiki/' or item.url == '/wiki/glossary/' %}
      <a
        class="concept-card concept-card--clickable"
        href="{{ item.url | relative_url }}"
        aria-label="Open {{ item.title }}"
      >
        <div class="concept-card__cover--placeholder">
          {% if item.icon %}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            {{ item.icon }}
          </svg>
          {% else %}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </svg>
          {% endif %}
        </div>

        <div class="concept-card__body">
          <span class="concept-card__category">Topic</span>

          <h3 class="concept-card__title">
            {{ item.title }}
          </h3>

          {% if item.children %}
          <p class="concept-card__excerpt">
            {{ item.children.size }} article{% if item.children.size != 1 %}s{% endif %} in this section.
          </p>
          {% else %}
          <p class="concept-card__excerpt">
            Read the concepts in this section.
          </p>
          {% endif %}
        </div>
      </a>
      {% endunless %}
    {% endfor %}
  </div>
</section>
{% endif %}

<section class="related-articles">
  <h2 style="font-size: clamp(1.3rem, 2.5vw, 1.6rem); margin-top: 3rem; margin-bottom: 1rem; letter-spacing: -0.02em;">
    All articles
  </h2>

  {% if wiki_articles.size > 0 %}
  <div class="articles-grid">
    {% for article in wiki_articles %}
      {% unless article.url == '/wiki/' %}
      <article class="article-card">
        {% if article.category %}
        <div class="article-card-meta" style="margin-bottom: 0.4rem;">
          {{ article.category }}
        </div>
        {% endif %}

        <h3>
          <a href="{{ article.url | relative_url }}">{{ article.title }}</a>
        </h3>

        {% if article.description %}
        <p>{{ article.description | truncate: 150 }}</p>
        {% elsif article.excerpt %}
        <p>{{ article.excerpt | strip_html | truncate: 150 }}</p>
        {% endif %}

        <div class="article-card-meta">
          {% if article.reading_time %}
          {{ article.reading_time }} min read
          {% endif %}
        </div>
      </article>
      {% endunless %}
    {% endfor %}
  </div>
  {% else %}
  <div class="wiki-empty" style="margin-top: 1.5rem;">
    <p>No wiki articles found yet.</p>
  </div>
  {% endif %}
</section>
