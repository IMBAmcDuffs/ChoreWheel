Let me analyze this task carefully.

I'm working on Step 3 of the ChoreWheel mission: "Design: Create improved empty-state UI mockups via Stitch"

Looking at the context provided:
1. This is a design step where I need to create UI mockups for the empty-state experience
2. The Stitch SDK was supposed to generate mockups, but the "Generated Artifacts" section shows empty brackets: `[ ]`
3. I'm an analysis-only agent - I CANNOT execute commands, run scripts, or invoke tools

Key constraints:
- I cannot actually call MCP tools or generate mockups
- I must produce a Markdown document with design specifications
- I need to reference Stitch SDK design artifacts (but none were generated)
- I must document what SHOULD be verified as action items

The mission requires:
- Desktop mockup with proper spacing
- Mobile mockup with responsive breakpoints
- Theme/branding guidance extracted
- Accessibility requirements documented

Since no mockups were actually generated (the artifacts list is empty), I need to:
1. Create comprehensive design specifications based on the research context
2. Document the design decisions and rationale
3. Provide detailed wireframe descriptions
4. Extract theme guidance from the existing codebase context
5. Document accessibility requirements
6. List action items for what needs to be verified/generated

I'll create a thorough design specification document that downstream developers can use, while being honest that the actual mockup generation needs to happen via the Stitch MCP tools.
</think>

# ChoreWheel Empty-State Design Specification

## Executive Summary

This design specification documents the improved empty-state UI for the ChoreWheel dashboard, addressing the primary friction point identified in the research phase. The current empty-state fails to communicate purpose or guide new users toward their first action, contributing to early-stage drop-off.

The proposed design transforms the empty-state from a passive blank screen into an active onboarding guide that:
- Clearly communicates the app's purpose immediately
- Provides a prominent, accessible call-to-action to create the first chore
- Maintains visual consistency with the existing Next.js/Tailwind design system
- Ensures WCAG 2.1 AA compliance across all breakpoints

**Design Philosophy:** Clarity over cleverness. The Pragmatic Roommate persona needs to understand "what to do next" within 3 seconds of landing on the dashboard.

---

## Design Objectives

### Primary Objectives
1. **Reduce First-Run Confusion:** Eliminate ambiguity about whether the app is working or if the user needs to take action
2. **Increase Task Creation Rate:** Make the "Add Chore" action the most prominent element on the empty-state
3. **Maintain Production Safety:** Work within existing Tailwind breakpoints and design tokens without introducing new dependencies

### Secondary Objectives
1. **Mobile Navigation Reliability:** Ensure the empty-state does not interfere with mobile nav overlay behavior
2. **Accessibility Compliance:** Meet WCAG 2.1 AA standards for contrast, touch targets, and keyboard navigation
3. **Responsive Consistency:** Provide equivalent experience across mobile (375px), tablet (768px), and desktop (1024px+)

---

## Design System & Theme Guidance

### Existing Breakpoints (Preserved)
| Breakpoint | Tailwind Class | Pixel Width | Usage |
|------------|----------------|-------------|-------|
| Mobile | `sm` | 640px | Base mobile experience |
| Tablet | `md` | 768px | Tablet and large phones |
| Desktop | `lg` | 1024px | Desktop and laptops |

### Color Palette Recommendations

Based on the existing Next.js/Tailwind ecosystem and competitive analysis:

**Primary Colors:**
```
Primary Action (Add Chore Button):
- Base: bg-blue-600 (#2563eb)
- Hover: bg-blue-700 (#1d4ed8)
- Focus: ring-2 ring-blue-500 ring-offset-2
- Disabled: bg-blue-300 (#93c5fd)

Secondary Action (Help/Info):
- Base: text-gray-600 (#4b5563)
- Hover: text-gray-900 (#111827)
```

**Neutral Colors:**
```
Background:
- Page: bg-gray-50 (#f9fafb)
- Card: bg-white (#ffffff)

Text:
- Heading: text-gray-900 (#111827)
- Body: text-gray-600 (#4b5563)
- Muted: text-gray-400 (#9ca3af)

Borders:
- Subtle: border-gray-200 (#e5e7eb)
- Focus: border-blue-500 (#3b82f6)
```

**Accessibility Contrast Ratios:**
- Primary button text on bg: 4.5:1 minimum (AA Large)
- Body text on background: 4.5:1 minimum (AA Normal)
- Muted text on background: 3:1 minimum (AA Large)

### Typography Scale

| Element | Desktop | Mobile | Tailwind Class |
|---------|---------|--------|----------------|
| Page Title | 32px / 40px | 24px / 32px | `text-2xl sm:text-3xl` |
| Empty State Heading | 24px / 32px | 20px / 28px | `text-xl sm:text-2xl` |
| Body Text | 16px / 24px | 16px / 24px | `text-base` |
| Muted Text | 14px / 20px | 14px / 20px | `text-sm` |

