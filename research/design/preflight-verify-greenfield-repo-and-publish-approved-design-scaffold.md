Let me analyze this task carefully.

**Task:** Preflight: Verify greenfield repo and publish approved design scaffold

**What I need to do:**
1. Verify the repository state (greenfield/empty)
2. Create design scaffold files in `_templates/stitch/` directory

**What I CANNOT do:**
- Execute commands
- Clone repositories
- Verify URLs
- Check branch protection
- Perform any system operations
- Claim I performed actions I didn't

**What I CAN do:**
- Analyze the provided context
- Produce a Markdown document with the design scaffold content

**Files to create (as specified in the instructions):**
1. `_templates/stitch/manifest.json`
2. `_templates/stitch/design-brief.md`
3. `_templates/stitch/brand-guidelines.md`
4. `_templates/stitch/desktop/README.md`
5. `_templates/README.md`

The instructions explicitly provide the content for each file. I need to output these as part of my Markdown response.

**Key constraints:**
- Output must be in English only
- Must be well-structured Markdown
- Cannot include code fences wrapping the entire document
- Must include title, executive summary, detailed findings, conclusions/recommendations, action items

Let me structure my response:
1. Title and Executive Summary
2. Repository State Verification (note what SHOULD be verified)
3. Design Scaffold Files (the actual file contents)
4. Conclusions/Recommendations
5. Action Items

I need to be careful not to claim I verified anything I couldn't actually verify. I should state what SHOULD be verified and recommend it as an action item.
</think>

# ChoreWheel - Preflight Design Scaffold Documentation

## Executive Summary

This document provides the approved design scaffold for the ChoreWheel greenfield one-page launch scaffold mission. The scaffold establishes the design source of truth for implementing a mobile-first landing page for a roommate chore coordination app. This preflight step confirms the design handoff is complete and ready for implementation.

**Mission:** Bootstrap the ChoreWheel repository into a tiny mobile-first landing page with headline, value proposition, three feature cards, one CTA, and README.

**Status:** Design scaffold prepared and documented for implementation.

---

## Repository State Verification

### Current State Assessment

**Note:** As an analysis-only agent, I cannot directly verify repository state. The following verification steps SHOULD be performed by downstream agents:

| Verification Item | Expected State | Action Required |
|-------------------|----------------|-----------------|
| Repository exists | `https://github.com/IMBAmcDuffs/ChoreWheel` | Verify via GitHub API or web access |
| Branch exists | `mission/chorewheel-greenfield-one-page-launch-sc-9b17ab6e` | Verify branch presence |
| Repository is greenfield | README-only or empty | Confirm no unexpected files |
| Branch protection | Standard settings | Verify protection rules if applicable |

### Recommended Verification Commands (for downstream agents)

```bash
# Verify repository and branch
git ls-remote https://github.com/IMBAmcDuffs/ChoreWheel.git

# Checkout and list files
git clone --branch mission/chorewheel-greenfield-one-page-launch-sc-9b17ab6e https://github.com/IMBAmcDuffs/ChoreWheel.git
cd ChoreWheel
ls -la
```

---

## Design Scaffold Files

The following files constitute the approved design scaffold. These files MUST be created in the `_templates/` directory structure.

### File 1: `_templates/stitch/manifest.json`

```json
{
  "project_id": "14001975684050892748",
  "screens": {
    "desktop": {
      "screenId": "55b0bc4b64f94db0bd8398022668f367",
      "htmlUrl": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzE1NTUxN2VhMmVlYTQxNGY4NTcxMDM5ZmI2YWM3ZjM1EgsSBxCC5ZSMnhwYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDAwMTk3NTY4NDA1MDg5Mjc0OA&filename=&opi=96797242",
      "imageUrl": "",
      "deviceType": "desktop"
    }
  },
  "theme": {},
  "device_types": [
    "desktop"
  ],
  "prompt_used": "Design a UI screen for: ChoreWheel - Greenfield One-Page Launch Scaffold. Objective: Bootstrap the currently empty ChoreWheel repository into a tiny mobile-first landing page for a roommate chore app. Deliver one responsive page with a headline, short value proposition, three feature cards, one clear call to action, and a README that explains how to run the project locally. Success is a small reviewable PR that matches the approved design, builds cleanly, and keeps scope intentionally compact."
}
```

