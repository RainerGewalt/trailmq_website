# Pre-merge review — `feat/decision-investigation-website`

Date: 2026-09-14 · Against: `main` @ `f952f13` (v2.0.5)
Size: **26 files, +3069 / −501.** No further surface was added after the owner
decisions; the two net additions are a publication guard and this review.

**Not approved for merge.** Four legal blockers remain open (§6).

---

## 1. Homepage — before / after

Screenshots: `01-home-before.png`, `02-home-after.png`, `03-demo.png`,
`06-flow.png`, `04-mobile-hero.png`, `07-mobile-demo.png` (session scratchpad,
rendered at 1400px and 390px).

| | Before (`main`) | After |
| --- | --- | --- |
| H1 | "Policy-controlled MQTT. Decisions you can review." | "Know why MQTT access was **allowed or denied**." |
| Hero visual | Evidence card with an invented reason code and client id | Decision record with the product's own reason wording, synthetic identifiers, and Outcome / Evidence / Integrity as three columns |
| Primary CTA | "Start local evaluation" → github.com (leaves the site) | "See a decision" → `#demo` (stays on the page) |
| Secondary CTA | "See a denied publish" → a prose section | "Try it yourself" → `#try` |
| Section order | Hero → product path → **problem** → capabilities → audience → comparison → regulated → GMP → quickstart → FAQ | Hero → **why** → value → **demo** → **try** → flow → trust → technical → FAQ |
| Demo | none | six-step replay |
| GxP weight | 2 full sections, 4 badges, 6 of 8 FAQ entries | moved to `/regulated/`, linked from `#trust` and the footer |
| Closing CTA | "Contact for licensing" | "See a decision" / "Try it yourself" |

Heading outline is now one `<h1>` and one `<h2>` per section; on `main`,
`#promise` alone carried five sibling `<h2>`s.

## 2. Demo flow

Six steps, each string traceable to the public distribution:

1. **The request** — the `mosquitto_pub` to `restricted/ops/config` (scenario 02)
2. **The refusal** — `Error: A network protocol error occurred…` plus the QoS 0
   caveat (scenario 02, connect-a-client)
3. **Attribution** — the `[ACLMon] DENY user="testuser" roles=[publisher] …` line
4. **The reason** — the Activity row and the product's prose reason
5. **Three questions** — Outcome `Denied` / Evidence `Recorded` / Integrity
   `Outside validated scope`
6. **What the record is worth** — the integrity boundary

Behaviour, verified by 28 automated checks against the built page:

- all six steps render without JavaScript; the script builds every control
  itself, so there is never a dead button
- ARIA tabs pattern, arrow/Home/End keys, roving tabindex
- live region announces each step, and is screen-reader-only so it does not
  duplicate the visible heading
- `prefers-reduced-motion` disables autoplay and the cross-fade; manual
  stepping still works
- autoplay runs once, on scroll into view, never loops, and pauses when the tab
  is hidden

**Changes made after your decisions:**

- Client id → `demo-sensor-gateway-01`. `sensor-gateway-01` appears only inside a
  published screenshot and in no public doc, so its provenance is not
  demonstrably synthetic. Only `dashboard-1` and `line-1-sensor` are documented.
- The `1,895 / 843` counts were **removed from the replay entirely**. Step 6 now
  leads with the scope boundary; the panel is headed *"Evaluation snapshot ·
  figures from a single local run, not a product property"*. The counts remain
  visible only inside the screenshot, whose caption says the same.
- The demo now closes on the aha, not the caveat: *"You now know who was refused,
  on which topic, and why — from a client error that said none of it."*
- The hero card said "Real record from the … Activity view". With a synthetic
  identifier that was no longer true; it now reads "A decision record as the …
  Activity view shows it. Identifiers are synthetic."

## 3. Navigation / IA

Header: See a decision · Access control · Decision records · Wiki · FAQ ·
GitHub · **Try it yourself**.
Footer: four columns — Product (in-page anchors), Topics (the cluster), Resources,
Legal.

```
/                            decision investigation + demo
├── /mqtt-access-control/    head term: two gates, wildcards, fail-closed
├── /mqtt-decision-records/  what a record must contain; logs vs records
├── /industrial-mqtt-security/  OT framing
├── /regulated/             GxP content moved off the homepage
└── /wiki/why-mqtt-publish-denied/   the flagship question
```

0 broken links, 0 broken anchors, 0 dangling homepage fragments.

## 4. New indexable pages

Five, confirmed by diffing the generated sitemap:

| URL | Title | Intent |
| --- | --- | --- |
| `/mqtt-access-control/` | MQTT Access Control: Who May Publish or Subscribe | mqtt access control, mqtt authorization |
| `/mqtt-decision-records/` | MQTT Audit Trail & Decision Records | mqtt audit trail, mqtt access logs |
| `/industrial-mqtt-security/` | Industrial MQTT Security for OT Networks | industrial mqtt security |
| `/regulated/` | MQTT in GxP & GMP-Regulated Environments | relocated content, not a new cluster |
| `/wiki/why-mqtt-publish-denied/` | Why Was My MQTT Publish Denied? | mqtt publish denied, mqtt not authorized |

`/imprint/` was **removed** from the sitemap (it is `noindex` while blocked).
No further pages will be added.

Homepage title: `MQTT Access Control — Know Why a Publish Was Allowed or Denied · TrailMQ`.
Per your decision the site title no longer forces "Decision Review" as a keyword;
`_config.yml` is now *TrailMQ – MQTT Access Control for Industrial Systems*, and
the only remaining uses of the phrase are ordinary prose.

Meta descriptions 142–152 chars. `FAQPage` on the homepage, the three cluster
pages and the article; `SoftwareApplication` and a `Person` publisher sitewide.
All JSON-LD parses.

## 5. Confirmation — nothing 3.2-only is shown as available

Audited every mention of the four 3.2 topics across the built site.

| Capability | Where it appears | Framing |
| --- | --- | --- |
| Suggested smallest safe change | homepage `#flow` | inside "Planned for 3.2 — not available today" |
| Integrity over MQTT decision records | `#flow`, `#trust`, `/regulated/` | planned box; elsewhere only as a **denial** ("Not tamper-evident for MQTT decisions", "does not provide that today") |
| Automated retest | `#flow` | planned box |
| Organisational approval | `#flow` note | "no organisational approval step is automated in any planned version" |

Find / Understand / Check now / Act carry an "In 3.1.0" badge and each is backed
by the capability ledger — Check now by the Access screen's *Check a topic* field
and `GET /api/v1/topics/by-name/<path>/effective`.

**Retest** is deliberately not equivalent: separate dashed badge reading
*"Manual today · automation planned for 3.2"*, plus the sentence "You drive this
step yourself; there is no automated regression of a policy change."

## 6. Remaining blockers

`./docs/check-publication-blockers.sh` fails while any are open. It checks the
**built** output, so Liquid comments and the excluded `docs/` cannot trigger a
false alarm — an earlier version did, and was rewritten rather than left to be
ignored.

| ID | Blocker | Needs |
| --- | --- | --- |
| **L1** | Imprint has no confirmed postal address | Your address, supplied separately |
| **L2** | Which legal regime applies after the move | Counsel. No own interpretation is stated anywhere — an earlier draft named Swiss provisions and drew conclusions; that was removed |
| **L6** | Legal basis, retention, supervisory authority | Follows from L2 |
| **L8** | LICENSE names a different rights holder than the owner determination | Settle **after** 3.1.1, correcting product LICENSE and website together. The LICENSE is untouched |

Per your decision the website no longer names any software copyright holder.
It states that rights are governed solely by the binding license text and links
to it, on both `/imprint/` and `/about/`. Website-content copyright remains with
Florian Przybylak, which is a separate question. `noindex` on `/imprint/` is
treated as containment, not as a fix.

`docs/legal-findings.md` stays internal and is excluded from the build — it is
not a published page and will not become one.

## 7. Claim status

No unsupported claim is present in the built output. Verified absent:
`acl_role_not_in_topic_scope`, `Publish error: Not authorized`, the Tutzing
address, `No personal data is collected`, `TrailMQ Team`.

`/regulated/` was re-checked against your "no new compliance claim" condition.
It named **EU GMP Annex 11** affirmatively; on `main` that framework appeared
only inside a denial. The affirmative mention was removed, leaving the same four
named on the old homepage (GMP, GAMP 5, 21 CFR Part 11, ALCOA+).

## 8. Quality checks

| Check | Result |
| --- | --- |
| Jekyll build | clean |
| Internal links / anchors | 0 broken |
| JSON-LD | 0 invalid |
| Images without `alt` | 0 |
| Pages with ≠ 1 `<h1>` | 0 |
| Demo behaviour (jsdom, built page) | 28/28 |
| Reduced-motion path | pass |
| WCAG AA contrast, new pairings | all ≥ 4.5:1 (seven were 4.44–4.48 and were raised) |
| Mobile at 390px | no horizontal overflow |

Two polish fixes came out of the screenshots: the Retest badge overflowed its
card, and `.txtlink` was a wrapping flex container that dropped its arrow onto
its own line at the left margin — both fixed.

## 9. Suggested next step

Reduce and polish, as you said. Candidates, in order, none of them new surface:

1. `/about/` still carries the older product framing and overlaps `/regulated/`
   and `#technical`. It is the best trim target.
2. The homepage FAQ has nine entries; five would read better.
3. `#technical` and `#trust` both explain the integrity scope. One of them could
   defer to `/mqtt-decision-records/`.