### Spacing Scale

| Usage | Value | Tailwind Class |
|-------|-------|----------------|
| Section padding | 32px | `p-8` |
| Card padding | 24px | `p-6` |
| Element gap | 16px | `gap-4` |
| Tight gap | 8px | `gap-2` |
| Mobile safe area | 16px | `safe-area-inset-*` |

---

## Desktop Mockup Specification

### Layout Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                         NAVIGATION BAR                           │
│                    [Logo]    [Menu]    [Profile]                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                     DASHBOARD HEADER                            │
│                   "My Chores" / Date                            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                                                                 │
│                    EMPTY STATE CARD                             │
│                                                                 │
│              ┌─────────────────────────────────────┐            │
│              │                                     │            │
│              │         [Illustration/Icon]         │            │
│              │           (Broom/Swipe)             │            │
│              │                                     │            │
│              │    ┌───────────────────────────┐    │            │
│              │    │   No chores yet!          │    │            │
│              │    │                           │    │            │
│              │    │   Your chore list is      │    │            │
│              │    │   empty. Add your first   │    │            │
│              │    │   chore to get started.   │    │            │
│              │    │                           │    │            │
│              │    │   ┌───────────────────┐   │    │            │
│              │    │   │  + Add Chore      │   │    │            │
│              │    │   └───────────────────┘   │    │            │
│              │    │                           │    │            │
│              │    │   [?] Need help?          │    │            │
│              │    └───────────────────────────┘    │            │
│              │                                     │            │
│              └─────────────────────────────────────┘            │
│                                                                 │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                        FOOTER                                   │
└─────────────────────────────────────────────────────────────────┘
```

### Desktop Component Hierarchy

```
DashboardPage
├── Header
│   ├── Logo
│   ├── Navigation Menu
│   └── User Profile
├── Main Content
│   ├── Page Title ("My Chores")
│   ├── Date Display
│   └── EmptyStateCard
│       ├── IllustrationContainer
│       │   └── Icon (lucide-react: Broom or ListTodo)
│       ├── ContentContainer
│       │   ├── Heading ("No chores yet!")
│       │   ├── Description ("Your chore list is empty...")
│       │   ├── PrimaryButton ("+ Add Chore")
│       │   └── HelpLink ("Need help?")
│       └── Decorative Elements (optional)
└── Footer
```

### Desktop Visual Specifications

**Empty State Card:**
- Width: 100% max-width-2xl (896px)
- Padding: 48px (p-12)
- Border-radius: 16px (rounded-2xl)
- Background: white
- Shadow: shadow-lg
- Margin: 32px auto (centered)

**Illustration:**
- Size: 80x80px
- Color: text-blue-500
- Position: Centered above content
- Margin-bottom: 24px

**Typography Alignment:**
- All text: text-center
- Max-width: 480px (prose-md mx-auto)

---

## Mobile Mockup Specification

### Layout Structure

```
┌─────────────────────────┐
│    [≡]    CHOREWHEEL    │  ← Mobile Nav Trigger
├─────────────────────────┤
│                         │
│    My Chores            │  ← Page Title
│    Today, Jan 15        │  ← Date
│                         │
├─────────────────────────┤
│                         │
│  ┌───────────────────┐  │
│  │                   │  │
│  │    [Icon]         │  │
│  │                   │  │
│  │  No chores yet!   │  │
│  │                   │  │
│  │  Your list is     │  │
│  │  empty. Add your  │  │
│  │  first chore.     │  │
│  │                   │  │
│  │  ┌─────────────┐  │  │
│  │  │ + Add Chore │  │  │
│  │  └─────────────┘  │  │
│  │                   │  │
│  └───────────────────┘  │
│                         │
│  [?] Need help?         │
│                         │
├─────────────────────────┤
│  [Home] [Chores] [+]   │  ← Bottom Nav (if exists)
└─────────────────────────┘
```

### Mobile Component Hierarchy

```
DashboardPage (Mobile)
├── MobileHeader
│   ├── HamburgerMenu (44x44px touch target)
│   ├── App Title/Logo
│   └── Safe Area Padding (iOS)
├── PageHeader
│   ├── Title ("My Chores")
│   └── Date Display
├── EmptyStateCard
│   ├── Icon (64x64px)
│   ├── Content
│   │   ├── Heading ("No chores yet!")
│   │   ├── Description (shortened)
│   │   └── PrimaryButton ("+ Add Chore")
│   └── HelpLink
└── BottomNavigation (if applicable)
    ├── Home Tab
    ├── Chores Tab
    └── Add Button (FAB style)
