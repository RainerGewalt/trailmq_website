# TrailMQ website — prioritised findings

Branch: `feat/decision-investigation-website`
Date: 2026-09-14
Scope: inventory of `main` as of `f952f13` (v2.0.5), before the rework on this branch.

**Ground truth used for every product claim below**

All product statements were checked against the public distribution repo, not against
the website's own prior copy:

| Source | Used for |
| --- | --- |
| `RainerGewalt/TrailMQ` `README.md` | shipped feature list, `verify` output, endpoint table, integrity scope |
| `docs/connect-a-client.md` | client-side symptoms of a denial, config map |
| `docs/scenarios/01-sensor-to-dashboard.md` | the allowed flow, real identities and topics |
| `docs/scenarios/02-denied-actions.md` | the three denial classes and the `ACLMon` decision line |
| `docs/media/preview-*.jpg` | the actual UI: column names, reason wording, verdict panel |

Product version referenced by the site: **3.1.1**, matching the published release
and `release.yaml` in the distribution repository. (Was 3.1.0 until 2026-09-19,
while the repository had already shipped 3.1.1 on 2026-09-16.)

---

## P0 — Claims on the site that the product does not support

These are the findings that matter most, because the site's whole premise is
"we tell you the truth about a decision". Each one is a detail an evaluating
engineer will reproduce within ten minutes and find false.

### F1 — The denial reason string on the homepage is invented
`index.html:44` and `index.html:102` print:

```
reason  publish refused: acl_role_not_in_topic_scope
```

That identifier appears nowhere in the product, its README, its docs or its UI.
The Activity screenshot shows the product's actual reason text:

> **Publish refused** — No rule brings this topic into scope for any role this identity holds.

A machine-looking token the product never emits is worse than plain prose here: it
reads as a real API contract and is the first thing someone would grep for.

**Fix:** use the product's own wording verbatim.

### F2 — The homepage shows the wrong client-side error
`index.html:98` shows:

```
$ mosquitto_pub -t restricted/ops/config -m '{"setpoint":42}' -q 1 ...
Publish error: Not authorized
```

`docs/connect-a-client.md` and `docs/scenarios/02-denied-actions.md` both document
the real QoS 1 behaviour:

```
Error: A network protocol error occurred when communicating with the broker.
```

The broker refuses to acknowledge and **drops the connection**. "Not authorized" is
what other brokers print. This is the single most damaging inaccuracy on the page,
because the entire section is titled "What a denial actually looks like" — and it is
also the more interesting truth: the disconnect, and the fact that the same publish at
QoS 0 silently succeeds locally, is exactly why a recorded decision matters.

**Fix:** show the real output, and use the QoS 0/QoS 1 asymmetry as the argument.

### F3 — The client id in the hero is invented
`index.html:44` uses `plantops-lf12-probe9182`. The real product data shows
`sensor-gateway-01`. The brief explicitly asks for real TrailMQ data over
marketing props.

### F4 — The hero evidence row contradicts the site's own disclaimer
`index.html:47`:

```
evidence   Recorded  [no message forwarded]
```

The product's Evidence column contains only `Recorded`. "no message forwarded" is a
delivery claim, and the same page states two screens later that TrailMQ
"does not show message payloads or name which subscribers received them".
The hero asserts the thing the limits section retracts.

**Fix:** mirror the product's three separate columns — Outcome, Evidence, Integrity —
which the product itself explains as *"three different questions"*.

### F5 — The site implies all MQTT traffic is recorded; recording is opt-in per topic rule
The Access screen shows a per-rule **Record message evidence** checkbox, with the
product's own explanation:

> Security and decision events — sign-in attempts, refusals, administrative changes,
> account deactivation — are **always** recorded. Record message evidence decides only
> whether the messages themselves are recorded.

The site nowhere distinguishes these. "Allowed operations and refusals become
structured records" (`index.html:80`) is true for refusals and decisions, and
conditional for message evidence.

**Fix:** state the split. It is also a *better* story: denials are never silently
dropped, and payload recording stays a deliberate per-topic decision.

### F6 — `verify` output on the site drops the reproducible detail
Site (`index.html:475`): `[PASS] Authorized publish reached subscriber`.
Product: `[PASS] Authorized publish reached the subscriber   public/demo/temperature`.
The topics are what make the check reproducible; they were edited out.

---

## P0 — Positioning and flow

### F7 — The hero sells a product category, not the user's problem
Current H1: *"Policy-controlled MQTT. Decisions you can review."*
That is a category claim. It competes directly with every broker vendor and answers
no question the visitor arrived with.

The brief's lead story — *"Know why MQTT access was allowed or denied."* — is a
question an engineer types into a search box after a publish failed.

### F8 — There is no demo (highest-value gap)
The site has zero interactive or visual product sequence. An OT engineer must read
~4,000 words and then clone a repo before seeing a single decision. The brief makes
the demo P0; this was the largest single gap in the inventory.

### F9 — The page order inverts problem and solution
Current: Hero → *product path* (`#promise`) → **problem** (`#evidence`) → capabilities →
audience → comparison → regulated → GMP reliability → quickstart → FAQ → closing.

The section that explains *why any of this matters* sits fourth, after a four-card
product walkthrough, a CLI block, a five-column table and a feature inventory.

