# ThermoGuard AI Website Enhancement Strategy

## 1. Project Context

This document is for the existing **ThermoGuard AI website project**.

The project already has an established website structure, component system, styling direction, and previous design progress. The purpose of this document is **not** to restart the website from scratch. Instead, it defines the next strategic improvement direction for the existing site.

The website currently presents ThermoGuard AI as an AI-assisted thermal-risk monitoring platform for electrical panels, switchgear rooms, and critical power environments. It already includes strong commercial and technical sections such as use cases, integrations, dashboards, risk intelligence, workflows, and contact/demo pathways.

The next improvement should focus on making the website more commercially clear and easier for customers to understand.

---

## 2. New Website Direction

The website should be improved by adding two important strategic sections:

1. **A dedicated Product Experience / How It Works section**
2. **A clear Pricing section with a visible base price and custom pricing option**

The goal is not to redesign the whole website. The goal is to make the site clearer, more product-focused, and more commercially useful.

Visitors should quickly understand:

- what ThermoGuard AI is
- how the product works
- what components are involved
- how the system creates value
- what the starting price is
- how to contact the business for custom deployments

---

## 3. Main Website Issue to Solve

The current website already has strong sections such as use cases, integrations, plans, dashboards, and risk intelligence. However, it needs a dedicated section where the product is clearly placed in the customer’s mind.

A visitor should not only read isolated features. They should understand ThermoGuard AI as one complete product journey:

> From physical electrical-panel risk to thermal monitoring, AI analysis, risk alerts, maintenance action, and recorded evidence.

This should make the product easier to understand for facility managers, maintenance teams, commercial property owners, data centre operators, and other B2B customers.

---

## 4. Product Experience / How It Works Section

### 4.1 Purpose

Create a dedicated section that visually explains how ThermoGuard AI works as a complete system.

The section should help visitors understand the product journey clearly and quickly. It should feel modern and slightly storytelling-led, but it should not become overcomplicated or gimmicky.

Clarity is more important than animation.

### 4.2 Product Journey to Explain

The section should explain ThermoGuard AI through this sequence:

1. **Electrical panel or critical asset**  
   The system starts with a real-world electrical panel, switchgear cabinet, or critical power asset.

2. **Thermal sensor monitoring**  
   Sensors monitor important heat points where abnormal temperature rise may indicate risk.

3. **Live temperature data collection**  
   Temperature data is collected continuously instead of relying only on periodic inspection.

4. **ThermoGuard AI platform**  
   Data is sent into the ThermoGuard AI platform for monitoring and analysis.

5. **AI anomaly detection and risk scoring**  
   The platform analyses baseline behaviour, detects unusual temperature drift, and assigns risk scores.

6. **Risk status classification**  
   Assets are classified into clear operating states:
   - Normal
   - Watch
   - Elevated
   - Critical

7. **Alerts and maintenance action**  
   Alerts are routed to the right people so teams can respond before the issue becomes serious.

8. **Evidence and history for reporting**  
   The system records alert history, response activity, and monitoring evidence for future inspection, maintenance planning, and reporting.

### 4.3 Possible Section Titles

Suggested titles include:

- **How ThermoGuard AI Works**
- **From Heat Signal to Maintenance Action**
- **The Product Journey**
- **From Panel Risk to Actionable Intelligence**
- **See How Thermal Risk Becomes Insight**

The final title should fit the existing website tone.

### 4.4 Suggested Layout Options

The model should decide the best layout based on the current project, but possible approaches include:

#### Option A: Connected Journey Cards

A horizontal or vertical sequence of connected cards showing the product flow.

Best for:

- simple implementation
- good mobile responsiveness
- clear B2B communication

#### Option B: Split Visual Story Section

Left side: visual product diagram or mock sequence  
Right side: changing explanation text for each step

Best for:

- stronger storytelling
- polished product explanation
- controlled visual hierarchy

#### Option C: Scroll-Based Product Sequence

A sticky visual area changes as the user scrolls through the product journey.

Best for:

- premium feel
- Apple-style inspiration
- stronger visual engagement

Risk:

- could become too heavy if not implemented carefully
- must support mobile and reduced-motion users

#### Option D: Lightweight SVG / CSS Animation

Use simple animated lines, glowing heat points, and dashboard cards rather than heavy video or canvas.

Best for:

- good performance
- easier maintenance
- professional SaaS feel

### 4.5 Visual Direction

The section may use:

- an electrical panel illustration or mock asset
- glowing thermal sensor points
- data-flow lines
- AI/risk engine card
- risk status badges
- dashboard preview
- alert/action card
- evidence/history card

The visual sequence should build the product concept step by step.

It should not look like a generic animation demo. It should directly support the product message.

### 4.6 Existing Content Reuse

Before creating new content from scratch, check whether existing components can be reused or adapted, such as:

- dashboard mock components
- risk intelligence cards
- workflow content
- alert/status badges
- integration visuals
- existing product language

Avoid duplicating the same explanation in multiple sections.

---

## 5. Pricing Section

### 5.1 Purpose

Add a clear pricing section that displays a visible base price and gives customers a path to enquire about custom deployments.

The current website should not hide all pricing behind a contact form. A base price helps visitors understand the product’s starting point and commercial seriousness.

### 5.2 Pricing Structure

The section should include at least two pricing paths:

#### Card 1: Core Monitoring Package

This should display a visible base price.

Example placeholder:

> **Core Monitoring Package**  
> Starting from **£X/month** or **£X/year**

Important:

If no final business price is confirmed in the codebase or project documentation, use a placeholder and clearly mark it as requiring business confirmation before publishing.

The model should not invent final pricing facts.