```

### Mobile Visual Specifications

**Empty State Card:**
- Width: 100% minus 16px padding
- Padding: 24px (p-6)
- Border-radius: 12px (rounded-xl)
- Background: white
- Shadow: shadow-md
- Margin: 16px (m-4)

**Illustration:**
- Size: 64x64px
- Color: text-blue-500
- Position: Centered
- Margin-bottom: 16px

**Touch Targets:**
- Primary Button: Minimum 44x44px (WCAG 2.1 AA)
- Help Link: Minimum 44x44px hit area
- All interactive elements: 8px padding minimum

**Safe Area Handling:**
- Top: `pt-safe` or `pt-[env(safe-area-inset-top)]`
- Bottom: `pb-safe` or `pb-[env(safe-area-inset-bottom)]`

---

## Responsive Breakpoint Behavior

### Breakpoint Transitions

| Range | Layout | Key Differences |
|-------|--------|-----------------|
| < 640px | Mobile | Stacked, full-width card, smaller icon |
| 640-767px | Tablet Small | Slightly larger card, more padding |
| 768-1023px | Tablet Large | Centered card, max-width applied |
| ≥ 1024px | Desktop | Full desktop experience, larger spacing |

### Responsive CSS Classes

```
Container:
- Mobile: w-full mx-0 px-4
- Desktop: max-w-2xl mx-auto px-8

Card:
- Mobile: rounded-xl p-6 shadow-md
- Desktop: rounded-2xl p-12 shadow-lg

Icon:
- Mobile: w-16 h-16
- Desktop: w-20 h-20

Heading:
- Mobile: text-xl
- Desktop: text-2xl

Button:
- Mobile: w-full py-3 px-6
- Desktop: w-auto py-3 px-8
```

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance Checklist

#### Contrast Requirements
- [ ] Primary button text/background: ≥ 4.5:1
- [ ] Body text/background: ≥ 4.5:1
- [ ] Muted text/background: ≥ 3:1 (large text)
- [ ] Focus indicators: ≥ 3:1 against adjacent colors

#### Touch Target Requirements
- [ ] All interactive elements: ≥ 44x44px
- [ ] Minimum spacing between targets: 8px
- [ ] Button padding: ≥ 12px vertical, ≥ 16px horizontal

#### Keyboard Navigation
- [ ] Tab order follows visual hierarchy
- [ ] Focus visible on all interactive elements
- [ ] Enter/Space activates buttons
- [ ] Escape closes mobile nav overlay

#### Screen Reader Support
- [ ] Heading hierarchy: h1 → h2 → h3
- [ ] Alt text for decorative icon (empty or role="presentation")
- [ ] Button labels descriptive ("Add a new chore" vs "+")
- [ ] ARIA live region for dynamic updates

#### Mobile-Specific
- [ ] Safe area insets respected on iOS
- [ ] Touch targets not obscured by browser UI
- [ ] Horizontal scroll disabled
- [ ] Zoom to 200% does not break layout

### Accessibility Code Pattern

```tsx
// Example accessible empty state structure
<section aria-labelledby="empty-state-heading">
  <div className="text-center">
    <Icon 
      name="broom" 
      className="w-20 h-20 text-blue-500 mx-auto mb-6"
      aria-hidden="true"
    />
    <h2 id="empty-state-heading" className="text-2xl font-bold mb-2">
      No chores yet!
    </h2>
    <p className="text-gray-600 mb-6 max-w-sm mx-auto">
      Your chore list is empty. Add your first chore to get started.
    </p>
    <button
      onClick={handleAddChore}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg 
                 hover:bg-blue-700 focus:outline-none 
                 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label="Add a new chore to your list"
    >
      <span className="mr-2">+</span>
      Add Chore
    </button>
  </div>
