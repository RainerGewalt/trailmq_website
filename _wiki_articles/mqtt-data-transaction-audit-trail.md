---
layout: wiki-article
title: "What should an MQTT data transaction audit trail record?"
seo_title: "MQTT Data Transaction Audit Trails: Checklist | TrailMQ"
description: "Compare MQTT audit trail solutions by identity, topic, outcome, decision reason, delivery proof, integrity scope, retention and reviewability."
date: 2026-08-12
last_modified_at: 2026-08-12
category: "Distinctions"
tags:
  - MQTT
  - AuditTrail
  - DataIntegrity
  - IoT
  - GxP
  - DecisionEvidence
reading_time: 8
featured: true
order: 5
image: /assets/images/wiki/logs-vs-audit.webp
image_alt: "A quality engineer compares structured MQTT decision records with technical broker logs."
lead: "A useful MQTT audit trail records more than a timestamp and topic. It attributes the operation, preserves its outcome and reason, separates broker acceptance from subscriber delivery, and states exactly what its integrity check covers."
---

## Short answer

An MQTT data transaction audit trail should record **who or what acted, through which client, on which topic, when, what operation was requested, whether it was allowed or denied, and why**.

For regulated or quality-critical use, a solution must also answer three boundary questions:

1. Does the record prove broker acceptance, subscriber delivery, or only an authorization decision?
2. Are MQTT payloads stored, referenced by digest, or intentionally excluded?
3. Which records are actually covered by the advertised integrity check?

A long broker log is not automatically a detailed audit trail. Detail is useful only when a reviewer can connect identity, authority, action, outcome and integrity scope without reconstructing the event from several systems.

---

## MQTT transaction logs and audit trails are different

A transport log is usually written for operations and troubleshooting. It may show a connection, packet, topic or error.

An audit trail is organized around a review question:

* Who attempted the action?
* Which authority did that identity have?
* Which MQTT operation and topic were evaluated?
* Was the action allowed or refused?
* What machine-readable reason explains the outcome?
* What changed before or after the event?
* Can later edits be detected, and over which store?

That difference matters in GMP and GxP environments because evidence assembled after an incident is weaker than evidence captured at the decision boundary.

[Audit is not the same as logging](/wiki/audit-is-not-logging/).

---

## Minimum fields for a detailed MQTT audit record

Use this table when comparing MQTT data transaction audit trail solutions:

| Evidence field | Why it matters |
| --- | --- |
| Timestamp and time source | Places the operation in a reliable sequence and supports correlation. |
| Authenticated user or service | Makes the action attributable beyond an anonymous network connection. |
| MQTT client ID | Distinguishes the connecting client instance from the account behind it. |
| Role or effective authority | Shows why the identity was eligible to request the action. |
| Operation | Separates connect, publish, subscribe and administrative changes. |
| Topic or topic filter | Identifies the namespace and path that were evaluated. |
| Outcome | States allowed, denied, queued or failed without inference. |
| Canonical reason | Explains a denial or failure in a stable, machine-readable form. |
| Configuration or rule context | Connects the outcome to the effective control state where the solution supports it. |
| Correlation or sequence ID | Links related records and supports ordered review. |
| Payload treatment | States whether content, a digest, a reference or no payload is retained. |
| Integrity status and scope | Says which records the integrity verdict checks—and which it excludes. |
| Retention and export behavior | Shows whether evidence remains available for the required review period. |

Not every deployment needs to retain every payload. The correct choice depends on intended use, data classification, privacy, retention requirements and the evidence needed for later review.

---

## Compare the main solution patterns

There is no single MQTT audit trail architecture for every system. Most solutions follow one of three patterns.

| Pattern | Strength | Typical gap to test |
| --- | --- | --- |
| Broker logs forwarded to a log platform | Reuses existing operations tooling and central retention. | Identity, effective authority and decision reason may require correlation across several sources. |
| Broker events transformed by an external evidence pipeline | Can normalize multiple brokers and add retention or integrity controls. | Evidence is created downstream; completeness depends on capture, transport and transformation. |
| Broker-integrated decision records | Captures identity, authorization and outcome close to enforcement. | The product may still separate payloads, delivery evidence or integrity stores; inspect the exact boundary. |

