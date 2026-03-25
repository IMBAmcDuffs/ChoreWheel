# ChoreWheel UI/UX Design Specification

## Executive Summary

This document defines the complete visual language, component system, and wireframe specifications for ChoreWheel, a roommate chore management application built with Next.js 14+, TypeScript, Tailwind CSS, and SQLite. The design prioritizes mobile-first accessibility, clear chore status visualization, and intuitive navigation for shared household management.

---

## 1. Design System & Visual Tokens

### 1.1 Color Palette

```typescript
// tailwind.config.ts - Design Tokens
module.exports = {
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        primary: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        
        // Status Colors
        success: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        
        warning: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        
        danger: {
          50:  '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        
        // Neutral Colors
        neutral: {
          50:  '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#404042',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
        
        // Semantic Colors
        chore: {
          pending: '#f59e0b',      // Amber - awaiting assignment
          assigned: '#3b82f6',     // Blue - assigned to user
          completed: '#22c55e',    // Green - done
          overdue: '#ef4444',      // Red - past due
          rotating: '#8b5cf6',     // Purple - on rotation
        },
        
        // Background Layers
        surface: {
          base: '#ffffff',
          elevated: '#f8fafc',
          dark: '#1e293b',
        },
      },
    },
  },
}
```

### 1.2 Typography System

```typescript
// Typography Scale
const typography = {
  font: {
    sans: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'JetBrains Mono, "Fira Code", monospace',
  },
  fontSize: {
    xs:   '0.75rem',   // 12px - captions, small labels
    sm:   '0.875rem',  // 14px - secondary text
    base: '1rem',      // 16px - body text
    lg:   '1.125rem',  // 18px - headings
    xl:   '1.25rem',   // 20px - section headings
    '2xl': '1.5rem',   // 24px - page titles
    '3xl': '1.875rem', // 30px - hero headings
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
}
```

### 1.3 Spacing & Layout Grid

```typescript
// Spacing Scale
const spacing = {
  xs:   '0.25rem',   // 4px
  sm:   '0.5rem',    // 8px
  md:   '1rem',      // 16px
  lg:   '1.5rem',    // 24px
  xl:   '2rem',      // 32px
  '2xl': '3rem',     // 48px
  '3xl': '4rem',     // 64px
}

// Layout Grid
const grid = {
  containerMaxWidth: '1200px',
  gutter: '1.5rem',   // 24px
  breakpoints: {
    sm:   '640px',    // Mobile to tablet
    md:   '768px',    // Tablet
    lg:   '1024px',   // Desktop
    xl:   '1280px',   // Large desktop
    '2xl': '1536px',  // Extra large
  },
}
```

### 1.4 Component Hierarchy

