---
layout: page
title: "MQTT audit trail and decision records"
seo_title: "MQTT Audit Trail & Decision Records · TrailMQ"
crumb: "Decision records"
description: "What an MQTT audit trail must contain to be useful months later: identity, client id, topic, outcome and reason — and how it differs from broker logs."
subtitle: "Broker logs tell you what the transport did. A decision record tells you what the broker decided, for whom, and why."
permalink: /mqtt-decision-records/
updated: September 2026
last_modified_at: 2026-09-14
faq:
  - q: "What should an MQTT audit trail record?"
    a: "At minimum the authenticated identity, the MQTT client id, the operation, the exact topic evaluated, a timestamp from a synchronised clock, the outcome and, for refusals, a reason that distinguishes a missing permission from a missing topic rule. It should also state whether broker acceptance or subscriber delivery is being claimed."
  - q: "Are MQTT broker logs an audit trail?"
    a: "Not on their own. Broker logs are written for operators debugging transport and are usually rotated on a schedule chosen for disk usage. An audit trail is written for someone reconstructing an event later, which means stable structure, attribution on the record itself and a defined retention."
  - q: "What is the difference between an access log and a decision record?"
    a: "An access log records that a connection or operation happened. A decision record records what was decided about it, by which rule, with what outcome and for what reason. The second answers why; the first usually cannot."
  - q: "Does a recorded allow prove the message was delivered?"
    a: "No. An allow means the broker authorized and accepted the operation. It does not name which subscribers received it. Proving delivery requires observing a real subscriber, which is a separate claim and should be recorded as one."
---

Most MQTT deployments have logs. Far fewer can answer a question asked three months
after the fact by someone who was not there.

The gap is not volume. It is that transport logging and decision recording are written
for different readers, and only one of them survives review.

## Three different artefacts, routinely conflated

| | Broker log | Access log | Decision record |
| --- | --- | --- | --- |
| Written for | an operator debugging now | capacity and connection tracking | someone reconstructing an event later |
| Typical content | connects, disconnects, errors | who connected, when, from where | what was decided, for whom, on which topic, why |
| Attribution | client id, sometimes | client id or username, rarely both | authenticated identity **and** client id |
| Answers "why" | no | no | yes |
| Retention | rotated for disk | operational | defined deliberately |

A broker log can tell you a client disconnected at 13:37. A decision record tells you
that `testuser`, holding the role `publisher`, was refused a publish to
`restricted/ops/config` from client `sensor-gateway-01`, because no rule brought that
topic into scope for any role that identity holds — and that the refusal was recorded.

The first requires you to already suspect what happened. The second does not.

## What a decision record has to contain

Everything below has a specific reason for being there.

**Authenticated identity *and* MQTT client id.** Either alone makes the record hard to
find again. The account answers *who*; the client id answers *which of their devices*.
Searching by either should find the record.

**The role in force at that moment.** Roles change. A record that references only the
identity forces you to reconstruct which permissions applied at the time.

**The operation.** Connect, publish or subscribe. A denied subscribe and a denied
publish produce completely different symptoms and are frequently mistaken for each
other.

**The exact topic string evaluated.** Not the rule that was checked — the path the
client actually requested. The difference between `line-4/temperature` and
`line4/temperature` is the whole investigation.

**A timestamp from a synchronised clock.** Correlating across a gateway, a broker and a
historian requires that all three agree on the time. If NTP is not in place, the
records are much weaker than they look.

**The outcome.** Allowed or denied.

**A reason, for refusals.** Not just "denied". A reason that distinguishes *this role
has no such permission* from *no rule brings this topic into scope*, because the fix
for each is different.

**The scope of any integrity claim attached to the record.** See below.

## Outcome, evidence and integrity are three questions

This distinction is the one most often collapsed, usually in the direction of claiming
more than the system can show. TrailMQ states it in its own Activity view:

> **Outcome** says whether the operation was permitted. **Evidence** says whether it was
> written down. **Integrity** says whether the validated chain covers that record. They
> are three different questions.

Worth walking through why each is separate:

- An operation can be **denied** and **not recorded**, if recording was never
  configured for that path.
- An operation can be **recorded** and still sit **outside** whatever integrity check
  the system advertises, if that check only walks part of the store.
- An integrity verdict can be **intact** and still prove far less than it appears to,
  if it is neither externally anchored nor digitally signed — in which case it
  demonstrates internal consistency, not third-party custody.

A system that reports one green tick for all three is not telling you more. It is
telling you less, less precisely.

## What TrailMQ records, and what it does not

**Always recorded.** Security and decision events: sign-in attempts, refusals,
administrative changes, account deactivation. These are not optional and not subject to
per-topic configuration.

**Recorded when configured.** The messages themselves. `Record message evidence` is a
per-topic-rule setting, so payload retention stays a deliberate decision per namespace
rather than a global default that quietly accumulates process data.

**Covered by the integrity chain.** A hash-linked chain walks the system and action
store — sign-ins, administrative changes, identity and role changes, policy and
topic-rule changes — and reports a verdict with the number of entries checked.

**Not covered by it.** MQTT message evidence, including publish and subscribe refusals,
lives in its own store that the verdict does not walk. TrailMQ labels those records
`Outside validated scope` and repeats the limit beside the verdict itself, alongside
`External anchoring: None` and `Digital signature: None`.

That last part is the honest version of an integrity claim: the product tells you the
size of the set it did not check.

**Not claimed at all.** A recorded allow means TrailMQ authorized and accepted the
operation at the broker. It does not show payloads or name which subscribers received
them, and counters in the review UI are not delivery proof. Delivery is verified
separately, by observing a real subscriber — which is what `./trailmq verify` does.

## Retention, deletion and the questions to ask any broker

Whatever system you evaluate, these are the questions worth asking early, because they
are expensive to retrofit:

1. Is a refusal recorded, or only the resulting disconnect?
2. Can I find a record by username *and* by client id?
3. Does the record carry the topic that was evaluated, or only the rule that matched?
4. What exactly does the integrity check cover — and what does it exclude?
5. Is the integrity check anchored or signed, or does it only prove internal
   consistency?
6. Who can delete records, and is that deletion itself recorded?
7. Does a recorded allow claim broker acceptance or subscriber delivery?

Question 4 is the one that separates careful products from confident ones.

## See a real record

```bash
git clone https://github.com/RainerGewalt/TrailMQ.git
cd TrailMQ
./trailmq quickstart
./trailmq verify
```

Then open Activity, filter **Outcome → Denied**, and read a record you produced
yourself.

<div class="doc-cta">
  <h3>Or look at one first</h3>
  <p>A denied publish traced from the client error to the recorded reason and the integrity verdict's own stated limits.</p>
  <div class="actions">
    <a href="{{ '/#demo' | relative_url }}" class="btn btn--primary">See a decision</a>
    <a href="{{ '/#try' | relative_url }}" class="btn btn--outline" style="color:#fff;border-color:rgba(255,255,255,0.3)">Try it yourself</a>
  </div>
</div>

## Related

- [Why was my MQTT publish denied?]({{ '/wiki/why-mqtt-publish-denied/' | relative_url }})
- [MQTT access control: who may publish or subscribe]({{ '/mqtt-access-control/' | relative_url }})
- [Logs are not audit trails]({{ '/wiki/logs-vs-audit/' | relative_url }})
- [Audit is not logging]({{ '/wiki/audit-is-not-logging/' | relative_url }})
- [MQTT data transaction audit trails]({{ '/wiki/mqtt-data-transaction-audit-trail/' | relative_url }})
