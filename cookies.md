---
layout: page
title: "Cookie & Privacy Policy"
crumb: "Cookies & Privacy"
description: "This site uses no tracking cookies, no analytics, no advertising networks and no third-party embeds. What it does process — server logs at the host, and email you send — is described here precisely."
subtitle: "No tracking, no analytics, no advertising, no third-party embeds. This page also states the processing that does happen, rather than rounding it down to nothing."
updated: September 2026
last_modified_at: 2026-09-14
permalink: /cookies/
---

{%- comment -%}
  Scope discipline: "no tracking" and "no personal data at all" are different
  claims, and only the first is true. The site is served by GitHub Pages, which
  necessarily processes visitor IP addresses, and contact@trailmq.com receives
  email. Both are stated below rather than omitted.

  Open items (controller address, legal basis, retention, supervisory authority)
  depend on the unresolved jurisdiction question and are tracked in
  docs/legal-findings.md (L5, L6). Do not shorten this page back to
  "no personal data is collected".
{%- endcomment -%}

<div class="callout callout--accent">
  <span class="callout__ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v4h1"/></svg></span>
  <div><p><strong>This page is being updated.</strong> The controller's postal address, the retention periods and the competent supervisory authority are under review together with the <a href="{{ '/imprint/' | relative_url }}">imprint</a> and are marked below.</p></div>
</div>

<div class="callout">
  <span class="callout__ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg></span>
  <div><p><strong>No tracking. No profiling. No data sold.</strong> This website sets no tracking cookies and loads no analytics tools, advertising networks, tag managers, embedded players, font CDNs or script CDNs.</p></div>
</div>

## Controller

**Florian Przybylak**, as a natural person. Contact:
[contact@trailmq.com](mailto:contact@trailmq.com).

<!-- LEGAL-BLOCKER (docs/legal-findings.md L1, L6): controller postal address to be
     added here once confirmed; see /imprint/. -->

## Cookies

This website sets **no cookies for tracking, analytics or advertising**.

Should a strictly necessary technical cookie ever be required for basic functionality
or security, it would not identify you personally, would not be shared with third
parties and would not be used for profiling.

## What is processed when you visit

Being honest about this is the point of the page: a website cannot serve you a page
without processing your IP address somewhere.

**Hosting and server logs.** This site is served by **GitHub Pages**, operated by
GitHub, Inc. To deliver each page, GitHub's infrastructure necessarily processes
connection data including your **IP address**, the requested URL, the time of the
request and information your browser sends such as the user agent and referrer. This
processing is carried out by the host in order to deliver the page. The site operator
runs no analytics over it and does not use it to build any profile.

See the [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement){:target="_blank" rel="noopener"}
for GitHub's own processing.

<!-- LEGAL-BLOCKER (docs/legal-findings.md L6): legal basis and retention period for
     host server logs to be confirmed together with the jurisdiction question. -->

**Nothing else.** Beyond serving the page itself from the host, loading a page on this
site contacts no additional third-party server: no analytics, no tag managers, no
embedded players, no font or script CDNs.

## Fonts

The typefaces used here — DM Sans and JetBrains Mono, both under the SIL Open Font
License — are **served from this site's own domain**. No font CDN is contacted, so no
request carrying your IP address goes to Google or any other font provider while you
read these pages.

## If you email

If you write to [contact@trailmq.com](mailto:contact@trailmq.com), your message and
your email address are processed for the purpose of responding to your enquiry, and
are not used for anything else.

<!-- LEGAL-BLOCKER (docs/legal-findings.md L5, L6): email retention period to be
     confirmed by the owner. -->

## External links

If you follow links to external services such as GitHub or Docker Hub, their own
privacy and cookie policies apply once you leave this site.

- [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement){:target="_blank" rel="noopener"}
- [Docker Hub Privacy Policy](https://www.docker.com/legal/privacy){:target="_blank" rel="noopener"}

## The TrailMQ software

Separately from this website: the self-hosted TrailMQ evaluation stack **sends no
telemetry**. No topics, payloads, identities or operational metadata leave the machine
you run it on. There is no cloud dependency and no phone-home.

## Your rights

Some processing does occur — server logs at the host, and email correspondence — so
data protection rights apply to it. To exercise any such right, or to ask what is held,
write to [contact@trailmq.com](mailto:contact@trailmq.com).

You also have the right to lodge a complaint with the competent supervisory authority.

<!-- LEGAL-BLOCKER (docs/legal-findings.md L2, L6): the applicable legal regime, the
     enumeration of rights and the competent supervisory authority must all be settled
     by counsel and named here before publication. Do not draft them from this repo. -->

<div class="doc-cta">
  <h3>Questions about privacy?</h3>
  <p>If anything on this page is unclear, or you want to exercise a data protection right, get in touch.</p>
  <div class="actions">
    <a href="mailto:contact@trailmq.com" class="btn btn--primary">contact@trailmq.com</a>
    <a href="{{ '/imprint/' | relative_url }}" class="btn btn--outline" style="color:#fff;border-color:rgba(255,255,255,0.3)">Imprint</a>
  </div>
</div>
