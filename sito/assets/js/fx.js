/* =========================================================
   PHIAT LUX – Effetti dinamici
   Caricato dopo main.js: agisce sui contenuti già generati.
   ========================================================= */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const isHome = document.body.dataset.page === "home";

  const seen = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("is-in"); seen.unobserve(e.target); }
  }), { threshold: .15, rootMargin: "0px 0px -60px 0px" });

  /* ---------- Barra di avanzamento ---------- */
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  document.body.append(progress);

  /* ---------- Titoli parola per parola ---------- */
  const esc = s => s.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
  $$("main h2").forEach(h => {
    if ([...h.childNodes].some(n => n.nodeType !== 3)) return;
    h.innerHTML = h.textContent.trim().split(/\s+/)
      .map((w, i) => `<span class="w"><span style="--i:${i}">${esc(w)}</span></span>`).join(" ");
    h.classList.add("split");
    seen.observe(h);
  });

  /* ---------- Elenchi a cascata ---------- */
  $$(".steps, .checklist, .chips, .svc-list, .norms, .incentive__box ul").filter(l => !l.closest(".area")).forEach(list => {
    const items = [...list.children];
    items.forEach((it, i) => it.style.setProperty("--i", i));
    list.classList.add("fx-stagger");
    seen.observe(list);
    // a fine animazione restituisce agli elementi le loro transizioni originali
    new IntersectionObserver(([e], o) => {
      if (!e.isIntersecting) return;
      o.disconnect();
      setTimeout(() => { list.classList.remove("fx-stagger"); items.forEach(it => it.style.removeProperty("--i")); }, 900 + items.length * 80);
    }, { threshold: .15, rootMargin: "0px 0px -60px 0px" }).observe(list);
  });

  /* ---------- Immagini con sipario, gallerie a comparsa ---------- */
  $$(".collage__main, .collage__small, .case-feature__media, .svc-media").forEach(el => { el.classList.add("fx-img"); seen.observe(el); });
  $$(".gallery, .photos").forEach(g => {
    $$(".gallery__item", g).forEach((it, i) => it.style.setProperty("--i", i));
    g.classList.add("fx-clip");
    seen.observe(g);
  });

  /* ---------- Linea "corrente" del processo ---------- */
  $$(".process").forEach(p => { $$(".process__step .process__icon", p).forEach((ic, i) => ic.style.setProperty("--n", i)); seen.observe(p); });
  $$(".feature__icon").forEach((ic, i) => ic.style.setProperty("--d", `${i * .6}s`));

  /* ---------- Parole giganti di sfondo ---------- */
  const words = [];
  const addWord = (sec, w) => {
    if (!sec || !w) return;
    const el = document.createElement("span");
    el.className = "bg-word"; el.textContent = w; el.setAttribute("aria-hidden", "true");
    sec.classList.add("has-word"); sec.prepend(el);
    words.push({ el, sec, dir: words.length % 2 ? 1 : -1 });
  };
  if (isHome) {
    Object.entries({ metodo: "Metodo", soluzioni: "Soluzioni", servizi: "Servizi", "per-chi": "Clienti", processo: "Processo", lavori: "Progetti", recensioni: "Fiducia", questionario: "Progetto", zone: "Piemonte", contatti: "Contatti" })
      .forEach(([id, w]) => addWord(document.getElementById(id), w));
  } else {
    const names = ["", "Interventi", "Clienti", "Vantaggi", "Cantieri", "FAQ", "Servizi", "Preventivo"];
    $$("#service-page > section").forEach((s, i) => addWord(s, names[i]));
  }

  /* ---------- Secondo nastro + velocità legata allo scroll ---------- */
  const mq = $(".marquee");
  if (mq) {
    const bolt = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/></svg>';
    const items = ["Sopralluogo e preventivo chiaro", "Dichiarazione di conformità", "Un solo referente", "Torino e Piemonte", "Assistenza dopo l'installazione"]
      .map(w => `<span class="marquee__item">${w} ${bolt}</span>`).join("");
    const alt = document.createElement("div");
    alt.className = "marquee marquee--alt"; alt.setAttribute("aria-hidden", "true");
    alt.innerHTML = `<div class="marquee__track">${items + items}</div>`;
    const wrap = document.createElement("div");
    wrap.className = "marquee-wrap";
    wrap.append(alt);
    mq.after(wrap);
  }
  const tracks = $$(".marquee__track");
  let lastY = scrollY, vel = 0;
  const marqueeTick = () => {
    const y = scrollY;
    vel = vel * .9 + (y - lastY) * .1; lastY = y;
    const rate = (1 + Math.min(Math.abs(vel) * .4, 6)) * (vel < -.5 ? -1 : 1);
    tracks.forEach(t => {
      const a = t.getAnimations()[0];
      if (a && Math.abs(a.playbackRate - rate) > .05) a.playbackRate = rate;
    });
    requestAnimationFrame(marqueeTick);
  };
  if (tracks.length && !reduce) requestAnimationFrame(marqueeTick);

  /* ---------- Scroll: barra, parole di sfondo, parallasse ---------- */
  const para = [[".collage__small", -.12], [".collage__badge", .1], [".collage__ring", -.2], [".case-feature__tag", .08]]
    .flatMap(([s, k]) => $$(s).map(el => ({ el, k })));
  let ticking = false;
  const onScroll = () => {
    ticking = false;
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    if (reduce) return;
    words.forEach(({ el, sec, dir }) => {
      const r = sec.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      const p = (innerHeight - r.top) / (innerHeight + r.height);
      el.style.transform = `translateX(${dir * (p - .5) * 40}vw)`;
    });
    para.forEach(({ el, k }) => {
      const r = el.getBoundingClientRect();
      el.style.translate = `0 ${(r.top + r.height / 2 - innerHeight / 2) * k}px`;
    });
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  addEventListener("resize", onScroll);
  onScroll();

  if (reduce) return;

  /* ---------- Hero: rete di punti luminosi + parallasse ---------- */
  const hero = $(".hero");
  if (hero) {
    const c = document.createElement("canvas");
    c.className = "hero__fx";
    hero.insertBefore(c, $(".hero__grid", hero));
    const ctx = c.getContext("2d");
    let W, H, pts = [], running = true;
    const mouse = { x: -999, y: -999 };
    const size = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      W = hero.offsetWidth; H = hero.offsetHeight;
      c.width = W * dpr; c.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      pts = Array.from({ length: Math.min(Math.round(W * H / 16000), 95) }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4,
        r: Math.random() * 1.6 + .7, ph: Math.random() * Math.PI * 2
      }));
    };
    size();
    addEventListener("resize", size);
    hero.addEventListener("pointermove", e => {
      const r = hero.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
      hero.style.setProperty("--hx", (mouse.x / W - .5).toFixed(3));
      hero.style.setProperty("--hy", (mouse.y / H - .5).toFixed(3));
    });
    hero.addEventListener("pointerleave", () => { mouse.x = mouse.y = -999; hero.style.setProperty("--hx", 0); hero.style.setProperty("--hy", 0); });
    const LINK = 130, MOUSE = 210;
    const draw = t => {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        const dx = mouse.x - p.x, dy = mouse.y - p.y, d = Math.hypot(dx, dy);
        if (d < MOUSE) { p.x += dx * .006; p.y += dy * .006; }
      }
      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(255,194,26,${(1 - d / LINK) * .3})`;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (dm < MOUSE) {
          ctx.strokeStyle = `rgba(255,214,90,${(1 - dm / MOUSE) * .75})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
        const glow = .55 + Math.sin(t / 600 + a.ph) * .45;
        ctx.fillStyle = `rgba(255,214,90,${glow})`;
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
      }
      requestAnimationFrame(draw);
    };
    new IntersectionObserver(([e]) => {
      const was = running; running = e.isIntersecting;
      if (running && !was) requestAnimationFrame(draw);
    }).observe(hero);
    requestAnimationFrame(draw);
  }

  if (!fine) return;

  /* ---------- Cursore personalizzato ---------- */
  const cur = document.createElement("div");
  cur.className = "cursor";
  document.body.append(cur);
  let cx = innerWidth / 2, cy = innerHeight / 2, tx = cx, ty = cy;
  document.addEventListener("pointerleave", () => cur.classList.remove("on"));
  const follow = () => {
    cx += (tx - cx) * .2; cy += (ty - cy) * .2;
    cur.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(follow);
  };
  requestAnimationFrame(follow);

  /* ---------- Schede 3D, bottoni magnetici, luce nelle sezioni scure ---------- */
  let tiltEl = null, magEl = null, glowSec = null;
  const resetTilt = () => {
    if (!tiltEl) return;
    tiltEl.style.transition = "transform .6s cubic-bezier(.2,.7,.2,1)";
    tiltEl.style.transform = "";
    tiltEl.classList.remove("is-tilting");
    tiltEl = null;
  };
  const resetMag = () => { if (magEl) { magEl.style.translate = ""; magEl = null; } };

  document.addEventListener("pointermove", e => {
    tx = e.clientX; ty = e.clientY;
    cur.classList.add("on");
    cur.classList.toggle("hover", !!e.target.closest("a, button, label, input, select, textarea, summary"));

    const t = e.target.closest(".service-card, .area, .card, .info-card, .review__card");
    if (t !== tiltEl) resetTilt();
    if (t) {
      tiltEl = t;
      const r = t.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      const k = t.classList.contains("info-card") ? .4 : 1;
      t.classList.add("tilt", "is-tilting");
      t.style.setProperty("--mx", `${x * 100}%`);
      t.style.setProperty("--my", `${y * 100}%`);
      t.style.transition = "transform .12s ease-out";
      t.style.transform = `perspective(900px) rotateX(${(.5 - y) * 9 * k}deg) rotateY(${(x - .5) * 11 * k}deg) translateY(-6px)`;
    }

    const m = e.target.closest(".btn, .hero__arrow, .whatsapp, .to-top");
    if (m !== magEl) resetMag();
    if (m) {
      magEl = m;
      const r = m.getBoundingClientRect();
      m.style.translate = `${(e.clientX - r.left - r.width / 2) * .25}px ${(e.clientY - r.top - r.height / 2) * .35}px`;
    }

    const s = e.target.closest(".section:not(.section--light)");
    if (s !== glowSec) { glowSec?.classList.remove("glow"); glowSec = s; }
    if (s) {
      const r = s.getBoundingClientRect();
      s.classList.add("glow");
      s.style.setProperty("--gx", `${e.clientX - r.left}px`);
      s.style.setProperty("--gy", `${e.clientY - r.top}px`);
    }
  }, { passive: true });
})();
