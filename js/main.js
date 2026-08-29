/* RAP Initiative — interactions */
(function () {
  'use strict';

  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');

  // Sticky shadow on scroll
  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 4);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile nav toggle
  if (navToggle && header) {
    navToggle.addEventListener('click', () => {
      const open = header.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('.nav-menu a').forEach((a) => {
      a.addEventListener('click', () => header.classList.remove('nav-open'));
    });
  }

  // Reveal on scroll
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealItems.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealItems.forEach((el) => io.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add('is-visible'));
  }

  // Animated counters
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseFloat(el.dataset.count);
          const decimals = parseInt(el.dataset.decimals || '0', 10);
          const duration = 1400;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            const value = target * eased;
            el.textContent =
              decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString();
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          co.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => co.observe(el));
  }

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });

  // Newsletter / contact form — friendly demo handling
  document.querySelectorAll('form[data-demo]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = form.querySelector('.form-status');
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.dataset.label = btn.textContent;
        btn.textContent = 'Sending…';
      }
      setTimeout(() => {
        if (status) {
          status.textContent = 'Thank you — your message has been received. We\'ll be in touch shortly.';
          status.style.color = '#0E7C66';
        }
        form.reset();
        if (btn) {
          btn.disabled = false;
          btn.textContent = btn.dataset.label || 'Send';
        }
      }, 900);
    });
  });

  // Dynamic year in footer
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // ---- Article system ----
  const CARD_THEMES = ['a', 'b', 'c'];

  function formatDate(iso) {
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  function cardHTML(article, idx) {
    const theme = CARD_THEMES[idx % CARD_THEMES.length];
    const mediaInner = article.image
      ? `<img src="${article.image}" alt="${article.imageAlt || article.title}">`
      : `<span class="card-tag">${article.category}</span>${article.title.split(' ').slice(0, 3).join(' ').toUpperCase()}`;
    return `
      <article class="card">
        <div class="card-media ${theme}">${mediaInner}</div>
        <div class="card-body">
          <div class="card-meta">
            <span>${formatDate(article.date)}</span>
            <span>·</span>
            <span>${article.readTime} read</span>
          </div>
          <h3>${article.title}</h3>
          <p>${article.excerpt}</p>
          <a class="btn-link" href="article.html?id=${article.id}">Read more →</a>
        </div>
      </article>`;
  }

  async function loadArticles() {
    try {
      const res = await fetch('data/articles.json');
      if (!res.ok) throw new Error('not found');
      return await res.json();
    } catch (e) {
      return [];
    }
  }

  // Home page — latest 3 articles
  const newsGrid = document.getElementById('news-grid');
  if (newsGrid) {
    loadArticles().then((articles) => {
      if (!articles.length) return;
      newsGrid.innerHTML = articles.slice(0, 3).map((a, i) => cardHTML(a, i)).join('');
    });
  }

  // News listing page — all articles with filter
  const allNewsGrid = document.getElementById('all-news-grid');
  if (allNewsGrid) {
    let allArticles = [];
    let activeFilter = 'all';

    function renderFiltered() {
      const list = activeFilter === 'all'
        ? allArticles
        : allArticles.filter((a) => a.category.toLowerCase() === activeFilter);
      allNewsGrid.innerHTML = list.length
        ? list.map((a, i) => cardHTML(a, i)).join('')
        : '<p style="color:var(--muted);grid-column:1/-1">No articles in this category yet.</p>';
    }

    document.querySelectorAll('[data-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-filter]').forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        activeFilter = btn.dataset.filter;
        renderFiltered();
      });
    });

    loadArticles().then((articles) => {
      allArticles = articles;
      renderFiltered();
    });
  }

  // Single article page
  const articleBodyEl = document.getElementById('article-body');
  if (articleBodyEl) {
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get('id');

    loadArticles().then((articles) => {
      const article = articles.find((a) => a.id === articleId);
      if (!article) {
        articleBodyEl.innerHTML = '<p>Article not found. <a href="news.html">Back to news →</a></p>';
        return;
      }

      document.title = article.title + ' — RAP Initiative';
      const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
      setEl('article-title', article.title);
      setEl('article-date', formatDate(article.date));
      setEl('article-category', article.category);
      setEl('article-category-tag', article.category);
      setEl('article-author', 'By ' + article.author);
      setEl('article-readtime', article.readTime + ' read');

      let html = '';
      if (article.image) {
        html += `<figure class="article-figure"><img src="${article.image}" alt="${article.imageAlt || article.title}"><figcaption>${article.imageAlt || ''}</figcaption></figure>`;
      }
      if (article.youtube) {
        html += `<div class="article-video"><iframe src="https://www.youtube-nocookie.com/embed/${article.youtube}" title="Video" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;
      }
      html += article.paragraphs.map((p) => `<p>${p}</p>`).join('');
      articleBodyEl.innerHTML = html;

      const relatedGrid = document.getElementById('related-grid');
      if (relatedGrid) {
        const related = articles.filter((a) => a.id !== articleId).slice(0, 3);
        relatedGrid.innerHTML = related.map((a, i) => cardHTML(a, i)).join('');
      }
    });
  }
})();
