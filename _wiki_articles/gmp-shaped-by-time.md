---
layout: wiki-article
title: "GMP is shaped by time"
description: "Why auditability in regulated systems is fundamentally a time-based architecture problem, not a documentation issue."
date: 2024-01-15
category: "Foundations"
tags:
  - GMP
  - Time
  - Architecture
  - Auditability
  - RegulatedSystems
reading_time: 6
featured: true
order: 1
image: /assets/images/wiki/gmp-shaped-by-time.webp
lead: "GMP is often discussed as a rule set or a documentation burden. In reality, it is shaped by time, proximity to the process, and architectural decisions made long before the first audit begins."
---

## GMP is shaped by time

On the shop floor, GMP is precise.

A valve opens.
A batch step starts.
A limit is crossed.

Each of these moments has a timestamp, a cause, and a consequence.
Time is continuous.
Context is local.
Meaning is explicit.

At this level, GMP feels natural.
Events happen in sequence.
Cause and effect are directly observable.

---

## How time changes as systems scale

As data moves upward through industrial systems, time changes.

Events turn into intervals.
Signals become averages.
Sequences become summaries.

This transformation is not inherently wrong.
It is how manufacturing scales.

ERP systems do not need millisecond precision.
Periodic evaluation is sufficient.
Aggregation is expected.

As long as meaning remains intact.

---

## Where auditability starts to erode

Every aggregation removes detail.
Detail loss weakens the audit chain.

This does not mean that intervals fail GMP.
Intervals are necessary.

What fails GMP is interpretation without boundaries.

When a deviation is detected on an interval level, but the originating event cannot be reconstructed, compliance turns into estimation.

In many systems, raw data still exists somewhere.
But meaning does not.

Time windows are unclear.
Context has been stripped.
Causality has been flattened.

Reconstruction replaces observation.

---

## Why this is an architectural issue

Good systems collect data.
Good analytics evaluate data.

But only architecture decides how far interpretation may travel without losing traceability.

Near the process, abstraction has a cost.

The closer a system operates to physical execution, the shorter the acceptable evaluation interval becomes.
The stricter causality must be preserved.
The less interpretation is allowed.

This gradient is rarely made explicit.
Yet it defines whether auditability survives.

---

## GMP is not binary

GMP does not switch on or off.
It scales with proximity to the process.

Architecture decides before audits begin.

If time, context, and causality are preserved where they matter, audits become confirmation.
If they are lost early, audits become reconstruction exercises.

This is why [auditability cannot be reduced to logging](/wiki/audit-is-not-logging/).

GMP is shaped by time.
And time is shaped by architecture.
