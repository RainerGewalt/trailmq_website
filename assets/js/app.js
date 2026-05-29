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
  var revealEls = [];
  document.querySelectorAll('.section .section__head, .pipeline, .feat-grid, .aud-grid, .cmp, .std-grid, .kpi-steps, .split, .qs-grid, .faq, .closing-quote').forEach(function (el) {
    el.classList.add('reveal');
    revealEls.push(el);
  });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
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

  // Footer year (fallback if not set by Liquid)
  var y = document.getElementById('year');
  if (y && !y.textContent.trim()) y.textContent = String(new Date().getFullYear());
})();
