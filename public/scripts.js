/* ============================================================
   EduTravel — site interactions
   ============================================================ */

/* ---------- Navbar scroll state ---------- */
(function () {
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ---------- Hero background carousel (auto rotate) ---------- */
(function () {
  const slides = Array.from(document.querySelectorAll('.hero-bg-slide'));
  if (!slides.length) return;
  let idx = 0;
  setInterval(() => {
    slides[idx].classList.remove('is-active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('is-active');
  }, 5500);
})();

/* ---------- Scroll-driven hero color tint ---------- */
(function () {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Hero gradually shifts toward warmer/cooler tint as user scrolls within hero range
  const tints = [
    '#FCFAF7', // base
    '#FBF1E2', // warm wash
    '#F8EAD6', // amber
    '#F2E4D6', // mellow
    '#EFE0CC', // depth
  ];
  function update() {
    const h = window.innerHeight;
    const y = Math.max(0, Math.min(1, window.scrollY / h));
    const idx = Math.min(tints.length - 1, Math.floor(y * tints.length));
    hero.style.backgroundColor = tints[idx];
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ---------- Reveal on scroll ---------- */
(function () {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
})();

/* ---------- Mascot: scroll-driven 5 states + fixed companion ---------- */
(function () {
  const states = Array.from(document.querySelectorAll('.mascot-stage > .mascot-state'));
  const caption = document.getElementById('mascotCaption');
  const railFill = document.getElementById('mascotRailFill');
  const dots = Array.from(document.querySelectorAll('.mascot-rail-dots span'));

  const pal = document.getElementById('mascotPal');
  const palFrame = document.getElementById('mascotPalFrame');
  const palBubble = document.getElementById('mascotPalBubble');

  // Clone the 5 SVG states into the companion frame
  const palStates = [];
  if (palFrame && states.length) {
    states.forEach((src, i) => {
      const clone = src.cloneNode(true);
      clone.classList.toggle('is-active', i === 0);
      palFrame.appendChild(clone);
      palStates.push(clone);
    });
  }

  // Stops keyed to scroll progress and matching captions
  const stops = [
    { t: 0.00, cap: 'Arjun — dreaming of studying abroad',         bubble: 'Hi! I\'m Arjun. Just dreaming of going abroad…' },
    { t: 0.15, cap: 'Researching universities with EduTravel…',     bubble: 'Look, Oxford\'s right here! 👀' },
    { t: 0.35, cap: 'Offer letter in hand — packing for London!',   bubble: 'My visa\'s approved! 🎉' },
    { t: 0.55, cap: 'At the airport — ready to fly!',              bubble: 'Gate 7 — wish me luck ✈' },
    { t: 0.78, cap: 'Arjun lands at UCL. Dream achieved! 🎉',       bubble: 'I made it!! 🎓' },
  ];

  let currentIdx = -1;

  function indexFromProgress(p) {
    let idx = 0;
    for (let i = 0; i < stops.length; i++) {
      if (p >= stops[i].t) idx = i;
    }
    return idx;
  }

  function setState(idx) {
    if (idx === currentIdx) return;
    currentIdx = idx;

    states.forEach((s, i) => s.classList.toggle('is-active', i === idx));
    palStates.forEach((s, i) => s.classList.toggle('is-active', i === idx));

    dots.forEach((d, i) => d.classList.toggle('on', i <= idx));

    if (caption) {
      caption.style.opacity = '0';
      setTimeout(() => {
        caption.textContent = stops[idx].cap;
        caption.style.opacity = '1';
      }, 180);
    }
    if (palBubble) {
      palBubble.textContent = stops[idx].bubble;
      // brief bubble flash on each transition
      pal.classList.add('show-bubble');
      clearTimeout(setState._bubbleTimer);
      setState._bubbleTimer = setTimeout(() => {
        pal.classList.remove('show-bubble');
      }, 3400);
    }
  }

  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    setState(indexFromProgress(p));
    if (railFill) railFill.style.width = (p * 100) + '%';

    // Companion mascot visibility — show once user has scrolled past the hero
    if (pal) {
      const hero = document.getElementById('top');
      const heroBottom = hero ? hero.offsetHeight - 200 : 600;
      if (window.scrollY > heroBottom) {
        pal.classList.add('is-visible');
      } else {
        pal.classList.remove('is-visible');
      }

      // Dock to right when chatbot is open, left by default (avoid FAB collision)
      if (document.body.classList.contains('cb-open')) {
        pal.classList.add('dock-right');
      } else {
        pal.classList.remove('dock-right');
      }
    }
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  // initial
  setState(0);
  update();

  // Periodic bubble nudges so Arjun feels alive
  setInterval(() => {
    if (pal && pal.classList.contains('is-visible')) {
      pal.classList.add('show-bubble');
      setTimeout(() => pal.classList.remove('show-bubble'), 3000);
    }
  }, 14000);
})();

/* ---------- Counter animation ---------- */
(function () {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const fmt = (n, suffix) => n.toLocaleString('en-US') + (suffix || '');

  function runCounter(el) {
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const dur = 1800;
    const start = performance.now();
    function frame(now) {
      const e = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - e, 3);
      const v = Math.round(target * eased);
      el.textContent = fmt(v, suffix);
      if (e < 1) requestAnimationFrame(frame);
      else el.textContent = fmt(target, suffix);
    }
    requestAnimationFrame(frame);
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        runCounter(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach((c) => io.observe(c));
})();

/* ---------- FAQ accordion ---------- */
(function () {
  document.querySelectorAll('.faq-item').forEach((item) => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', () => {
      const open = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item.open').forEach((sib) => {
        if (sib !== item) {
          sib.classList.remove('open');
          sib.querySelector('.faq-a').style.maxHeight = '0';
        }
      });
      if (open) {
        item.classList.remove('open');
        a.style.maxHeight = '0';
      } else {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });
})();

/* ---------- Floating Chatbot ---------- */
(function () {
  const cb = document.getElementById('chatbot');
  if (!cb) return;
  const fab = cb.querySelector('.cb-fab');
  const closeBtn = cb.querySelector('.cb-close');
  const body = cb.querySelector('.cb-body');
  const input = cb.querySelector('.cb-input input');
  const sendBtn = cb.querySelector('.cb-send');

  const replies = {
    uk:           "🇬🇧 Brilliant! We help with the UK's top universities — Oxford, Cambridge, UCL, Imperial, Edinburgh, Manchester and more. UK applications typically take 4–6 months from kickoff to visa. Want a free counselling call to map your shortlist?",
    visa:         "🛂 Visa stress is real — but it's our specialty. We've maintained a 98% visa success rate across UK, US, Canada and Australia. Document prep, financial proofs, mock interviews — we handle every step. Which country's visa are you applying for?",
    scholarships: "🎓 Yes! We help students unlock university scholarships, government grants (Chevening, Fulbright, DAAD), and need-based aid. Your shortlist + profile + essays decide a lot here. Want us to map scholarship eligibility for your profile?",
    free:         "💸 Yes — our consultation is 100% free, with zero commitment. The Free Application Service is also free; you only pay for our Premium service if you want end-to-end support with a guaranteed offer. Want to book a free 30-min session?",
    default:      "Thanks for sharing! A counsellor will pick this up shortly. Meanwhile — would you like to book a free 30-min counselling call to discuss your study-abroad plans?"
  };

  function appendUser(text) {
    const el = document.createElement('div');
    el.className = 'cb-msg user';
    el.textContent = text;
    body.appendChild(el);
    body.scrollTop = body.scrollHeight;
  }

  function appendBot(text) {
    const typing = document.createElement('div');
    typing.className = 'cb-typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    body.appendChild(typing);
    body.scrollTop = body.scrollHeight;

    setTimeout(() => {
      typing.remove();
      const el = document.createElement('div');
      el.className = 'cb-msg bot';
      el.textContent = text;
      body.appendChild(el);
      body.scrollTop = body.scrollHeight;
    }, 1000);
  }

  function classify(text) {
    const t = text.toLowerCase();
    if (/uk|united kingdom|britain|england|london|oxford|cambridge/.test(t)) return replies.uk;
    if (/visa|stamp|interview|embass/.test(t)) return replies.visa;
    if (/scholarship|fund|financial aid|grant|chevening|fulbright/.test(t)) return replies.scholarships;
    if (/free|cost|price|fee|paid|charge/.test(t)) return replies.free;
    return replies.default;
  }

  function toggle(open) {
    cb.classList.toggle('cb-open', open);
    document.body.classList.toggle('cb-open', open);
  }

  fab.addEventListener('click', () => toggle(!cb.classList.contains('cb-open')));
  closeBtn.addEventListener('click', () => toggle(false));

  body.addEventListener('click', (e) => {
    const btn = e.target.closest('.cb-quick button');
    if (!btn) return;
    const key = btn.dataset.key;
    appendUser(btn.textContent);
    btn.parentElement.remove();
    appendBot(replies[key] || replies.default);
  });

  function send() {
    const text = input.value.trim();
    if (!text) return;
    appendUser(text);
    input.value = '';
    const quick = body.querySelector('.cb-quick');
    if (quick) quick.remove();
    appendBot(classify(text));
  }

  sendBtn.addEventListener('click', send);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') send(); });
})();

/* ---------- University card image carousels ---------- */
(function () {
  const cards = document.querySelectorAll('[data-uni-card]');
  cards.forEach((card, cardIdx) => {
    const slides = card.querySelectorAll('.uni-slide');
    const dots = card.querySelectorAll('.uni-dots span');
    if (slides.length < 2) return;
    let i = 0;
    // stagger interval per-card so they don't all flip at the same time
    setInterval(() => {
      slides[i].classList.remove('is-active');
      if (dots[i]) dots[i].classList.remove('on');
      i = (i + 1) % slides.length;
      slides[i].classList.add('is-active');
      if (dots[i]) dots[i].classList.add('on');
    }, 3200 + cardIdx * 250);
  });
})();

/* ---------- Footer year ---------- */
(function () {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

/* ---------- Instagram-stories: cards cycle one-at-a-time ---------- */
(function () {
  const wrap = document.getElementById('storiesWrap');
  if (!wrap) return;
  const cards = Array.from(wrap.querySelectorAll('.story-card'));
  if (!cards.length) return;

  // Each story is 3 "beats" of ~5s each; total per card = 15s
  const BEAT_MS = 5000;
  const BEATS_PER_CARD = 3;
  const TOTAL_PER_CARD = BEAT_MS * BEATS_PER_CARD;

  let currentCard = 0;
  let currentBeat = 0;
  let timer = null;

  function paintBars() {
    cards.forEach((card, i) => {
      const bars = card.querySelectorAll('.story-bar');
      bars.forEach((bar, b) => {
        bar.classList.remove('active', 'done');
        if (i < currentCard) bar.classList.add('done');
        else if (i === currentCard) {
          if (b < currentBeat) bar.classList.add('done');
          else if (b === currentBeat) bar.classList.add('active');
        }
      });
      card.classList.toggle('is-current', i === currentCard);
    });
  }

  function tick() {
    currentBeat++;
    if (currentBeat >= BEATS_PER_CARD) {
      currentBeat = 0;
      currentCard = (currentCard + 1) % cards.length;
    }
    paintBars();
  }

  function start() {
    if (timer) clearInterval(timer);
    timer = setInterval(tick, BEAT_MS);
  }

  // Click on a card jumps to it
  cards.forEach((card, i) => {
    card.addEventListener('click', () => {
      currentCard = i;
      currentBeat = 0;
      paintBars();
      start();
    });
  });

  paintBars();
  start();
})();