### File 2: `_templates/stitch/design-brief.md`

```markdown
# Design Brief

## Visual Direction

**Color Palette**
We are defining a fresh, calm palette that prioritizes readability and trust over flashiness. The colors are selected to reduce visual noise and focus attention on the primary action.

*   **Background:** `#F8F9FA` (Soft Off-White) — Provides a neutral, non-distracting canvas that reduces eye strain on mobile devices.
*   **Primary Text:** `#1E293B` (Deep Slate) — High contrast against the background for maximum readability (WCAG AA compliant).
*   **Primary Action (CTA):** `#0D9488` (Muted Teal) — Used exclusively for the "Follow on GitHub" button and primary links. Signals action without shouting.
*   **Secondary Action/Links:** `#64748B` (Cool Slate Grey) — For secondary links and metadata.
*   **Accent/Highlights:** `#F59E0B` (Warm Amber) — Used sparingly for icons or emphasis (e.g., star counts on GitHub).
*   **Surface (Cards/Sections):** `#FFFFFF` (Pure White) — Creates subtle separation between the hero and feature grid.

**Typography**
*   **Font Family:** System stack (`Inter`, `system-ui`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `Helvetica Neue`, `Arial`, `sans-serif`). We avoid external font requests to keep the page lightweight.
*   **Hierarchy:**
    *   **H1 (Hero):** 2.25rem (36px), line-height 1.2.
    *   **H2 (Feature Titles):** 1.75rem (28px), line-height 1.3.
    *   **Body:** 1rem (16px), line-height 1.6.
*   **Tone:** Clean, minimal, practical. No decorative serifs or stylized fonts that compromise legibility on small screens.

**Mood & Tone**
*   **Visual Mood:** Calm and minimal. The layout breathes; whitespace is used to guide the eye to the single CTA.
*   **Tone:** Trustworthy and functional. We avoid the "hype" marketing speak found in crowded dashboards.
*   **Visual Hierarchy:**
    1.  **H1 + Value Prop:** Immediate understanding of what the app is.
    2.  **Primary CTA:** The only element using the Teal accent color.
    3.  **Feature Grid:** Secondary information, organized for quick scanning.
    4.  **Footer:** Tertiary information.

## Layout & Information Architecture

**Page Structure**
*   **Header:** Minimal. Text-based logo placeholder (left), GitHub link (right). No mega-menus.
*   **Hero Section:** Centered text. H1, subheadline (value prop), and primary CTA button.
*   **Feature Grid:** Three-column layout on desktop, stacking to single column on mobile.
*   **Footer:** Copyright, simple links (Privacy, Contact), GitHub link repeated.

**Content Hierarchy**
1.  **Above the Fold:** H1 + Subhead + CTA. No distractions.
2.  **Feature Grid:**
    *   **Card 1:** Fair Task Assignment (Icon + Title + 1-sentence description).
    *   **Card 2:** Shared Scheduling + Reminders (Icon + Title + 1-sentence description).
    *   **Card 3:** Progress Tracking (Icon + Title + 1-sentence description).
3.  **Social Proof/Trust:** (Optional, if space permits) "Used by X roommates" or GitHub stars.
4.  **Footer:** Minimal.

**Responsive Breakpoint Strategy**
*   **Mobile First (Base):** 320px — Single column. Stacked cards. Touch targets minimum 44x44px.
*   **Tablet:** 768px — Feature grid shifts to 2 columns.
*   **Desktop:** 1024px — Feature grid shifts to 3 columns.
*   **Implementation:** CSS Grid with `minmax()` and `auto-fit` for fluidity without media query clutter.

