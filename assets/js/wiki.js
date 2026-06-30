// TrailMQ Wiki — article-level enhancements
(function () {
  'use strict';

  // Auto-generate IDs for headings that lack them (needed for TOC links)
  function slugify(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  document.querySelectorAll('.article-content h2, .article-content h3, .article-content h4').forEach(function (h) {
    if (!h.id) h.id = slugify(h.textContent);
  });

  // Copy buttons on code blocks
  document.querySelectorAll('.article-content pre').forEach(function (pre) {
    var code = pre.querySelector('code');
    if (!code) return;
    var btn = document.createElement('button');
    btn.className = 'copy-code';
    btn.textContent = 'Copy';
    btn.setAttribute('aria-label', 'Copy code to clipboard');
    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(code.textContent).then(function () {
        btn.textContent = 'Copied!';
        setTimeout(function () { btn.textContent = 'Copy'; }, 2000);
      }, function () {
        btn.textContent = 'Error';
        setTimeout(function () { btn.textContent = 'Copy'; }, 2000);
      });
    });
    pre.appendChild(btn);
  });

  // Open external links in new tab
  document.querySelectorAll('.article-content a[href^="http"]').forEach(function (link) {
    if (!link.hostname || link.hostname === window.location.hostname) return;
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });

})();
