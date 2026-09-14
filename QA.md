# Verification record

Verified against the local rendered site on 14–15 September 2026.

- TypeScript strict checking passed.
- Production build passed (Vinext client, RSC and SSR outputs). The lazy Three.js chunk exceeds Vite's 500 kB uncompressed advisory; it is loaded on demand.
- HTTP checks: `/`, `/learn`, `/signs`, `/test`, `/lessons`, `/robots.txt`, and `/sitemap.xml` returned 200. Unknown route returned 404.
- Desktop hero, cockpit and parking scenes rendered successfully in the browser.
- Responsive views checked at 1440×1000, 390×844 and 320×740. A narrow-screen ribbon overflow was found and fixed; subsequent DOM measurements showed no document overflow at 320 and 390 pixels.
- Mobile navigation opens, exposes links, and navigates successfully.
- Scrolling to a learning-road milestone updates the scene and milestone counter.
- Cockpit selection updates the explanation and selected control.
- Pedal exercise gives corrective feedback for Brake and positive feedback for Clutch.
- Keyboard Home/End on the accelerator slider produces both low/high feedback states.
- Reverse gear shows the correct introductory explanation.
- Parking tabs and next-step selection update the visible lesson.
- Search for parking returns one matching sign; its dialog opens and closes. Traffic-signal selection updates the lesson.
- All ten quiz questions tested: nine correct plus one deliberate error produced 9/10. Explanation, results and reset were verified; reset disables checking until a new answer is selected.
- Lesson progress saves on this device. A sample lesson plan saved and survived reload, without claiming a confirmed booking.
- WebMCP `open_driving_lesson` registration, schema, valid lesson 3, visible-state update and invalid lesson 99 rejection were tested in the browser.

Limits: no real phone hardware or full Lighthouse audit was available in this QA pass. WebGL failure and reduced-motion behavior were reviewed in code, not forced with browser environment overrides. No real booking service, instructor availability, payment workflow or domain DNS is connected. The detailed exterior vehicle asset was visually verified after the first QA pass. Cockpit and parking scenes remain conceptual educational illustrations, not vehicle-specific simulations. The original brief ends midway through the highway section.

## India car visual update — 2026-09-15
- Replaced Ferrari hero with an AI-generated Maruti Suzuki Swift learner illustration, Indian-style registration and L plate; responsive WebP assets are 214,072 / 51,230 bytes.
- Removed Ferrari GLB and its unused Draco decoder. Optional 3D practice view uses original compact hatchback geometry.
- Moved driving seat, wheel, instruments and pedals to the right; pedal sequence remains clutch/brake/accelerator left to right.
- Strict TypeScript check and production build passed. Desktop 1440 and mobile 390/320 visual checks completed; mobile image cropping and control spacing corrected. 3D toggle worked; no browser errors were reported.
- Publishing blocked: Sites connector returned HTTP 401 token_revoked during credential renewal. No source push or deployment occurred. Reconnect Sites and resume publishing this local change.
- Existing regulatory references have not been comprehensively localized to India in this car-visual update.
