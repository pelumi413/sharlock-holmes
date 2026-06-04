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

  // Smooth scroll for in-page anchors (already CSS, but cleans focus)
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
})();