Possible included items:

- thermal monitoring for a defined number of assets or panels
- basic risk dashboard
- Normal / Watch / Elevated / Critical status classification
- alert notifications
- evidence/history log
- standard onboarding support

#### Card 2: Custom Deployment

This should be for larger or more complex customers.

Use cases may include:

- multiple sites
- multiple panels
- custom integrations
- BMS / SCADA / CMMS workflows
- custom alert escalation
- advanced reporting
- tailored installation or maintenance plans

CTA wording examples:

- **Talk to us**
- **Request a custom quote**
- **Reach us for custom deployment**
- **Discuss your site requirements**

### 5.3 Pricing Trust Notes

The pricing section should include a small trust note explaining that final pricing may depend on:

- number of panels/assets
- sensor requirements
- site complexity
- integration requirements
- support level
- deployment scope

This keeps the pricing transparent without overpromising.

### 5.4 Important Pricing Rule

Do not publish invented pricing as final fact.

If the base price is not confirmed, use a placeholder such as:

> Starting from **£X/month** — final price to be confirmed before publishing.

Or use a draft placeholder in code/content that can be easily replaced later.

---

## 6. Header and Navigation Changes

The website header/navigation should be updated only if needed.

Suggested navigation labels:

- Product
- How It Works
- Use Cases
- Integrations
- Pricing
- Contact

The model should inspect the current navigation and decide whether to:

- add a new **Product** or **How It Works** nav link
- add a new **Pricing** nav link
- rename an existing item if it improves clarity
- avoid overcrowding the header

The Product Experience section should be easy to access from the header.

The Pricing section should also be directly accessible from the header.

---

## 7. Placement Strategy

The model should decide exact placement based on the current website structure, but the recommended flow is:

1. Hero section
2. Product Experience / How It Works section
3. Risk intelligence or dashboard proof section
4. Use cases
5. Integrations
6. Pricing
7. Plans / deployment / contact CTA

The Product Experience section should appear early because visitors need to understand the product before reading detailed use cases or integrations.

The Pricing section should appear after product value has been explained, but before the final contact/demo CTA.

---

## 8. Content Refinement

After adding the Product Experience and Pricing sections, review existing sections for repetition.

The model should identify:

- sections that repeat the same risk-monitoring explanation
- dashboard sections that overlap too much
- workflow content that can be shortened
- plan/deployment content that may overlap with pricing
- areas where the product story becomes too long

Do not remove important commercial sections unless there is a clear reason.

Preserve useful sections such as:

- Use Cases
- Integrations
- Dashboard/Risk Intelligence
- Plans or Deployment
- Contact/Demo CTA

But refine them if they become repetitive after the new additions.

---

## 9. Implementation Strategy

Do not implement immediately unless this document is being used as part of a coding pass.

When implementation begins, use a staged approach.

### Stage 1: Planning Confirmation

Confirm:

- where the new Product Experience section will be placed
- where Pricing will be placed
- what navigation changes are needed
- whether the current site already has a Plans/Pricing-related section

### Stage 2: Create New Components

Suggested component names:

```text
src/components/site/ProductExperience.tsx
src/components/site/PricingSection.tsx
```

Alternative names may be used if the existing project has a different naming convention.

### Stage 3: Add Product Experience Section

Build the first version using lightweight visuals and clear product steps.

Possible implementation style:

- visual journey cards
- simple animated connectors
- risk badges
- dashboard-style mini cards
- responsive mobile stacking

Avoid heavy scroll/canvas animation in the first version unless the project already supports it cleanly.

### Stage 4: Add Pricing Section

Build pricing cards with:

- base package
- custom deployment option
- included features
- CTA buttons
- pricing disclaimer/trust note

Use placeholder pricing if the real price is not confirmed.

### Stage 5: Update Navigation

Add links to:

- Product / How It Works
- Pricing

Ensure anchor links work properly.

### Stage 6: Review Existing Sections

Reduce repetition and improve flow after the new sections are added.

### Stage 7: Final QA

Check:

- desktop layout
- tablet layout
- mobile layout
- header anchors
- CTA links
- accessibility
- reduced-motion preference
- performance
- visual consistency
- pricing placeholder visibility

---

## 10. Risks and Constraints

### 10.1 Page Overload

Adding new sections may make the page too long. Existing sections may need to be tightened.

### 10.2 Animation Distraction

The product story should not become an animation showcase. The purpose is to explain the product clearly.

### 10.3 Pricing Accuracy

Do not invent final pricing. Placeholder pricing must be clearly marked for business confirmation.

### 10.4 Mobile Responsiveness

The Product Experience section must work well on mobile. Complex horizontal animations should have a simple mobile fallback.

### 10.5 B2B Credibility

The website should remain professional and credible. Avoid overly playful visuals, exaggerated claims, or consumer-style hype.

### 10.6 Performance

Avoid large videos or heavy image sequences unless properly optimised.

Use lightweight SVG, CSS, or existing components where possible.

---

## 11. Final Direction

The website should evolve into a clearer product-led B2B experience.

The main improvement should be:

> Explain the product clearly, then show the customer how to buy or enquire.

The new Product Experience section should help customers understand the full ThermoGuard AI journey.

The new Pricing section should make the commercial offer clearer by showing a base price and a custom deployment pathway.

The rest of the website should be adjusted only where needed to support this clearer structure.

---

## 12. Instruction for the Model

Read this document before making changes.

Use it as the strategic direction for the next website modification pass.

Do not restart the design from scratch.

Do not remove important sections without justification.

Do not create final pricing facts unless confirmed.

Keep the website professional, credible, responsive, and commercially clear.
