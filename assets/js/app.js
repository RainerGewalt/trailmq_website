// TrailMQ — site interactions
(function () {
  'use strict';

  // Header scroll state (transparent → solid)
  var header = document.getElementById('siteHeader');
  function onScroll() {
    if (!header) return;
    header.setAttribute('data-scrolled', window.scrollY > 24 ? 'true' : 'false');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav
  var toggle = document.getElementById('navToggle');
  var mobile = document.getElementById('navMobile');
  if (toggle && mobile) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      mobile.classList.toggle('open', !open);
    });
    mobile.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        mobile.classList.remove('open');
      });
    });
  }

  // Reveal on scroll
  var io;
  var revealEls = [];
  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function reveal(el) {
    el.classList.add('in');
    if (io) io.unobserve(el);
  }
  function revealVisibleNow() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    revealEls.forEach(function (el) {
      if (el.classList.contains('in')) return;
      var rect = el.getBoundingClientRect();
      if (rect.top < vh * 0.92 && rect.bottom > 0) reveal(el);
    });
  }
  function syncHashTarget() {
    if (!window.location.hash || window.location.hash.length < 2) return;
    var id = window.location.hash.slice(1);
    try { id = decodeURIComponent(id); } catch (e) {}
    var target = document.getElementById(id);
    if (!target) return;
    var pad = parseFloat(window.getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
    var top = target.getBoundingClientRect().top + window.pageYOffset - pad;
    window.scrollTo(0, top);
    window.setTimeout(revealVisibleNow, 80);
  }
  function scheduleHashSync(delay) {
    window.setTimeout(syncHashTarget, delay);
  }
  document.querySelectorAll('.section .section__head, .pipeline, .feat-grid, .aud-grid, .cmp, .std-grid, .kpi-steps, .split, .qs-grid, .faq, .closing-quote').forEach(function (el) {
    el.classList.add('reveal');
    revealEls.push(el);
  });
  if (reduceMotion) {
    revealEls.forEach(reveal);
  } else if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) reveal(e.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
    window.setTimeout(revealVisibleNow, 80);
    scheduleHashSync(160);
    scheduleHashSync(700);
    window.addEventListener('load', function () {
      scheduleHashSync(120);
    });
    window.addEventListener('hashchange', function () {
      scheduleHashSync(120);
    });
  } else {
    revealEls.forEach(reveal);
  }

  // Active nav link on scroll (homepage section spy)
  var sections = ['evidence', 'capabilities', 'compare', 'regulated', 'faq']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav__links a'));
  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var id = e.target.id;
          navLinks.forEach(function (a) {
            var href = a.getAttribute('href') || '';
            a.classList.toggle('active', href.indexOf('#' + id) !== -1);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href*="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href') || '';
      var hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;
      var id = href.slice(hashIndex + 1);
      // Only handle if the target exists on this page and link is same-page
      var isSamePage = href.charAt(0) === '#' ||
        href.indexOf(window.location.pathname + '#') !== -1;
      if (!isSamePage || !id) return;
      var target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

})();
