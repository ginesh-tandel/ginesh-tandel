# Scroll-Story Home Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Story and Journey sections with one scroll-drawn career timeline ("The Climb") with counters and two proof animations.

**Architecture:** Static HTML. One new `<section id="climb">` in `index.html`; styles appended to `assets/styles.css`; behavior appended to `assets/main.js`. Scene state is a `.on` class set by the existing IntersectionObserver pattern; line progress is a CSS variable `--p`. No libraries.

**Tech Stack:** HTML, CSS (keyframes, custom properties), vanilla JS.

**Spec:** `docs/superpowers/specs/2026-11-23-scroll-story-design.md`

## Global Constraints

- No dependency or animation library.
- Every fact and number comes from `assets/Ginesh_Tandel_Resume.pdf`; nothing invented.
- All text and final numbers are in the HTML; JS only animates them. No-JS and `prefers-reduced-motion` show the final state.
- No scroll-hijacking. No horizontal overflow at 400px width.
- Nav: Home, Climb, Projects, Skills, Contact. Page order: Hero, Climb, Projects, Skills, Contact.
- Principles section removed; its three rules live in the LogiqCube scene.
- Not a git repo: skip commit steps; snapshot with `cp -r` if wanted.

## Review Focus

- Deep link `index.html#climb` and `#contact` on load: target not hidden behind header (scroll-margin) and scene visible.
- JS blocked: all scenes and numbers visible.
- Window resized mid-scroll: line height still matches the scenes.
- Counter scene scrolled past fast: ends on the exact final number, never a mid value.
- Tab with `prefers-reduced-motion`: no animation, final numbers.

---

### Task 1: Markup, order and nav

**Files:**
- Modify: `index.html` (sections `#story`, `#journey`, `#principles`, header and footer nav)
- Modify: `build.mjs` only if header/footer markers need no change (they do not)

**Interfaces:**
- Produces: `<section id="climb" class="block panel">` containing `<ol class="climb">`; `<li class="scene" data-era="...">` per era (6); `<span data-count="N" data-suffix="%">N%</span>` for each counter; `<div class="swap" aria-hidden="true">` and `<div class="walls" aria-hidden="true">` inside the LogiqCube scene.

- [ ] **Step 1:** Replace `#story` and `#journey` with `#climb`: six `.scene` items — MCA 2011–14; .NET MVC 2015–18; Rigel → Spaculus 2018–20 (40%, 25%, 10,000+); LogiqCube Jun 2020 (25+, 4); Luminosoft 2023–26 (6, 30%); Now. Reuse the existing copy from the removed sections.
- [ ] **Step 2:** In the LogiqCube scene add the three rules as text (swappable model, isolate every tenant, own it in production) and the empty `.swap` and `.walls` containers.
- [ ] **Step 3:** Delete `#principles`. Move `#projects` and `#skills` after `#climb`; keep `#contact` last.
- [ ] **Step 4:** Update the nav and footer lists to Home, Climb, Projects, Skills, Contact (`href="index.html#climb"`). Run `node build.mjs`.
- [ ] **Step 5:** Verify: `grep -c 'id="story"\|id="journey"\|id="principles"' index.html` prints 0; `grep -c 'class="scene"' index.html` prints 6; `grep -c "index.html#climb" *.html` prints 2 per file.

### Task 2: Climb styles (static state)

**Files:**
- Modify: `assets/styles.css` (append a "The Climb" block; remove now-unused `.chapters`, `.chapter`, `.timeline`, `.tl-card`, `.principles`, `.principle`, `.quote` rules after grepping that no HTML uses them)

**Interfaces:**
- Consumes: Task 1 classes `.climb`, `.scene`, `.on`.
- Produces: CSS variable `--p` (0–1) read by `.climb::after` as the line fill height; `.js .scene` hidden until `.on`.

- [ ] **Step 1:** Write `.climb` (relative, left rail), `.climb::before` (dim track), `.climb::after` (accent fill, `height: calc(var(--p, 1) * 100%)` — default 1 so no-JS shows a full line), `.scene` (card with node dot).
- [ ] **Step 2:** `.js .scene { opacity:0; transform:translateY(24px) }` and `.js .scene.on { opacity:1; transform:none }` with a transition. Inside `@media (prefers-reduced-motion: reduce)` set both states to visible with no transition.
- [ ] **Step 3:** At max-width 640px keep the rail on the left and stack content.
- [ ] **Step 4:** Verify at 1536px and 400px: no horizontal scroll (`document.documentElement.scrollWidth <= innerWidth`), scenes readable.

### Task 3: Line progress, scene activation, counters

**Files:**
- Modify: `assets/main.js`

**Interfaces:**
- Consumes: `.climb`, `.scene`, `[data-count]`, `[data-suffix]` from Task 1.
- Produces: `updateProgress(): void` sets `--p` on `.climb` from the scroll position; `countUp(el: HTMLElement): void` animates from 0 to `Number(el.dataset.count)` over about 1200ms and always ends on `el.dataset.count + (el.dataset.suffix || '')`.

- [ ] **Step 1:** `updateProgress`: `p = clamp((innerHeight*0.6 - rect.top) / rect.height, 0, 1)`; called from the existing passive scroll listener (rAF-throttled) and on `resize`.
- [ ] **Step 2:** One IntersectionObserver (threshold 0.25) adds `.on` to `.scene`, calls `countUp` on its `[data-count]` children once, then unobserves. If IntersectionObserver is missing, add `.on` to all.
- [ ] **Step 3:** If `matchMedia('(prefers-reduced-motion: reduce)').matches`, skip `countUp` and leave HTML text.
- [ ] **Step 4:** Verify in browser via the JS tool: scroll to bottom of `#climb` → `--p` equals `1`; every `[data-count]` text equals its final value; scrolling past a counter in one jump still ends on the final value.

### Task 4: Model-swap and tenant-wall animations

**Files:**
- Modify: `assets/styles.css`, `index.html` (contents of `.swap`, `.walls`)

**Interfaces:**
- Consumes: `.swap`, `.walls` containers, `.scene.on` from Tasks 1 and 3.

- [ ] **Step 1:** `.swap`: a fixed "Business logic" box and one provider chip whose label cycles Azure OpenAI → Gemini → Groq via a 9s CSS keyframe loop (three stacked chips fading in turn). The box never changes.
- [ ] **Step 2:** `.walls`: three tenant lanes; on `.scene.on .walls` the divider bars grow from `scaleY(0)` to `1` in sequence.
- [ ] **Step 3:** Both animations are paused by default and play only when `.scene.on` is set; under reduced motion show the final frame (first provider chip visible, walls up).
- [ ] **Step 4:** Verify visually with a screenshot at the LogiqCube scene; no console errors.

### Task 5: Cleanup and full check

**Files:**
- Modify: `assets/main.js` (nav spy already observes `main section[id]`; confirm `#climb` highlights "Climb")

- [ ] **Step 1:** Run `node --check assets/main.js`; grep for leftover references to removed classes and ids across all HTML and CSS.
- [ ] **Step 2:** Browser check on `http://127.0.0.1:8765/index.html` at 1536px and 400px: nav highlight moves Home → Climb → Projects → Skills → Contact; `#climb` and `#contact` deep links land below the header; no console errors.
- [ ] **Step 3:** Check JS-off (block `main.js` via DevTools or temporarily remove the `js` class from `<html>`): every scene and number visible.
- [ ] **Step 4:** Check the three case-study pages still load and their nav shows the new links.
