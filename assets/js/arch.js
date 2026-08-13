// TrailMQ — architecture explorer
//
// Five perspectives on one model, filterable by decision layer. Two rules
// drive the interaction design here:
//   1. Every control must produce a visible result. The panel is directly
//      below the sticky bar, and a live count states what the filter did —
//      including when it removed everything.
//   2. The scenario is a numbered sequence, so filtering it dims the steps
//      that do not match instead of tearing them out of the order.
(function () {
  'use strict';

  var META = {
    proximity: { e: 'Proximity', t: 'GMP scales with proximity', l: 'The closer to the physical process a decision is made, the faster and more irreversible it becomes — and the harder the evidence is to reconstruct later. Filter by decision layer to focus on one system level.', unit: ['decision object', 'decision objects'] },
    time:      { e: 'Time', t: 'Decisions are bound to a window', l: 'Every value only means something inside the time window it belonged to. Context that is not captured in that window cannot be recovered afterwards.', unit: ['time window', 'time windows'] },
    alcoa:     { e: 'ALCOA++', t: 'Data integrity, by principle', l: 'Use ALCOA++ as an assessment lens for the complete record lifecycle. TrailMQ provides technical evidence with explicit boundaries; it does not make the deployed system compliant by itself.', unit: ['principle', 'principles'] },
    gates:     { e: 'Decision gates', t: 'Current enforcement and planned gates', l: 'TrailMQ currently records allow and deny outcomes. Rate-limit, missing-context defer and escalation illustrate architecture direction and are labelled as planned or conceptual below.', unit: ['gate', 'gates'] },
    scenario:  { e: 'Planned scenario', t: 'A proposed OEE-to-gate walkthrough', l: 'Follow the planned live-versus-historical recipe from a machine value to linked review evidence. This workflow is not executable in the current public distribution.', unit: ['step', 'steps'] }
  };
  var LAYER_NAME = { line: 'Line', site: 'Site', cloud: 'Cloud' };

  var perspSeg = document.getElementById('perspSeg');
  var layerSeg = document.getElementById('layerSeg');
  var layerRow = document.getElementById('layerRow');
  var result = document.getElementById('archResult');
  var empty = document.getElementById('archEmpty');
  var head = document.getElementById('perspHead');
  var eyebrow = document.getElementById('perspEyebrow');
  var title = document.getElementById('perspTitle');
  var lead = document.getElementById('perspLead');
  var panels = Array.prototype.slice.call(document.querySelectorAll('.persp'));
  var tabs = perspSeg ? Array.prototype.slice.call(perspSeg.querySelectorAll('[role="tab"]')) : [];

  var current = 'proximity';
  var layer = 'all';
  // Nothing writes to the URL until the reader actually picks something —
  // a fresh visit should not gain a fragment on its own.
  var ready = false;
  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function panelOf(p) { return document.querySelector('.persp[data-panel="' + p + '"]'); }

  // ---- filtering ----------------------------------------------------------
  function applyLayer() {
    var active = panelOf(current);
    if (!active) return { shown: 0, total: 0 };
    var mute = active.getAttribute('data-filter') === 'mute';
    var items = active.querySelectorAll('[data-layer]');
    var shown = 0;
    items.forEach(function (el) {
      var l = el.getAttribute('data-layer');
      var match = (layer === 'all') || (l === 'all') || (l === layer);
      if (match) shown++;
      if (mute) {
        el.hidden = false;
        el.classList.toggle('is-match', match && layer !== 'all');
        el.classList.toggle('is-muted', !match && layer !== 'all');
      } else {
        el.classList.remove('is-muted', 'is-match');
        el.hidden = !match;
      }
    });
    return { shown: shown, total: items.length, mute: mute };
  }

  function report(counts) {
    if (!result) return;
    var meta = META[current];
    // "1 of 5 gates" — the unit agrees with the total, not with the subset.
    var unit = meta.unit[counts.total === 1 ? 0 : 1];
    if (layer === 'all' || counts.shown === counts.total) {
      result.textContent = counts.total + ' ' + unit;
      result.removeAttribute('data-filtered');
    } else {
      result.textContent = counts.shown + ' of ' + counts.total + ' ' + unit +
        ' at ' + (LAYER_NAME[layer] || layer) + ' level';
      result.setAttribute('data-filtered', 'true');
    }
    if (empty) empty.hidden = !(counts.shown === 0 && !counts.mute);
  }

  // ---- perspective switching ---------------------------------------------
  function setPersp(p, opts) {
    opts = opts || {};
    if (!META[p]) p = 'proximity';
    current = p;

    panels.forEach(function (panel) {
      var on = panel.getAttribute('data-panel') === p;
      panel.classList.toggle('show', on);
      panel.hidden = !on;
    });
    tabs.forEach(function (tab) {
      var on = tab.getAttribute('data-persp') === p;
      tab.setAttribute('aria-selected', on ? 'true' : 'false');
      tab.tabIndex = on ? 0 : -1;
      tab.classList.toggle('active', on);
    });

    var m = META[p];
    if (eyebrow) eyebrow.textContent = m.e;
    if (title) title.textContent = m.t;
    if (lead) lead.textContent = m.l;

    // ALCOA++ describes principles, not system levels — the layer filter has
    // nothing to act on, so it is removed rather than left as a dead control.
    if (layerRow) layerRow.hidden = (p === 'alcoa');

    report(applyLayer());
    if (opts.scroll) keepHeadInView();
    syncHash();
  }

  // Switching from a long panel to a short one can leave the reader staring at
  // whitespace, so pull the heading back under the sticky bar when it scrolled
  // out of reach.
  function keepHeadInView() {
    if (!head) return;
    var bar = document.getElementById('archControls');
    var offset = (bar ? bar.getBoundingClientRect().height : 0) + 84;
    var top = head.getBoundingClientRect().top;
    if (top >= offset - 8 && top < window.innerHeight * 0.6) return;
    var y = head.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  function setLayer(l) {
    layer = l;
    if (layerSeg) {
      layerSeg.querySelectorAll('button[data-layer]').forEach(function (b) {
        var on = b.getAttribute('data-layer') === l;
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
        b.classList.toggle('active', on);
      });
    }
    report(applyLayer());
    syncHash();
  }

  // ---- shareable state ----------------------------------------------------
  function syncHash() {
    if (!ready) return;
    var parts = [current];
    // ALCOA++ ignores the layer filter, so the URL should not claim otherwise.
    if (layer !== 'all' && current !== 'alcoa') parts.push(layer);
    var hash = '#' + parts.join('-');
    if (window.location.hash !== hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search + hash);
    }
  }

  function readHash() {
    var raw = (window.location.hash || '').replace(/^#/, '');
    if (!raw) return;
    var parts = raw.split('-');
    var p = parts[0], l = parts[1];
    if (META[p]) current = p;
    if (l && LAYER_NAME[l]) layer = l;
  }

  // ---- wiring -------------------------------------------------------------
  if (perspSeg) {
    perspSeg.addEventListener('click', function (e) {
      var btn = e.target.closest('[role="tab"]');
      if (!btn) return;
      setPersp(btn.getAttribute('data-persp'), { scroll: true });
    });
    // Arrow-key navigation is what makes a tablist a tablist.
    perspSeg.addEventListener('keydown', function (e) {
      var idx = tabs.indexOf(document.activeElement);
      if (idx === -1) return;
      var next = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (idx + 1) % tabs.length;
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (idx - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = tabs.length - 1;
      if (next === null) return;
      e.preventDefault();
      tabs[next].focus();
      setPersp(tabs[next].getAttribute('data-persp'));
    });
  }

  if (layerSeg) {
    layerSeg.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-layer]');
      if (!btn) return;
      setLayer(btn.getAttribute('data-layer'));
    });
  }

  if (empty) {
    empty.addEventListener('click', function (e) {
      if (e.target.closest('[data-reset-layer]')) setLayer('all');
    });
  }

  window.addEventListener('hashchange', function () {
    var before = current + '-' + layer;
    readHash();
    if (current + '-' + layer === before) return;
    setLayer(layer);
    setPersp(current, { scroll: true });
  });

  readHash();
  setLayer(layer);
  setPersp(current);
  ready = true;
})();
