/**
 * EFFECTS — motion layer. Runs after components are mounted (called from app.js).
 *  - interactive particle network in the hero (reacts to the cursor)
 *  - rotating typewriter role line
 *  - scroll progress bar + cursor aura
 *  - staggered scroll reveals, count-up numbers
 *  - card spotlight + 3D tilt, magnetic buttons
 * Everything is skipped or simplified when the user prefers reduced motion.
 */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- Hero particle network ---------- */
  function heroCanvas() {
    const canvas = $('#hero-canvas');
    if (!canvas || reduce) return;
    const ctx = canvas.getContext('2d');
    const mouse = { x: -9999, y: -9999 };
    let w, h, dpr, pts = [], raf, visible = true;

    const size = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(110, Math.floor((w * h) / 14000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3, r: Math.random() * 1.4 + .4
      }));
    };

    const light = () => document.body.classList.contains('light-mode');
    const frame = () => {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      ctx.clearRect(0, 0, w, h);
      const rgb = light() ? '9,9,11' : '226,232,240';
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 140) { p.x += (dx / d) * 1.4; p.y += (dy / d) * 1.4; }   // gently repelled
        ctx.fillStyle = `rgba(${rgb},.55)`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], l = Math.hypot(p.x - q.x, p.y - q.y);
          if (l < 120) { ctx.strokeStyle = `rgba(${rgb},${.14 * (1 - l / 120)})`; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
        }
        if (d < 170) { ctx.strokeStyle = `rgba(125,211,252,${.5 * (1 - d / 170)})`; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
      }
    };

    size(); frame();
    window.addEventListener('resize', size);
    canvas.parentElement.addEventListener('pointermove', e => {
      const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    });
    canvas.parentElement.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(canvas);   // pause when off-screen
  }

  /* ---------- Typewriter role rotator ---------- */
  function rotator() {
    const el = $('#hero-rotator');
    if (!el) return;
    const words = JSON.parse(el.dataset.words || '[]');
    if (reduce || words.length < 2) return;
    let wi = 0, ci = words[0].length, del = true;
    const tick = () => {
      const word = words[wi];
      ci += del ? -1 : 1;
      el.textContent = word.slice(0, ci);
      let delay = del ? 35 : 70;
      if (!del && ci === word.length) { del = true; delay = 1800; }
      else if (del && ci === 0) { del = false; wi = (wi + 1) % words.length; delay = 300; }
      setTimeout(tick, delay);
    };
    setTimeout(tick, 2600);
  }

  /* ---------- Scroll progress + cursor aura ---------- */
  function chrome() {
    const bar = document.createElement('div'); bar.id = 'scroll-progress'; document.body.appendChild(bar);
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    };
    addEventListener('scroll', onScroll, { passive: true }); onScroll();

    if (!fine || reduce) return;
    const aura = document.createElement('div'); aura.id = 'cursor-aura'; document.body.prepend(aura);
    let tx = 0, ty = 0, x = 0, y = 0;
    addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; aura.style.opacity = 1; });
    (function loop() { x += (tx - x) * .12; y += (ty - y) * .12; aura.style.transform = `translate(${x}px,${y}px)`; requestAnimationFrame(loop); })();
  }

  /* ---------- Staggered reveals + count-up ---------- */
  function reveals() {
    const targets = [
      'section .text-center.max-w-3xl > *',
      'section .grid > *',
      '#journey .space-y-8 > *, #journey .space-y-12 > *',
      '#experience .glass-card',
      '#contact .grid > *',
      'footer .grid > *'
    ];
    const seen = new Set();
    targets.forEach(sel => $$(sel).forEach(el => {
      if (seen.has(el) || el.closest('#case-study-modal')) return;
      seen.add(el);
      el.classList.add('rv');
      const sibs = el.parentElement ? [...el.parentElement.children] : [];
      el.style.setProperty('--rd', `${Math.min(sibs.indexOf(el), 8) * 0.08}s`);
    }));

    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    seen.forEach(el => io.observe(el));

    // Count-up for numbers like "4+", "120", "98%" inside stat-like elements
    $$('[data-count]').forEach(el => {
      const end = parseFloat(el.dataset.count), suffix = el.dataset.suffix || '';
      const cio = new IntersectionObserver(([e]) => {
        if (!e.isIntersecting) return; cio.disconnect();
        if (reduce) { el.textContent = end + suffix; return; }
        const t0 = performance.now();
        (function step(t) {
          const k = Math.min((t - t0) / 1400, 1), v = end * (1 - Math.pow(1 - k, 4));
          el.textContent = Math.round(v) + suffix; if (k < 1) requestAnimationFrame(step);
        })(t0);
      }); cio.observe(el);
    });
  }

  /* ---------- Spotlight, tilt, magnetic (event delegation survives re-renders) ---------- */
  function interactions() {
    if (!fine) return;
    document.addEventListener('pointermove', e => {
      const card = e.target.closest?.('.glass-card, .focus-card');
      if (card) {
        const r = card.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
        card.style.setProperty('--mx', `${x}px`); card.style.setProperty('--my', `${y}px`);
        if (!reduce && card.closest('#projects, #expertise, #identity, #blackit')) {
          const rx = ((y / r.height) - .5) * -6, ry = ((x / r.width) - .5) * 6;
          card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
        }
      }
    });
    document.addEventListener('pointerout', e => {
      const card = e.target.closest?.('.glass-card, .focus-card');
      if (card && !card.contains(e.relatedTarget)) card.style.transform = '';
    });

    if (reduce) return;
    document.addEventListener('pointermove', e => {
      $$('.magnetic').forEach(b => {
        const r = b.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const dx = e.clientX - cx, dy = e.clientY - cy;
        b.style.transform = Math.hypot(dx, dy) < 90 ? `translate(${dx * .25}px, ${dy * .35}px)` : '';
      });
    });
  }

  window.initEffects = function () {
    chrome(); heroCanvas(); rotator(); reveals(); interactions();
  };
})();