The strongest choice is the one whose evidence model matches the risk of the MQTT path and can be validated end to end. Product category alone does not prove suitability.

---

## Do not confuse broker acceptance with subscriber delivery

An accepted publish and a delivered application message are different facts.

Depending on MQTT version, QoS, session state and broker behavior, a publisher-side success signal may show only that the client handed off the message or that the broker acknowledged it. It does not necessarily name every subscriber that received and processed the payload.

A credible audit trail solution states which fact it records:

* authorization decision
* broker acceptance
* queue or dead-letter outcome
* subscriber receipt
* downstream application processing

If downstream delivery matters, validate it with a real subscriber or an application acknowledgement designed for the intended use.

[Reliable MQTT in GMP manufacturing requires more than one QoS setting](/wiki/reliable-mqtt-gmp-manufacturing/).

---

## Test every integrity claim against its scope

Words such as *tamper-evident*, *immutable* and *audit-ready* are not interchangeable.

Ask the supplier or implementation team to demonstrate:

* which database tables, files or event types are covered
* whether MQTT decisions and payload evidence are in the checked store
* what happens when an existing record is edited or removed
* whether the mechanism is a local hash chain, digital signature, external timestamp or WORM control
* how completeness is assessed when capture was disabled or a pipeline failed
* who can rebuild, replace or delete the evidence store
* how backup, restore and retention affect verification

A valid hash chain can prove internal consistency for the records it walks. It does not automatically prove that every MQTT event was captured, that every payload is present or that the database is physically immutable.

---

## A practical evaluation test

Do not evaluate an MQTT audit trail from screenshots alone. Run a small, reproducible scenario:

1. Connect an authenticated publisher and subscriber.
2. Publish an allowed QoS 1 message and compare the subscriber payload byte for byte.
3. Attempt a publish to a namespace the identity cannot access.
4. Confirm that the intended subscriber receives nothing.
5. Find the denial by user and by client ID.
6. Verify that action, topic, outcome and reason are present.
7. Change one access rule and review the administrative change record.
8. Run the integrity check and inspect its included and excluded record types.
9. Restart the system and repeat the review to confirm persistence.

This test exposes the difference between a dashboard counter, a broker decision and end-to-end delivery evidence.

---

## How TrailMQ {{ site.product_version }} maps to this checklist

TrailMQ is a self-hosted MQTT broker with policy enforcement and attributed decision records built in. Standard MQTT clients connect directly.

The current public evaluation records allowed MQTT operations and refusals in a dedicated message-evidence store. A denial includes the authenticated user, MQTT client ID, action, topic, outcome and canonical reason. The Evaluation Preview exposes these records under Activity, and the REST API exposes them through `/api/v1/audit/messages`.

TrailMQ also provides a hash-linked integrity check over a **separate system/action store** containing sign-ins, administrative changes, identity and role changes, and policy or topic-rule changes. That verdict does not cover MQTT message evidence, including publish and subscribe refusals. TrailMQ labels those records `Outside validated scope` instead of treating the chain as broader than it is.

The Preview is not a payload browser, and its counters are not subscriber-delivery proof. Use a real subscriber and `./trailmq verify` when evaluating enforcement. These boundaries are documented in the public [TrailMQ README](https://github.com/RainerGewalt/TrailMQ) and [architecture and trust model](https://github.com/RainerGewalt/TrailMQ/blob/master/docs/architecture.md).

TrailMQ does not make a deployment automatically compliant. Intended use, risk assessment, validation, procedures, retention and quality ownership remain with the regulated organization.

---

## Selection rule

Choose an MQTT data transaction audit trail solution only after you can answer:

**Which decision does this record prove, what does it not prove, and can that boundary still be explained during a later review?**

The best evidence is not the record with the most fields. It is the record whose attribution, meaning, integrity scope and limitations are explicit.
