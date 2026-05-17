# Product Experience Storyboard and Cut List

## 1. Final Homepage Order

Recommended final homepage structure:

1. Header
2. Hero
3. Compact ValueBar
4. Short ProblemSection
5. Product Experience / How It Works
6. Risk Intelligence
7. Dashboard / Platform Preview
8. Use Cases
9. Integrations
10. Pricing / Plans
11. Comparison
12. Final CTA
13. Footer

Reasoning:

- The visitor first understands the product category and problem.
- The Product Experience section then explains the full system journey.
- Proof sections follow after the product is understood.
- Commercial and contact sections appear once value is clear.

## 2. Exact Section Decisions

| Current Section | Final Decision | Exact Action |
| --- | --- | --- |
| Header | Keep but refine | Use fewer top-level labels: Product, How It Works, Use Cases, Integrations, Pricing, Contact. Remove granular nav items such as AI Engine, Dashboard, Workflow, or Plans. |
| Hero | Keep | Keep the hero dashboard and core positioning. Change secondary CTA to point to How It Works. Do not add more explanatory copy. |
| ValueBar | Shorten | Keep as a compact value strip with 3-4 proof points. Avoid repeating detailed product journey language. |
| ProblemSection | Shorten | Keep the problem framing, but reduce density. It should set up the need for continuous monitoring, not fully explain the product. |
| PlatformSection | Merge / shorten | Merge core capabilities into Product Experience. If retained, convert to a compact capability strip after Product Experience. |
| RiskEngine | Merge / reposition | Reposition as a focused proof module for AI scoring. Do not keep it as a full repeated telemetry-to-action explanation. |
| RiskIntelligence | Keep | Keep as risk-state proof after Product Experience. Shorten intro copy because the Product Experience section will already explain the risk journey. |
| DashboardPreview | Keep but reduce if needed | Keep as the main platform proof section. Avoid duplicating the hero dashboard content too heavily. |
| UseCases | Keep | Keep after product proof. Tighten copy only if page length becomes too heavy. |
| Workflow | Remove as standalone / merge | Merge Detect, Classify, Notify, Recommend, Track into Product Experience. Do not keep as a separate full section. |
| IntegrationsSection | Keep | Keep as B2B credibility and enterprise-readiness proof. Reduce deployment-scoping repetition if Pricing/Plans covers it. |
| PlansSection | Replace/refine into Pricing / Plans | Use it as the foundation for the pricing section. Add visible starter/base price placeholder and custom route. Avoid creating a second pricing block. |
| Comparison | Keep | Keep later in the page as a concise "continuous vs periodic" clarification. |
| FinalCTA | Keep | Keep focused on demo, quote, and sales conversation. Do not repeat plan details. |
| Footer | Keep | Update links to match final navigation. |

## 3. Product Experience Visual Storyboard

| Frame | Scroll Step Title | Visual State | Message | Assets / Components Needed |
| --- | --- | --- | --- | --- |
| 1 | Hidden thermal risk | Electrical panel or switchgear scene appears in a dark technical frame. | Thermal risk begins inside real electrical assets, often between scheduled inspections. | `PanelScene`, panel illustration layers |
| 2 | Heat points emerge | Priority zones glow inside the panel. One point starts as elevated. | Heat patterns reveal where risk may be developing. | Heat point markers, risk colour tokens |
| 3 | Sensors monitor | Sensor markers appear over heat points. | Sensors continuously monitor important thermal locations. | Sensor marker layer, small labels |
| 4 | Live telemetry flows | Data lines move from the panel toward the platform area. | Temperature readings become a live telemetry stream. | `TelemetryLayer`, animated connector lines |
| 5 | AI interprets behaviour | AI/risk engine card appears with baseline, drift, and anomaly score cues. | ThermoGuard AI compares live behaviour against learned baselines. | `RiskProcessingCard`, small bars/sparkline |
| 6 | Risk state assigned | Normal, Watch, Elevated, Critical badges appear; active asset becomes Elevated or Critical. | Complex thermal change is translated into a clear operating state. | Existing `RiskBadge`, state strip |
| 7 | Alert routed | Alert card appears with owner, time, and status. | The right person or team receives a risk-scored alert. | Alert card component, owner/status metadata |
| 8 | Action recommended | Maintenance action card appears beside alert. | Teams can respond with a specific inspection or maintenance action. | Action card, checklist icon |
| 9 | Evidence recorded | History/timeline card appears and final system view is visible. | Alert history, response activity, and evidence are stored for reporting. | `AlertActionEvidence`, timeline/log card |

Storyboard principle:

- Each frame should add one layer to the same scene.
- Avoid switching to completely different visuals at every step.
- The final frame should show the complete ThermoGuard AI loop: panel, sensors, telemetry, AI, risk state, alert, action, evidence.

## 4. Desktop Scroll Behaviour

Recommended desktop behaviour:

- Use a sticky visual scene on one side or centred in a wide visual column.
- Place scroll steps beside or below the sticky scene.
- As each step enters the active zone, update the visual scene state.
- Use state changes such as opacity, glow, line reveal, subtle translate, and badge activation.
- Keep text short and legible.

Interaction model:

- Step 1 activates panel-only state.
- Step 2 activates heat-point layer.
- Step 3 activates sensor layer.
- Step 4 activates telemetry layer.
- Step 5 activates AI processing card.
- Step 6 activates risk-state badges.
- Step 7 activates alert card.
- Step 8 activates action card.
- Step 9 activates evidence timeline and complete-system view.

Implementation preference:

- Use IntersectionObserver or a small custom active-step hook.
- Use CSS transitions and state-driven class names.
- Avoid GSAP, canvas playback, or heavy dependency additions in the first implementation pass.

Desktop guardrails:

