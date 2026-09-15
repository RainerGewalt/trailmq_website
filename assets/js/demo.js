// TrailMQ — decision-investigation replay.
//
// Progressive enhancement: _includes/demo.html ships six plain <li> steps that
// are all readable with the script absent. This file upgrades them in place to
// an ARIA tab widget and builds every control itself, so a failed or blocked
// script never leaves a dead button behind.
//
// Accessibility contract (see docs/website-ia-and-flow.md §4):
//   - no hover is required for anything
//   - full keyboard operation with the standard tabs pattern
//   - the active step is announced through a polite live region
//   - prefers-reduced-motion disables auto-advance and the cross-fade
(function () {
  'use strict';

  var root = document.querySelector('[data-demo]');
  if (!root) return;

  var list = root.querySelector('[data-demo-steps]');
  var steps = Array.prototype.slice.call(root.querySelectorAll('[data-demo-step]'));
  var controls = root.querySelector('[data-demo-controls]');
  var status = root.querySelector('[data-demo-status]');
  if (!list || !controls || steps.length === 0) return;

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var STEP_MS = 9000;
  var current = 0;
  var playing = false;
  var timer = null;
  var tabs = [];

  // ---------------------------------------------------------------- build UI

  var nav = document.createElement('div');
  nav.className = 'demo__tabs';
  nav.setAttribute('role', 'tablist');
  nav.setAttribute('aria-label', 'Investigation steps');

  steps.forEach(function (step, i) {
    var id = step.id || 'demo-step-' + (i + 1);
    step.id = id;

    var tab = document.createElement('button');
    tab.type = 'button';
    tab.className = 'demo__tab';
    tab.id = id + '-tab';
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', id);
    tab.innerHTML =
      '<span class="demo__tab-n">' + (i + 1) + '</span>' +
      '<span class="demo__tab-l">' + (step.getAttribute('data-demo-label') || ('Step ' + (i + 1))) + '</span>';
    tab.addEventListener('click', function () {
      stop();
      show(i, true);
    });
    nav.appendChild(tab);
    tabs.push(tab);

    step.setAttribute('role', 'tabpanel');
    step.setAttribute('aria-labelledby', tab.id);
    step.setAttribute('tabindex', '0');
  });

  // Roving tabindex + arrow keys, per the APG tabs pattern.
  nav.addEventListener('keydown', function (e) {
    var i = tabs.indexOf(document.activeElement);
    if (i === -1) return;
    var next = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % tabs.length;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = tabs.length - 1;
    if (next === null) return;
    e.preventDefault();
    stop();
    show(next, true);
    tabs[next].focus();
  });

  var playBtn = document.createElement('button');
  playBtn.type = 'button';
  playBtn.className = 'demo__btn demo__btn--play';
  playBtn.addEventListener('click', function () {
    if (playing) { stop(); return; }
    // Restarting from the last step should begin again, not stall.
    if (current === steps.length - 1) show(0, false);
    play();
  });

  var prevBtn = document.createElement('button');
  prevBtn.type = 'button';
  prevBtn.className = 'demo__btn';
  prevBtn.textContent = 'Back';
  prevBtn.addEventListener('click', function () {
    stop();
    show(Math.max(0, current - 1), true);
  });

  var nextBtn = document.createElement('button');
  nextBtn.type = 'button';
  nextBtn.className = 'demo__btn';
  nextBtn.textContent = 'Next';
  nextBtn.addEventListener('click', function () {
    stop();
    show(Math.min(steps.length - 1, current + 1), true);
  });

  controls.appendChild(prevBtn);
  controls.appendChild(playBtn);
  controls.appendChild(nextBtn);
  controls.hidden = false;
  list.parentNode.insertBefore(nav, list);

  // ------------------------------------------------------------------- state

  function syncPlayLabel() {
    playBtn.textContent = playing ? 'Pause' : (reduceMotion ? 'Play steps' : 'Play');
    playBtn.setAttribute('aria-pressed', playing ? 'true' : 'false');
  }

  function show(i, announce) {
    current = i;
    steps.forEach(function (step, n) {
      var active = n === i;
      step.hidden = !active;
      step.classList.toggle('is-active', active);
      tabs[n].setAttribute('aria-selected', active ? 'true' : 'false');
      tabs[n].setAttribute('tabindex', active ? '0' : '-1');
      tabs[n].classList.toggle('is-active', active);
    });
    prevBtn.disabled = i === 0;
    nextBtn.disabled = i === steps.length - 1;

    if (announce && status) {
      var title = steps[i].querySelector('.demo__title');
      status.textContent = 'Step ' + (i + 1) + ' of ' + steps.length +
        (title ? ': ' + title.textContent.trim() : '');
    }
  }

  function tick() {
    if (current >= steps.length - 1) { stop(); return; }
    show(current + 1, true);
    timer = window.setTimeout(tick, STEP_MS);
  }

  function play() {
    playing = true;
    syncPlayLabel();
    root.setAttribute('data-playing', 'true');
    timer = window.setTimeout(tick, STEP_MS);
  }

  function stop() {
    playing = false;
    if (timer) { window.clearTimeout(timer); timer = null; }
    root.removeAttribute('data-playing');
    syncPlayLabel();
  }

  // Pause when the tab is backgrounded — an unattended timer advancing a live
  // region while the page is hidden is just noise.
  document.addEventListener('visibilitychange', function () {
    if (document.hidden && playing) stop();
  });

  root.setAttribute('data-demo-ready', 'true');
  syncPlayLabel();
  show(0, false);

  // Auto-play once, only when the demo is actually on screen and only when the
  // visitor has not asked for reduced motion. Never loops.
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var started = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting || started) return;
        started = true;
        io.disconnect();
        play();
      });
    }, { threshold: 0.4 });
    io.observe(root);
  }
})();
