/**
 * TrailMQ Wiki - JavaScript
 */

(function() {
  'use strict';

  // ==========================================================================
  // Mobile Sidebar Toggle
  // ==========================================================================
  const mobileToggle = document.getElementById('wiki-mobile-toggle');
  const sidebar = document.getElementById('wiki-sidebar');
  const overlay = document.getElementById('wiki-overlay');

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('visible');
  }

  function openSidebar() {
    if (sidebar) sidebar.classList.add('open');
    if (overlay) overlay.classList.add('visible');
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      if (sidebar.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSidebar();
  });

  // ==========================================================================
  // Reading Progress Bar
  // ==========================================================================
  const progressBar = document.getElementById('reading-progress');

  if (progressBar) {
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = `${Math.min(100, progress)}%`;
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // ==========================================================================
  // Auto-generate heading IDs
  // ==========================================================================
  function slugify(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  document.querySelectorAll('.article-content h2, .article-content h3, .article-content h4').forEach((heading) => {
    if (!heading.id) {
      heading.id = slugify(heading.textContent);
    }
  });

  // ==========================================================================
  // Smooth scroll for anchor links
  // ==========================================================================
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', href);
      }
    });
  });

  // ==========================================================================
  // Client-side Search
  // ==========================================================================
  const searchInput = document.getElementById('wiki-search');

  if (searchInput) {
    let searchData = null;

    async function loadSearchIndex() {
      if (searchData) return;
      try {
        const response = await fetch('/wiki/search.json');
        if (response.ok) {
          searchData = await response.json();
        }
      } catch (e) {
        console.warn('Search index not available');
      }
    }

    function performSearch(query) {
      if (!searchData || !query.trim()) return [];

      const terms = query.toLowerCase().split(/\s+/);
      return searchData
        .filter((item) => {
          const searchable = `${item.title} ${item.description || ''} ${(item.tags || []).join(' ')} ${item.category || ''}`.toLowerCase();
          return terms.every((term) => searchable.includes(term));
        })
        .slice(0, 8);
    }

    function showResults(results) {
      const existing = document.querySelector('.search-results');
      if (existing) existing.remove();

      if (results.length === 0) return;

      const container = document.createElement('div');
      container.className = 'search-results';
      container.innerHTML = results
        .map((r) => `<a href="${r.url}"><strong>${r.title}</strong>${r.category ? `<br><small>${r.category}</small>` : ''}</a>`)
        .join('');

      searchInput.parentElement.appendChild(container);
    }

    searchInput.addEventListener('focus', loadSearchIndex);

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value;
      if (query.length < 2) {
        const existing = document.querySelector('.search-results');
        if (existing) existing.remove();
        return;
      }
      const results = performSearch(query);
      showResults(results);
    });

    // Close results on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.sidebar-search')) {
        const existing = document.querySelector('.search-results');
        if (existing) existing.remove();
      }
    });

    // Keyboard navigation
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const existing = document.querySelector('.search-results');
        if (existing) existing.remove();
        searchInput.blur();
      }
    });
  }

  // ==========================================================================
  // Copy code blocks
  // ==========================================================================
  document.querySelectorAll('.article-content pre').forEach((pre) => {
    const code = pre.querySelector('code');
    if (!code) return;

    const button = document.createElement('button');
    button.className = 'copy-code';
    button.textContent = 'Copy';
    button.setAttribute('aria-label', 'Copy code to clipboard');

    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(code.textContent);
        button.textContent = 'Copied!';
        setTimeout(() => { button.textContent = 'Copy'; }, 2000);
      } catch (e) {
        button.textContent = 'Error';
        setTimeout(() => { button.textContent = 'Copy'; }, 2000);
      }
    });

    pre.appendChild(button);
  });

  // ==========================================================================
  // External link handling
  // ==========================================================================
  document.querySelectorAll('.article-content a[href^="http"]').forEach((link) => {
    if (!link.hostname.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

})();
