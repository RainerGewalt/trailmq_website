---
layout: page
title: Imprint / Legal Notice
crumb: Imprint
description: "Operator, contact details and roles for the TrailMQ website."
subtitle: "Who operates this site, who is responsible for its content, and who maintains the TrailMQ project."
permalink: /imprint/
updated: September 2026
last_modified_at: 2026-09-15
---

{%- comment -%}
  Operator details confirmed by the owner on 2026-09-15. Do not alter them, and
  do not derive any role on this page from git metadata or a GitHub account name.

  Two things are deliberately NOT on this page and must stay off it:

  - A software copyright holder. The published LICENSE and this site's owner
    determination disagree; the page links to the binding text rather than
    taking a side. Tracked as docs/legal-findings.md L8, to be settled after
    the 3.1.1 release together with the product LICENSE.
  - Any citation of a specific disclosure or data-protection regime. That is an
    open question for counsel, tracked as L2/L6. Do not draft one from this repo.
{%- endcomment -%}

## Site operator and responsible for content

{% comment %}
  Markdown collapses single newlines, which ran the address onto one line. An
  <address> block keeps the postal lines separate and is the right element.
  Keep the blank lines around it: a whitespace-trimmed comment tag eats the
  blank line and kramdown then folds the address into the preceding heading.
{% endcomment %}

<address class="imprint-address">
  <strong>Florian Przybylak</strong><br />
  Rosenweg 6<br />
  2554 Meinisberg<br />
  Switzerland
</address>

Email: [contact@trailmq.com](mailto:contact@trailmq.com)

TrailMQ is operated by a natural person. There is no TrailMQ GmbH or other
TrailMQ company.

## Roles

| Role | Person |
|------|--------|
| Site operator | Florian Przybylak |
| Responsible for content | Florian Przybylak |
| TrailMQ product owner and project lead | Florian Przybylak |
| Technical maintainer, source repository | Rainer Gewalt |

The technical maintainer role covers repository and release maintenance. It does
not constitute operator responsibility for this website, nor responsibility for
its content.

## Rights

Copyright in the content of this website is held by **Florian Przybylak**.

Rights in the TrailMQ software are governed solely by the binding
[license text](https://github.com/RainerGewalt/TrailMQ/blob/master/LICENSE){:target="_blank" rel="noopener"}
in the distribution repository, which this page does not restate or interpret.
See also the [licensing summary]({{ '/license/' | relative_url }}).

## Hosting

This site is served by **GitHub Pages** (GitHub, Inc.). What that means for
visitor data is described on the [privacy page]({{ '/cookies/' | relative_url }}).

<div class="doc-cta">
  <h3>Get in touch</h3>
  <p>For any legal, licensing or project enquiry regarding TrailMQ.</p>
  <div class="actions">
    <a href="mailto:contact@trailmq.com" class="btn btn--primary">contact@trailmq.com</a>
  </div>
</div>