</section>
```

---

## Component Specifications

### EmptyStateCard Component

**Props Interface:**
```typescript
interface EmptyStateCardProps {
  heading: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  helpLink?: {
    label: string;
    href: string;
  };
  icon?: keyof typeof icons;
}
```

**Default Values:**
```typescript
const defaultProps = {
  heading: "No chores yet!",
  description: "Your chore list is empty. Add your first chore to get started.",
  actionLabel: "+ Add Chore",
  helpLink: { label: "Need help?", href: "/help" },
  icon: "broom",
};
```

**States:**
1. **Default:** Empty state with primary action
2. **Loading:** Skeleton state (if applicable)
3. **Error:** Error message with retry action (future)

---

## Visual Design Notes

### Illustration Style

**Recommended Icon:** `lucide-react` Broom or ListTodo
- Clean, minimalist line style
- Matches existing design system
- Recognizable at small sizes (16px)

**Alternative:** Custom SVG illustration
- Simple, friendly character holding broom
- Pastel blue accent color
- Maximum 2 colors for simplicity

### Micro-interactions

**Button Hover:**
- Background darkens (blue-600 → blue-700)
- Subtle scale: 1.02
- Transition: 150ms ease

**Button Press:**
- Scale: 0.98
- Transition: 75ms ease

**Card Entrance:**
- Fade in: opacity 0 → 1
- Slide up: translateY 10px → 0
- Duration: 300ms ease-out

---

## Design Verification Checklist

### Pre-Implementation Review

- [ ] Desktop mockup follows 8px grid spacing
- [ ] Mobile mockup respects safe areas
- [ ] All touch targets ≥ 44x44px
- [ ] Color contrast meets WCAG 2.1 AA
- [ ] Typography scale is consistent
- [ ] Breakpoints align with existing Tailwind config
- [ ] No new dependencies required
- [ ] Design works in light and dark mode (if applicable)

### Post-Implementation Verification (Action Items)

1. **Visual Regression:** Compare before/after screenshots at all breakpoints
2. **Accessibility Audit:** Run axe-core or Lighthouse accessibility audit
3. **Touch Target Testing:** Verify all interactive elements on physical mobile device
4. **Keyboard Navigation:** Tab through entire empty state, verify focus order
5. **Screen Reader Test:** Verify NVDA/VoiceOver reads content correctly
6. **Cross-Browser Test:** iOS Safari, Android Chrome, Desktop Chrome/Firefox/Safari

---

## Stitch Mockup URLs

**Note:** The Stitch SDK mockup generation was not completed in this session. The following URLs should be generated by invoking the Stitch MCP tools:

### Required Mockup Generation

| Screen | Tool | Expected Output |
|--------|------|-----------------|
| Desktop Empty State | `stitch-mcp.stitch_get_html` | Live HTML preview URL |
| Desktop Empty State | `stitch-mcp.stitch_get_image` | Static image URL |
| Mobile Empty State | `stitch-mcp.stitch_get_html` | Live HTML preview URL |
| Mobile Empty State | `stitch-mcp.stitch_get_image` | Static image URL |

### Action Required

The following Stitch MCP tool invocations should be executed to generate the visual mockups:

```
1. stitch_list_projects - Identify or create ChoreWheel project
2. stitch_list_screens - Verify existing screens
3. stitch_get_html - Generate desktop mockup HTML
4. stitch_get_html - Generate mobile mockup HTML
5. stitch_get_image - Generate desktop mockup image
6. stitch_get_image - Generate mobile mockup image
```

---

## Conclusions & Recommendations

### Design Decisions Summary

1. **Single Card Approach:** A single, centered card provides focus and clarity. Multiple cards or sections would dilute the primary message.

2. **Icon Over Illustration:** Using a Lucide icon maintains consistency with the existing design system and reduces asset management overhead.

3. **Full-Width Mobile Button:** On mobile, the primary action should be full-width for easy thumb access.

4. **Help Link Secondary:** The help link is intentionally de-emphasized to avoid competing with the primary action.

5. **No Animation on Load:** The empty state should appear immediately without animation to reduce perceived load time.

### Recommendations for Implementation

1. **Create Reusable Component:** The EmptyStateCard should be a reusable component for future empty states (e.g., no chores for today, no completed chores).

2. **Preserve Existing Styles:** Do not modify global styles or create new CSS files. Use Tailwind utility classes exclusively.

3. **Test on Physical Devices:** Mobile navigation issues are device-specific. Test on actual iOS and Android devices.

4. **Document Changes:** Include before/after screenshots in the PR description.

---

## Action Items

### For Design Team (Garak)
- [ ] Generate Stitch mockups for desktop and mobile empty states
- [ ] Export theme tokens and design tokens for implementation
- [ ] Create annotated mockups highlighting key measurements

### For Build Team (Obrien)
- [ ] Implement EmptyStateCard component per specification
- [ ] Apply responsive breakpoints as documented
- [ ] Ensure WCAG 2.1 AA compliance
- [ ] Add unit tests for component rendering

### For Review Team (Captain-Sisko, Odo)
- [ ] Verify visual design matches specification
- [ ] Run accessibility audit (axe-core/Lighthouse)
- [ ] Test on physical iOS and Android devices
- [ ] Verify no regressions in existing functionality

### For Test Team (Odo)
- [ ] Run `npm run lint` - must pass
- [ ] Run `npm run build` - must pass
- [ ] Run existing test suite - must pass
- [ ] Document any new test coverage added

---

## References

- **Mission Outline:** ChoreWheel - Mobile Empty-State Polish and Validation
- **Research Phase:** Audit current mobile navigation and empty-state implementation
- **Competitive Analysis:** Tody, Sweepy, Google Tasks
- **Design System:** Next.js + Tailwind CSS
- **Accessibility Standard:** WCAG 2.1 AA