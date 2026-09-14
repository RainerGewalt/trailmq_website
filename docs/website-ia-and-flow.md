# TrailMQ website — target IA, homepage flow, demo concept, SEO mapping

Branch: `feat/decision-investigation-website`
Companion documents: [`website-findings.md`](website-findings.md), [`legal-findings.md`](legal-findings.md)

Internal guiding idea: **Accessible, trustworthy Decision Investigation.**
Lead user story: **Know why MQTT access was allowed or denied.**
Support line: *Policy-controlled MQTT for industrial systems, with attributable and
reviewable access decisions.*

---

## 1. Capability ledger — the rule every claim on the site is checked against

This is the contract for the rework. Nothing in column 3 may be written in the present
tense anywhere on the site.

### Shipped in 3.1.0 — verified in the product, safe to demo

| Capability | Where it is verifiable |
| --- | --- |
| Authenticated MQTT over TLS (8883) and WebSocket | README endpoint table, `verify` check 2 |
| Two-gate authorization: role permission **and** namespace/topic rule | README "How access is decided" |
| Deny by default for unconfigured namespaces | README namespace table |
| Denial carries actor, role, client, action, topic, time, outcome, reason | Activity screenshot, `verify` check 5 |
| Product reason prose, e.g. *"No rule brings this topic into scope for any role this identity holds."* | Activity screenshot |
| Outcome / Evidence / Integrity as three separate columns | Activity screenshot |
| **Find**: Overview banner "Review refused operations … in the last 24 hours" → Open Activity | Overview screenshot |
| **Find**: Activity filters — Client or user, Topic, Event, Outcome, Provenance, Range | Activity screenshot |
| **Check now**: Access → "Check a topic" resolves the effective rule | Access screenshot |
| **Check now** via API: `GET /api/v1/topics/by-name/<path>/effective` | `docs/connect-a-client.md` |
| **Act**: create/edit topic rules and users in Access, or via REST | Access screenshot, README |
| **Retest**: re-run the publish, or `./trailmq verify` | README |
| "Seen in traffic, not configured" topic observations | Access screenshot |
| Per-topic-rule `Record message evidence` toggle; decisions/refusals always recorded | Access screenshot |
| Hash-linked integrity chain over system/action entries, with verdict, entries checked, entries excluded, "External anchoring: None", "Digital signature: None" | Activity screenshot, README |
| `./trailmq quickstart` / `verify` / `credentials` / `open` / `doctor` | README |
| Deliberate tamper scenario | `docs/scenarios/04-tamper-evidence.md` |

### Documented today but not a website claim

- Queue and dead-letter inspection (README + scenario 06) — real, but not part of the
  decision-investigation story; kept on the technical page only.
- Config merge semantics: deleting a user from `config.yaml` does **not** revoke it.
  This is a documented limitation and is surfaced, not hidden.
- Plugin / context / baseline concepts in `docs/plugins.md` — explicitly *not* shipped.

### Planned for 3.2 — may be structurally prepared, never claimed

The site may lay out the **Find → Understand → Check now → Act safely → Retest** flow,
because Find, Understand, Check now and Act are shipped. The following are 3.2 and are
marked as such wherever the flow appears:

- automatic "smallest safe change" suggestion
- tamper-evident integrity covering **all** MQTT decision records
- automated retest / regression of a policy change
- any organisational approval workflow

**Never claimed at all**, per the brief: *GMP compliant*, *immutable*, *tamper-proof*,
*guaranteed security*, *production safe*, *prove every decision*,
*nothing is ever sent anywhere*.

