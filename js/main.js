/* RAP Initiative — article system */
(function () {
  'use strict';

  function formatDate(iso) {
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  function cardHTML(article) {
    return `
      <a class="news-card" href="article.html?id=${article.id}">
        <span class="date">${article.category}</span>
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
      </a>`;
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

  const newsGrid = document.getElementById('news-grid');
  if (newsGrid) {
    let allArticles = [];
    let activeFilter = 'all';

    function renderFiltered() {
      const list = activeFilter === 'all'
        ? allArticles
        : allArticles.filter((a) => a.category.toLowerCase() === activeFilter);
      newsGrid.innerHTML = list.length
        ? list.map((a) => cardHTML(a)).join('')
        : '<p style="color:var(--gray);grid-column:1/-1;padding:2rem 0;">No articles in this category yet.</p>';
    }

    document.querySelectorAll('.filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        renderFiltered();
      });
    });

    loadArticles().then((articles) => {
      allArticles = articles;
      renderFiltered();
    });
  }

  const articleBodyEl = document.getElementById('article-body');
  if (articleBodyEl) {
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get('id');

    loadArticles().then((articles) => {
      const article = articles.find((a) => a.id === articleId);
      if (!article) {
        articleBodyEl.innerHTML = '<p>Article not found. <a href="news.html" style="color:var(--gold)">Back to news &rarr;</a></p>';
        return;
      }

      document.title = article.title + ' — RAP Initiative';
      const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
      setEl('article-title', article.title);
      setEl('article-date', formatDate(article.date));
      setEl('article-category', article.category);

      let html = '';
      if (article.youtube) {
        html += `<div class="video-wrap"><iframe src="https://www.youtube-nocookie.com/embed/${article.youtube}" title="Video" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;
      }
      if (article.image) {
        html += `<img src="${article.image}" alt="${article.imageAlt || article.title}">`;
      }
      html += article.paragraphs.map((p) => `<p>${p}</p>`).join('');
      articleBodyEl.innerHTML = html;
    });
  }
})();
