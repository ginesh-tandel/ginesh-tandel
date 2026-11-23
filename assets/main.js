// Portfolio interactions: mobile nav, sticky header, active link, scroll reveal, career timeline, year.
(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    var setOpen = function (open) {
      links.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', function () { setOpen(!links.classList.contains('open')); });
    links.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
    document.addEventListener('click', function (e) { if (!e.target.closest('.nav-wrap')) setOpen(false); });
  }

  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Highlight the nav link of the section in view (home page only)
  var here = location.pathname.replace(/index\.html$/, '');
  var navAnchors = Array.prototype.slice.call(document.querySelectorAll('.nav-links a')).filter(function (a) {
    return a.hash && a.pathname.replace(/index\.html$/, '') === here && document.getElementById(a.hash.slice(1));
  });
  var sections = navAnchors.length ? Array.prototype.slice.call(document.querySelectorAll('main section[id]')) : [];
  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navAnchors.forEach(function (a) {
          a.classList.toggle('active', a.hash === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  // Reveal on scroll
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }


  // The Climb: line fill, scene activation, counters
  var climb = document.querySelector('.climb');
  var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function updateProgress() {
    var r = climb.getBoundingClientRect();
    var p = (window.innerHeight * 0.6 - r.top) / r.height;
    climb.style.setProperty('--p', Math.min(1, Math.max(0, p)));
  }
  function countUp(el) {
    var end = Number(el.dataset.count), pre = el.dataset.prefix || '', suf = el.dataset.suffix || '';
    var final = pre + end.toLocaleString('en-US') + suf, t0 = null;
    function step(t) {
      if (t0 === null) t0 = t;
      var k = Math.min(1, (t - t0) / 1200);
      el.textContent = k < 1 ? pre + Math.round(end * (1 - Math.pow(1 - k, 3))).toLocaleString('en-US') + suf : final;
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if (climb) {
    var ticking = false;
    var tick = function () { if (!ticking) { ticking = true; requestAnimationFrame(function () { ticking = false; updateProgress(); }); } };
    window.addEventListener('scroll', tick, { passive: true });
    window.addEventListener('resize', tick);
    updateProgress();
    var scenes = document.querySelectorAll('.scene');
    if ('IntersectionObserver' in window) {
      var sio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add('on');
          if (!still) e.target.querySelectorAll('[data-count]').forEach(countUp);
          sio.unobserve(e.target);
        });
      }, { threshold: 0.25 });
      scenes.forEach(function (s) { sio.observe(s); });
    } else {
      scenes.forEach(function (s) { s.classList.add('on'); });
    }
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