## Component Design System

**Key UI Components**
*   **Button (Primary):** Teal background, white text, rounded corners (4px radius). Padding: 12px 24px.
*   **Button (Secondary/Link):** Transparent background, Teal text. Hover state adds a subtle underline.
*   **Feature Card:** White background, subtle shadow (0 4px 6px rgba(0,0,0,0.05)). Icon at top.
*   **Logo:** Text-based placeholder (e.g., `<h1>ChoreWheel</h1>`). Simple, scalable.

**Interaction Patterns**
*   **Hover:** Cards lift slightly (transform: translateY(-2px)) and shadow deepens.
*   **Active:** Buttons scale down slightly (transform: scale(0.98)) to indicate press.
*   **Focus:** 2px solid Teal ring around interactive elements for keyboard navigation.
*   **Disabled:** Opacity 0.6, cursor default.

**States**
*   **Loading:** (If used) Simple spinner or text "Loading...".
*   **Error:** Red text (rarely used in this greenfield state).
*   **Empty:** N/A (Content is static).

**Spacing & Sizing Tokens**
*   **Padding:** Section padding 4rem (64px) top/bottom.
*   **Margin:** Feature cards 1.5rem gap.
*   **Border Radius:** 4px (buttons, cards).
*   **Font Weight:** 400 (Body), 600 (Headings).

## Accessibility & Standards

**WCAG Compliance**
*   **Level:** WCAG 2.1 AA.
*   **Contrast:** All text meets 4.5:1 contrast ratio against background.
*   **Color:** Color is not the only means of conveying information (icons accompany text).

**Keyboard Navigation**
*   All interactive elements (links, buttons) are focusable via Tab key.
*   Focus order is logical (Header -> Hero -> Features -> Footer).
*   Focus rings are visible and high contrast.

**Screen Reader Support**
*   **Semantic HTML:** Use `<h1>`, `<h2>`, `<main>`, `<section>`, `<footer>`.
*   **Alt Text:** All SVG icons have descriptive `aria-label` or `title` attributes.
*   **Icons:** Use SVG with `role="img"` and `aria-label` where the icon conveys meaning (e.g., "checkmark" implies success).

**Mobile Touch Targets**
*   All buttons and links have a minimum touch area of 44x44px (per iOS/Android guidelines).
*   Links do not require scrolling to tap.

## Motion & Interaction

**Animation Principles**
*   **Philosophy:** "Subtle fade-ins, smooth scroll, or minimal animations." No heavy motion.
*   **Timing:** 200ms ease-out for hover states. 300ms ease-in-out for page load fade-ins.
*   **Constraints:** No parallax, no 3D transforms, no infinite loops.

**Transition Timing**
*   **Hover:** `transition: all 0.2s ease-in-out`.
*   **Scroll:** `intersectionObserver` triggers fade-in for cards as they enter viewport.
*   **Load:** Simple CSS animation for the hero section to appear gently.

**Micro-Interactions**
*   **Button Hover:** Background color darkens slightly.
*   **Link Hover:** Underline slides up from bottom.
*   **Card Hover:** Subtle lift and shadow increase.

**Loading States**
*   If assets take time to load, use a simple text fade-in.
*   Avoid skeleton screens (adds unnecessary complexity for a static page).

## Implementation Notes

**CSS Architecture**
*   **Reset:** Use a minimal CSS reset (e.g., `box-sizing: border-box`, remove margins).
*   **Variables:** Define colors and spacing in `:root` for easy theming later.
    ```css
    :root {
      --bg: #F8F9FA;
      --text: #1E293B;
      --primary: #0D9488;
      --accent: #F59E0B;
      --spacing: 1rem;
    }
    ```
*   **Reset:** Avoid heavy frameworks. Plain CSS is preferred for a one-page scaffold.

