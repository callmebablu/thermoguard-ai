# ThermoGuard AI — Storytelling Redirection Brief for Codex

## Purpose of this file
This file gives the **correct next-direction brief** for the ThermoGuard AI website project.

The project has already gone through earlier design changes. This time, the objective is **not to let the model freely redesign the site**. Instead, the objective is to make sure the model:

1. understands the new website direction clearly,
2. identifies where duplication currently exists,
3. proposes what should be removed, merged, or repositioned,
4. plans the new storytelling-led product section properly,
5. plans the visual asset and animation approach first,
6. and returns a structured implementation plan in Markdown before any major coding work is done.

---

## Core direction
We want to evolve the current ThermoGuard AI website into a more **modern, premium, storytelling-led product experience**.

We are **taking inspiration from Apple’s website techniques**, especially:

- scroll-based storytelling,
- step-by-step product explanation,
- coordinated visual frames,
- smooth transitions,
- focused information delivery,
- premium visual hierarchy.

However:

- we are **not replicating Apple’s website**, 
- we are **not copying any exact design**, 
- and we are **only learning from those techniques** to make our own website clearer, more engaging, and more visually meaningful.

The goal is to help visitors quickly understand:

- what the product is,
- how it works,
- what the customer gets,
- and how they can buy or enquire.

---

## What must remain true
ThermoGuard AI must still feel like a **credible B2B product website**.

It should remain:

- professional,
- commercially clear,
- technically credible,
- visually clean,
- responsive,
- and not overloaded with gimmicky animation.

Animation must support understanding.
It must not distract from the product message.

---

## Main additions / priorities
The website direction now revolves around **two critical additions**:

### 1. Product Experience / How It Works section
We need a dedicated section that places the product clearly in the customer’s mind.

This section should explain ThermoGuard AI as one complete system:

1. hidden thermal risk exists in electrical panels / critical assets,
2. sensors monitor heat points,
3. temperature data is collected live,
4. the data moves into the ThermoGuard AI platform,
5. AI analyses baseline behaviour and anomalies,
6. risk is classified as Normal / Watch / Elevated / Critical,
7. alerts are routed to the right people,
8. maintenance action is taken,
9. evidence / history is recorded for reporting and inspection.

This section should be the strongest explanatory part of the website.

### 2. Pricing / Plans section
We need a clearly visible pricing/plans section.

This section must:

- show a visible **base price / starter plan**,
- explain what is included,
- show higher tiers or deployment pathways if appropriate,
- allow a **custom / enterprise / contact us** route,
- and make it easy for the visitor to understand how to proceed.

If exact prices are not already business-approved, placeholders may be proposed clearly as placeholders only.

---

## Important correction based on current state
Some earlier changes introduced sections that are **not fully aligned** with the intended plan.

For example:

- if a **Plans / Pricing section** is already being introduced,
- then any old **subscription-style section** or overlapping pricing/commercial section that duplicates the same purpose should be reviewed and likely removed, merged, or rewritten.

### Example of duplication to address
The current site appears to contain a plans/deployment-style section (e.g. Starter / Professional / Enterprise).
If we keep this as the main pricing/plans section, then any older or parallel subscription/pricing block that serves the same purpose should be removed.

The model must therefore identify:

- duplicated commercial sections,
- repeated dashboard proof sections,
- overlapping workflow/process explanations,
- repeated risk-monitoring explanations,
- and any content that weakens clarity by saying the same thing twice.

---

## What Codex must do now
**Do not jump straight into implementation.**

The next step is to produce a **clear planning document** that explains:

1. what should be kept,
2. what should be cut,
3. what should be merged,
4. what new visual asset approach should be used,
5. how the storytelling section should work,
6. how the animation should be handled,
7. and how implementation should proceed in stages.

---

## Required output from Codex
Create the following Markdown file:

`01_PLANNING/storytelling_restructure_and_visual_asset_plan.md`

This file should be detailed, practical, and implementation-ready.

---

## What the plan file must include

### 1. Current-fit summary
A short summary of how the new direction fits the current ThermoGuard AI website.

This should explain:

- what the site currently does well,
- where the current structure feels repetitive,
- where the site lacks a strong product explanation,
- and why the new storytelling direction improves the experience.

---

### 2. Section-by-section keep / cut / merge / reposition audit
Codex must review the current homepage structure and provide a practical section decision list.

For each current section, specify one of the following:

- **Keep**
- **Keep but shorten**
- **Merge with another section**
- **Reposition**
- **Remove due to duplication**
- **Replace**

The purpose here is to prevent the site becoming long, repetitive, or confusing.

Special attention must be given to:

- any subscription/pricing duplication,
- repeated dashboard-heavy sections,
- repeated workflow explanation sections,
- repeated product-proof sections,
- and any area that becomes unnecessary once the new Product Experience section is added.

---

### 3. Header/navigation recommendations
Recommend how the navigation should look after the update.

Suggested labels may include:

