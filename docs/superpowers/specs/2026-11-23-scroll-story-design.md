# Scroll-story home page — design

## Intent
Turn the home page into one scroll journey of Ginesh's career, so a recruiter or client feels the progression (builder → owner → AI engineer) and ends at "Get in touch". Source of every fact: `assets/Ginesh_Tandel_Resume.pdf`.

## Goals
- Career told as a story ("The Climb"), 2011 → now, one scene per era.
- Motion that carries meaning: a line that draws with scroll, numbers that count up, two small proof animations.
- Works without JS and with reduced motion: all content visible, final numbers shown.

## Non-goals
- Case-study pages keep their layout (only the shared header/footer nav changes, via `build.mjs`).
- No new content, metrics or claims beyond the resume. Screenshots, og:image and outcome figures stay open items.

## Anti-goals
- No scroll-hijacking, no animation library, no layout that breaks on a phone, no motion that hides text.

## Approach (chosen)
**A + two animations from D.** A scroll-drawn timeline is the spine. The LogiqCube scene carries the model-swap and tenant-wall animations. Rejected: B (document journey) says little about 11 years; C (code writes itself) is hard for non-technical clients; D alone has no career arc.

## Structure (home page)
1. Hero — unchanged.
2. **The Climb** (replaces Story + Journey). A vertical line fills as you scroll. Scenes:
   - 2011–14 MCA, Uka Tarsadia University.
   - 2015–18 .NET MVC: Quickscrum, ReadyEMR, placement system.
   - 2018–20 Rigel → Spaculus: counters 40% faster reporting, 25% faster app, 10,000+ users.
   - Jun 2020 LogiqCube: counters 25+ clients, 4 SaaS products. Animation 1: model swap (Azure OpenAI → Gemini → Groq, "business logic" box stays fixed). Animation 2: tenant wall (tenant lanes with walls rising). Third principle ("own it in production") as text.
   - 2023–26 Luminosoft: counters 6 developers, ~30% less manual ops effort.
   - Now: AI agents, RAG, MCP; the skill tags appear one by one.
3. Projects (cards, as today). 4. Skills (as today). 5. Contact CTA (as today).
Nav becomes: Home, Climb, Projects, Skills, Contact. Principles section is removed; its content moves into the LogiqCube scene.

## How it works
Vanilla CSS + JS, no dependency. Scenes activate with IntersectionObserver (adds `.on`). Line progress is a CSS variable set from a rAF-throttled scroll handler. Counters read their final value from the HTML text, so no-JS shows it. `prefers-reduced-motion`: no animation, final state shown. Mobile: line on the left edge, scenes stacked.

## Calls I made (change any)
- Merge Story + Journey into one section; fold Principles into the LogiqCube scene.
- Reorder to Climb → Projects → Skills → Contact.
- Illustrations are simple inline SVG/CSS, not images.

## Left to the builder
Easing and timing, exact SVG drawing, scene spacing, counter duration.

## Verification
Open in browser at desktop and 400px; check reduced-motion and JS-off states, no console errors, nav highlight, scroll offsets.