**Framework-Specific Guidance**
*   **HTML5:** Strict semantic structure.
*   **CSS:** Use Flexbox for layout (Header/Hero) and CSS Grid for the feature cards.
*   **JavaScript:** Vanilla JS only. Use `IntersectionObserver` for fade-in animations. No external libraries (jQuery, etc.).

**Asset Requirements**
*   **Icons:** SVG icons (Feather Icons or similar lightweight set). Inline SVG preferred to avoid HTTP requests.
*   **Images:** None required for the first version (text-based logo).
*   **Fonts:** System fonts only.

**Handoff Notes for Developers**
*   **Scope:** This is a greenfield bootstrap. Do not add backend logic, analytics, or auth yet.
*   **Validation:** Run `npm run lint` (if using a tool) or standard HTML validation.
*   **Performance:** Lighthouse score target: Performance 90+.
*   **Repo:** Keep the repo clean. Commit only the necessary files (`index.html`, `styles.css`, `main.js` if needed).
*   **Local Start:** Ensure the project can be served via a simple static file server (e.g., `npx serve` or `python -m http.server`).
*   **Readme:** Include a `README.md` explaining how to run the project locally (e.g., "Clone repo, open `index.html` in browser").

**Rollback Notes**
*   Since this is a greenfield scaffold, the rollback path is simply reverting the commit. No database migrations or complex state to undo.
*   If the design changes, only the CSS/HTML files are affected.
```

### File 3: `_templates/stitch/brand-guidelines.md`

```markdown
# Brand & Theme Guidelines

## Brand Identity

**Name:** ChoreWheel

**Tagline:** Fair Chores for Every Roommate

**Mission Statement:** Eliminate the "who did the dishes?" anxiety with a mobile-first chore coordination tool that prioritizes fairness, simplicity, and accountability.

## Voice & Tone

**Voice:** Practical, trustworthy, calm

**Tone Guidelines:**
- Avoid hype marketing speak
- Be direct and functional
- Use clear, accessible language
- Maintain a helpful, non-judgmental tone

## Color System

### Primary Colors

| Name | Hex | Usage |
|------|-----|-------|
| Background | `#F8F9FA` | Page background, soft off-white |
| Primary Text | `#1E293B` | Headings, body text, deep slate |
| Primary Action | `#0D9488` | CTA buttons, primary links, muted teal |
| Secondary Text | `#64748B` | Metadata, secondary links, cool slate grey |
| Accent | `#F59E0B` | Icons, highlights, warm amber |
| Surface | `#FFFFFF` | Cards, sections, pure white |

### CSS Custom Properties

```css
:root {
  --bg: #F8F9FA;
  --text: #1E293B;
  --primary: #0D9488;
  --primary-hover: #0F766E;
  --secondary: #64748B;
  --accent: #F59E0B;
  --surface: #FFFFFF;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  --shadow-hover: 0 6px 12px rgba(0, 0, 0, 0.1);
}
```

## Typography System

### Font Stack

```css
font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

### Type Scale

| Element | Size | Line Height | Weight |
|---------|------|-------------|--------|
| H1 (Hero) | 2.25rem (36px) | 1.2 | 600 |
| H2 (Feature Titles) | 1.75rem (28px) | 1.3 | 600 |
| Body | 1rem (16px) | 1.6 | 400 |
| Small | 0.875rem (14px) | 1.5 | 400 |

## Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-xs` | 0.5rem (8px) | Tight spacing, icon padding |
| `--spacing-sm` | 1rem (16px) | Component internal spacing |
| `--spacing-md` | 1.5rem (24px) | Card gaps, section margins |
| `--spacing-lg` | 2rem (32px) | Section padding |
| `--spacing-xl` | 4rem (64px) | Major section padding |

## Component Guidelines

### Buttons

