/* =========================================================
   PHIAT LUX – Interazioni del sito
   ========================================================= */
(() => {
  const C = window.PL_CONFIG, S = window.PL_SERVIZI, A = window.PL_AREE, IMG = window.PL_IMG;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const tel = C.telefono.replace(/\s/g, "");
  const wa = (text = "") => `https://wa.me/${C.whatsapp}${text ? "?text=" + encodeURIComponent(text) : ""}`;
  const svcUrl = slug => `servizio.html?s=${slug}`;
  const telOf = n => n.replace(/\s/g, "");
  const refCards = () => C.referenti.map(r => `
    <div class="info-card"><span class="info-card__icon">${icon("phone")}</span><span><small>${r.nome}</small><strong><a href="tel:${telOf(r.telefono)}">${r.telefono}</a></strong><a class="info-card__mail" href="mailto:${r.email}">${r.email}</a></span></div>`).join("");

  /* ---------- Icone (SVG lineari) ---------- */
  const P = {
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    wind: '<path d="M3 8h10a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7"/>',
    network: '<rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-5h14v5"/>',
    shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
    camera: '<path d="M3 7l13-3 2 6-13 3z"/><path d="m16 10 4 1v3l-4-1M6 13l1 4H3M7 17v4"/>',
    flame: '<path d="M12 22a7 7 0 0 0 7-7c0-4-3-6-4-10-2 2-3 4-3 6-1-1-2-2-2-4-2 2-5 5-5 8a7 7 0 0 0 7 7z"/><path d="M12 22a3 3 0 0 0 3-3c0-2-2-3-3-5-1 2-3 3-3 5a3 3 0 0 0 3 3z"/>',
    speaker: '<rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="14" r="4"/><circle cx="12" cy="6.5" r="1"/>',
    gate: '<path d="M3 21V5M21 21V5M3 9h18M3 15h18M8 9v12M13 9v12M18 9v12"/><path d="M3 5l9-3 9 3"/>',
    home: '<path d="M3 11 12 3l9 8"/><path d="M5 10v11h14V10"/><path d="M10 21v-6h4v6"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 6h1M14 6h1M9 10h1M14 10h1M9 14h1M14 14h1M10 22v-4h4v4"/>',
    factory: '<path d="M2 21V10l6 4V10l6 4V6l8 4v11z"/><path d="M6 17h2M12 17h2M18 17h0"/>',
    compass: '<path d="M12 2v3M5 21l7-16 7 16M7.5 15h9"/><circle cx="12" cy="5" r="1.5"/>',
    helmet: '<path d="M3 17h18M5 17v-3a7 7 0 0 1 14 0v3"/><path d="M10 7V4h4v3M3 17v3h18v-3"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
    pin: '<path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    arrow: '<path d="M5 12h14M13 5l7 7-7 7"/>',
    arrowL: '<path d="M19 12H5M11 5l-7 7 7 7"/>',
    up: '<path d="M12 19V5M5 12l7-7 7 7"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    euro: '<path d="M18 7a7 7 0 1 0 0 10M4 10h10M4 14h10"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 12 10 5 10-5M2 17l10 5 10-5"/>',
    mobile: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    doc: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>',
    tool: '<path d="M14.7 6.3a4 4 0 0 0 5 5L22 14l-8 8-2.3-2.3a4 4 0 0 0-5-5L4 12l8-8z"/><path d="m2 22 5-5"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M8.2 13.2 7 22l5-3 5 3-1.2-8.8"/>',
    support: '<path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 15a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2zM3 15a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2z"/><path d="M18 17v1a3 3 0 0 1-3 3h-3"/>',
    zoom: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 4 13c0-6 6-10 16-10 0 10-4 16-10 16"/><path d="M4 21c3-6 7-9 11-11"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.4A8 8 0 1 1 21 12z"/>',
    spark: '<path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3"/>'
  };
  const icon = (n, cls = "") => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || P.bolt}</svg>`;
  const star = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>';
  const waIcon = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.6.7.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>';
  const logoMark = () => `<img class="logo__mark" src="assets/img/logo-mark.jpg" alt="" width="48" height="48">`;

  /* ---------- Header + menu ---------- */
  const megaHTML = A.map(a => `<div class="mega__col"><h4>${a.nome}</h4>${a.servizi.map(s => `<a href="${svcUrl(s)}">${icon(S[s].icona)}${S[s].nome}</a>`).join("")}</div>`).join("");
  const home = document.body.dataset.page === "home" ? "" : "index.html";
  const header = $("#site-header");
  if (header) header.outerHTML = `
    <div class="topbar"><div class="container">
      <div class="topbar__info">
        <span>${icon("pin")} ${C.indirizzo}</span>
                <span>${icon("clock")} ${C.orari}</span>
      </div>
      <span class="topbar__social topbar__info">${C.referenti.map(r => `<a href="tel:${telOf(r.telefono)}">${icon("phone")} ${r.nome.split(" ")[0]} ${r.telefono}</a>`).join("")}</span>
    </div></div>
    <header class="header" id="header"><div class="container">
      <a href="${home || "#top"}" class="logo" aria-label="Phiat Lux – home">${logoMark()}<span class="logo__text">Phiat Lux<small>Impianti elettrici e tecnologici</small></span></a>
      <nav class="nav" aria-label="Menu principale">
        <div class="nav__item"><button class="nav__link" aria-haspopup="true">Servizi ${icon("chevron")}</button><div class="mega">${megaHTML}</div></div>
        <div class="nav__item"><a class="nav__link" href="${home}#per-chi">Grandi lavori</a></div>
        <div class="nav__item"><a class="nav__link" href="${home}#lavori">Lavori realizzati</a></div>
        <div class="nav__item"><a class="nav__link" href="${home}#metodo">Chi siamo</a></div>
        <div class="nav__item"><a class="nav__link" href="${home}#contatti">Contatti</a></div>
        <a href="${home}#questionario" class="btn btn--sm nav__cta">Preventivo ${icon("arrow")}</a>
      </nav>
      <button class="burger" aria-label="Apri menu" aria-expanded="false"><span></span></button>
    </div></header>
    <nav class="mobile-nav" aria-label="Menu mobile">
      <details><summary>Servizi</summary>${A.map(a => `<details><summary>${a.nome}</summary>${a.servizi.map(s => `<a href="${svcUrl(s)}">${S[s].nome}</a>`).join("")}</details>`).join("")}</details>
      <a href="${home}#per-chi">Grandi lavori</a>
      <a href="${home}#lavori">Lavori realizzati</a>
      <a href="${home}#metodo">Chi siamo</a>
      <a href="${home}#contatti">Contatti</a>
      <a href="${home}#questionario" class="btn">Richiedi un preventivo ${icon("arrow")}</a>
    </nav>`;

  const burger = $(".burger");
  burger?.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    burger.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  });
  $$(".mobile-nav a").forEach(a => a.addEventListener("click", () => { document.body.classList.remove("menu-open"); document.body.style.overflow = ""; }));

  /* ---------- Footer ---------- */
  const footer = $("#site-footer");
  if (footer) footer.outerHTML = `
    <section class="cta-band"><div class="container">
      <h2>Hai un progetto? Parliamone.</h2>
      <div style="display:flex;gap:12px;flex-wrap:wrap">
        <a href="${home}#questionario" class="btn btn--dark">Richiedi un sopralluogo ${icon("arrow")}</a>
        <a href="tel:${tel}" class="btn btn--dark">${icon("phone")} Chiama ora</a>
      </div>
    </div></section>
    <footer class="footer"><div class="container">
      <div class="footer__grid">
        <div>
          <a href="${home || "#top"}" class="logo" style="margin-bottom:22px"><img class="logo__full" src="assets/img/logo-phiat-lux.jpg" alt="Phiat Lux" width="130" height="130" loading="lazy"></a>
          <p>Un solo partner per energia, sicurezza e comunicazione. Consulenza e impianti per privati, aziende e grandi lavori in provincia di Torino e in Piemonte.</p>
        </div>
        ${A.map(a => `<div><h4>${a.nome}</h4><ul>${a.servizi.map(s => `<li><a href="${svcUrl(s)}">${S[s].nome}</a></li>`).join("")}</ul></div>`).join("")}
      </div>
      <div class="footer__grid" style="grid-template-columns:repeat(3,1fr);padding-bottom:40px;border-top:1px solid var(--line);padding-top:40px">
        <div><h4>Contatti</h4><ul>${C.referenti.map(r => `<li><strong style="color:#fff">${r.nome}</strong><br><a href="tel:${telOf(r.telefono)}">${r.telefono}</a> · <a href="mailto:${r.email}">${r.email}</a></li>`).join("")}<li><a href="${wa()}" target="_blank" rel="noopener">WhatsApp</a></li></ul></div>
        <div><h4>Sede</h4><ul><li>${C.azienda}</li><li>Via Luigi Ronco 20</li><li>10040 Leinì (TO)</li>${C.orariDettaglio.map(o => `<li>${o}</li>`).join("")}</ul></div>
        <div><h4>Zone servite</h4><p>${window.PL_ZONE.slice(0, 8).join(" · ")} e tutta la provincia di Torino. Grandi lavori in tutto il Piemonte.</p></div>
      </div>
      <div class="footer__bottom">
        <span>© ${new Date().getFullYear()} ${C.azienda} · P.IVA 12654830012</span>
        <nav><a href="#">Privacy policy</a><a href="#">Cookie policy</a></nav>
      </div>
    </div></footer>
    <a class="whatsapp" href="${wa("Buongiorno, vorrei informazioni su un impianto.")}" target="_blank" rel="noopener" aria-label="Scrivici su WhatsApp">${waIcon}</a>
    <button class="to-top" aria-label="Torna su">${icon("up")}</button>
    <div class="cookie" role="dialog" aria-label="Cookie"><p>Usiamo cookie tecnici e, con il tuo consenso, cookie di analisi per migliorare il sito.</p><div><button class="btn btn--sm" data-cookie="ok">Accetta</button><button class="btn btn--sm btn--ghost" data-cookie="no">Solo necessari</button></div></div>`;

  /* ---------- Segnaposto dinamici ---------- */
  $$("[data-icon]").forEach(el => el.insertAdjacentHTML("afterbegin", icon(el.dataset.icon)));
  $$("[data-phone]").forEach(el => { el.href = `tel:${tel}`; if (!el.children.length && !el.textContent.trim()) el.textContent = C.telefono; });
  $$("[data-phone-text]").forEach(el => el.textContent = C.telefono);
  $$("[data-email]").forEach(el => { el.href = `mailto:${C.email}`; el.textContent = C.email; });
  $$("[data-wa]").forEach(el => el.href = wa(el.dataset.wa));
  $$("[data-referenti]").forEach(el => el.outerHTML = refCards());
  $$("[data-address]").forEach(el => el.textContent = C.indirizzo);
  $$("[data-orari]").forEach(el => el.textContent = C.orariDettaglio.join(" · "));
  $$("[data-img]").forEach(img => { img.src = IMG[img.dataset.img]; img.loading = img.loading || "lazy"; });

  /* ---------- Header on scroll / top ---------- */
  const hdr = $("#header"), toTop = $(".to-top");
  const onScroll = () => {
    const y = scrollY;
    hdr?.classList.toggle("is-scrolled", y > 40);
    toTop?.classList.toggle("is-visible", y > 700);
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  toTop?.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- Cookie ---------- */
  const cookie = $(".cookie");
  let consent = null;
  try { consent = localStorage.getItem("pl-cookie"); } catch (e) {}
  if (cookie && !consent) setTimeout(() => cookie.classList.add("is-visible"), 1500);
  $$("[data-cookie]").forEach(b => b.addEventListener("click", () => {
    try { localStorage.setItem("pl-cookie", b.dataset.cookie); } catch (e) {}
    cookie.classList.remove("is-visible");
  }));

  /* ---------- Hero slider ---------- */
  const slides = $$(".hero__slide"), caps = $$(".hero__caption"), bar = $(".hero__progress");
  if (slides.length) {
    let cur = 0, timer;
    const go = n => {
      cur = (n + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle("is-active", i === cur));
      caps.forEach((c, i) => c.classList.toggle("is-active", i === cur));
      $(".hero__count b").textContent = String(cur + 1).padStart(2, "0");
      bar.classList.remove("run"); void bar.offsetWidth; bar.classList.add("run");
      clearTimeout(timer); timer = setTimeout(() => go(cur + 1), 7000);
    };
    $(".hero__arrow--prev").addEventListener("click", () => go(cur - 1));
    $(".hero__arrow--next").addEventListener("click", () => go(cur + 1));
    go(0);
  }

  /* ---------- Servizi con tab ---------- */
  const svcWrap = $("#services");
  if (svcWrap) {
    const render = id => {
      const area = A.find(a => a.id === id);
      svcWrap.innerHTML = area.servizi.map((s, i) => {
        const d = S[s];
        return `<a class="service-card fade-swap" style="animation-delay:${i * .08}s" href="${svcUrl(s)}">
          <div class="service-card__media"><img src="${d.img}" alt="${d.nome}" loading="lazy"></div>
          <div class="service-card__body"><span class="service-card__icon">${icon(d.icona)}</span><h3>${d.nome}</h3><p>${d.sintesi}</p><span class="link-arrow">Scopri il servizio ${icon("arrow")}</span></div></a>`;
      }).join("");
    };
    $$(".tab").forEach(t => t.addEventListener("click", () => {
      $$(".tab").forEach(x => { x.classList.toggle("is-active", x === t); x.setAttribute("aria-selected", x === t); });
      render(t.dataset.area);
    }));
    render(A[0].id);
  }

  /* ---------- Marquee ---------- */
  const mq = $(".marquee__track");
  if (mq) {
    const items = Object.values(S).map(d => `<span class="marquee__item">${d.nome} ${icon("spark")}</span>`).join("");
    mq.innerHTML = items + items;
  }

  /* ---------- Per chi lavoriamo ---------- */
  $$(".audience__btn").forEach(b => b.addEventListener("click", () => {
    $$(".audience__btn").forEach(x => { x.classList.toggle("is-active", x === b); x.setAttribute("aria-selected", x === b); });
    $$(".audience__panel").forEach(p => p.classList.toggle("is-active", p.id === b.dataset.target));
  }));

  /* ---------- Galleria lavori + lightbox ---------- */
  const gal = $("#gallery");
  const lb = $(".lightbox");
  let lbItems = [], lbIndex = 0;
  const openLb = (items, i) => {
    lbItems = items; lbIndex = i; showLb();
    lb.classList.add("is-open"); document.body.style.overflow = "hidden";
  };
  const showLb = () => {
    const it = lbItems[lbIndex];
    $("img", lb).src = it.img.replace(/w=\d+/, "w=2000");
    $("img", lb).alt = it.titolo;
    $("figcaption", lb).innerHTML = `<strong>${it.titolo}</strong><span class="muted">${[it.luogo, it.servizi].filter(Boolean).join(" · ")}</span>`;
  };
  const closeLb = () => { lb.classList.remove("is-open"); document.body.style.overflow = ""; };
  if (lb) {
    $(".lightbox__close", lb).addEventListener("click", closeLb);
    $(".lightbox__prev", lb).addEventListener("click", () => { lbIndex = (lbIndex - 1 + lbItems.length) % lbItems.length; showLb(); });
    $(".lightbox__next", lb).addEventListener("click", () => { lbIndex = (lbIndex + 1) % lbItems.length; showLb(); });
    lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });
    addEventListener("keydown", e => {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowRight") $(".lightbox__next", lb).click();
      if (e.key === "ArrowLeft") $(".lightbox__prev", lb).click();
    });
  }
  const catName = { privati: "Privati", aziende: "Aziende", grandi: "Grandi lavori" };
  const galleryHTML = list => list.map((l, i) => `
    <button class="gallery__item" data-cat="${l.cat || ""}" data-i="${i}">
      <img src="${l.img}" alt="${l.titolo}" loading="lazy">
      <span class="gallery__zoom">${icon("zoom")}</span>
      <span class="gallery__caption">${l.cat ? `<small>${catName[l.cat]} · ${l.luogo}</small>` : ""}<h3>${l.titolo}</h3>${l.servizi ? `<p>${l.servizi}</p>` : ""}</span>
    </button>`).join("");
  const bindGallery = (root, list) => $$(".gallery__item", root).forEach(el => el.addEventListener("click", () => {
    const visible = list.filter((_, i) => !$$(".gallery__item", root)[i].classList.contains("is-hidden"));
    openLb(visible, visible.indexOf(list[+el.dataset.i]));
  }));
  if (gal) {
    gal.innerHTML = galleryHTML(window.PL_LAVORI);
    bindGallery(gal, window.PL_LAVORI);
    $$(".filter").forEach(f => f.addEventListener("click", () => {
      $$(".filter").forEach(x => x.classList.toggle("is-active", x === f));
      $$(".gallery__item", gal).forEach(it => {
        const show = f.dataset.filter === "all" || it.dataset.cat === f.dataset.filter;
        it.classList.toggle("is-hidden", !show);
        if (show) { it.classList.remove("fade-swap"); void it.offsetWidth; it.classList.add("fade-swap"); }
      });
    }));
  }

  /* ---------- Recensioni ---------- */
  const rv = $("#reviews");
  if (rv) {
    const R = window.PL_RECENSIONI;
    rv.innerHTML = R.map(r => `<div class="review"><div class="review__card">
      <div class="stars">${star.repeat(5)}</div><p>${r.testo.replace(/\n/g, "<br>")}</p>
      <div class="review__author"><span class="review__avatar">${r.nome[0]}</span><div><strong>${r.nome}</strong><span style="color:var(--ink-muted)">${r.luogo}</span></div></div>
    </div></div>`).join("");
    const nav = $("#reviews-nav");
    nav.innerHTML = R.map((_, i) => `<button class="slider__dot" aria-label="Recensione ${i + 1}"></button>`).join("");
    let r = 0, rt;
    const goR = n => {
      r = (n + R.length) % R.length;
      rv.style.transform = `translateX(-${r * 100}%)`;
      $$(".slider__dot", nav).forEach((d, i) => d.classList.toggle("is-active", i === r));
      clearTimeout(rt); rt = setTimeout(() => goR(r + 1), 6000);
    };
    $$(".slider__dot", nav).forEach((d, i) => d.addEventListener("click", () => goR(i)));
    goR(0);
    $$(".stars[data-fill]").forEach(s => s.innerHTML = star.repeat(5));
  }

  /* ---------- Zone ---------- */
  const zc = $("#zones");
  if (zc) zc.innerHTML = window.PL_ZONE.map((z, i) => `<span class="chip ${i === 0 ? "chip--main" : ""}">${icon("pin")}${z}</span>`).join("");
  const radar = $(".radar");
  if (radar) {
    const pts = [["Torino", 50, 74], ["Settimo T.se", 66, 62], ["Volpiano", 68, 36], ["Caselle T.se", 34, 36], ["Venaria", 32, 60], ["Chivasso", 86, 52], ["Ciriè", 18, 22]];
    radar.insertAdjacentHTML("beforeend", pts.map(([n, x, y]) => `<span class="radar__dot" style="left:${x}%;top:${y}%"><span>${n}</span></span>`).join(""));
  }

  /* ---------- Questionario a step ---------- */
  const wz = $("#wizard");
  if (wz) {
    const steps = $$(".wizard__step", wz), bars = $$(".wizard__progress span", wz);
    let st = 0;
    const show = n => {
      st = n;
      steps.forEach((s, i) => s.classList.toggle("is-active", i === n));
      bars.forEach((b, i) => b.classList.toggle("is-done", i <= n));
      if (n === steps.length - 1) {
        const data = new FormData(wz);
        $(".wizard__summary", wz).innerHTML = [["Immobile", "immobile"], ["Priorità", "priorita"], ["Budget / tempi", "budget"]]
          .map(([l, k]) => `<div><span>${l}</span><b>${data.getAll(k).join(", ") || "—"}</b></div>`).join("");
      }
    };
    $$("[data-next]", wz).forEach(b => b.addEventListener("click", () => {
      const cur = steps[st];
      if (!$("input:checked", cur)) { cur.querySelector(".options").animate([{ transform: "translateX(0)" }, { transform: "translateX(-8px)" }, { transform: "translateX(8px)" }, { transform: "translateX(0)" }], { duration: 300 }); return; }
      show(st + 1);
    }));
    $$("[data-prev]", wz).forEach(b => b.addEventListener("click", () => show(st - 1)));
    $$('input[type="radio"]', wz).forEach(r => r.addEventListener("change", () => setTimeout(() => { if (st < steps.length - 1) show(st + 1); }, 280)));
    wz.addEventListener("submit", e => {
      e.preventDefault();
      if (!wz.reportValidity()) return;
      const d = new FormData(wz);
      const msg = `Richiesta dal questionario del sito\n\nImmobile: ${d.getAll("immobile").join(", ")}\nPriorità: ${d.getAll("priorita").join(", ")}\nBudget/tempi: ${d.getAll("budget").join(", ")}\n\nNome: ${d.get("nome")}\nTelefono: ${d.get("telefono")}\nComune: ${d.get("comune") || "-"}`;
      window.open(wa(msg), "_blank", "noopener");
      $(".form-msg", wz).classList.add("is-visible");
    });
    show(0);
  }

  /* ---------- Pagina servizio ---------- */
  const sp = $("#service-page");
  if (sp) {
    const slug = new URLSearchParams(location.search).get("s") || "impianti-elettrici";
    const d = S[slug] || S["impianti-elettrici"];
    document.title = `${d.h1} – Phiat Lux`;
    $('meta[name="description"]')?.setAttribute("content", d.sintesi);
    const area = A.find(a => a.servizi.includes(slug));
    const pc = [["home", "Privati"], ["building", "Aziende e negozi"], ["helmet", "Grandi lavori"]];
    const vIcons = ["shield", "layers", "euro", "support"];
    const foto = d.foto.map((img, i) => ({ img, titolo: `${d.nome} – lavoro ${i + 1}`, luogo: "Torino e provincia" }));
    sp.innerHTML = `
      <section class="page-hero"><img src="${d.img.replace(/w=\d+/, "w=2000")}" alt="">
        <div class="container">
          <nav class="breadcrumb"><a href="index.html">Home</a><span>Servizi</span><span>${area ? area.nome : ""}</span><span style="color:var(--accent)">${d.nome}</span></nav>
          <span class="eyebrow">${area ? area.nome : "Servizi"}</span>
          <h1>${d.h1.replace(/ (a|in) (Torino|Piemonte)/g, " $1\u00a0$2")}</h1><p>${d.sintesi}</p>
          <div class="hero__actions" style="margin-top:30px"><a href="#preventivo" class="btn">Richiedi un sopralluogo ${icon("arrow")}</a><a href="tel:${tel}" class="btn btn--ghost">${icon("phone")} Chiama ora</a></div>
        </div>
      </section>
      <section class="section section--light"><div class="container svc-grid">
        <div class="reveal"><span class="eyebrow">Cosa facciamo</span><h2>Tipi di intervento</h2>
          <p class="lead">Ogni intervento parte da un sopralluogo e da un preventivo chiaro, con un unico referente dall'inizio alla fine.</p>
          <ul class="svc-list" style="margin-top:30px">${d.cosa.map(c => `<li>${icon("check")}${c}</li>`).join("")}</ul>
        </div>
        <div class="svc-media reveal reveal-right"><img src="${d.foto[0]}" alt="${d.nome}" loading="lazy"></div>
      </div></section>
      <section class="section"><div class="container">
        <div class="section-head reveal"><span class="eyebrow">Per chi</span><h2>Soluzioni per ogni cliente</h2></div>
        <div class="cards-3">${d.perchi.map((p, i) => `<div class="card reveal" style="--d:${i * .1}s"><div class="card__icon">${icon(pc[i][0])}</div><h3>${pc[i][1]}</h3><p>${p}</p></div>`).join("")}</div>
      </div></section>
      <section class="section section--dark"><div class="container">
        <div class="section-head section-head--split reveal"><div><span class="eyebrow">Vantaggi</span><h2>Cosa ottieni</h2></div><p class="muted">Impianti progettati per durare, integrati con il resto dell'edificio e accompagnati da assistenza dopo l'installazione.</p></div>
        <div class="cards-4">${d.vantaggi.map(([t, x], i) => `<div class="card reveal" style="--d:${i * .1}s"><div class="card__icon">${icon(vIcons[i])}</div><h3>${t}</h3><p>${x}</p></div>`).join("")}</div>
        <div class="reveal" style="margin-top:60px"><span class="eyebrow">Normative e certificazioni</span><div class="norms">${d.norme.map(n => `<span class="norm">${n}</span>`).join("")}</div>
        <p class="note">Riferimenti indicativi, da verificare con il cliente prima della pubblicazione.</p></div>
      </div></section>
      <section class="section"><div class="container">
        <div class="section-head reveal"><span class="eyebrow">Lavori reali</span><h2>Dai nostri cantieri</h2></div>
        <div class="photos reveal" id="svc-photos">${galleryHTML(foto)}</div>
      </div></section>
      <section class="section section--light"><div class="container">
        <div class="section-head section-head--center reveal"><span class="eyebrow">FAQ</span><h2>Domande frequenti</h2></div>
        <div class="faq">${d.faq.map(([q, a], i) => `<details class="reveal" ${i === 0 ? "open" : ""}><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>
      </div></section>
      <section class="section section--dark"><div class="container">
        <div class="section-head reveal"><span class="eyebrow">Servizi collegati</span><h2>Funzionano meglio insieme</h2></div>
        <div class="services">${d.correlati.map(s => `<a class="service-card reveal" href="${svcUrl(s)}"><div class="service-card__media"><img src="${S[s].img}" alt="${S[s].nome}" loading="lazy"></div><div class="service-card__body"><span class="service-card__icon">${icon(S[s].icona)}</span><h3>${S[s].nome}</h3><p>${S[s].sintesi}</p><span class="link-arrow">Scopri ${icon("arrow")}</span></div></a>`).join("")}</div>
      </div></section>
      <section class="section" id="preventivo"><div class="container contact">
        <div class="reveal"><span class="eyebrow">Preventivo gratuito</span><h2>${d.nome}: parliamone</h2><p class="muted lead">Raccontaci di cosa hai bisogno: ti ricontattiamo per fissare un sopralluogo.</p>
          <div class="contact__info" style="margin-top:26px">
            ${refCards()}
            <a class="info-card" href="${wa("Buongiorno, vorrei un preventivo per " + d.nome.toLowerCase())}" target="_blank" rel="noopener"><span class="info-card__icon">${icon("chat")}</span><span><small>WhatsApp</small><strong>Scrivici ora</strong></span></a>
          </div>
        </div>
        <form class="contact__form form reveal" data-contact novalidate>
          <div class="field"><label for="n">Nome</label><input id="n" name="Nome" required></div>
          <div class="field"><label for="t">Telefono</label><input id="t" name="Telefono" type="tel" required></div>
          <div class="field"><label for="e">Email</label><input id="e" name="Email" type="email"></div>
          <div class="field"><label for="c">Comune</label><input id="c" name="Comune"></div>
          <div class="field full"><label for="m">Messaggio</label><textarea id="m" name="Messaggio">Vorrei un preventivo per: ${d.nome}</textarea></div>
          <label class="check full"><input type="checkbox" name="privacy" required> Ho letto l'informativa privacy e acconsento al trattamento dei dati.</label>
          <div class="full"><button class="btn">Invia richiesta ${icon("arrow")}</button></div>
          <p class="form-msg full">Grazie! Ti ricontatteremo al più presto.</p>
        </form>
      </div></section>`;
    bindGallery($("#svc-photos"), foto);
  }

  /* ---------- Modulo contatti (anteprima: apre l'email) ---------- */
  $$("form[data-contact]").forEach(f => f.addEventListener("submit", e => {
    e.preventDefault();
    if (!f.reportValidity()) return;
    const d = new FormData(f);
    const body = [...d.entries()].filter(([k]) => k !== "privacy").map(([k, v]) => `${k}: ${v}`).join("\n");
    location.href = `mailto:${C.referenti.map(r => r.email).join(",")}?subject=${encodeURIComponent("Richiesta preventivo dal sito")}&body=${encodeURIComponent(body)}`;
    $(".form-msg", f).classList.add("is-visible");
  }));
  const selSvc = $$("select[data-services]");
  selSvc.forEach(sel => sel.insertAdjacentHTML("beforeend", A.map(a => `<optgroup label="${a.nome}">${a.servizi.map(s => `<option>${S[s].nome}</option>`).join("")}</optgroup>`).join("")));

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
  }), { threshold: .12, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal").forEach(el => io.observe(el));

  /* ---------- Contatori ---------- */
  const co = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, end = +el.dataset.count, suf = el.dataset.suffix || "", t0 = performance.now();
    const tick = t => {
      const p = Math.min((t - t0) / 1800, 1), v = Math.round(end * (1 - Math.pow(1 - p, 3)));
      el.textContent = v.toLocaleString("it-IT") + suf;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick); co.unobserve(el);
  }), { threshold: .5 });
  $$("[data-count]").forEach(el => co.observe(el));

  /* ---------- Parallax ---------- */
  const px = $$("[data-parallax]");
  if (px.length && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const run = () => px.forEach(el => {
      const r = el.parentElement.getBoundingClientRect();
      el.style.transform = `translateY(${(r.top + r.height / 2 - innerHeight / 2) * -0.15}px)`;
    });
    addEventListener("scroll", () => requestAnimationFrame(run), { passive: true }); run();
  }
})();
