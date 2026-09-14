# The Learner Zone

A responsive driving-learning site with Three.js vehicle and environment geometry, interactive lessons, a 13-stage learning road, road signs, a practice test, and a local lesson planner.

## Repository inspection
The supplied workspace was empty. There was no framework, source, package manager, configuration, backend, authentication, deployment setup or asset library to preserve.

## Stack
React 19.2.6, TypeScript 5.9, Next 16-compatible Vinext/Vite, Tailwind 4, Three.js, and the bundled Radix UI primitives. npm lockfile is committed. No GSAP or additional animation framework is needed.

## Development
Use `npm ci`, `npm run dev`, `npm run build`, and `npx tsc --noEmit`. The development URL is printed by the server. On machines with a broken npm PowerShell shim, run npm's JavaScript entry point through Node.

## Routes
- `/`: immersive introduction and interactive learning journey
- `/learn?lesson=0`: lessons 0–12; review progress is stored on the current device
- `/signs`: searchable sign examples and traffic-light lesson
- `/test`: 10-question practice with answer explanations and results
- `/lessons`: local lesson preferences with downloadable text plan

## Content and integration boundaries
The source brief ended at the highway section. The user subsequently confirmed India and requested an Indian car visual and Indian road-rules guidance. Content now uses Indian left-hand-road guidance, national driving-regulations references, and Indian traffic-police sign/marking guidance. Vehicle controls and parking paths remain conceptual and must not be interpreted as universal vehicle-specific instructions.

There is no instructor inventory, availability, payment or booking provider. The lesson planner explicitly states that it is a local draft and does not make a booking. Connect an authorized real provider before enabling submissions. No personal information is sent by the planner.

The supplied domain is thelearnerzone.com. DNS ownership and domain connection have not been configured. Private Sites deployment is independent of that domain.

## Rendering and accessibility
Three.js is lazy-loaded near the viewport. Resolution is capped, offscreen/hidden-tab rendering pauses, shadows use smaller maps on touch devices, and reduced-motion preferences disable nonessential motion. Ordinary buttons provide equivalent lesson selection when WebGL fails. Components clean up geometries, materials and renderers. Keyboard-operable Radix controls are used for tabs, sliders, dialogs and answer choices.

The main visual is an AI-generated Indian-market Maruti Suzuki Swift learner-car illustration, served as responsive WebP (214 KB desktop, 51 KB mobile). An optional 3D practice view and all educational driving scenes use original generic compact hatchback geometry. The cockpit is a right-hand-drive manual-car schematic; clutch, brake and accelerator remain in left-to-right order. Vehicle-specific reference points vary. No manufacturer endorsement is implied. Scenes unmount when far from the viewport to release rendering resources.