**Primary Button:**
- Background: `--primary` (#0D9488)
- Text: White (#FFFFFF)
- Border Radius: 4px
- Padding: 12px 24px
- Hover: Darken background, subtle lift
- Active: Scale to 0.98

**Secondary Button (Link):**
- Background: Transparent
- Text: `--primary` (#0D9488)
- Border: None
- Hover: Underline slides up from bottom

### Feature Cards

- Background: `--surface` (#FFFFFF)
- Border Radius: 4px
- Shadow: `--shadow` (0 4px 6px rgba(0,0,0,0.05))
- Hover: Lift (-2px), shadow deepens
- Icon: Top-aligned, accent color

## Accessibility Standards

- **WCAG Level:** 2.1 AA
- **Minimum Contrast:** 4.5:1 for text
- **Touch Targets:** Minimum 44x44px
- **Focus Indicators:** 2px solid `--primary` ring

## Design Artifacts

**Stitch Workspace:** https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzE1NTUxN2VhMmVlYTQxNGY4NTcxMDM5ZmI2YWM3ZjM1EgsSBxCC5ZSMnhwYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDAwMTk3NTY4NDA1MDg5Mjc0OA&filename=&opi=96797242

**Screen ID:** 55b0bc4b64f94db0bd8398022668f367
```

### File 4: `_templates/stitch/desktop/README.md`

```markdown
# Desktop Screen

## Overview

This directory contains the design scaffold for the desktop view of the ChoreWheel landing page.

## Design Artifacts

- **HTML Preview**: https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzE1NTUxN2VhMmVlYTQxNGY4NTcxMDM5ZmI2YWM3ZjM1EgsSBxCC5ZSMnhwYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDAwMTk3NTY4NDA1MDg5Mjc0OA&filename=&opi=96797242
- **Screen ID**: 55b0bc4b64f94db0bd8398022668f367

## Responsive Breakpoints

| Device | Width | Layout |
|--------|-------|--------|
| Mobile | 320px+ | Single column, stacked cards |
| Tablet | 768px+ | Two-column feature grid |
| Desktop | 1024px+ | Three-column feature grid |

## Implementation Notes

- Use CSS Grid with `minmax()` and `auto-fit` for fluid layouts
- Mobile-first approach: base styles for mobile, media queries for larger screens
- System font stack only — no external font requests
- Inline SVG icons to minimize HTTP requests
```

### File 5: `_templates/README.md`

```markdown
# Design Templates

**MANDATORY**: Downstream developers MUST use the scaffold in this directory as the implementation source of truth. All design decisions, component structures, and brand guidelines in `stitch/` are the approved deliverables.

## Generated Devices

- desktop

## Structure

```
_templates/
├── README.md                    # This file
└── stitch/
    ├── manifest.json            # Structured metadata (project IDs, screen IDs, URLs)
    ├── design-brief.md          # Approved design brief
    ├── brand-guidelines.md      # Theme and branding guidance
    └── desktop/
        └── README.md            # Device-specific scaffold and references
```

## Files Reference

### `stitch/manifest.json`
Structured metadata containing:
- Project ID: `14001975684050892748`
- Screen ID: `55b0bc4b64f94db0bd8398022668f367`
- Device types: `desktop`
- HTML preview URL

### `stitch/design-brief.md`
Complete design brief including:
- Visual direction and color palette
- Typography system
- Layout and information architecture
- Component design system
- Accessibility standards
- Implementation notes

### `stitch/brand-guidelines.md`
Brand and theme guidelines including:
- Brand identity and voice
- Color system with CSS variables
- Typography scale
- Spacing system
- Component specifications

## Usage Instructions

1. **Read the design brief** (`stitch/design-brief.md`) before implementing
2. **Reference the color palette** from `stitch/brand-guidelines.md`
3. **Use the Stitch HTML preview** for visual reference during implementation
4. **Follow the responsive breakpoint strategy** outlined in the design brief
5. **Adhere to accessibility standards** (WCAG 2.1 AA)

## Acceptance Criteria

Implementation must satisfy:
- [ ] Single responsive page with headline, value prop, three feature cards, one CTA
- [ ] Mobile-first design (320px base)
- [ ] Three-column grid on desktop (1024px+)
- [ ] Teal CTA button (#0D9488) linking to GitHub
- [ ] WCAG 2.1 AA compliance
- [ ] Lighthouse Performance score ≥90
- [ ] Total payload under 50KB
```

---

## Conclusions and Recommendations

### Design Scaffold Completeness

The design scaffold is complete and ready for implementation. All required files have been specified with exact content:

| File | Status | Purpose |
|------|--------|---------|
| `_templates/stitch/manifest.json` | ✅ Specified | Structured metadata |
| `_templates/stitch/design-brief.md` | ✅ Specified | Complete design brief |
| `_templates/stitch/brand-guidelines.md` | ✅ Specified | Theme and branding |
| `_templates/stitch/desktop/README.md` | ✅ Specified | Device-specific docs |
| `_templates/README.md` | ✅ Specified | Usage instructions |

### Key Design Decisions Documented

1. **Color Palette:** Fresh, calm palette prioritizing readability (#F8F9FA background, #0D9488 primary action)
2. **Typography:** System font stack only — no external requests
3. **Layout:** Mobile-first with CSS Grid for feature cards
4. **CTA:** Single "Follow on GitHub" button in teal (#0D9488)
5. **Accessibility:** WCAG 2.1 AA compliance required

### Risk Mitigation

- **Scope Creep:** Design brief explicitly limits scope to one page, three cards, one CTA
- **Performance:** System fonts and inline SVGs ensure minimal payload
- **Accessibility:** Clear WCAG AA requirements with specific contrast ratios

---

## Action Items

### Immediate Actions (This Step)

| # | Action | Owner | Verification |
|---|--------|-------|--------------|
| 1 | Create `_templates/stitch/manifest.json` | garak | File exists with correct JSON structure |
| 2 | Create `_templates/stitch/design-brief.md` | garak | File exists with complete brief |
| 3 | Create `_templates/stitch/brand-guidelines.md` | garak | File exists with theme tokens |
| 4 | Create `_templates/stitch/desktop/README.md` | garak | File exists with device info |
| 5 | Create `_templates/README.md` | garak | File exists with usage instructions |
| 6 | Commit all scaffold files to branch | garak | Git commit on `mission/chorewheel-greenfield-one-page-launch-sc-9b17ab6e` |

### Verification Actions (Downstream)

| # | Action | Owner | Command/Method |
|---|--------|-------|----------------|
| 1 | Verify repository exists | obrien | `git ls-remote https://github.com/IMBAmcDuffs/ChoreWheel.git` |
| 2 | Verify branch exists | obrien | Check branch `mission/chorewheel-greenfield-one-page-launch-sc-9b17ab6e` |
| 3 | Verify scaffold files present | obrien | `ls -la _templates/stitch/` |
| 4 | Validate manifest.json syntax | obrien | `cat _templates/stitch/manifest.json \| jq .` |

### Implementation Actions (Next Step)

| # | Action | Owner | Reference |
|---|--------|-------|-----------|
| 1 | Implement HTML semantic structure | obrien | `design-brief.md` — Page Structure |
| 2 | Implement mobile-first CSS | obrien | `brand-guidelines.md` — Color System |
| 3 | Build hero section | obrien | `design-brief.md` — Hero Section |
| 4 | Build feature grid | obrien | `design-brief.md` — Feature Grid |
| 5 | Implement CTA button | obrien | `design-brief.md` — Primary Action |

---

## References

- **Stitch Workspace:** https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzE1NTUxN2VhMmVlYTQxNGY4NTcxMDM5ZmI2YWM3ZjM1EgsSBxCC5ZSMnhwYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDAwMTk3NTY4NDA1MDg5Mjc0OA&filename=&opi=96797242
- **Repository:** https://github.com/IMBAmcDuffs/ChoreWheel
- **Branch:** `mission/chorewheel-greenfield-one-page-launch-sc-9b17ab6e`
- **Project ID:** 14001975684050892748
- **Screen ID:** 55b0bc4b64f94db0bd8398022668f367