### F10 — `#promise` is four unrelated sections wearing one section element
`index.html:62–170` contains four sibling `<h2>`s (From MQTT request… / What a denial
actually looks like / Compared with what you have now / What ships in… / What TrailMQ
does not claim — five, in fact) inside a single `<section id="promise">`. Both the
document outline and the in-page anchor target are wrong: "How it works" in the nav
lands on a block that also contains the comparison table and the limits.

### F11 — GMP/GAMP/Part 11 dominate and dilute
Two full sections (`#regulated`, `#gmp-mqtt-reliability`), four compliance badges, and
6 of 8 FAQ entries are GxP-framed. The FAQ's own section H2 is
*"Can MQTT be used in GxP environments?"*. For the target reader in the brief — a
generic MQTT/OT engineer whose publish was denied — this reads as a pharma product.

Per the brief this content is not deleted; it moves to a dedicated page and stays
linked.

---

## P1 — SEO

### F12 — The title targets commodity broker intent
`TrailMQ — Policy-Controlled MQTT Broker & Audit Trail` puts *broker* and *audit trail*
in the two strongest positions. "MQTT broker" is a category term dominated by
Mosquitto/HiveMQ/EMQX, and the site cannot and should not win it. Nothing in the title
matches the investigative intent ("denied", "not authorized", "access control").

Checked against the brief's suggestion `TrailMQ – MQTT Access Control & Decision Review`:
it is better on intent but "Decision Review" is not a term anyone searches. Recommended
instead: **`MQTT Access Control — Know Why a Publish Was Allowed or Denied · TrailMQ`**,
which matches both the head term and the long-tail question, and matches the new H1.

### F13 — No `FAQPage` structured data
Eight `<details>` Q&A pairs exist with no schema. Free eligibility, currently unused.

### F14 — No `SoftwareApplication` / `BreadcrumbList` schema
`Organization`, `WebSite` and `WebPage` are emitted. For a self-hosted tool with a
version, a license and a download path, `SoftwareApplication` is the accurate type.
Wiki articles render visible breadcrumbs with no corresponding `BreadcrumbList`.

### F15 — Zero coverage of the target intent clusters
All 23 wiki articles are GMP/AI thought leadership. Not one page targets:

`MQTT access control` · `MQTT authorization` · `MQTT publish denied` ·
`MQTT not authorized` · `MQTT access logs` · `industrial MQTT security`

The one article closest to intent (`mqtt-data-transaction-audit-trail`) is framed as a
GxP audit-trail piece.

### F16 — FAQ questions are not headings
The visible questions live in `<summary>`, so the page's heading outline contains a
single GxP question and no others.

---

## P1 — Conversion

### F17 — The primary CTA sends the visitor off-site before they have seen anything
Hero CTA 1 is *"Start local evaluation"* → github.com. CTA 2 is
*"See a denied publish"* → `#promise`, which is a prose section, not a denial.
The brief's priority is **See a decision → Try it yourself → Docs → Contact**.

### F18 — Closing CTA is licensing/contact
*"Contact for licensing"* and *"Commercial license required"* close the page. Per the
brief, contact must not be the primary action during validation.

---

## P1 — Accessibility

### F19 — The scroll hint is not associated with the scrollable region
`index.html:120` renders "Scroll the table sideways to see all four columns →" as a
loose `<p>` after a `role="region"` element whose `aria-label` does not mention it.
Also: the table has **five** columns, not four.

### F20 — Smooth scrolling ignores `prefers-reduced-motion`
`assets/js/app.js` calls `scrollIntoView({behavior:'smooth'})` unconditionally, and
`_includes/footer.html` has an inline `onclick` with `behavior:'smooth'`. The file
already computes `reduceMotion` for reveals but does not apply it here.

### F21 — Long MQTT topics
`.ev-row .v` sets `word-break: break-word`, but the new decision surfaces need an
explicit wrapping strategy so `restricted/ops/setpoint` and longer real topics do not
force horizontal page scroll at 320px.

### F22 — The demo must not require hover or pointer input
Noted as a constraint for the new work rather than a finding on the old site
(which has no demo).

---

## P2 — Legal / identity

Collected separately in [`legal-findings.md`](legal-findings.md) — **owner approval
required before any of it ships.** Summary of the sharpest items:

- Imprint carries an address that is no longer confirmed.
- `Organization` schema and `site.author: "TrailMQ Team"` assert a company and a team
  that do not exist.
- The cookie/privacy page overstates to "no personal data is collected".
- The footer conflates copyright holder with maintainer.

---

## What was verified as already correct

Worth recording so it is not "fixed" later by mistake:

- Canonical URL logic in `_includes/head.html` handles `index.html`, `.html` and
  trailing slashes correctly.
- The imprint already cites **§ 5 DDG**, not the repealed § 5 TMG — the brief's concern
  was already addressed on `main`.
- The integrity-scope language ("system/action chain", "MQTT decisions outside it",
  "not externally anchored, not digitally signed") matches the product exactly, and is
  more honest than most products in this space. It was preserved verbatim.
- Fonts are self-hosted; no third-party CDN, tag manager or analytics is loaded.
- `robots.txt`, `jekyll-sitemap`, OpenGraph and Twitter cards are present and valid.