```
┌─────────────────────────────────────────────────────────────┐
│                        App Layout                              │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │                    Header / Navigation                    │ │
│  │  ┌─────────────────────────────────────────────────────┐ │ │
│  │  │  Logo | Search | User Menu | Settings                │ │ │
│  │  └─────────────────────────────────────────────────────┘ │ │
│  └─────────────────────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │                    Main Content Area                      │ │
│  │  ┌─────────────────────────────────────────────────────┐ │ │
│  │  │              Page Header (Title + Actions)           │ │ │
│  │  └─────────────────────────────────────────────────────┘ │ │
│  │  ┌─────────────────────────────────────────────────────┐ │ │
│  │  │              Page Content (Cards/Lists)              │ │ │
│  │  │  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐    │ │ │
│  │  │  │   Card A    │ │   Card B    │ │   Card C    │    │ │ │
│  │  │  └─────────────┘ └─────────────┘ └─────────────┘    │ │ │
│  │  └─────────────────────────────────────────────────────┘ │ │
│  └─────────────────────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │                    Footer / Bottom Nav                    │ │
│  └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Page Wireframe Specifications

### 2.1 Dashboard Page

**Purpose:** Overview of chore status, fairness metrics, and quick actions.

```
┌────────────────────────────────────────────────────────────────┐
│  [Logo]  ChoreWheel                    [🔍 Search] [👤 Menu]   │
├────────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Welcome back, {userName}!                                │  │
│  │  Today: {date} • {dayOfWeek}                              │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  📊 Fairness Score: {score}%                               │  │
│  │  ┌────────────────────────────────────────────────────┐   │  │
│  │  │  ████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │   │  │
│  │  │  {score}% Fair  │  {100-score}% Unfair              │   │  │
│  │  └────────────────────────────────────────────────────┘   │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  📋 Today's Chores                                        │  │
│  │  ┌────────────────────────────────────────────────────┐   │  │
│  │  │  🧹 Vacuum Living Room                              │   │  │
│  │  │  Assigned to: {userAvatar} {userName}               │   │  │
│  │  │  Due: {time} • Status: {status}                     │   │  │
│  │  │  [Mark Complete] [Report Issue]                      │   │  │
│  │  └────────────────────────────────────────────────────┘   │  │
│  │  ┌────────────────────────────────────────────────────┐   │  │
│  │  │  🍽️ Wash Dishes                                     │   │  │
│  │  │  Assigned to: {userAvatar} {userName}               │   │  │
│  │  │  Due: {time} • Status: {status}                     │   │  │
│  │  └────────────────────────────────────────────────────┘   │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  🔄 Upcoming Rotations                                    │  │
│  │  ┌────────────────────────────────────────────────────┐   │  │
│  │  │  📅 Next Rotation: {date}                            │   │  │
│  │  │  ┌────────────────────────────────────────────────┐ │   │  │
│  │  │  │  🧽 Dish Duty → {userName}                       │ │   │  │
│  │  │  │  🧹 Vacuum Duty → {userName}                     │ │   │  │
│  │  │  │  🧼 Clean Bathroom → {userName}                  │ │   │  │
│  │  │  └────────────────────────────────────────────────┘ │   │  │
│  │  └────────────────────────────────────────────────────┘   │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  📈 Weekly Activity                                        │  │
│  │  ┌────────────────────────────────────────────────────┐   │  │
│  │  │  Mon  Tue  Wed  Thu  Fri  Sat  Sun                  │   │  │
│  │  │  ████  ████  ████  ████  ████  ████  ████          │   │  │
│  │  │  85%  92%  88%  95%  90%  98%  94%                 │   │  │
│  │  └────────────────────────────────────────────────────┘   │  │
│  └──────────────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────────────┤
│  [🏠 Dashboard] [📋 Chores] [🎡 Wheel] [👥 Roommates] [⚙️ Settings]│
└────────────────────────────────────────────────────────────────┘
```

**Key Components:**
- **Header:** Logo, search, user menu
- **Fairness Score Card:** Progress bar visualization
- **Today's Chores List:** Card-based list with status indicators
- **Rotation Preview:** Upcoming assignment preview
- **Activity Chart:** Weekly completion percentage

---

### 2.2 Chore List Page

**Purpose:** Full chore management with add, edit, assign, and complete actions.

```
┌────────────────────────────────────────────────────────────────┐
│  [Logo]  ChoreWheel                    [🔍 Search] [👤 Menu]   │
├────────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  📋 Chore List                                            │  │
│  │  [+ Add Chore] [Filter: All | Pending | Completed]        │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  ┌────────────────────────────────────────────────────┐   │  │
│  │  │  📅 {date}                                          │   │  │
│  │  │  ┌────────────────────────────────────────────────┐ │   │  │
│  │  │  │  🧹 Vacuum Living Room                          │ │   │  │
│  │  │  │  Status: {status}                               │ │   │  │
│  │  │  │  Due: {time}                                    │ │   │  │
│  │  │  │  Assigned: {userAvatar} {userName}              │ │   │  │
│  │  │  │  Frequency: Weekly                              │ │   │  │
│  │  │  │  ┌────────────────────────────────────────────┐ │ │   │  │
│  │  │  │  │  [✓] Mark Complete  [✏️] Edit  [🗑️] Delete │ │ │   │  │
│  │  │  │  └────────────────────────────────────────────┘ │ │   │  │
│  │  │  └────────────────────────────────────────────────┘ │   │  │
│  │  │  ┌────────────────────────────────────────────────┐ │   │  │
│  │  │  │  🍽️ Wash Dishes                                 │ │   │  │
│  │  │  │  Status: {status}                               │ │   │  │
│  │  │  │  Due: {time}                                    │ │   │  │
│  │  │  │  Assigned: {userAvatar} {userName}              │ │   │  │
│  │  │  │  Frequency: Daily                               │ │   │  │
│  │  │  │  ┌────────────────────────────────────────────┐ │ │   │  │
│  │  │  │  │  [✓] Mark Complete  [✏️] Edit  [🗑️] Delete │ │ │   │  │
│  │  │  │  └────────────────────────────────────────────┘ │ │   │  │
│  │  │  └────────────────────────────────────────────────┘ │   │  │
│  │  └────────────────────────────────────────────────────┘   │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  📊 Summary                                               │  │
│  │  Total: {count} | Pending: {count} | Completed: {count}  │  │
│  └──────────────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────────────┤
│  [🏠 Dashboard] [📋 Chores] [🎡 Wheel] [👥 Roommates] [⚙️ Settings]│
└────────────────────────────────────────────────────────────────┘
```

**Key Components:**
- **Filter Bar:** Date picker, status filter, search
- **Chore Cards:** Status badges, due time, assigned user, actions
- **Summary Stats:** Quick overview counts

---

### 2.3 Chore Wheel Page

**Purpose:** Visual rotation scheduler for recurring chores.

```
┌────────────────────────────────────────────────────────────────┐
│  [Logo]  ChoreWheel                    [🔍 Search] [👤 Menu]   │
├────────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  🎡 Chore Wheel                                           │  │
│  │  [+ Add Chore to Wheel] [Reset Rotation]                  │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  ┌────────────────────────────────────────────────────┐   │  │
│  │  │  🔄 Rotation Schedule                               │   │  │
│  │  │                                                     │   │  │
│  │  │  ┌────────────────────────────────────────────────┐ │   │  │
│  │  │  │  🧹 Vacuum Living Room                          │ │   │  │
│  │  │  │  ┌────────────────────────────────────────────┐ │ │   │  │
│  │  │  │  │  👤 {userName}                              │ │ │   │  │
│  │  │  │  │  Next: {date} at {time}                     │ │ │   │  │
│  │  │  │  │  Frequency: Weekly                          │ │ │   │  │
│  │  │  │  │  ┌────────────────────────────────────────┐ │ │   │  │
│  │  │  │  │  │  [🔄] Rotate Assignment                 │ │ │   │  │
│  │  │  │  │  │  [📅] View History                      │ │ │   │  │
│  │  │  │  │  └────────────────────────────────────────┘ │ │ │   │  │
│  │  │  │  └────────────────────────────────────────────────┘ │   │  │
│  │  │  └────────────────────────────────────────────────────┘   │  │
│  │  │  ┌────────────────────────────────────────────────────┐   │  │
│  │  │  │  🍽️ Wash Dishes                                   │   │  │
│  │  │  │  ┌────────────────────────────────────────────────┐ │   │  │
│  │  │  │  │  👤 {userName}                                  │ │   │  │
│  │  │  │  │  Next: {date} at {time}                        │ │   │  │
│  │  │  │  │  Frequency: Daily                              │ │   │  │
│  │  |  │  │  ┌────────────────────────────────────────────┐ │ │   │  │
│  │  │  │  │  │  [🔄] Rotate Assignment                     │ │ │   │  │
│  │  │  │  │  │  [📅] View History                         │ │ │   │  │
│  │  │  │  │  └────────────────────────────────────────────┘ │ │ │   │  │
│  │  │  │  └────────────────────────────────────────────────┘ │   │  │
│  │  │  └────────────────────────────────────────────────────┘   │  │
│  │  └──────────────────────────────────────────────────────────┘  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  📊 Wheel Statistics                                       │  │
│  │  ┌────────────────────────────────────────────────────┐   │  │
│  │  │  👥 Total Roommates: {count}                        │   │  │
│  │  │  🔄 Rotations this week: {count}                    │   │  │
│  │  │  ⏱️ Average time per rotation: {minutes} min        │   │  │ |
│  │  └────────────────────────────────────────────────────┘   │  │
│  └──────────────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────────────┤
│  [🏠 Dashboard] [📋 Ch
```

**Key Components:**
- **Rotation Cards:** User assignment, next due date, frequency
- **Rotation Controls:** Rotate assignment, view history
- **Wheel Stats:** Roommate count, rotation frequency, average time

---

### 2.4 Roommates Page

**Purpose:** User management, profile editing, and roommate settings.

```
┌────────────────────────────────────────────────────────────────┐
│  [Logo]  ChoreWheel                    [🔍 Search] [👤 Menu]   │
├────────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  👥 Roommates                                             │  │
│  │  [+ Add Roommate] [Import from Contacts]                   │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  ┌────────────────────────────────────────────────────┐   │  │
│  │  │  👤 {userName}                                      │   │  │
│  │  │  ┌────────────────────────────────────────────────┐ │   │  │
│  │  │  │  📸 Profile Photo                                │ │   │  │
│  │  │  │  {avatar}                                       │ │   │  │
│  │  │  │  [📸 Change Photo]                               │ │   │  │
│  │  │  │  └────────────────────────────────────────────┘ │ │   │  │
│  │  │  │  Name: {userName}                                │ │   │  │
│  │  │  │  Email: {email}                                   │ │   │  │
│  │  │  │  Role: Roommate                                   │ │   │  │
│  │  │  │  ┌────────────────────────────────────────────┐ │ │   │  │
│  │  │  │  │  [✏️] Edit Profile  [🗑️] Remove Roommate    │ │ │   │  │
│  │  │  │  └────────────────────────────────────────────┘ │ │   │  │
│  │  │  └────────────────────────────────────────────────┘ │   │  │
│  │  └────────────────────────────────────────────────────┘   │  │
│  │  ┌────────────────────────────────────────────────────┐   │ │
│  │  │  👤 {userName}                                      │   │  │
│  │  │  ┌────────────────────────────────────────────────┐ │   │  │
│  │  │  │  📸 Profile Photo                                │ │   │  │
│  │  │  │  {avatar}                                       │ │   │