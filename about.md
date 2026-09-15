---
layout: page
title: About TrailMQ
seo_title: "About TrailMQ · MQTT Access Control & Decision Records"
crumb: About
description: "What TrailMQ is, why it exists, and who runs the project."
subtitle: "A self-hosted MQTT broker that enforces access policy and records who was allowed or denied, on which topic, and why."
permalink: /about/
updated: September 2026
last_modified_at: 2026-09-15
---

{%- comment -%}
  Kept deliberately short. This page answers what / why / who and then points
  elsewhere. It must not grow back into a second product page: capabilities
  belong on the homepage, the policy model on /mqtt-access-control/, evidence on
  /mqtt-decision-records/, and regulated context on /regulated/.
{%- endcomment -%}

## What it is

TrailMQ is an MQTT broker. Standard clients — `mosquitto`, `paho-mqtt`,
`mqtt.js`, a browser WebSocket client — connect to it directly over TLS or
WebSocket, with no SDK, proxy or sidecar.

Two things happen at that boundary. Every publish and subscribe must pass both
the role's permission and a topic rule that brings the path into scope. And the
resulting decision is recorded as it is made, with the actor, role, client id,
topic, outcome and, for a refusal, a reason in prose.

## Why it exists

Because a denied publish is unreasonably hard to explain afterwards.

The protocol gives the client almost nothing to work with: MQTT 3.1.1 has no way
to say *not authorized* on a publish, so brokers drop the connection instead, and
at QoS 0 the message is discarded while the client reports success. By the time
anyone asks what happened, the answer has to already exist somewhere.

Most setups can enforce access perfectly well. What they tend to lack is a record
of the decision that a reviewer can read months later without correlating an ACL
file against a connection log. TrailMQ brings access enforcement and decision
review into one workflow.

It is a technical control with stated limits, not a compliance outcome — the
integrity chain covers system and action entries, and says so where MQTT decision
records fall outside it.

## Who runs it

TrailMQ is an independent project run by **Florian Przybylak**, working on the
architecture of regulated industrial systems, data pipelines and trustworthy
automation — [LinkedIn](https://www.linkedin.com/in/florian-p-6a27ab1b8/){:target="_blank" rel="noopener"}.

It is not a company. The public evaluation distribution is published through the
[RainerGewalt GitHub account](https://github.com/RainerGewalt/TrailMQ){:target="_blank" rel="noopener"},
which is the technical maintainer and repository role. Rights in the software are
governed by the binding
[license text](https://github.com/RainerGewalt/TrailMQ/blob/master/LICENSE){:target="_blank" rel="noopener"},
which this site does not restate. Operator and contact details are on the
[imprint]({{ '/imprint/' | relative_url }}).

## Where to go next

- [See a decision]({{ '/#demo' | relative_url }}) — a denied publish, traced end to end
- [Try it yourself]({{ '/#try' | relative_url }}) — four commands, runs locally
- [MQTT access control]({{ '/mqtt-access-control/' | relative_url }}) — the two-gate model
- [MQTT audit trail and decision records]({{ '/mqtt-decision-records/' | relative_url }})
- [Why was my MQTT publish denied?]({{ '/wiki/why-mqtt-publish-denied/' | relative_url }})
- [MQTT in GxP and GMP-regulated environments]({{ '/regulated/' | relative_url }})
- [Licensing]({{ '/license/' | relative_url }}) · [GitHub](https://github.com/RainerGewalt/TrailMQ){:target="_blank" rel="noopener"}

<div class="doc-cta">
  <h3>Evaluating TrailMQ?</h3>
  <p>Questions about evaluation, licensing or a regulated deployment.</p>
  <div class="actions">
    <a href="mailto:contact@trailmq.com" class="btn btn--primary">contact@trailmq.com</a>
  </div>
</div>
