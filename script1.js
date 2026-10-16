(() => {
  const KEY = "jardinInviernoMenuV2";
  const $ = s => document.querySelector(s);
  const clone = o => JSON.parse(JSON.stringify(o));
  const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const DIET = [["sintacc","Sin TACC","Sin TACC · apto celíaco"],["vegetariano","Vegetariano","Vegetariano"],["vegano","Vegano","Vegano"],["sinlactosa","Sin lactosa","Sin lactosa"],["picante","Picante","Picante"]];
  const AMENITIES = [["wifi", "<path d=\"M12 20h.01\"/> <path d=\"M2 8.82a15 15 0 0 1 20 0\"/> <path d=\"M5 12.859a10 10 0 0 1 14 0\"/> <path d=\"M8.5 16.429a5 5 0 0 1 7 0\"/>", "WiFi"], ["cards", "<rect width=\"20\" height=\"14\" x=\"2\" y=\"5\" rx=\"2\"/> <line x1=\"2\" x2=\"22\" y1=\"10\" y2=\"10\"/> <path d=\"M6 14h2\"/>", "Acepta tarjetas"], ["parking", "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/> <path d=\"M9 17V7h4a3 3 0 0 1 0 6H9\"/>", "Estacionamiento"], ["accessible", "<circle cx=\"16\" cy=\"4\" r=\"1\"/> <path d=\"m18 19 1-7-6 1\"/> <path d=\"m5 8 3-3 5.5 3-2.36 3.5\"/> <path d=\"M4.24 14.5a5 5 0 0 0 6.88 6\"/> <path d=\"M13.76 17.5a5 5 0 0 0-6.88-6\"/>", "Accesible"], ["pets", "<circle cx=\"11\" cy=\"4\" r=\"2\"/> <circle cx=\"18\" cy=\"8\" r=\"2\"/> <circle cx=\"20\" cy=\"16\" r=\"2\"/> <path d=\"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z\"/>", "Pet friendly"], ["terrace", "<path d=\"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z\"/> <path d=\"M7 16v6\"/> <path d=\"M13 19v3\"/> <path d=\"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5\"/>", "Terraza / aire libre"], ["kids", "<path d=\"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5\"/> <path d=\"M15 12h.01\"/> <path d=\"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1\"/> <path d=\"M9 12h.01\"/>", "Apto niños"], ["delivery", "<circle cx=\"18.5\" cy=\"17.5\" r=\"3.5\"/> <circle cx=\"5.5\" cy=\"17.5\" r=\"3.5\"/> <circle cx=\"15\" cy=\"5\" r=\"1\"/> <path d=\"M12 17.5V14l-3-3 4-3 2 3h2\"/>", "Delivery / take away"], ["ac", "<path d=\"m10 20-1.25-2.5L6 18\"/> <path d=\"M10 4 8.75 6.5 6 6\"/> <path d=\"m14 20 1.25-2.5L18 18\"/> <path d=\"m14 4 1.25 2.5L18 6\"/> <path d=\"m17 21-3-6h-4\"/> <path d=\"m17 3-3 6 1.5 3\"/> <path d=\"M2 12h6.5L10 9\"/> <path d=\"m20 10-1.5 2 1.5 2\"/> <path d=\"M22 12h-6.5L14 15\"/> <path d=\"m4 10 1.5 2L4 14\"/> <path d=\"m7 21 3-6-1.5-3\"/> <path d=\"m7 3 3 6h4\"/>", "Aire acondicionado"], ["music", "<path d=\"M9 18V5l12-2v13\"/> <circle cx=\"6\" cy=\"18\" r=\"3\"/> <circle cx=\"18\" cy=\"16\" r=\"3\"/>", "Música en vivo"], ["events", "<path d=\"M5.8 11.3 2 22l10.7-3.79\"/> <path d=\"M4 3h.01\"/> <path d=\"M22 8h.01\"/> <path d=\"M15 2h.01\"/> <path d=\"M22 20h.01\"/> <path d=\"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10\"/> <path d=\"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17\"/> <path d=\"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7\"/> <path d=\"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z\"/>", "Salón para eventos"]];
  const svg = inner => `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
  const SOCIAL = [["web","Sitio web","<circle cx=\"12\" cy=\"12\" r=\"10\"/> <path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\"/> <path d=\"M2 12h20\"/>","stroke"],["instagram", "Instagram", "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"], ["facebook", "Facebook", "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"], ["tiktok", "TikTok", "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"], ["x", "X (Twitter)", "M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"], ["youtube", "YouTube", "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"], ["tripadvisor", "TripAdvisor", "M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118 4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115 4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256z"], ["threads", "Threads", "M18.263 11.097c-.03-3.486-1.92-5.586-5.111-5.586-2.13 0-3.922.963-4.863 2.499l2.062 1.438c.535-.843 1.272-1.543 2.628-1.543 1.528 0 2.318.85 2.544 2.431a15 15 0 0 0-2.236-.173c-4.125 0-6.068 1.867-6.068 4.336s1.943 3.99 4.804 3.99c3.139 0 5.013-2.115 5.781-4.735.798.361 1.348 1.204 1.348 2.47 0 3.387-3.907 5.232-7.22 5.232-4.885 0-8.077-3.207-8.077-8.424 0-6.392 4.223-10.487 9.9-10.487 3.808 0 5.69 1.671 6.97 3.914l2.108-1.475C21.44 2.078 18.331 0 13.663 0 6.227 0 1.168 5.277 1.168 12.934c0 7 4.953 11.066 10.856 11.066 4.878 0 9.809-2.846 9.809-7.716 0-2.545-1.46-4.231-3.569-5.187m-6.33 4.855c-1.077 0-2.026-.512-2.026-1.453 0-1.483 1.822-1.934 3.606-1.934.678 0 1.34.045 1.927.173-.422 1.927-1.671 3.215-3.508 3.214Z"]];
  const slug = s => String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "cat";

  const norm = d => {
    d.restaurant = d.restaurant || {};
    d.amenities = d.amenities || {};
    d.restaurant.social = d.restaurant.social || {};
    if (d.restaurant.instagram && !d.restaurant.social.instagram) d.restaurant.social.instagram = d.restaurant.instagram;
    d.hours = d.hours || []; d.slides = d.slides || [];
    d.categories = (d.categories || []).map((c, i) => ({ ...c, id: c.id || slug(c.name) + "-" + i, items: (c.items || []).map(it => ({ ...it, diet: it.diet || {} })) }));
    return d;
  };
  function getData(){
    try { const s = localStorage.getItem(KEY); return norm(s ? JSON.parse(s) : clone(window.MENU_DATA)); }
    catch(e){ return norm(clone(window.MENU_DATA)); }
  }
  function saveData(d){ localStorage.setItem(KEY, JSON.stringify(d)); render(); }

  let data = getData(), cur = 0, timer = null;
  const isMenu = !!$("#menu"); // admin.html también carga este script

  const money = v => v ? String(v).replace(/\.00$/, "") : "";
  const setLink = (el, url) => { el.hidden = !url; if (url) el.href = url; };
  const setImg = (el, src) => { el.style.display = src ? "" : "none"; if (src) { el.src = src; el.onerror = () => el.style.display = "none"; } };

  function renderHeader(){
    const r = data.restaurant;
    setImg($("#restaurantLogo"), r.logo); setImg($("#heroImage"), r.hero);
    $("#restaurantName").textContent = r.name || ""; $("#topName").textContent = r.name || "";
    $("#restaurantSubtitle").textContent = r.subtitle || ""; $("#footerName").textContent = r.name || "";
    document.title = r.name || document.title;
    setLink($("#reserveLink"), r.reservationUrl); setLink($("#whatsappLink"), r.whatsapp); renderSocials();
    $(".actions").hidden = !r.reservationUrl;
    setLink($("#reviewLink"), r.reviewUrl); $("#reviewCta").hidden = !r.reviewUrl;
    const sel = $("#hoursSelect"); sel.innerHTML = "";
    data.hours.forEach(h => { const o = document.createElement("option"); o.textContent = h; sel.appendChild(o); });
    $(".hours").hidden = !data.hours.length;
  }

  const activeSlides = () => data.slides.filter(s => s.active !== false);
  function renderSlides(){
    const slides = activeSlides(), track = $("#slidesTrack"), dots = $("#slideDots");
    track.innerHTML = dots.innerHTML = "";
    $("#slider").hidden = !slides.length;
    if (!slides.length) return;
    cur = Math.min(cur, slides.length - 1);
    slides.forEach((s, i) => {
      const src = s.image || data.restaurant.hero;
      track.insertAdjacentHTML("beforeend", `<article class="slide">${src ? `<img src="${esc(src)}" alt="">` : ""}<div class="slide-content"><h2>${esc(s.title)}</h2><p>${esc(s.text)}</p></div></article>`);
      const dot = document.createElement("button");
      dot.className = "slide-dot" + (i === cur ? " active" : "");
      dot.setAttribute("aria-label", `Ir a la diapositiva ${i + 1}`);
      dot.onclick = () => { goSlide(i); startSlider(); };
      dots.appendChild(dot);
    });
    const multi = slides.length > 1;
    $("#slidePrev").hidden = $("#slideNext").hidden = !multi;
    track.style.transform = `translateX(-${cur * 100}%)`;
  }
  function goSlide(i){
    const n = activeSlides().length; if (!n) return;
    cur = (i + n) % n;
    $("#slidesTrack").style.transform = `translateX(-${cur * 100}%)`;
    document.querySelectorAll(".slide-dot").forEach((d, k) => d.classList.toggle("active", k === cur));
  }
  function startSlider(){
    clearInterval(timer);
    if (activeSlides().length > 1 && !matchMedia("(prefers-reduced-motion: reduce)").matches)
      timer = setInterval(() => goSlide(cur + 1), 5000);
  }

  function renderCategories(){
    const nav = $("#categories"); nav.innerHTML = "";
    data.categories.forEach(cat => {
      const b = document.createElement("button");
      b.className = "category";
      b.innerHTML = `${cat.icon ? `<img src="${esc(cat.icon)}" alt="">` : ""}<p>${esc(cat.name)}</p>`;
      b.onclick = () => {
        document.getElementById(cat.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        document.querySelectorAll(".category").forEach(x => x.classList.remove("active"));
        b.classList.add("active");
      };
      nav.appendChild(b);
    });
  }

  function renderMenu(filter = ""){
    const root = $("#menu"); root.innerHTML = "";
    const q = filter.trim().toLowerCase(); let visible = 0;
    data.categories.forEach((cat, ci) => {
      const list = cat.items.map((it, i) => ({ it, i })).filter(({ it }) => !q || `${it.name} ${it.description}`.toLowerCase().includes(q));
      if (!list.length) return;
      visible += list.length;
      const sec = document.createElement("section");
      sec.className = "menu-section"; sec.id = cat.id;
      sec.innerHTML = `<h2>${esc(cat.name)}</h2><div class="items"></div>`;
      list.forEach(({ it, i }) => {
        sec.querySelector(".items").insertAdjacentHTML("beforeend", `
          <article class="item${it.available === false ? " unavailable" : ""}" id="${cat.id}-${i}" data-c="${ci}" data-i="${i}" tabindex="0" role="button" aria-haspopup="dialog">
            <div class="details"><h3>${esc(it.name)}</h3>
              ${it.description ? `<p>${esc(it.description)}</p>` : ""}
              ${tags(it)}
              ${it.available === false ? `<span class="soldout">No disponible</span>` : it.price ? `<span class="price">${esc(money(it.price))}</span>` : ""}
            </div>
            ${it.image ? `<img src="${esc(it.image)}" alt="${esc(it.name)}" loading="lazy" onerror="this.remove()">` : ""}
          </article>`);
      });
      root.appendChild(sec);
    });
    $("#emptyState").hidden = visible !== 0;
  }

  const tags = (it, long) => {
    const t = DIET.filter(d => it.diet && it.diet[d[0]]).map(d => `<span class="tag tag-${d[0]}">${d[long ? 2 : 1]}</span>`).join("");
    return t ? `<div class="tags">${t}</div>` : "";
  };
  function openItem(ci, ii){
    const it = data.categories[ci]?.items[ii]; if (!it) return;
    $("#modalBody").innerHTML = `${it.image ? `<img class="m-img" src="${esc(it.image)}" alt="${esc(it.name)}" onerror="this.remove()">` : ""}
      <div class="m-info"><h2>${esc(it.name)}</h2>${tags(it, true)}
      ${it.description ? `<p>${esc(it.description)}</p>` : ""}
      ${it.available === false ? `<span class="soldout">No disponible por el momento</span>` : it.price ? `<span class="price">${esc(money(it.price))}</span>` : ""}</div>`;
    const m = $("#itemModal");
    if (m.showModal) m.showModal(); else m.setAttribute("open", "");
    document.body.classList.add("no-scroll");
  }
  function closeItem(){ const m = $("#itemModal"); if (m.close) m.close(); else m.removeAttribute("open"); document.body.classList.remove("no-scroll"); }
  function renderSocials(){
    const soc = data.restaurant.social, on = SOCIAL.filter(s => soc[s[0]]);
    const box = $("#socials"); box.hidden = !on.length;
    box.innerHTML = on.map(s => `<a href="${esc(soc[s[0]])}" target="_blank" rel="noopener" aria-label="${s[1]}" title="${s[1]}">${s[3] ? svg(s[2]) : `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="${s[2]}"/></svg>`}</a>`).join("");
  }
  function renderAmenities(){
    const on = AMENITIES.filter(a => data.amenities[a[0]]), s = $("#amenities");
    s.hidden = !on.length;
    s.innerHTML = on.length ? `<h2>Servicios del local</h2><ul>${on.map(a => `<li><span class="ico-box">${svg(a[1])}</span>${a[2]}</li>`).join("")}</ul>` : "";
  }

  // Menú hamburguesa con submenú (categorías → productos)
  function renderDrawer(){
    const r = data.restaurant;
    $("#drawerNav").innerHTML = `
      <a href="#top">Inicio</a>
      ${r.reservationUrl ? `<a href="${esc(r.reservationUrl)}" target="_blank" rel="noopener">Reservar</a>` : ""}
      ${r.whatsapp ? `<a href="${esc(r.whatsapp)}" target="_blank" rel="noopener">WhatsApp</a>` : ""}
      ${r.reviewUrl ? `<a href="${esc(r.reviewUrl)}" target="_blank" rel="noopener">Dejar una reseña</a>` : ""}
      <p class="drawer-title">Carta</p>
      ${data.categories.map(c => `<details><summary>${esc(c.name)}</summary>
        <a href="#${c.id}" class="sub-all">Ver toda la categoría</a>
        ${c.items.map((it, i) => `<a href="#${c.id}-${i}" class="sub">${esc(it.name)}</a>`).join("")}</details>`).join("")}
      <a href="login.html" class="drawer-admin">Administrador</a>`;
  }
  function toggleDrawer(open){
    $("#drawer").classList.toggle("open", open); $("#overlay").hidden = !open;
    $("#drawer").setAttribute("aria-hidden", !open); $("#menuBtn").setAttribute("aria-expanded", open);
    document.body.classList.toggle("no-scroll", open);
    if (open) $("#drawerClose").focus(); else $("#menuBtn").focus({ preventScroll: true });
  }

  function render(){
    data = getData();
    if (!isMenu) return;
    renderHeader(); renderSlides(); renderCategories();
    renderMenu($("#searchInput").value); renderDrawer(); renderAmenities(); startSlider();
  }

  window.MenuApp = { DIET, AMENITIES, SOCIAL, svg, getData: () => clone(getData()), saveData, reset: () => { localStorage.removeItem(KEY); render(); } };

  if (isMenu){
    $("#menu").addEventListener("click", e => { const a = e.target.closest(".item"); if (a) openItem(+a.dataset.c, +a.dataset.i); });
    $("#menu").addEventListener("keydown", e => {
      if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("item")){ e.preventDefault(); openItem(+e.target.dataset.c, +e.target.dataset.i); }
    });
    $("#modalClose").onclick = closeItem;
    $("#itemModal").addEventListener("click", e => { if (e.target.id === "itemModal") closeItem(); });
    $("#itemModal").addEventListener("close", () => document.body.classList.remove("no-scroll"));
    $("#searchInput").addEventListener("input", () => renderMenu($("#searchInput").value));
    $("#slidePrev").onclick = () => { goSlide(cur - 1); startSlider(); };
    $("#slideNext").onclick = () => { goSlide(cur + 1); startSlider(); };
    $("#backToTop").onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
    addEventListener("scroll", () => $("#backToTop").classList.toggle("visible", scrollY > 450), { passive: true });
    $("#menuBtn").onclick = () => toggleDrawer(true);
    $("#drawerClose").onclick = $("#overlay").onclick = () => toggleDrawer(false);
    addEventListener("keydown", e => { if (e.key === "Escape") toggleDrawer(false); });
    $("#drawerNav").addEventListener("click", e => {
      const a = e.target.closest("a"); if (!a) return;
      toggleDrawer(false);
      const id = (a.getAttribute("href") || "").slice(1);
      if (!id || a.target === "_blank" || a.getAttribute("href").endsWith(".html")) return;
      e.preventDefault();
      if ($("#searchInput").value){ $("#searchInput").value = ""; renderMenu(); }
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    });
  }
  render();
})();
