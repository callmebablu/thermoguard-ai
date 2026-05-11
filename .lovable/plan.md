
# ThermoGuard AI — Senior Refinement Pass

A focused polish pass on the existing single-page site. No rebuild, no backend, no new deps. All edits stay in frontend presentation code.

## 1. Visual system tightening (`src/styles.css`)

- Deepen the base: drop background to a slightly cooler, darker slate; reduce the two big radial background blobs (lower opacity, smaller radius) so they read as ambient lighting, not a startup gradient.
- Add `--shadow-elevated`, `--shadow-glow-primary`, and `--gradient-hairline` (top-edge highlight on panels) tokens. Replace ad-hoc shadows in `.panel` / `.panel-strong` with these.
- Add `.panel-inset` (recessed) for chart wells, and `.kbd` for small `Esc` / `Live` chips used in dashboard chrome.
- Add a `.grid-bg` utility (1px hairline grid, ~32px) used behind the hero and the final CTA — gives industrial control-room feel without being noisy.
- Tighten section rhythm: standardise `mt-24 sm:mt-32 lg:mt-40` between sections (currently mixed `mt-20 / mt-28`).
- Type scale audit: hero H1 `clamp(2.5rem, 5.2vw, 4rem)`, section H2 `clamp(1.875rem, 3vw, 2.5rem)`, body `text-[15px]/relaxed` on muted copy. Keep letter-spacing 0 (already enforced).
- Add `prefers-reduced-motion` guard around `.reveal` and `pulse-dot`.

## 2. Header (`Header.tsx`)

- Add scrollspy: highlight the active section link based on `IntersectionObserver` of section ids.
- Add a thin top status strip inside the header on `scrolled`: small live dot + "All systems nominal · 148 panels monitored" — reinforces product-realism.
- Mobile drawer: convert from `display:none/block` to a proper full-height sheet with backdrop, focus trap on first link, `Esc` to close, animated slide. Lock body scroll already exists — keep it.
- Add "Sign in" ghost link beside the demo CTA on desktop (anchor only, no backend), so the header reads as a real product site.

## 3. Hero (`Hero.tsx` + `DashboardMock.tsx`)

- Headline kept close, but tightened: "Continuous thermal-risk intelligence for critical electrical infrastructure."
- Sub-copy trimmed to 2 lines max on desktop, with an inline highlight on "AI-assisted anomaly detection".
- Replace the loose pill with a compact status row: live dot + "Live telemetry · 3 sites · updated 12s ago" using `text-mono`.
- Add a 4-metric proof strip directly under the CTAs (no fake logos): "Always-on monitoring · Risk-scored alerts · Audit-ready history · Multi-site ready".
- DashboardMock upgrades:
  - Window chrome gains a faux URL bar segment (`thermoguard.ai / control / overview`) and a right-side "Last sync 4s" mono timestamp.
  - Replace 3-stat row with a 4-stat row: Site health, Panels monitored, Active alerts, Avg response (matches DashboardPreview).
  - Add a thin sparkline above the trend ("Site-wide thermal index, 24h").
  - Add a tiny Phase A/B/C tab bar above the trend (visual only) — increases realism.
  - Asset row hover: subtle `bg-elevated/40` and trailing chevron.
  - Add a soft glow ring around critical row to draw the eye.
  - Add an "Alert" toast pinned to the upper-right of the mock: "PNL-12 Phase B · sustained +18°C · 22 min" with risk badge — the single strongest credibility signal.

## 4. New: Risk Engine section (after Platform, before Risk Intelligence)

New component `RiskEngine.tsx`. Compact 2-column block explaining "How heat data becomes maintenance intelligence":

- Left: 4 stacked rows showing the pipeline — `Telemetry → Baseline learning → Anomaly scoring → Risk classification → Recommended action`. Each row has a mono label, a one-liner, and a small SVG marker.
- Right: a "Risk score breakdown" panel — small horizontal bar showing weighted contributions (Magnitude, Persistence, Drift vs baseline, Load context). Static SVG, deterministic values.
- Footer line: "Models are advisory. Final action remains with qualified maintenance personnel." — reinforces compliance posture.

## 5. New: Continuous vs Periodic comparison (after Workflow)

New component `Comparison.tsx`. Compact 2-column table:

|                          | Periodic thermography | ThermoGuard AI |
| Coverage                 | Snapshot, quarterly   | Continuous, 24/7 |
| Intermittent faults      | Often missed          | Surfaced as drift |
| Escalation time          | Days                  | Minutes |
| Maintenance evidence     | Report PDFs           | Time-series + audit log |
| Planning input           | Manual interpretation | Risk-scored prioritisation |

Rendered as styled rows (not a raw table on mobile — collapses to stacked cards).

