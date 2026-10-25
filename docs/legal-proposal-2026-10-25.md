# Legal pages — proposal for the open items L2 and L6 (owner decision)

Date: 2026-10-25. Prepared in a supervised session on the owner's request to
review the site for legal points. Nothing below is on a public page yet; the
public pages still handle L2/L6 by omission, as `legal-findings.md` records.
The owner decides whether to adopt this text or to put it to counsel first.

## What changed since the findings were written

- The operator is a natural person resident in Switzerland (imprint, confirmed
  2026-09-15). The site offers a commercial licence on request, so it is a
  commercial web presence under Swiss law.
- GitHub, Inc. states in its General Privacy Statement, section "Data Privacy
  Framework (DPF)", that it has certified to the U.S. Department of Commerce
  that it adheres to the Swiss-U.S. Data Privacy Framework Principles for
  personal data received from Switzerland. The Swiss Federal Council recognised
  the Swiss-U.S. DPF as adequate with effect from 15 September 2024.
- The site still loads nothing from third parties (verified 2026-10-25 against
  the live HTML, CSS and JS: only trailmq.com, schema.org/w3.org namespaces,
  and outbound links to GitHub, Docker Hub and LinkedIn). No cookies are set.

## L2 — applicable regime (proposal)

State the regime once, on `/cookies/`, without a legal analysis:

> This website is operated from Switzerland. Personal data is processed in
> accordance with the Swiss Federal Act on Data Protection (FADP). Where the
> EU General Data Protection Regulation also applies to visitors from the EU,
> the rights described below are granted to them as well.

Open for counsel, not for this repo: whether GDPR applies by Art. 3(2) (offering
a licence to EU companies) and whether an EU representative under Art. 27 is
needed. The second sentence above is written so that it stays true either way.

## L6 — recipients, transfer abroad, retention, authority (proposal)

Add to `/cookies/`, section "Hosting and server logs":

> **Recipient and transfer abroad.** The host is GitHub, Inc., United States.
> GitHub states that it has certified under the Swiss-U.S. Data Privacy
> Framework for personal data received from Switzerland; the Swiss Federal
> Council recognises that framework as providing adequate protection. The site
> operator has no access to GitHub's server logs and runs no analytics over them.

Add to section "If you email":

> Correspondence is kept for as long as the enquiry is open and for a limited
> period afterwards, in case a follow-up question arises; it is then deleted
> unless a licence or contract relationship requires longer retention.

The exact period is the owner's call (L5). A number is better than "limited";
suggest twelve months after the last message.

Add to section "Your rights":

> The competent supervisory authority in Switzerland is the Federal Data
> Protection and Information Commissioner (FDPIC), Bern.

## Imprint (L2 side note)

Swiss law does not prescribe an "Impressum" for every site, but the Unfair
Competition Act (UCA, art. 3 para. 1 lit. s) requires clear identity and contact
details for online offers of goods or services. The imprint already satisfies
that. No change proposed.

## Not changed on purpose

- No software copyright holder on `/imprint/` (L8 stays as recorded).
- No licensor name on `/license/` (L7 stays an owner decision).
- Product claims and limits were reviewed separately; see the 2026-10-25
  session notes in `trailmq-ecosystem-lab/feedback/reviews/`.

## Sources

- GitHub General Privacy Statement, section "Data Privacy Framework (DPF)":
  https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement
- Swiss Federal Council decision on the Swiss-U.S. DPF, effective 2024-09-15
  (secondary summary): https://homburger.ch/en/insights/new-swiss-u-s-data-privacy-framework
- Participant list to verify GitHub's entry before publishing:
  https://www.dataprivacyframework.gov/list
