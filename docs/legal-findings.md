# Legal & identity findings — owner approval required

Branch: `feat/decision-investigation-website`
Date: 2026-09-14
Status: **BLOCKING for publication.** Nothing in this document was published. The
imprint changes on this branch deliberately leave the site in a state that must not go
live until L1 is resolved.

> This is an engineering review of what the website *asserts*, checked against what the
> owner has confirmed. It is not legal advice. L1, L2 and L6 in particular should be
> confirmed with a lawyer admitted in the relevant jurisdiction before publication.

---

## Owner determination applied on this branch

Recorded from the brief and used consistently across the site:

| Role | Person |
| --- | --- |
| Website operator (Betreiber) | Florian Przybylak, as a natural person |
| Responsible for content | Florian Przybylak |
| TrailMQ product owner / project lead | Florian Przybylak |
| Technical maintainer / repository role | Rainer Gewalt |
| Legal entity | **None.** There is no TrailMQ GmbH or other TrailMQ company. |

Two consequences were applied throughout:

- The repository/maintainer role is **not** treated as an operator or
  content-responsible role anywhere on the site, and no such role was derived from git
  metadata, the GitHub account name or WHOIS.
- Authorship of website content and structured-data publisher identity were attributed
  to Florian Przybylak, not to the maintainer.

One important exception, discovered during implementation: **software copyright could
not be handled this way**, because the published binding license already names the
maintainer as copyright holder. See **L8**, which is blocking.

---

## L1 — Imprint address is not confirmed  · BLOCKING

**Found on `main`:** `imprint.md` publishes

```
Florian Przybylak
Anton-Bartl-Straße 3
82327 Tutzing
Germany
```

— twice: once under § 5 DDG and once under § 18 Abs. 2 MStV.

**Problem:** per the brief this address is no longer to be treated as confirmed. The
current residence is **Meinisberg, Canton Bern, Switzerland**. The full confirmed street
address is not available to me, and I did not derive one from git metadata, the GitHub
account, WHOIS or any other repository source.

**Applied on this branch:** the outdated address was removed and replaced with an
explicit placeholder that is impossible to publish by accident:

```
<!-- LEGAL-BLOCKER: owner must supply the confirmed postal address before release. -->
```

plus a visible review banner on the page.

**Needed from the owner:** the confirmed postal address, or a decision to use a
permitted alternative (e.g. a c/o or service address that satisfies the applicable
disclosure duty).

**Do not publish this branch until this is filled in.** An imprint with a wrong address
is worse than the pre-existing one being merely stale, and an imprint with a visible
placeholder is worse than both.

---

## L2 — The applicable legal regime probably changed with the move  · needs counsel

The imprint is written entirely under German law: **§ 5 DDG** and
**§ 18 Abs. 2 MStV**.

- The brief's concern about `§ 5 TMG` was **already resolved on `main`** — the page
  cites DDG, which replaced TMG in May 2024. No change needed there.
- However, if the operator is now resident in Switzerland and the site is operated from
  there as a natural person, the German DDG/MStV citations may be the wrong basis.
  Switzerland's disclosure duty for websites sits primarily in **UWG Art. 3 Abs. 1
  lit. s** (which applies to e-commerce; a non-transactional project site is a different
  case), and Swiss data protection sits under the **revised FADP (revDSG, in force
  1 Sep 2023)** rather than only the GDPR.
- The GDPR may still apply in parallel via Art. 3(2) if the site targets EU visitors —
  which an English-language site aimed at European industrial and pharma engineers
  plausibly does.

**Applied on this branch:** nothing. The German citations were left in place and flagged,
because swapping them for Swiss ones without counsel would be replacing one unverified
claim with another.

**Needed from the owner:** a decision on which regime the imprint and privacy page
should be written under, ideally with counsel. This affects L6 as well.

---

## L3 — The site asserts a company and a team that do not exist

Three places assert an organisation:

| Location | Assertion |
| --- | --- |
| `_includes/head.html` | `"@type": "Organization", "name": "TrailMQ"` with a `contactPoint` of `contactType: "customer service"` |
| `_config.yml` | `author: "TrailMQ Team"` |
| `index.html`, `about.md` | first-person plural throughout |

There is no TrailMQ legal entity and no team. Publishing `Organization` structured data
for a non-existent company is both inaccurate and the kind of thing that is trivially
checked.

**Applied on this branch:**
- `Organization` → **`Person`** (`Florian Przybylak`) as publisher, with TrailMQ
  modelled as a `SoftwareApplication` he authors. This is both more accurate and better
  structured data.
- `author: "TrailMQ Team"` → `author: "Florian Przybylak"`.
- `contactType: "customer service"` removed — it implies a support organisation.

**Needed from the owner:** confirmation that being named personally in structured data
and in the footer is intended. The alternative is to drop publisher identity from the
schema entirely.

---

## L4 — Footer conflated copyright holder with maintainer

**Found on `main`:**

```
© 2026 TrailMQ · Maintained by Florian Przybylak
```

This reads as though "TrailMQ" is the rights holder (see L3) and simultaneously labels
the product owner as merely the "maintainer" — exactly the conflation the brief asks to
avoid, and the inverse of the actual role split.

**Applied on this branch:**

```
Website © 2026 Florian Przybylak · TrailMQ is an independent project,
not a registered company · roles, rights & responsibilities
```

The word *Website* is deliberate: it scopes the line to this site's content and avoids
asserting software copyright in a footer (see L8). Operator, product-owner and
maintainer roles are stated once, explicitly, on the imprint page rather than
compressed into one line.