- Sticky scene must not cover other content.
- Section height should feel intentional, not exhausting.
- No important information should require animation to be understood.

## 5. Mobile Fallback Behaviour

Recommended mobile behaviour:

- Do not use sticky scroll as the primary mobile pattern.
- Use stacked story cards.
- Show either:
  - a simplified static scene at the top, followed by step cards, or
  - small per-step visual panels inside each card.

Mobile sequence:

1. Static intro visual showing panel + platform.
2. Step cards arranged vertically.
3. Each card includes a short title, short copy, and small icon/visual cue.
4. The final card shows the complete alert/action/evidence loop.

Mobile motion:

- Use only reveal fades and small highlights.
- Disable pulses or continuous movement for reduced-motion users.
- Avoid horizontal scroll and complex pinned sections.

Mobile guardrails:

- Text must not overflow cards.
- Visuals must stay readable at narrow widths.
- The story must remain understandable if every animation is disabled.

## 6. Required New Components

Likely new components:

- `src/components/site/ProductExperienceSection.tsx`
- `src/components/site/product-experience/PanelScene.tsx`
- `src/components/site/product-experience/TelemetryLayer.tsx`
- `src/components/site/product-experience/RiskProcessingCard.tsx`
- `src/components/site/product-experience/AlertActionEvidence.tsx`
- `src/components/site/product-experience/StoryStepCard.tsx`
- `src/components/site/product-experience/productExperienceSteps.ts`

Likely new hook:

- `src/hooks/use-active-story-step.ts`

Likely reused components:

- `src/components/mocks/RiskBadge.tsx`
- `src/components/mocks/TrendChart.tsx`
- `src/components/mocks/ThermalMap.tsx`
- `src/components/site/SectionHeading.tsx`

Optional static asset folder:

- `src/assets/product-experience/`

Use this only if final visual assets are static SVGs or generated image assets. Prefer component-native layered SVG/CSS for animated pieces.

## 7. Pricing Section Content Structure

Recommendation:

- Refine the existing plans section into one unified Pricing / Plans section.
- Do not create a separate parallel pricing block.

Section title:

- "Pricing that starts clearly and scales with site complexity."

Pricing structure:

| Plan | Purpose | Price Display | CTA |
| --- | --- | --- | --- |
| Core Monitoring / Starter | Entry package for a defined number of panels or priority assets. | `Starting from £X/month` with clear placeholder/business-confirmation note. | Discuss starter package |
| Professional | Multi-panel or multi-site operations with reporting and alert lifecycle needs. | Quote-based or placeholder only if approved. | Talk to sales |
| Enterprise / Custom Deployment | Complex deployments, integrations, custom escalation, advanced reporting, managed rollout. | Custom quote. | Request custom quote |

Core Monitoring included items:

- Thermal monitoring for a defined starter asset scope.
- Basic risk dashboard.
- Normal / Watch / Elevated / Critical status classification.
- Alert notifications.
- Evidence and alert history log.
- Standard onboarding support.

Professional included items:

- Multi-panel or multi-site visibility.
- Asset risk prioritisation.
- Alert lifecycle tracking.
- Reporting export readiness.
- Expanded onboarding and rollout planning.

Enterprise / Custom included items:

- BMS / SCADA / CMMS workflow scoping.
- Custom alert escalation rules.
- Advanced reporting requirements.
- Tailored installation and rollout support.
- Managed support model.

Pricing trust note:

- Final pricing may depend on asset count, number of panels, sensor requirements, site complexity, integrations, support level, and deployment scope.

Pricing guardrail:

- Do not present `£X/month` as final approved pricing.
- Placeholder text must be visibly marked before publishing.

## 8. Sections That Must Not Be Duplicated

Do not duplicate these section purposes:

- Product journey explanation:
  - Product Experience should own the full thermal-risk-to-action story.
  - Workflow should not repeat it as a standalone section.

- AI scoring explanation:
  - RiskEngine should only explain scoring detail if retained.
  - Product Experience should explain the overall AI role.

- Risk-state explanation:
  - Product Experience introduces states.
  - RiskIntelligence proves and expands them.
  - Do not explain the full state model repeatedly in PlatformSection, DashboardPreview, and Workflow.

- Dashboard proof:
  - Hero can show a dashboard glimpse.
  - DashboardPreview can show deeper platform detail.
  - Avoid adding another full dashboard-heavy section.

- Pricing / plans:
  - Pricing and deployment plans must be one section.
  - Do not keep both a separate PricingSection and an unchanged PlansSection.

- Deployment scoping:
  - Integrations can mention operating systems.
  - Pricing / Plans can mention scope drivers.
  - Final CTA can invite discussion.
  - Do not repeat the same scoping paragraph in all three.

## 9. Implementation Approval Checklist

Before coding begins, confirm:

- [ ] Final homepage order is approved.
- [ ] Product Experience section title is approved.
- [ ] Sticky desktop storytelling approach is approved.
- [ ] Mobile stacked fallback approach is approved.
- [ ] Workflow section removal or merge is approved.
- [ ] PlatformSection merge/shortening decision is approved.
- [ ] RiskEngine reposition/shortening decision is approved.
- [ ] Pricing / Plans will be one unified section.
- [ ] Starter/base price placeholder policy is approved.
- [ ] No final pricing will be invented.
- [ ] Visual asset approach is approved: layered SVG/CSS and reused mock components first.
- [ ] No heavy animation dependency will be added in the first pass.
- [ ] Reduced-motion fallback is required.
- [ ] Header navigation labels are approved.
- [ ] Footer navigation should be updated to match.
- [ ] Final QA must include desktop, tablet, mobile, reduced-motion, anchor links, build, and lint checks.

Do not implement until this checklist is reviewed and approved.

