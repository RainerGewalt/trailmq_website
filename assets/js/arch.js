// TrailMQ — architecture explorer
(function () {
  'use strict';

  var META = {
    proximity: { e: 'Proximity', t: 'GMP scales with proximity', l: 'The closer to the physical process a decision is made, the faster and more irreversible it becomes — and the harder the evidence is to reconstruct later. Filter by decision layer to focus on one system level.' },
    time:      { e: 'Time', t: 'Decisions are bound to a window', l: 'Every value only means something inside the time window it belonged to. Context that is not captured in that window cannot be recovered afterwards.' },
    alcoa:     { e: 'ALCOA++', t: 'Data integrity, by principle', l: 'The evidence TrailMQ records is built to satisfy the ALCOA++ data-integrity principles — attributable, contemporaneous, original, accurate, complete, consistent, enduring and available.' },
    gates:     { e: 'Decision gates', t: 'Every decision is a recorded gate', l: 'Accept, block, defer, escalate or flag — each gate is owned by the right layer and written to the audit trail with the policy that produced it.' },
    scenario:  { e: 'Scenario', t: 'A concrete OEE-to-gate walkthrough', l: 'Follow one live value from the machine to a hash-chained evidence record across all three layers. Filter to see which steps each layer owns.' }
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