- Product
- How It Works
- Pricing
- Use Cases
- Integrations
- Contact / Book Demo

But the final recommendation should be based on the actual current site structure.

---

### 4. Product Experience section strategy
This is one of the most important parts.

Codex must define:

- proposed section name,
- section purpose,
- section placement,
- layout concept,
- storytelling flow,
- visual structure,
- how the user experiences it while scrolling,
- and whether it should be a sticky scroll scene, step cards, image sequence, or hybrid layout.

The section should explain the journey:

1. thermal risk exists,
2. sensors capture heat,
3. telemetry flows into platform,
4. AI interprets the data,
5. risk state is determined,
6. alerting occurs,
7. action and evidence follow.

The explanation must feel visual and intuitive.

---

### 5. Visual assets strategy
This must be planned **before implementation**.

Codex must propose how to create or structure the visual assets for the storytelling experience.

This should include:

- whether to use image sequences,
- SVG illustrations,
- rendered scenes,
- animated UI mockups,
- layered illustrations,
- or a hybrid approach.

The plan should define a likely sequence of frames/scenes, for example:

1. electrical panel / environment appears,
2. heat points are highlighted,
3. sensors appear,
4. telemetry lines begin,
5. data reaches platform,
6. AI/risk layer appears,
7. dashboard state changes,
8. alert / action / evidence appears.

Codex should also specify:

- what assets are likely needed,
- which can be built from current components,
- which need to be newly designed,
- naming/organisation suggestions for asset files,
- and how these assets should be staged in the project.

At this stage, Codex is not required to generate the final assets, but it must provide a **clear asset-generation and usage plan**.

---

### 6. Animation and interaction approach
Codex must recommend the right animation strategy.

The purpose is not to overcomplicate things, but to choose an approach that is realistic and aligned with the current codebase.

The plan should comment on whether to use:

- GSAP / ScrollTrigger,
- Framer Motion,
- CSS transitions,
- canvas-based frame playback,
- sticky scroll panels,
- or a mixed approach.

The recommendation should explain:

- why the chosen method suits the project,
- where it should be used,
- where simpler motion is better,
- and how to preserve performance, responsiveness, and accessibility.

The plan should also mention:

- reduced-motion fallback,
- mobile simplification strategy,
- loading/performance considerations,
- and avoidance of animation overload.

---

### 7. Pricing / Plans section strategy
Codex must define how the pricing or deployment plans section should be handled.

This must include:

- whether to keep and refine the current plans section,
- whether to rename it,
- how to display a base plan clearly,
- how to handle Professional / Enterprise / Custom,
- and how to remove or merge any older overlapping subscription/pricing sections.

The plan must explicitly explain how duplication will be avoided.

If the screenshot-aligned plans section is a good foundation, Codex may recommend refining it rather than replacing it.

---

### 8. Content rationalisation
Codex must identify what textual content becomes redundant once the Product Experience section is added.

This includes identifying:

- repeated “what the product does” explanations,
- repeated operational claims,
- repeated workflow explanations,
- and sections that should be shortened because the new visual storytelling section will already do that explanatory work.

This is important because the new storytelling section should become the **central explanatory engine** of the site.

---

### 9. Implementation roadmap
Codex must provide a stage-by-stage plan for execution.

The roadmap should be practical and should not jump straight into heavy redesign.

Recommended sequence:

1. finalise restructure plan,
2. define keep/cut/merge decisions,
3. define visual asset approach,
4. prepare asset placeholders,
5. build Product Experience section,
6. refine Pricing/Plans section,
7. remove duplicated sections,
8. polish interactions,
9. test responsiveness and performance.

If Codex sees a better order based on the current project, it may recommend it.

---

### 10. Likely files/components affected
Codex should list the likely components or files that would be created or modified.

This should include probable new components such as:

- `ProductExperienceSection`
- `StoryScrollSection`
- `PricingSection` or refined `PlansSection`
- visual asset folders
- navigation updates

The exact list should match the current codebase structure.

---

### 11. Risks and guardrails
Codex must include clear warnings / guardrails, including:

- do not let the page become too long,
- do not create duplicate explanatory sections,
- do not let pricing be vague or conflicting,
- do not let motion become distracting,
- do not break mobile usability,
- do not weaken B2B credibility,
- do not let the design become a style exercise without commercial clarity.

---

## Rules Codex must follow

1. **Do not make major implementation changes yet.**
2. **First produce the Markdown planning file only.**
3. **Work from the current project state, not from scratch.**
4. **Use the Apple inspiration only as a technique reference, not as a design copy.**
5. **Prevent duplication across pricing/plans/subscription sections.**
6. **Prioritise clarity of the product journey.**
7. **Keep the site commercially useful and credible.**
8. **Make recommendations that are realistic for the current codebase.**

---

## Final instruction to Codex
Read this file fully and create:

`01_PLANNING/storytelling_restructure_and_visual_asset_plan.md`

Do not proceed into implementation yet.
The next step after producing the plan will be a human review and refinement pass.
