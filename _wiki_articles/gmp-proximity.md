---
layout: wiki-article
title: "GMP is not binary – it scales with proximity"
description: "Why GMP requirements increase gradually with proximity to the physical process and how architecture often hides this gradient."
date: 2024-01-15
category: "Models"
tags:
  - GMP
  - ITOT
  - Architecture
  - Time
  - Traceability
reading_time: 7
featured: true
order: 2
image: /assets/images/wiki/gmp-proximity.webp
lead: "GMP is often treated as a switch: compliant or non-compliant. In real systems, it behaves very differently. It follows a gradient that tightens as software moves closer to physical execution."
---

## GMP is not binary – it scales with proximity

In many architectures, GMP is treated like a binary property.
Either a system is compliant, or it is not.

That view is convenient.
But it does not reflect how regulated systems actually behave.

---

## The proximity gradient

In real IT/OT architectures, GMP requirements increase with proximity to the physical process.

Not in theory.
But in time resolution, causal strictness, and evaluation depth.

An ERP system operates far from execution.
Periodic reports and aggregated views are usually sufficient.

A historian or MES sits closer.
Here, time windows matter.
Aggregation must preserve context.

SCADA and HMI systems operate near real time.
State changes and operator interactions must be traceable in sequence.

At PLC and sensor level, systems directly influence the process.
Events must be deterministic, timestamped, and causally correct.

The closer software is to the machine,
the shorter the acceptable evaluation interval becomes.

[Interval design follows proximity to execution](/wiki/intervals-commitments/).

---

## Where architectures break GMP thinking

Many architectures ignore this gradient.

Data is aggregated too early.
Context is stripped to simplify integration.
Averages replace sequences.
Intervals erase cause and effect.

Later, when questions arise, reconstruction is expected to compensate.

From a GMP perspective, this is fragile.

Knowing what happened is not enough.
You must know when it happened,
in which order,
and under which conditions.

That information cannot be reliably recreated afterwards.

---

## Architecture decides before validation

If your GMP strategy looks the same at ERP level and PLC level,
your architecture is already misleading you.

GMP compliance is not enforced by documentation.
It is preserved by respecting proximity.

The gradient exists whether it is modeled or not.
Ignoring it does not remove the risk.
It hides it.
