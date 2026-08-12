// TrailMQ — architecture explorer
(function () {
  'use strict';

  var META = {
    proximity: { e: 'Proximity', t: 'GMP scales with proximity', l: 'The closer to the physical process a decision is made, the faster and more irreversible it becomes — and the harder the evidence is to reconstruct later. Filter by decision layer to focus on one system level.' },
    time:      { e: 'Time', t: 'Decisions are bound to a window', l: 'Every value only means something inside the time window it belonged to. Context that is not captured in that window cannot be recovered afterwards.' },
    alcoa:     { e: 'ALCOA++', t: 'Data integrity, by principle', l: 'Use ALCOA++ as an assessment lens for the complete record lifecycle. TrailMQ provides technical evidence with explicit boundaries; it does not make the deployed system compliant by itself.' },
    gates:     { e: 'Decision gates', t: 'Current enforcement and planned gates', l: 'TrailMQ currently records allow and deny outcomes. Rate-limit, missing-context defer and escalation illustrate architecture direction and are labelled as planned or conceptual below.' },
    scenario:  { e: 'Planned scenario', t: 'A proposed OEE-to-gate walkthrough', l: 'Follow the planned live-versus-historical recipe from a machine value to linked review evidence. This workflow is not executable in the current public distribution.' }
  };

  var perspSeg = document.getElementById('perspSeg');
  var layerSeg = document.getElementById('layerSeg');
  var layerRow = document.getElementById('layerRow');
  var panels = Array.prototype.slice.call(document.querySelectorAll('.persp'));
  var eyebrow = document.getElementById('perspEyebrow');
  var title = document.getElementById('perspTitle');
  var lead = document.getElementById('perspLead');

  var current = 'proximity';
  var layer = 'all';

  function applyLayer() {
    var active = document.querySelector('.persp[data-panel="' + current + '"]');
    if (!active) return;
    active.querySelectorAll('[data-layer]').forEach(function (el) {
      var l = el.getAttribute('data-layer');
      var show = (layer === 'all') || (l === 'all') || (l === layer);
      el.hidden = !show;
    });
  }

  function setPersp(p) {
    current = p;
    panels.forEach(function (panel) {
      panel.classList.toggle('show', panel.getAttribute('data-panel') === p);
    });
    var m = META[p];
    if (m && eyebrow && title && lead) { eyebrow.textContent = m.e; title.textContent = m.t; lead.textContent = m.l; }
    // ALCOA cards are layer-agnostic — hide the layer control there
    if (layerRow) layerRow.style.display = (p === 'alcoa') ? 'none' : '';
    applyLayer();
  }

  if (perspSeg) {
    perspSeg.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-persp]');
      if (!btn) return;
      perspSeg.querySelectorAll('button').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      setPersp(btn.getAttribute('data-persp'));
    });
  }
  if (layerSeg) {
    layerSeg.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-layer]');
      if (!btn) return;
      layerSeg.querySelectorAll('button').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      layer = btn.getAttribute('data-layer');
      applyLayer();
    });
  }

  setPersp('proximity');
})();