A note on the last one: the site previously said "TrailMQ sends no telemetry: no topics,
payloads, identities or operational metadata leave your machine." That is a product
claim about the self-hosted stack and is supported ("Self-hosted — no cloud dependency,
no telemetry"). It was kept, but scoped to the product and phrased as *no telemetry*
rather than as an absolute about the website.

---

## 2. Target information architecture

```
/                               Decision Investigation — the lead story + demo
│
├── /mqtt-access-control/       Head-term page: how MQTT access control works,
│                               and how TrailMQ enforces it (two gates, deny by default)
│
├── /mqtt-decision-records/     What a reviewable MQTT access decision contains;
│                               decision records vs. broker logs vs. integrity scope
│
├── /industrial-mqtt-security/  OT/industrial framing: segmentation, identity,
│                               least privilege on topics, review after the fact
│
├── /regulated/                 GxP / GMP / GAMP 5 / Part 11 / ALCOA+  (moved off
│                               the homepage — see §5)
│
├── /wiki/
│   └── /wiki/why-mqtt-publish-denied/    ← the flagship technical article
│       …plus the 23 existing articles, unchanged
│
├── /about/  /license/  /imprint/  /cookies/  /architecture-thinking/
```

Rules:
- Three cluster pages, not a generic SEO farm. Each answers a distinct search intent and
  links into the demo and the quickstart.
- Every cluster page links to `why-mqtt-publish-denied`; the article links back to the
  cluster page that matches its section (authorization → access control, evidence →
  decision records).
- The homepage links to all three plus the article. No orphan pages.

---

## 3. Homepage flow

Target: **Problem → real decision → Why? → TrailMQ value → Demo → Try it yourself →
Trust → technical depth.**

| # | Section | Anchor | Purpose | Reader's thought on leaving |
| --- | --- | --- | --- | --- |
| 1 | Hero + live decision record | — | Problem stated as the visitor's own question, with one real DENIED record beside it | "That is my situation." |
| 2 | Why? | `#why` | The three questions the product separates: Outcome / Evidence / Integrity | "Those really are different questions." |
| 3 | What TrailMQ gives you | `#value` | Four outcomes, not features | "This answers the question I had." |
| 4 | **Demo** | `#demo` | Six-step replay of a real session | "I have now *seen* it." |
| 5 | **Try it yourself** | `#try` | Four commands, real output, ~5 min | "I can do this before lunch." |
| 6 | Investigation flow | `#flow` | Find → Understand → Check now → Act safely → Retest, with 3.2 marked | "There is a method here." |
| 7 | Trust & limits | `#trust` | Integrity scope, what it does not cover, licensing | "They told me the boundaries." |
| 8 | Technical depth | `#technical` | Policy model, endpoints, clients, API, deeper links | "I know where the detail is." |
| 9 | FAQ | `#faq` | Access-control-first questions; GxP answered but not leading | — |

Removed from the homepage (not deleted — relocated, per the brief):
`#regulated`, `#gmp-mqtt-reliability`, the compliance badge row and five of the eight
GxP FAQ entries → `/regulated/`, linked from §7 and the footer.

---

## 4. Demo concept — "Replay a real investigation"

### Constraints
- Must show only verified 3.1.x behaviour.
- Must not simulate a 3.2 capability.
- Must work without hover, without a pointer, and with reduced motion.
- Must be indexable — so, DOM text, not a video or a canvas.
- No TrailMQ instance is reachable from this build, so the content is a **replay of the
  documented session**, not a live broker. It is labelled as a replay.

### Form
An in-page, six-step player. All six steps are present in the DOM at all times
(indexable, and readable with JS disabled); the player only changes which step is
*highlighted*. Stepper buttons + `Play` + `Restart`, `aria-live` region announcing each
step, full keyboard operation, and a `prefers-reduced-motion` path that disables
auto-advance and cross-fades.

### The six steps — every string traced to a source

| Step | Shown | Source |
| --- | --- | --- |
| 1. The request | `mosquitto_pub … -u testuser … -t 'restricted/ops/config' -q 1 -m '{"setpoint":42}'` | scenario 02 |
| 2. The broker refuses | `Error: A network protocol error occurred when communicating with the broker.` + the QoS 0 caveat | scenario 02, connect-a-client |
| 3. Attribution | `[ACLMon] DENY user="testuser" roles=[publisher] action=publish topic="restricted/ops/config"` | scenario 02 |
| 4. The reason | Activity row: actor `testuser`, client `sensor-gateway-01`, topic `restricted/ops/config`, event **Publish refused** — *"No rule brings this topic into scope for any role this identity holds."* | Activity screenshot |
| 5. Outcome / Evidence / Integrity | `Denied` · `Recorded` · `Outside validated scope`, with the product's own sentence that these are three different questions | Activity screenshot |
| 6. The verdict panel | `Chain intact` · `1,895` entries checked (`audit_logs`) · `843` not in this chain (mqtt message evidence, queue records) · External anchoring `None` · Digital signature `None` | Activity screenshot |

Step 6 deliberately ends the demo on the product's *limits*. That is the trust argument
and it is the opposite of a marketing close.

Below the player: the two real screenshots (`preview-activity.jpg`, `preview-access.jpg`)
as evidence that the replay matches the shipped UI, then the `#try` CTA.

### Explicitly out of scope for the demo
No simulated "suggested fix", no auto-remediation, no live broker connection, no
"verified" badge on MQTT decision records.

---

## 5. SEO / intent mapping

| Cluster | Intent | Target page | Primary on-page signal |
| --- | --- | --- | --- |
| MQTT access control | "how do I control who can publish to a topic" | `/mqtt-access-control/` | H1 *MQTT access control: who may publish or subscribe, and why* |
| MQTT authorization | "mqtt authorization vs authentication" | `/mqtt-access-control/` §Authentication vs authorization | H2 + FAQ entry |
| MQTT publish denied | **"why was my mqtt publish denied"** — the highest-intent query | `/wiki/why-mqtt-publish-denied/` | H1 is the question verbatim |
| MQTT not authorized | "mqtt not authorized error" | same article, §What the client actually sees | H2 naming both real symptoms |
| MQTT audit trail | "mqtt audit trail" | `/mqtt-decision-records/` | H1 + existing wiki article interlink |
| MQTT access logs | "mqtt access logs" | `/mqtt-decision-records/` §Logs vs decision records | links to existing `logs-vs-audit` |
| Industrial MQTT security | "industrial / OT mqtt security" | `/industrial-mqtt-security/` | H1 + OT framing |
| MQTT decision review | brand/category, low volume | `/` | H1 + `SoftwareApplication` schema |

Homepage is aimed at **MQTT access control + reviewable access decisions + industrial
MQTT** and does not try to rank for "MQTT broker".

### Title decisions

| Page | Title |
| --- | --- |
| `/` | `MQTT Access Control — Know Why a Publish Was Allowed or Denied · TrailMQ` |
| `/mqtt-access-control/` | `MQTT Access Control: Who May Publish or Subscribe · TrailMQ` |
| `/mqtt-decision-records/` | `MQTT Audit Trail & Decision Records · TrailMQ` |
| `/industrial-mqtt-security/` | `Industrial MQTT Security for OT Networks · TrailMQ` |
| `/wiki/why-mqtt-publish-denied/` | `Why Was My MQTT Publish Denied? · TrailMQ` |
| `/regulated/` | `MQTT in GxP & GMP-Regulated Environments · TrailMQ` |

The brief's candidate `TrailMQ – MQTT Access Control & Decision Review` was tested and
rejected for the homepage: "Decision Review" has no search demand, and leading with the
brand spends the strongest position on a term nobody knows yet. The chosen title keeps
the head term first and the long-tail question second.

### Technical SEO changes
`FAQPage` on `/` and on the denied-publish article · `SoftwareApplication` on `/` ·
`BreadcrumbList` on wiki articles and cluster pages · heading hierarchy repaired (one
`<h2>` per section) · the five cluster/article pages added to the internal link graph
from header, footer and body · `robots.txt` and sitemap re-checked after the new
permalinks.

---

## 6. Competitive positioning

Per the brief, no negative comparison. The comparison table was rewritten from
"standard broker can't do X" to a workflow statement:

> **TrailMQ brings access enforcement and decision review into one workflow.**

Mosquitto, HiveMQ and EMQX are not named, and the site does not claim they lack
authorization, TLS or audit logging — they do not. The retained distinction is narrow
and defensible: with a conventional setup, enforcement lives in broker configuration and
review lives in a separate log pipeline; TrailMQ keeps both on one product path. This is
stated as TrailMQ's design choice, not as a competitor deficiency.

This differentiation remains a **hypothesis** to validate with external engineers.

---

## 7. Open items requiring owner input

1. **Imprint address** — blocking for publication. See `legal-findings.md`.
2. Whether `/regulated/` should keep the four compliance badges (GMP, GAMP 5,
   21 CFR Part 11, Data integrity) or drop to text only.
3. Whether to record a real screen capture of the six demo steps against a live 3.1.x
   instance, to replace the replay with actual motion. Recommended for a later pass; the
   replay is accurate today and needs no hosting.
4. Confirmation that `sensor-gateway-01`, `testuser` and the `1,895 / 843` counts from
   the published screenshots are acceptable as public example data (they already ship in
   the public repo).
