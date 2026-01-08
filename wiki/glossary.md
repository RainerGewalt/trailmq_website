---
layout: wiki-base
title: "Glossary"
description: "Core terms used throughout this wiki to describe trust, context, auditability and architecture in regulated systems."
permalink: /wiki/glossary/
---

# Glossary

This glossary defines core terms as they are used throughout this wiki.

The goal is not to provide dictionary definitions, but to make **conceptual boundaries explicit**.
Most failures in regulated and industrial systems originate from blurred meanings, not missing technology.

---

## Audit Trail

An audit trail is a **tamper-evident, time-ordered record** that explains how and why a system behaved the way it did.

It links events, decisions, transformations, responsibility, and time into a coherent chain.

**Audit trail is not:**
A collection of logs, files, or database entries created after the fact.

**Common misunderstanding:**
Assuming that detailed logging automatically provides auditability.

---

## Logging

Logging records **what happened** in a system.

Logs are factual, chronological, and useful for debugging and monitoring.
They do not explain intent, authority, or decision logic.

**Logging is not:**
An explanation of system behavior.

**Common misunderstanding:**
Using logs as a substitute for audit trails in regulated environments.

---

## Decision

A decision is a **moment where a system commits to a course of action** based on available context, rules, or models.

Decisions have inputs, conditions, authority, and consequences.
They must be explainable long after execution.

**Decision is not:**
A computed value or derived metric.

**Common misunderstanding:**
Treating decisions as implicit side effects of data processing.

---

## Context

Context is the **set of conditions that give data meaning at a specific moment in time**.

This includes process state, timing, configuration, product or batch identity, and system state.

**Context is not:**
Metadata reconstructed later from logs or external systems.

**Common misunderstanding:**
Assuming context can always be rebuilt after a decision has been made.

---

## Interval

An interval is a **formal commitment that defines a meaningful slice of time**.

Intervals determine what belongs together, what can be compared, and which conclusions are valid.

**Interval is not:**
A convenient aggregation window chosen during analysis.

**Common misunderstanding:**
Treating interval selection as a technical detail rather than an architectural decision.

---

## Trust

Trust is the ability to **explain and defend system behavior retrospectively**.

It is tested after execution, during audits, incidents, or regulatory review.

**Trust is not:**
Visibility, dashboards, or real-time monitoring.

**Common misunderstanding:**
Believing that transparency alone creates trust.

---

## Proximity

Proximity describes how **close a system operates to physical process execution**.

As proximity increases, requirements for time resolution, causality, and determinism tighten.

**Proximity is not:**
A software layer or deployment location.

**Common misunderstanding:**
Applying the same compliance strategy across ERP, MES, and PLC layers.

---

## Operational Twin

An operational twin is a **translation layer** that aligns physical process reality with meaningful, comparable, and auditable representations.

Its purpose is understanding and reuse, not visualization.

**Operational twin is not:**
A 3D model or UI representation of a machine.

**Common misunderstanding:**
Equating digital twins with dashboards or simulations.

---

## Closing note

The terms in this glossary are intentionally precise.

They are designed to reduce ambiguity, not to introduce new jargon.
If a concept feels uncomfortable or restrictive, that usually indicates an implicit assumption being made explicit.
