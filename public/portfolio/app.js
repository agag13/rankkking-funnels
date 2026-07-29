(async function () {
  const $ = (s, r = document) => r.querySelector(s);
  const el = (t, c, h) => { const n = document.createElement(t); if (c) n.className = c; if (h != null) n.innerHTML = h; return n; };
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
  const fmtDur = (s) => s ? `${Math.floor(s / 60) ? Math.floor(s / 60) + ':' : '0:'}${String(s % 60).padStart(2, '0')}` : '';

  let content = {}, media = [];
  try {
    [content, media] = await Promise.all([
      fetch('content.json').then(r => r.json()),
      fetch('media.json').then(r => r.json()),
    ]);
  } catch (e) { console.error('load failed', e); }

  const C = content || {};
  const b = C.brand || {}, hero = C.hero || {}, contact = C.contact || {};

  /* ---------- brand / nav ---------- */
  $('#footName').textContent = b.name || '';
  { const bt = $('#brandText'); if (bt) bt.textContent = b.navText || 'Portfolio'; }
  $('#footYear').textContent = new Date().getFullYear();
  document.title = `${b.name || 'Portfolio'} — ${b.role || 'Video Ads'}`;

  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('solid', window.scrollY > 40);
  window.addEventListener('scroll', onScroll); onScroll();

  /* ---------- hero ---------- */
  $('#heroKicker').textContent = hero.kicker || '';
  // highlight last word of title with gradient
  const title = hero.title || '';
  const parts = title.split(' ');
  $('#heroTitle').innerHTML = parts.length > 1
    ? esc(parts.slice(0, -1).join(' ')) + ' <span class="g">' + esc(parts.slice(-1)[0]) + '</span>'
    : `<span class="g">${esc(title)}</span>`;
  $('#heroSub').textContent = hero.subtitle || '';
  if (hero.primaryCta) $('#heroPrimary').textContent = hero.primaryCta;
  if (hero.secondaryCta) $('#heroSecondary').textContent = hero.secondaryCta;
  if (C.contact && C.contact.quoteButton) $('#navCta').textContent = C.contact.quoteButton;

  const heroImgEl = $('#heroImg');
  if (heroImgEl && (hero.image || b.image)) heroImgEl.src = hero.image || b.image;

  const stats = $('#stats');
  (C.stats || []).forEach(s => {
    const d = el('div', 'stat'); d.innerHTML = `<div class="v">${esc(s.value)}</div><div class="l">${esc(s.label)}</div>`;
    stats.appendChild(d);
  });

  /* ---------- work grid + filters ---------- */
  const grid = $('#grid'), filters = $('#filters');
  const cats = C.categories || {};
  const catList = Object.values(cats); // {slug,label}
  const chips = [{ slug: 'all', label: 'All' }, ...catList];
  let active = 'all';

  function card(m) {
    const c = el('div', `card ${m.orient === 'land' ? 'land' : 'vert'}`);
    c.dataset.cat = m.cat;
    c.innerHTML = `
      <div class="media">
        <img loading="lazy" src="${esc(m.poster)}" alt="${esc(m.title)}" />
        <video muted loop playsinline preload="none" src="${esc(m.src)}"></video>
        <span class="badge">${esc(m.catLabel)}</span>
        <span class="play"></span>
        <div class="cap">
          <div><div class="t">${esc(m.title)}</div>${m.client ? `<div class="c">${esc(m.client)}</div>` : ''}</div>
          ${m.duration ? `<span class="dur">${fmtDur(m.duration)}</span>` : ''}
        </div>
      </div>`;
    const vid = $('video', c);
    c.addEventListener('mouseenter', () => { vid.play().catch(() => {}); });
    c.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; });
    c.addEventListener('click', () => openLightbox(m));
    return c;
  }

  function render() {
    grid.innerHTML = '';
    media.filter(m => active === 'all' || m.cat === active).forEach(m => grid.appendChild(card(m)));
  }
  chips.forEach(ch => {
    const btn = el('button', 'chip' + (ch.slug === 'all' ? ' on' : ''), esc(ch.label));
    btn.addEventListener('click', () => {
      active = ch.slug;
      [...filters.children].forEach(x => x.classList.remove('on'));
      btn.classList.add('on'); render();
    });
    filters.appendChild(btn);
  });
  render();

  /* ---------- lightbox ---------- */
  const lb = $('#lightbox'), stage = $('#lbStage'), cap = $('#lbCaption');
  function openLightbox(m) {
    stage.innerHTML = '';
    const v = el('video'); v.src = m.src; v.controls = true; v.autoplay = true; v.playsInline = true;
    stage.appendChild(v);
    cap.innerHTML = `${esc(m.title)}<span>${esc(m.client || m.catLabel)}</span>`;
    lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden';
    v.play().catch(() => {});
  }
  function closeLightbox() {
    lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); document.body.style.overflow = '';
    stage.innerHTML = '';
  }
  $('#lbClose').addEventListener('click', closeLightbox);
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  /* ---------- services ---------- */
  const sg = $('#services-grid');
  (C.services || []).forEach(s => {
    const d = el('div', 'svc');
    d.innerHTML = `<div class="ic">${esc(s.icon || '•')}</div><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p>`;
    sg.appendChild(d);
  });

  /* ---------- packages ---------- */
  const pk = $('#packages');
  const quoteBtn = contact.quoteButton || 'Get a Quote';
  (C.packages || []).forEach(p => {
    const d = el('div', 'pkg' + (p.highlight ? ' hl' : ''));
    const priceHtml = (p.price && String(p.price).trim())
      ? `<div class="price">${esc(p.price)} <small>${esc(p.period || '')}</small></div>`
      : `<div class="price quote">On Request</div>`;
    d.innerHTML = `
      ${p.highlight ? '<span class="tag">Most Popular</span>' : ''}
      <h3>${esc(p.name)}</h3>
      <div class="pk-tl">${esc(p.tagline || '')}</div>
      ${priceHtml}
      <ul>${(p.features || []).map(f => `<li>${esc(f)}</li>`).join('')}</ul>
      <a class="btn ${p.highlight ? 'btn-primary' : 'btn-ghost'}" href="#contact">${esc(quoteBtn)}</a>`;
    pk.appendChild(d);
  });

  /* ---------- about ---------- */
  const ab = C.about || {}, aboutEl = $('#about');
  aboutEl.innerHTML = `
    <div class="photo">${ab.photo ? `<img src="${esc(ab.photo)}" alt="">` : `<div class="ph">${esc(ab.photoNote || 'Photo yahan aayegi')}</div>`}</div>
    <div><p class="eyebrow">About</p><h2>${esc(ab.heading || '')}</h2><p>${esc(ab.body || '')}</p></div>`;

  /* ---------- contact ---------- */
  const cc = $('#contact-card');
  const wa = (contact.whatsapp || '').replace(/[^0-9]/g, '');
  const waMsg = encodeURIComponent(`Hi ${b.name || ''}, mujhe ek video ad ke liye quote chahiye.`);
  const btns = [];
  if (wa) btns.push(`<a class="c-wa" href="https://wa.me/${wa}?text=${waMsg}" target="_blank" rel="noopener">💬 WhatsApp</a>`);
  if (contact.email) btns.push(`<a class="c-mail" href="mailto:${esc(contact.email)}?subject=Video%20Ad%20Enquiry">✉️ Email</a>`);
  if (contact.instagram) btns.push(`<a class="c-ig" href="https://instagram.com/${esc(contact.instagram)}" target="_blank" rel="noopener">Instagram</a>`);
  cc.innerHTML = `
    <h2>${esc(contact.heading || "Let's talk")}</h2>
    <p>${esc(contact.subtitle || '')}</p>
    <div class="contact-btns">${btns.join('')}</div>`;
})();