**Needed from the owner:** confirm the copyright line names the natural person and that
scoping it to the website is correct.

---

## L5 — The privacy page overstates, in exactly the way the brief warns about

**Found on `main`, `cookies.md`:**

> "No personal data is collected, profiled, analyzed or sold by this website."
> "Because TrailMQ collects no personal data through this website, there is nothing to
> request, correct or delete under Art. 15–17 GDPR."

**Problem:** the site has no analytics — that part is true and verified (no tag manager,
no CDN, self-hosted fonts). But "no personal data at all" is a stronger and different
claim:

- The site is served by **GitHub Pages** (`CNAME` → `trailmq.com`, `origin` on
  github.com). GitHub necessarily processes visitor **IP addresses** to serve requests,
  and IP addresses are personal data under GDPR Art. 4(1). GitHub is a host and a
  processor/third party here.
- The page states "Loading a page on this site contacts no third-party server." Every
  page load contacts GitHub's servers. The sentence is true about *embedded* third-party
  resources and false as written.
- `contact@trailmq.com` receives email, which is personal data processing with a
  retention question, and the GDPR data-subject rights therefore do exist.

This is precisely the "kein Tracking" → "keine personenbezogenen Daten" shortening the
brief flags.

**Applied on this branch:** the page was rewritten to keep the strong, *true* claim
("no tracking, no analytics, no advertising, no third-party embeds, self-hosted fonts")
and to stop making the unsupportable one. Added: GitHub Pages named as host, server log
processing acknowledged, email handling described, and data-subject rights stated as
existing rather than as moot.

**Needed from the owner:** confirmation of GitHub Pages as host, the email retention
period, and whether a controller address can be named (depends on L1).

---

## L6 — Missing privacy elements  · needs counsel

Independent of L5, the privacy page has no:

- named controller with contact details (blocked on L1)
- legal basis for the processing that does occur (server logs, email)
- hosting-provider disclosure (blocked on the L2 regime decision)
- retention periods
- right to lodge a complaint with a supervisory authority, and *which* one — which
  depends entirely on the L2 outcome (a German state authority, the Swiss FDPIC, or both)

**Applied on this branch:** the structural sections were added with the factual parts
filled in and the jurisdiction-dependent parts left as visible, clearly-marked review
placeholders, so the gaps are impossible to miss at review time.

---

## L7 — Licensing page states rights without naming the licensor

`license.md` describes a "TrailMQ Proprietary Evaluation License" and says
production use "requires a separate written agreement", without saying with **whom**.
With no legal entity (L3), the counterparty to any commercial agreement is the natural
person.

**Applied on this branch:** none — this is a commercial decision, not a copy fix.

**Needed from the owner:** decide whether to name the licensor on the page now, or
defer until an entity exists. Note the binding `LICENSE` file in the product repo has
the same gap and is outside this website's scope.

---

## L8 — The published LICENSE names a different copyright holder than the owner determination  · BLOCKING

**Found during implementation, not in the original brief.** This one needs a decision
before anything ships.

The brief states that `Rainer Gewalt` is a technical maintainer/repository role and that
no rights-holder role should be derived from it. But the **binding license text** in the
public distribution repository says, verbatim:

```
Copyright (c) 2026 Rainer Gewalt. All rights reserved.
```

And `about.md` on `main` already states this accurately:

> "The binding proprietary evaluation license names **Rainer Gewalt** as copyright
> holder."

So there is a genuine conflict between:

- the owner determination for this website (Florian Przybylak is product owner and
  project lead, and no rights-holder role follows from the maintainer role), and
- the published, binding license for the software (Rainer Gewalt is the copyright
  holder).

**What I did not do.** I did not resolve this. An earlier draft of the new imprint on
this branch asserted that copyright in "this website and the TrailMQ project" is held by
Florian Przybylak. That was too strong — it contradicts the published LICENSE — and it
was corrected before commit.

**Applied on this branch:** the two are now scoped separately and neither is
overstated.

- *Website content* copyright → Florian Przybylak (follows from the operator
  determination).
- *TrailMQ software* copyright → "the one named in the binding license text, which
  currently names Rainer Gewalt", with a link to that text.
- The maintainer row in the roles table no longer says the maintainer holds no rights;
  it says software copyright is governed solely by the license text.
- The true statement in `about.md` was left in place.

**Needed from the owner:** confirm which is intended.

1. If the software copyright should sit with Florian Przybylak, the **LICENSE file in
   the product repository has to change first**, and the website follows. The website
   must not lead.
2. If it correctly sits with Rainer Gewalt, the current scoped wording is right, and
   `license.md` should probably name the licensor explicitly (see L7) so the
   counterparty to a commercial agreement is unambiguous.

Either way this cannot be fixed on the website alone, and the website should not
contradict the binding license under any circumstances.

## Summary — what blocks publication

| ID | Item | Blocking? |
| --- | --- | --- |
| L1 | Confirmed postal address for the imprint | **Yes** |
| L2 | Which legal regime the imprint/privacy pages follow | **Yes** (counsel) |
| L6 | Supervisory authority + legal basis, follows from L2 | **Yes** (counsel) |
| L3 | Confirm Person-based schema and personal naming | No — applied, confirm |
| L4 | Confirm copyright line | No — applied, confirm |
| L5 | Confirm host, email retention | No — applied, confirm |
| L7 | Name the licensor | No — decision deferred |
| **L8** | **Software copyright: LICENSE vs. owner determination** | **Yes** |

Per the brief: **no publication and no merge without separate approval.**