## 6. RiskIntelligence (`RiskIntelligence.tsx`)

- Each risk state row gets a mono "trigger condition" line (e.g. Watch: "≥1.5σ above baseline for 10 min").
- Add a small `Lifecycle` strip under the section heading: `Detected → Classified → Assigned → Action recommended → Resolved` — five chips connected by hairlines. Reuses the alert-lifecycle language requested.
- Asset list: align columns properly, add a `Phase` column (A/B/C), right-align temp.

## 7. DashboardPreview (`DashboardPreview.tsx`)

- Add a sticky-feeling toolbar at the top of the panel: site selector chip ("DC-East"), date range chip ("Last 24h"), "Export" ghost button.
- Stat tiles: add a small delta indicator (`▲ 2 vs yesterday`) in mono.
- Trend panel: add 3 phase tabs (A/B/C), threshold horizontal dashed line annotated "Baseline +10°C".
- Alert timeline items: add lifecycle status pill (`Detected`, `Assigned`, `Resolved`) in addition to risk badge.
- Asset table: add `Phase` and `Last seen` columns; truncate gracefully on tablet; collapse to card list under `md`.
- Recommended actions: each item gets a priority chip (`High` / `Medium`) and an estimated window.

## 8. Workflow (`Workflow.tsx`)

- Replace the 9-column arrow grid (visually fragile) with a flex row + connecting hairline rail behind step circles. Numbered circles (01–05) sit on the rail.
- Mobile keeps stacked cards but adds a left vertical rail.

## 9. UseCases / ValueBar / ProblemSection

- ValueBar: tighten copy, swap "Better visibility" → "Portfolio visibility"; swap "Smarter planning" → "Evidence-based planning".
- ProblemSection: trim to 4 cards (drop "Limited maintenance evidence" — overlaps with Comparison section). Strengthen titles to verb-led.
- UseCases: keep 6 cards but standardise body length to ~2 lines; add a small role tag on each ("Operations", "Maintenance", "Critical power", etc.).

## 10. FinalCTA (`FinalCTA.tsx`)

- Reframe the right card as a clear "demo intent" form preview (not a real submission): static fields rendered as styled inputs (Work email, Company, Sites under management, Notes) plus the existing mailto buttons below as the actual action. Adds a "Prefer email?" line with the mailto links inline. Ensures the section *feels* like a demo-intent area without backend wiring.
- Left column: replace the bullet list with three compact "What to expect" tiles (30-min walkthrough · Architecture review · Deployment scoping).
- Add the same compliance line from the footer in muted text: "Decision-support platform — does not replace qualified electrical inspection."

## 11. Footer (`Footer.tsx`)

- Drop the dead "Company" links (About / Careers / Press) — they 404 to `#`. Replace with a "Resources" group: Platform, Risk Intelligence, Workflow, Comparison.
- Add a fourth column "Trust": compliance disclaimer line, "Decision-support platform", and a "Status: All systems nominal" mono row with a green dot. No fake certifications.

## 12. SEO / metadata (`__root.tsx`)

- Refine `<title>` to ≤60 chars: "ThermoGuard AI — Continuous Thermal-Risk Intelligence".
- Description ≤160 chars, action-oriented for B2B buyers.
- Add JSON-LD `SoftwareApplication` block (applicationCategory: BusinessApplication; no fake reviews or pricing).
- Confirm single `<h1>` (Hero only) and that all section headings remain `<h2>`.

## 13. Responsive QA pass

After edits, screenshot the preview at 375, 768, 1280, 1536 and fix:
- Hero stacking order on mobile (mock should appear *after* copy on small screens).
- DashboardPreview asset table → card list under `md`.
- Workflow rail hides cleanly on mobile.
- Header drawer scroll lock + tap targets ≥44px.
- Final CTA grid collapses to single column with form preview below copy.

## Technical notes

- No new dependencies. Continue using React, TS, Tailwind v4 tokens, shadcn/ui primitives, lucide-react, inline SVG.
- New components live under `src/components/site/` (`RiskEngine.tsx`, `Comparison.tsx`); index page imports them in order: Hero → ValueBar → Problem → Platform → RiskEngine → RiskIntelligence → UseCases → Workflow → Comparison → DashboardPreview → FinalCTA.
- All colors via existing `--risk-*` and `--primary` tokens; no new ad-hoc hex values.
- Use `IntersectionObserver` already in `useReveal` for scrollspy (extend hook or add `useScrollSpy`).
- Verify build after edits; visually QA each viewport via the browser tool before declaring done.

## Out of scope

- No real form submission, auth, analytics, or backend.
- No new fonts, illustrations, customer logos, certifications, or stock imagery.
- No claims of fire prevention, guaranteed safety, or replacement of qualified inspection.
