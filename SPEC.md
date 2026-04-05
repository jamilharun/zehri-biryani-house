# Aghaz Biryani & BBQ — Component Architecture & Design Specification

**For:** React 19 / TypeScript / Tailwind CSS v4 / Vite  
**Design Identity:** "The Heritage Curator" — premium editorial, Pakistani hospitality, high-end culinary magazine  
**Prepared by:** Aria, Design Specialist  
**Date:** 2026-04-05

---

## 0. Before You Write a Single Component

### 0.1 Update `index.html` — Font Stack

Replace the current Google Fonts link with this consolidated import. The existing
file loads Playfair Display, Cormorant Garamond, and DM Sans — none of which are
used in the mockups. Swap them out entirely.

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700&family=Be+Vietnam+Pro:wght@400;500;600&family=Roboto+Slab:wght@400;500;700&family=Noto+Nastaliq+Urdu:wght@400&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
  rel="stylesheet"
/>
```

Keep `Noto Nastaliq Urdu` — it is used for the Urdu watermark character `اغاز`.  
`Material Symbols Outlined` is the icon font used across every screen.

### 0.2 `src/index.css` — Global Base Styles

```css
@import "tailwindcss";

/* Material Symbols axis settings */
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

/* Urdu decorative watermark */
.urdu-watermark {
  font-family: 'Noto Nastaliq Urdu', serif;
  opacity: 0.03;
  pointer-events: none;
  user-select: none;
  position: absolute;
  z-index: 0;
  line-height: 1;
}

/* Hide scrollbar for horizontal tab scroll on mobile */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

/* Selection color */
::selection {
  background-color: #e67e22;
  color: #ffffff;
}

body {
  background-color: #fff8f6;
  color: #2c160e;
}
```

---

## 1. Tailwind v4 Theme Configuration

In Tailwind v4 the theme is defined in CSS via `@theme`, not in a JS config file.
Add this block to `src/index.css` immediately after the `@import` line.

```css
@theme {
  /* ── Brand Colors ── */
  --color-primary:                 #944a00;
  --color-primary-container:       #e67e22;
  --color-primary-fixed:           #ffdcc5;
  --color-primary-fixed-dim:       #ffb783;
  --color-on-primary:              #ffffff;
  --color-on-primary-container:    #502600;
  --color-on-primary-fixed:        #301400;
  --color-on-primary-fixed-variant:#713700;
  --color-inverse-primary:         #ffb783;

  --color-secondary:               #2a6b2c;
  --color-secondary-container:     #acf4a4;
  --color-secondary-fixed:         #acf4a4;
  --color-secondary-fixed-dim:     #91d78a;
  --color-on-secondary:            #ffffff;
  --color-on-secondary-container:  #307231;
  --color-on-secondary-fixed:      #002203;
  --color-on-secondary-fixed-variant:#0c5216;

  --color-tertiary:                #835400;
  --color-tertiary-container:      #d28a00;
  --color-tertiary-fixed:          #ffddb5;
  --color-tertiary-fixed-dim:      #ffb957;
  --color-on-tertiary:             #ffffff;
  --color-on-tertiary-container:   #472b00;
  --color-on-tertiary-fixed:       #2a1800;
  --color-on-tertiary-fixed-variant:#643f00;

  --color-background:              #fff8f6;
  --color-surface:                 #fff8f6;
  --color-surface-bright:          #fff8f6;
  --color-surface-dim:             #fbd1c4;
  --color-surface-variant:         #ffdbd0;
  --color-surface-container-lowest:#ffffff;
  --color-surface-container-low:   #fff1ed;
  --color-surface-container:       #ffe9e3;
  --color-surface-container-high:  #ffe2da;
  --color-surface-container-highest:#ffdbd0;
  --color-surface-tint:            #944a00;
  --color-on-surface:              #2c160e;
  --color-on-surface-variant:      #564337;
  --color-on-background:           #2c160e;
  --color-inverse-surface:         #442a22;
  --color-inverse-on-surface:      #ffede8;

  --color-outline:                 #897365;
  --color-outline-variant:         #dcc1b1;

  --color-error:                   #ba1a1a;
  --color-error-container:         #ffdad6;
  --color-on-error:                #ffffff;
  --color-on-error-container:      #93000a;

  /* ── Typography ── */
  --font-headline: 'Epilogue', sans-serif;
  --font-body:     'Inter', sans-serif;
  --font-label:    'Be Vietnam Pro', sans-serif;
  --font-menu:     'Roboto Slab', serif;
  --font-urdu:     'Noto Nastaliq Urdu', serif;

  /* ── Border Radius ── */
  /* Note: Tailwind v4 uses the --radius-* namespace */
  --radius-DEFAULT: 0.125rem;
  --radius-lg:      0.25rem;
  --radius-xl:      0.5rem;
  --radius-2xl:     1rem;
  --radius-3xl:     1.5rem;
  --radius-full:    9999px;

  /* ── Shadows (warm, ambient, 6% opacity) ── */
  --shadow-warm-sm:  0 2px 8px 0 rgba(148, 74, 0, 0.06);
  --shadow-warm:     0 4px 24px 0 rgba(148, 74, 0, 0.06);
  --shadow-warm-lg:  0 8px 40px 0 rgba(148, 74, 0, 0.10);
  --shadow-warm-xl:  0 16px 64px 0 rgba(148, 74, 0, 0.12);
}
```

**Critical note on `rounded-full`:** In the mockups, `rounded-full` is used for
containers (cards, form panels, info boxes) — not just pills/circles. This is an
intentional brand choice. It creates the "smooth vessel" aesthetic. Do not
override it with `9999px`; the Tailwind default is correct for pill shapes, but
for rectangular cards the mockups apply it to create heavily rounded rectangles.
The distinction in usage: small elements (chips, badges) get `rounded-full` for a
true pill. Large containers also get `rounded-full` (or `rounded-3xl`) to achieve
the same warmth. Use judgment — if a card has meaningful content flow it should be
`rounded-3xl` or `rounded-2xl`.

---

## 2. Page Structure & Routes

```
/              → HomePage
/menu          → MenuPage
/our-story     → OurStoryPage
/reservations  → ReservationPage
```

Use React Router v6. Each page gets its own file under `src/pages/`.

```
src/
├── pages/
│   ├── HomePage.tsx
│   ├── MenuPage.tsx
│   ├── OurStoryPage.tsx
│   └── ReservationPage.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── MobileBottomNav.tsx
│   │   └── Footer.tsx
│   ├── shared/
│   │   ├── UrduWatermark.tsx
│   │   ├── HalalBadge.tsx
│   │   ├── SpiceIndicator.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── CategoryPill.tsx
│   │   └── StarRating.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── HalalFloatingBadge.tsx
│   │   ├── ChefsSpecialSection.tsx
│   │   ├── FeaturedDishCard.tsx
│   │   ├── SideDishCard.tsx
│   │   ├── TransparencySection.tsx
│   │   └── CtaBanner.tsx
│   ├── menu/
│   │   ├── MenuHero.tsx
│   │   ├── CategoryTabs.tsx
│   │   ├── MenuCategory.tsx
│   │   ├── MenuItemRow.tsx      ← desktop editorial layout
│   │   ├── MenuItemCard.tsx     ← mobile card layout
│   │   ├── VisualBreak.tsx
│   │   └── HalalPromoBanner.tsx
│   ├── story/
│   │   ├── StoryHero.tsx
│   │   ├── CraftSection.tsx
│   │   ├── CraftImageTile.tsx
│   │   ├── SpaceSection.tsx
│   │   └── TransparentHospitality.tsx
│   └── reservation/
│       ├── ReservationHero.tsx
│       ├── ReservationForm.tsx
│       ├── GuestCounter.tsx
│       ├── ContactInfoCard.tsx
│       ├── MapCard.tsx
│       └── CommitmentSection.tsx
├── data/
│   ├── menu.ts          ← all menu items, categories, prices
│   └── contactInfo.ts
├── hooks/
│   └── useScrolled.ts   ← for nav transparency
└── App.tsx
```

---

## 3. Shared Components

### 3.1 `Navbar`

**File:** `src/components/layout/Navbar.tsx`

**Desktop behavior:**
- `position: sticky; top: 0; z-index: 50`
- Background: `bg-surface/70` with `backdrop-blur-md` (12px)
- Height: `py-4` (approx 64–72px total)
- Max-width container: `max-w-7xl mx-auto px-8`
- Left: Logo group — `Aghaz` in Epilogue bold, `text-secondary` (#2a6b2c), plus
  inline Urdu `اغاز` in Noto Nastaliq at reduced opacity (~50%) and size
- Center: Nav links — Home, Menu, Our Story, Reservations
  - Font: Epilogue, `tracking-tight`
  - Default: `text-secondary font-medium`
  - Active page: `text-primary-container font-semibold` + `border-b-2 border-primary-container pb-1`
  - Hover: `text-primary-container transition-colors duration-300`
- Right: `verified_user` Material Symbol icon in `text-primary` — this is the
  Halal verification shortcut icon present on every desktop page

**Mobile behavior:** Hidden — replaced by `MobileBottomNav` and a simplified
top bar (hamburger + centered wordmark + Urdu script on right).

**Props:**
```typescript
interface NavbarProps {
  activePage: 'home' | 'menu' | 'our-story' | 'reservations';
}
```

**Scroll behavior:** Use `useScrolled` hook. At scroll position 0 the nav
background is fully transparent; after 20px it transitions to `bg-surface/70`.
The backdrop blur is always active.

```typescript
// src/hooks/useScrolled.ts
import { useState, useEffect } from 'react';

export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);
  return scrolled;
}
```

---

### 3.2 `MobileBottomNav`

**File:** `src/components/layout/MobileBottomNav.tsx`

- `fixed bottom-0 left-0 w-full z-50`
- Background: `bg-surface-container-high/95 backdrop-blur-lg`
- Height: `h-20`
- Top corners: `rounded-t-3xl` (on home page), flat on inner pages
- Shadow: `shadow-2xl`
- Layout: `flex justify-around items-center px-4`
- Shows on `md:hidden`

**Five tabs** (from mockups):
| Tab | Icon | Label |
|-----|------|-------|
| Menu / Dastarkhwan | `restaurant_menu` | Dastarkhwan (home) / Menu |
| Handi / Grill | `outdoor_grill` | Handi |
| Center FAB | `rice_bowl` | _(elevated)_ |
| Heritage / Story | `history` | Heritage |
| Find Us | `location_on` | Find Us |

The center tab is a raised FAB: `bg-primary text-on-primary w-14 h-14 rounded-2xl`,
positioned `relative -top-6 shadow-xl shadow-primary/30 border-4 border-surface`.

**Active state:** `text-primary-container` with filled icon variant
(`font-variation-settings: 'FILL' 1`).  
**Inactive state:** `text-secondary` with outline icon.

**Props:**
```typescript
interface MobileBottomNavProps {
  activePage: 'home' | 'menu' | 'our-story' | 'reservations';
}
```

---

### 3.3 `Footer`

**File:** `src/components/layout/Footer.tsx`

Two variants exist in the mockups — desktop and mobile. They share the same
content but arrange differently.

**Desktop (md and up):**
- `bg-surface` (not pure white — the warm off-white #fff8f6)
- `flex flex-row justify-between items-center px-12 py-10`
- Left: Brand name in Epilogue + tagline in Inter text-sm
- Center: Nav links (Contact, Location, Instagram, Facebook)
- Right: Copyright with inline Urdu `اغاز`

**Mobile:**
- `bg-[#FDF3E7]` (slightly warmer than surface — a deliberate tonal shift)
- `flex flex-col items-center text-center`
- Stacked: copyright → links (Privacy, Halal Commitment, Feedback)
- Add `mb-20` to clear the bottom nav bar

**Link styles:** `text-on-surface-variant opacity-80 hover:text-primary hover:opacity-100 transition-opacity text-sm`

The mobile footer uses only three links: Privacy, Halal Commitment, Feedback —
simpler than desktop. This is intentional; use a prop to control which set shows.

**Props:**
```typescript
interface FooterProps {
  variant?: 'desktop-full' | 'minimal'; // minimal = mobile 3-link version
}
```

---

### 3.4 `UrduWatermark`

**File:** `src/components/shared/UrduWatermark.tsx`

A purely decorative element. Used across all pages, positioned absolutely.

```typescript
interface UrduWatermarkProps {
  text?: string;         // default: 'اغاز'
  size?: string;         // Tailwind text size class, e.g. 'text-[20rem]'
  className?: string;    // position classes: 'top-20 -left-20', etc.
  color?: string;        // Tailwind color class, default 'text-primary'
  opacity?: string;      // override opacity class, default uses .urdu-watermark CSS
}
```

Render as:
```tsx
<span
  aria-hidden="true"
  className={`urdu-watermark font-urdu ${size} ${color} ${className}`}
  style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
>
  {text}
</span>
```

Usage pattern: each page/section that needs it renders 1–2 watermarks, one
typically at top-left offset off-screen (`-left-20`), one at bottom-right
(`-right-20`). They must never be inside a `overflow-hidden` parent unless
intentionally clipped.

---

### 3.5 `HalalBadge`

**File:** `src/components/shared/HalalBadge.tsx`

Three display variants seen across mockups:

**`pill`** — Used in page headers and hero sections
```
bg-secondary-container text-on-secondary-container
rounded-full px-4 py-2
flex items-center gap-2
font-label text-xs font-bold uppercase tracking-widest
Icon: verified (filled)
Text: "100% Halal Certified"
```

**`floating`** — Used in reservation hero (right column, bottom-left of image)
```
bg-surface-container-lowest
p-6 rounded-full shadow-xl border border-outline-variant/10
Icon: stars (text-primary, text-4xl)
Text: "Guaranteed Quality" (font-label font-bold uppercase tracking-tighter text-xs)
Position: absolute -bottom-6 -left-6
```

**`inline`** — Used in menu item cards (mobile), top-right of image
```
bg-surface-container-highest/90 backdrop-blur-md
px-3 py-1 rounded-full
Icon: verified_user (text-secondary, filled)
Text: "HALAL" (font-label text-xs font-bold text-on-secondary-container)
Position: absolute top-4 right-4
```

**Props:**
```typescript
type HalalBadgeVariant = 'pill' | 'floating' | 'inline';
interface HalalBadgeProps {
  variant: HalalBadgeVariant;
}
```

---

### 3.6 `SpiceIndicator`

**File:** `src/components/shared/SpiceIndicator.tsx`

Two visual styles across the mockups:

**`dots`** (mobile menu cards): Five circles, filled = `bg-primary`, empty = `bg-outline-variant`, size `w-3 h-3 rounded-full`

**`emoji`** (desktop menu, chef's special): Chili emoji `🌶️` repeated 1–5 times.
Wrap in `text-primary-container` for color context.

**`fire`** (home mobile chef's special): `local_fire_department` Material Symbol,
filled icons for active level, outline for inactive, `text-xs`

**Props:**
```typescript
type SpiceStyle = 'dots' | 'emoji' | 'fire';
interface SpiceIndicatorProps {
  level: 1 | 2 | 3 | 4 | 5;
  style?: SpiceStyle;   // default: 'dots'
  max?: number;         // default: 5
}
```

---

### 3.7 `StarRating`

**File:** `src/components/shared/StarRating.tsx`

Used in the home page hero floating card and side dish cards.

- Icon: `star` Material Symbol, filled variant
- Color: `text-[#F9A825]` (amber gold — this exact value is in the mockups)
- Size: `text-sm` for side cards, default (24px) for hero card

```typescript
interface StarRatingProps {
  rating: number;   // 1–5
  max?: number;     // default: 5
  size?: 'sm' | 'md';
}
```

---

### 3.8 `SectionHeader`

**File:** `src/components/shared/SectionHeader.tsx`

Used for category headings in the menu page (desktop):
```
<h2> in Epilogue, font-bold, text-primary, text-5xl (categories) or text-4xl (subcategories)
Followed by a flex-grow dotted border: border-b-2 border-dotted border-outline-variant opacity-30
Optional right-side label in font-label text-sm text-on-surface-variant uppercase tracking-tighter
```

```typescript
interface SectionHeaderProps {
  title: string;
  subtitle?: string;      // right-side label e.g. "THE CROWN JEWEL"
  size?: 'lg' | 'md';    // lg = text-5xl, md = text-4xl
}
```

---

### 3.9 `CategoryPill`

**File:** `src/components/shared/CategoryPill.tsx`

Used in the mobile menu page as scrollable filter tabs.

- Active: `bg-primary text-on-primary shadow-md`
- Inactive: `bg-surface-container-high text-on-surface-variant`
- Shape: `rounded-full px-6 py-2.5`
- Font: `font-label text-sm font-semibold`
- `whitespace-nowrap`

```typescript
interface CategoryPillProps {
  label: string;
  active: boolean;
  onClick: () => void;
}
```

---

## 4. Page-by-Page Breakdown

---

### 4.1 Home Page (`/`)

**File:** `src/pages/HomePage.tsx`

#### Section 1: Hero

**Desktop layout:**
- Full-width section, `min-h-[819px]`, `overflow-hidden`
- Background image: bleeds full bleed (no border-radius), positioned `object-right`
- Gradient overlay: `from-background via-background/80 to-transparent` left-to-right
  (this makes the left text area readable while the right side shows full food photo)
- Two-column grid: `grid-cols-2 gap-12`, text on left, floating card on right

**Left column content:**
1. Green pill badge: `bg-secondary-container` + `stars` icon + "Authentic Heritage BBQ"
2. `<h1>` — "The Soul of" in `text-secondary` (dark green), new line
   "Pakistani Spice." in `text-primary italic` (terracotta brown)
   — Font: Epilogue extrabold, `text-6xl md:text-8xl`, `leading-tight`
3. Body paragraph: `text-on-surface-variant`, Inter, `text-lg`, max-w-md
4. CTA button row:
   - Primary: `bg-primary-container text-on-primary font-bold px-8 py-4 rounded-xl`
     + `arrow_forward` icon — "Explore Menu"
   - Secondary: `bg-surface-container-highest text-secondary font-bold px-8 py-4 rounded-xl`
     — "Book a Table"

**Right column — Floating Feature Card:**
- Container: `bg-surface-container-lowest/80 backdrop-blur-xl p-6 rounded-full border border-outline-variant/20 shadow-2xl`
- Inside: circular framed food photo (`w-32 h-32 rounded-full border-4 border-tertiary-container`)
- Dish name in Epilogue bold, `text-secondary`
- 5-star rating row
- Urdu watermark ghost element behind the card: `اغاز` at `text-[180px]`, `opacity-10`, absolutely positioned

**Urdu watermarks:** Two instances per the HTML — one bottom-right of the
transparency section (`text-[300px]`), both at `opacity-0.03` / `opacity-0.04`.

---

**Mobile layout (key differences):**
- Single column, content stacks vertically
- Hero is a full-bleed image (`min-h-[751px]`) with gradient `from-background` at bottom — text floats over bottom of image
- Heading shrinks to `text-5xl font-black`
- Only one CTA button: "Reserve a Table" in `bg-primary`
- The right-column floating card is completely hidden
- `pt-16` to clear the fixed mobile top bar

---

#### Section 2: Halal Floating Badge

Immediately below the hero, offset with `-mt-12`. Not inside a section background.

```
bg-surface-container-highest border border-[#1B5E20]/20
rounded-xl px-6 py-3
flex items-center gap-4 shadow-xl
```

Left: circular `bg-secondary` badge with `verified` icon in amber gold.
Right: "Certified" label (font-label uppercase tracking-widest text-secondary text-xs) +
"100% HALAL SELECTION" (font-headline font-extrabold text-on-surface text-sm).

On mobile this section is absent — Halal is communicated differently (pill in hero, transparency section below).

---

#### Section 3: Chef's Special

**Desktop (asymmetric bento):**

Background: `bg-surface-container-low` — the first surface color shift, defining section boundary without a line.

Section header row: "Chef's Special" (Epilogue bold text-4xl text-secondary) + right-aligned "View Entire Menu" link with `east` icon.

Grid: `grid-cols-12`
- Featured dish: `col-span-7`, tall card (`h-[500px]`), `rounded-full overflow-hidden`
  - Full-bleed image with `group-hover:scale-110 transition-transform duration-700`
  - Bottom overlay gradient `from-black/80`
  - Bottom-left: "MOST POPULAR" badge (`bg-tertiary-container text-white`) + dish name + description
  - Bottom-right: price in `text-[#F9A825]` (amber)
- Side cards column: `col-span-5 flex flex-col gap-8`
  - Each: horizontal flex card `bg-surface-container-highest rounded-full overflow-hidden h-1/2`
  - Left 1/3: image, right 2/3: name, star rating, description, price

**Mobile:**
- Single-column, full-width cards with `aspect-[4/5]` image ratio
- Card has an overlapping content box: image occupies top portion, then content box uses `-mt-12 relative bg-surface-container-low/95 backdrop-blur-sm mx-4 mb-4 rounded-2xl`
- Shows SpiceIndicator in `fire` style + category badge (Signature Spice / Chef's Choice)

---

#### Section 4: Honest Transparency

Background: `bg-surface` — returns to base, creating a subtle lighter tone shift.

Content:
- Centered layout, `max-4xl mx-auto`
- `info` icon in `text-secondary text-5xl`
- "Honest Transparency" heading
- Quote block: `bg-surface-container-high p-10 rounded-full border border-outline-variant/30`
  containing italic quote + two info items (High Steps, Slippery Floors) in a 2-column grid

On mobile, this section transforms to "No Secrets, Only Spices." — different
heading but same concept. Layout: centered with badge pill at top, then heading,
body, and a 2-column grid of benefit cards (`bg-surface-container-highest p-6 rounded-2xl`).
Icons: `psychiatry` (Halal) + `agriculture` (Farm Direct).

Urdu watermark: `خالص` (meaning "pure") in mobile version, `اغاز` in desktop.

---

#### Section 5: CTA Banner

Background: none (page `bg-surface`)

Container: `max-w-5xl mx-auto px-8`

Inner: `bg-secondary rounded-full p-12 flex flex-col md:flex-row items-center justify-between`
- Radial gradient overlay: `from-white/10 to-transparent` centered
- Left: "Ready for a Feast?" (Epilogue bold white) + subtext in `text-secondary-container`
- Right: CTA button `bg-primary-container text-white font-bold px-10 py-5 rounded-full`
  "Reserve Your Table Now"

---

### 4.2 Menu Page (`/menu`)

**File:** `src/pages/MenuPage.tsx`

#### Desktop Layout

---

**Section 1: Menu Hero**

Two-column layout: `grid-cols-2 gap-12 items-center`, `py-16`

Left:
- Green pill badge with `verified` icon: "100% Halal Certified"
- `<h1>` — "Our Legacy" (text-secondary extrabold text-6xl/text-8xl) + "On A Plate" (text-primary-container)
- Subtext in `font-menu` (Roboto Slab) — one of the few places Roboto Slab appears in body copy
- Note: In the desktop mockup, the body copy uses `font-menu`, not `font-body`. This is intentional — it gives editorial weight.

Right:
- Circular image: `aspect-square rounded-full overflow-hidden border-8 border-surface-container-highest shadow-2xl`
- "Since 1988" accent: `absolute -bottom-6 -left-6 bg-primary-container p-8 rounded-xl text-on-primary shadow-xl z-20`
  — "Since" in Epilogue bold text-4xl, "1988" in Epilogue extrabold text-5xl

---

**Section 2: The Menu Grid**

Background: `bg-surface-container-low` with a subtle texture class `.menu-card-texture`
(the texture is a light paper/noise image applied as `background-image`). In React,
apply via inline style or a Tailwind arbitrary value: `style={{ backgroundImage: "url('/assets/textures/paper-noise.png')" }}`.

**Category structure:** Each category (`<MenuCategory>`) contains:
- `<SectionHeader>` with `title` and `subtitle` ("THE CROWN JEWEL", "COAL-FIRED PERFECTION")
- Two-column grid of `<MenuItemRow>` components

**`MenuItemRow` (desktop):**
```
flex justify-between items-start group
Left side:
  - Name: font-menu font-bold text-2xl text-on-surface
  - SpiceIndicator in emoji style (🌶️)
  - Description: text-on-surface-variant text-sm font-body max-w-sm
  - Optional badge (Signature, etc.)
Right side:
  - Price: text-xl font-menu font-bold text-primary-container
```

**Visual Break between Biryani and BBQ:**
Three images in a `grid-cols-3 gap-6`:
- Left and right: `grayscale hover:grayscale-0 transition-all duration-500 rounded-xl h-64 object-cover`
- Center: full color, no grayscale — the hero image of the trio

This is a deliberate editorial moment — it breaks up the menu list and adds tactile richness.

**Sides + Drinks section:**
Two-column layout `grid-cols-2 gap-16`. Each uses `<SectionHeader>` + a `space-y-8` list of simple `flex justify-between` rows with `font-menu` for names and prices.

---

**Section 3: Halal Promo Banner**

Background: `bg-secondary rounded-[2rem]` (note: the mockup uses `rounded-[2rem]` not `rounded-full`)
- Left: heading "Authenticity in every bite. Certified 100% Halal." + body + "View Certification" button
- Right: decorative dashed circle badge ("Traditional Methods Only")
- Decorative: `absolute -right-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl`

---

#### Mobile Layout

**Mobile menu has a fundamentally different structure from desktop.** Key differences:

1. **Page header:** "Dastarkhwan / The Grand Menu" (title + subtitle style) in `font-headline`, primary and secondary colors layered. Different from desktop's "Our Legacy On A Plate."

2. **Sticky category tabs:** `<CategoryTabs>` uses horizontal scroll (`overflow-x-auto no-scrollbar`), sticky at `top-16` (below mobile top bar), `bg-background/80 backdrop-blur-sm py-4`.

3. **`MenuItemCard` (mobile):** Each item is a full card with:
   - Image: `h-56 w-full object-cover` at top
   - Halal badge `inline` variant overlaid on image (top-right)
   - Content area: name + price side-by-side, description, SpiceIndicator in `dots` style
   - `+` button (add to order): `bg-primary-container text-on-primary-container p-2 rounded-lg`

4. **Category groupings:** "Biryani Specials", "Handi & Karahi" — slightly different naming than desktop.

5. **No visual break images** between categories on mobile — pure content focus.

---

### 4.3 Our Story Page (`/our-story`)

**File:** `src/pages/OurStoryPage.tsx`

---

#### Desktop Layout

**Section 1: Story Hero**

Two-column grid `lg:grid-cols-2 gap-16 items-center`, `py-20 lg:py-32`

Left:
- Eyebrow label: `font-label text-primary font-semibold tracking-widest text-sm uppercase` — "Heritage & Legacy"
- `<h1>` — "Aghaz: The Beginning of a Flavorful Journey"
  - "The Beginning" in `text-secondary`
  - Font: Epilogue extrabold, `text-5xl lg:text-7xl`, `leading-tight`
- Body: explanation of "Aghaz (اغاز)" meaning — the Urdu word rendered inline in the paragraph using `font-bold text-secondary`
- CTA: "View Our Menu" button (`bg-primary`) + "Authentically Crafted" text link with `star` icon

Right:
- Portrait image: `aspect-[4/5] rounded-full shadow-2xl border-[16px] border-surface-container-lowest`
- Quote overlay card: `absolute -bottom-6 -left-6 bg-surface-container-highest p-6 rounded-xl shadow-xl max-w-xs`
  - Quote in `font-headline font-bold text-primary italic`
  - Attribution in `text-sm text-on-surface-variant`
- Soft glow behind image: `absolute inset-0 bg-secondary/10 rounded-full blur-3xl -z-10`

---

**Section 2: Craft Section**

Background: `bg-surface-container-low py-24`

- Section title "Authenticity in Every Flame" + body text (left side, `max-w-2xl`)
- Right: `bg-secondary-container text-on-secondary-container px-6 py-4 rounded-xl` badge — "100% HALAL CERTIFIED"
- Three-image grid `grid-cols-3 gap-8`:
  - Each: `aspect-square rounded-xl overflow-hidden group`
  - Image with `group-hover:scale-110 transition-transform duration-500`
  - Bottom overlay: `from-black/60 to-transparent` gradient with image caption label
  - Middle image: `md:mt-12` — staggered/offset, creates visual rhythm

Caption labels:
- "The Art of BBQ"
- "Mastering the Dum"
- "Hand-Kneaded Tradition"

---

**Section 3: Our Space**

`grid lg:grid-cols-5 gap-4`, `py-24`

- Left (2 cols): text content — "A Piece of Pakistan in the Heart of the City"
  + description + two feature items (golden lighting, Pakistani artwork) as
  `bg-surface-container-high border-l-4 border-primary rounded-xl p-4` cards
- Right (3 cols): masonry-ish two-column image grid
  - Left column: one tall portrait image
  - Right column: two square images stacked

---

**Section 4: Transparent Hospitality**

`bg-surface-container-highest rounded-3xl p-12 relative overflow-hidden`

- Two columns: left = text + 2×2 feature grid (Step-Free Entry, Family Friendly, Ventilation, Parking)
  Each feature: icon + bold label + small description text
- Right: map image, initially `grayscale opacity-60` → `hover:grayscale-0` + full opacity on hover, `transition-all duration-700`
- Decorative circle: `absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-32 -mt-32`

---

#### Mobile Layout

Mobile "Our Story" is more linear and editorial — it reads like a print magazine feature.

**Key mobile-only patterns:**
1. Page hero has only text, no image alongside (image appears later in the narrative)
2. Images appear as `aspect-[4/5]` full-width cards with a rotated background glow:
   `absolute -inset-2 bg-secondary-container opacity-20 rounded-xl -rotate-2` (behind first image)
   and `bg-primary-container opacity-20 rotate-1` (behind second image) — this creates
   a "torn paper" / layered artifact effect
3. Image captions are left-border cards positioned `absolute bottom-4 left-4`:
   `bg-surface/90 backdrop-blur-md p-3 rounded-lg border-l-4 border-primary`
4. Section narratives ("The Secret is in the Soil", "The Art of Dum") are pure text blocks
   with `font-body leading-loose` — longer, more editorial reading rhythm
5. Final CTA: full-width primary button "Taste the Heritage" with `rounded-full`

---

### 4.4 Reservation Page (`/reservations`)

**File:** `src/pages/ReservationPage.tsx`

---

#### Desktop Layout

**Section 1: Reservation Hero**

`grid lg:grid-cols-2 gap-12 items-center`, `pt-16 pb-12`

Left:
- Green pill badge: "Authentic Pakistani Heritage"
- `<h1>` — "A Seat at Our Family Table"
  - "Family Table" in `text-primary`
  - Epilogue extrabold `text-6xl`
- Body text
- Inline Halal badge (pill variant)

Right:
- Image: `aspect-[4/3] rounded-full overflow-hidden shadow-2xl border-[12px] border-surface-container-lowest`
- Floating bottom-left badge: `rounded-full p-6 absolute -bottom-6 -left-6 bg-surface-container-lowest`
  with `stars` icon and "Guaranteed Quality" label

---

**Section 2: Booking & Info Grid**

`grid lg:grid-cols-12 gap-12 py-20`

**Form panel (col-span-7):**
Container: `bg-surface-container-lowest p-10 rounded-full shadow-sm border border-outline-variant/15`

Form fields use `bg-surface-container-high border-none rounded-sm` (note: `rounded-sm`
is the minimal 2px radius — this creates a clean, form-focused aesthetic contrast
against the rounded outer container).

Fields:
1. Name + Phone: 2-column grid
2. Date + Time + Guests: 3-column grid
3. Special Occasion/Requests: full-width textarea, 3 rows

Field label style: `font-label font-semibold text-sm text-on-surface-variant`

Submit: `w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-lg`
"Confirm Reservation" — with active scale transform `active:scale-95`

**Info panel (col-span-5):**
- Contact card: `bg-secondary p-10 rounded-full text-on-secondary`
  Three rows: Location, Reservations Line, Opening Hours
  Each: `material-symbols-outlined text-secondary-container` icon + bold label + muted text

- Map: `flex-grow rounded-full overflow-hidden min-h-[300px]`
  Map image with `grayscale opacity-60` + centered "View on Google Maps" chip overlay:
  `bg-surface-container-lowest px-6 py-3 rounded-full shadow-lg flex items-center gap-3`

---

**Section 3: Commitment**

`bg-surface-container-low py-12 rounded-full border border-primary/5`

Centered: `verified_user` icon + heading + body + three trust badges (ISO 9001, HALAL CERTIFIED, A-GRADE KITCHEN) in `font-label font-bold text-secondary grayscale opacity-50`

---

#### Mobile Layout

**Key mobile-only differences:**

1. **Hero is a full-bleed image section:** `h-[265px]` with gradient overlay. Text floats over bottom portion — "Reserve Your Table" in `text-4xl font-extrabold` + subtitle "Join the Heritage Experience" in `text-secondary`.

2. **Form is a floating card:** `bg-surface-container-lowest rounded-xl p-6 shadow-2xl`, positioned with `-mt-8` to overlap the hero image — creates a layered depth effect.

3. **Guest counter widget:** Instead of a dropdown select, mobile uses an interactive
   stepper: `minus` button | number display | `plus` button. This is a bespoke component (`<GuestCounter>`). The `+` button is `bg-primary text-on-primary`, the `−` button is `bg-surface-container`.

4. **Form inputs use `rounded-xl`** (vs desktop's `rounded-sm`) — mobile input style is more pill-like.

5. **Location section** is separate from the form, with its own heading "Find Us" and a contact list grid using `bg-surface-container-low rounded-xl` cards for each detail row.

6. **Decorative Urdu:** `اغاز` centered in a large standalone block `text-6xl text-primary/10` appears before the footer — no other page does this.

---

## 5. Navigation — Full Specification

### 5.1 Desktop Navigation

```
[Logo: "Aghaz" + اغاز ]     [ Home | Menu | Our Story | Reservations ]     [ verified_user icon ]
```

- Logo uses no image file — it is typographic only
- Active link: `text-primary-container font-semibold` + underline `border-b-2 border-primary-container pb-1`
- Inactive links: `text-secondary font-medium`
- No dropdown menus
- `verified_user` icon is a link to the Halal certification page (can be a modal in MVP)

### 5.2 Mobile Top Bar

```
[ menu icon ]     [ AGHAZ wordmark centered ]     [ اغاز or spacer ]
```

The mobile top bar is consistently `h-16 fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-md`.

On the reservation mobile page specifically, the logo and Urdu appear side by side
on the left (not centered) — a minor inconsistency in the mockups. Default to the
centered wordmark pattern for consistency.

The hamburger (`menu` icon) should open a slide-in drawer. The mockups do not
show the open state — design the drawer to mirror the desktop nav links, styled
as a full-height right-side drawer with:
- Background: `bg-surface-container-lowest`
- Width: `w-72`
- Links in Epilogue, larger at `text-xl`, stacked with `py-4 border-b border-outline-variant/10`
- Urdu watermark in the drawer background

### 5.3 Mobile Bottom Navigation

The bottom nav maps to four main destinations. The center FAB is a shortcut to
the menu or a featured item — in the mockups it shows `rice_bowl` icon.

Mapping to routes:
| Tab | Route | Active icon |
|-----|-------|-------------|
| Dastarkhwan / Menu | `/menu` | `restaurant_menu` filled |
| Handi / BBQ | `/menu#bbq` | `outdoor_grill` filled |
| Center FAB | `/menu` | `rice_bowl` — primary style |
| Heritage / Story | `/our-story` | `history` filled |
| Find Us | `/reservations` | `location_on` filled |

The booking page replaces the "Heritage" tab active state with `calendar_month` (filled)
when `activePage === 'reservations'`.

---

## 6. Creative Enhancements (Aria's Additions)

These are not in the mockups. Each is grounded in the "Heritage Curator" brand identity.

---

### Enhancement 1: Scroll-Triggered Section Reveal

**What:** Every major section animates in when it crosses 20% into the viewport.
Use `IntersectionObserver` (no library needed).

**Animation:** `opacity-0 translate-y-8` → `opacity-100 translate-y-0`, duration
`600ms`, easing `cubic-bezier(0.16, 1, 0.3, 1)` (spring-like).

**Hook:**
```typescript
// src/hooks/useRevealOnScroll.ts
import { useEffect, useRef } from 'react';

export function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible');
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}
```

Add to `index.css`:
```css
.reveal-hidden {
  opacity: 0;
  transform: translateY(2rem);
  transition: opacity 600ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal-visible {
  opacity: 1;
  transform: translateY(0);
}
```

Apply `reveal-hidden` to section wrappers via `className`. The `useRevealOnScroll`
hook attaches the `ref` and adds the `reveal-visible` class on trigger.

**Staggered children:** For grids (Chef's Special, craft images, menu items), add
CSS custom property delays: `style={{ transitionDelay: `${index * 100}ms` }}`.

---

### Enhancement 2: Parallax Hero Image

**What:** On the home hero, the background food image scrolls at 60% of the page
scroll rate, creating depth.

**Implementation:** Lightweight, using `transform: translateY()` on scroll — no
library required.

```typescript
// src/hooks/useParallax.ts
import { useState, useEffect } from 'react';

export function useParallax(speed = 0.4) {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handler = () => setOffset(window.scrollY * speed);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [speed]);
  return offset;
}
```

In `HeroSection.tsx`:
```tsx
const parallaxOffset = useParallax(0.4);
// Apply to the <img> element:
style={{ transform: `translateY(${parallaxOffset}px)` }}
```

Only enable on desktop (`md` and up) via a media query check or `window.matchMedia`.
Disable for users with `prefers-reduced-motion: reduce`.

---

### Enhancement 3: Interactive Spice Level Filter on Menu Page

**What:** On the desktop menu, add a spice intensity filter bar above the menu grid
that lets users filter by max heat level (1–5). Items exceeding the selected level
fade out in place (not removed, to avoid layout shift).

**UI:** Five `<SpiceIndicator>` buttons in a row, labeled "Show up to: [dots]".
Active filter level highlights in `bg-primary-container text-on-primary`.

**State:** A single `maxSpice: number` state in `MenuPage.tsx`, passed down to
`<MenuCategory>`.

**Filter logic:** Each `<MenuItemRow>` gets an `opacity-40 pointer-events-none`
class when `item.spiceLevel > maxSpice`. Smooth transition: `transition-opacity duration-300`.

This is editorial and educational — it teaches new customers about Pakistani spice
levels without intimidation, consistent with the "Honest Transparency" brand value.

---

### Enhancement 4: Animated Urdu Watermark Drift

**What:** The Urdu watermark elements slowly drift upward continuously — a barely
perceptible breathing motion. Combined with the near-zero opacity, this creates a
living, ambient quality to the background.

```css
@keyframes urdu-drift {
  0%   { transform: translateY(0px) rotate(0deg); }
  50%  { transform: translateY(-12px) rotate(0.5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}

.urdu-watermark {
  animation: urdu-drift 20s ease-in-out infinite;
}
```

Set different animation durations on each watermark instance (`animation-duration: 18s`,
`25s`, etc.) to prevent synchronized movement across the page.

Disable for `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  .urdu-watermark { animation: none; }
}
```

---

### Enhancement 5: Chef's Special Hover — Ingredient Reveal

**What:** On the desktop home page "Chef's Special" side dish cards, hovering
a card reveals an ingredient tag strip that slides up from below.
A list of 3–4 key spices/ingredients appears as pills over the bottom of the image.

**Implementation:** The dish card's image has an additional absolutely positioned
strip:
```tsx
<div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent p-3 flex gap-2 flex-wrap">
  {dish.keyIngredients.map(ing => (
    <span key={ing} className="bg-surface-container-highest/80 backdrop-blur-sm text-on-surface text-[10px] font-label font-bold px-2 py-1 rounded-full">
      {ing}
    </span>
  ))}
</div>
```

Add `keyIngredients: string[]` to the dish data model. Examples:
"Kashmiri Saffron", "12-hr Mutton", "Dum Steam", "House Masala".

This rewards curious desktop users and reinforces the "provenance transparency"
brand pillar.

---

## 7. Data Models

### 7.1 Menu Data (`src/data/menu.ts`)

```typescript
export type SpiceLevel = 1 | 2 | 3 | 4 | 5;

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;            // in PHP (Bacolod/Cebu context) or display string
  currency: string;         // 'PHP' | 'Rs.' etc.
  spiceLevel: SpiceLevel;
  category: MenuCategory;
  badges?: MenuBadge[];
  isHalal: boolean;
  keyIngredients?: string[];   // for ingredient reveal hover
  imageAlt: string;
  imageSrc?: string;           // leave undefined for placeholder
}

export type MenuCategory =
  | 'biryani'
  | 'bbq'
  | 'handi-karahi'
  | 'sides'
  | 'drinks'
  | 'desserts';

export type MenuBadge = 'signature' | 'chefs-choice' | 'most-popular' | 'new';

export const MENU_CATEGORIES: { id: MenuCategory; label: string; displayLabel: string }[] = [
  { id: 'biryani',       label: 'Biryani',       displayLabel: 'Biryani Specials' },
  { id: 'handi-karahi',  label: 'Handi & Karahi', displayLabel: 'Handi & Karahi' },
  { id: 'bbq',           label: 'BBQ',            displayLabel: 'BBQ' },
  { id: 'sides',         label: 'Sides',          displayLabel: 'Sides' },
  { id: 'drinks',        label: 'Drinks',          displayLabel: 'Drinks' },
  { id: 'desserts',      label: 'Desserts',        displayLabel: 'Desserts' },
];
```

### 7.2 Contact Data (`src/data/contactInfo.ts`)

```typescript
export interface BranchInfo {
  city: 'Bacolod' | 'Cebu';
  address: string;
  phone: string;
  hours: string;
  mapEmbedUrl?: string;
  googleMapsUrl: string;
}

export const BRANCHES: BranchInfo[] = [
  {
    city: 'Bacolod',
    address: '786 Spice Market Road, Cultural District, Bacolod City',
    phone: '+63 34 XXX XXXX',
    hours: 'Mon – Sun: 11:00 AM – 10:30 PM',
    googleMapsUrl: 'https://maps.google.com',
  },
  {
    city: 'Cebu',
    address: 'Cebu City Branch — address TBD',
    phone: '+63 32 XXX XXXX',
    hours: 'Mon – Sun: 11:00 AM – 10:30 PM',
    googleMapsUrl: 'https://maps.google.com',
  },
];
```

---

## 8. Asset List

### 8.1 Food Photography (highest priority)

All images in the mockups are AI-generated placeholders. These need to be replaced
with professional food photography. Until photos are ready, use aspect-ratio
constrained placeholder `<div>` elements with background `bg-surface-container`.

| Asset | Used in | Aspect | Description |
|-------|---------|--------|-------------|
| `hero-feast.jpg` | Home hero BG | 16:9 landscape | Overhead Pakistani feast spread — the centerpiece |
| `hero-spices.jpg` | Home mobile hero BG | Portrait | Colorful spices in wooden bowls, warm steam |
| `lamb-karahi-featured.jpg` | Home hero float card | 1:1 circle | Close-up lamb karahi |
| `nalli-biryani.jpg` | Home chef's special (featured) | Tall portrait | Copper pot mutton biryani |
| `seekh-kebab.jpg` | Home chef's special (side) | 3:4 | Charred seekh kebabs |
| `butter-chicken.jpg` | Home chef's special (side) | 3:4 | Butter chicken in clay bowl |
| `biryani-circular.jpg` | Menu hero | 1:1 circle | Premium lamb biryani overhead |
| `spices-raw.jpg` | Menu visual break (left) | Landscape | Raw spices: cardamom, cinnamon, chilies |
| `kebabs-sizzle.jpg` | Menu visual break (center) | Landscape | Sizzling seekh kebab platter |
| `chutney.jpg` | Menu visual break (right) | Landscape | Mint chutney being drizzled |
| `chef-sprinkling.jpg` | Our Story hero | 4:5 portrait | Chef hand-sprinkling spices over biryani pot |
| `bbq-grill.jpg` | Our Story craft grid | 1:1 square | Chef rotating kebab skewers over charcoal |
| `dum-biryani.jpg` | Our Story craft grid | 1:1 square | Chef lifting dum seal, steam rising |
| `naan-hands.jpg` | Our Story craft grid | 1:1 square | Hands kneading naan dough |
| `interior-seating.jpg` | Our Story space | Portrait | Orange velvet chairs, dark wood tables |
| `truck-art-wall.jpg` | Our Story space | 1:1 | Pakistani truck art mural on wall |
| `brass-lamp.jpg` | Our Story space | 1:1 | Brass lamp, textured cream wall |
| `spice-market-heritage.jpg` | Our Story mobile | 4:5 | Vintage spice market photograph |
| `kitchen-fire.jpg` | Our Story mobile | 4:5 | Chef tossing biryani over open flame |
| `reservation-dining.jpg` | Reservation hero | 4:3 | Decorated Pakistani dining table |
| `reservation-mobile-hero.jpg` | Reservation mobile hero BG | 3:1 wide | Table setting with candlelight |
| `menu-biryani-1.jpg` | Menu mobile (item) | 4:3 | Mutton biryani in clay pot |
| `menu-biryani-2.jpg` | Menu mobile (item) | 4:3 | Saffron chicken biryani |
| `menu-karahi.jpg` | Menu mobile (item) | 4:3 | Peshawari karahi in black wok |

### 8.2 Texture

| Asset | Usage | Notes |
|-------|-------|-------|
| `paper-noise.png` | Menu page grid background (`.menu-card-texture`) | Subtle paper/grain texture, ~256×256px, tileable |

### 8.3 Icons

All icons are served from Google Fonts Material Symbols Outlined font — no SVG
files needed. The font is already added in the updated `index.html`.

Icon rendering:
```tsx
// Reusable wrapper to avoid repeating font-variation-settings
interface IconProps {
  name: string;
  filled?: boolean;
  className?: string;
  size?: number; // opsz axis
}

function Icon({ name, filled = false, className = '', size = 24 }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' ${size}`,
      }}
    >
      {name}
    </span>
  );
}
```

**Icons used across pages:**
`stars`, `verified`, `verified_user`, `arrow_forward`, `east`, `menu`,
`restaurant_menu`, `outdoor_grill`, `rice_bowl`, `history`, `location_on`,
`star`, `local_fire_department`, `info`, `warning`, `waves`, `psychiatry`,
`agriculture`, `restaurant`, `accessible`, `family_restroom`, `sensor_window`,
`directions_car`, `wb_sunny`, `palette`, `pin_drop`, `call`, `schedule`,
`event_available`, `calendar_month`, `add`, `remove`, `explore`, `shopping_bag`

### 8.4 No Logo File Needed

The brand mark is purely typographic:
- `Aghaz` in Epilogue bold, `text-secondary`
- `اغاز` in Noto Nastaliq Urdu, reduced size, low opacity alongside

No SVG or image file. However, a `favicon.svg` is already referenced in `index.html` — create a simple monogram or wordmark SVG for the favicon.

---

## 9. Accessibility Notes

- All images need `alt` text — use the `data-alt` descriptions from the HTML mockups as your writing guide.
- The Urdu watermark must have `aria-hidden="true"` — it is purely decorative.
- Bottom nav icons must have accessible labels: add `aria-label` to each `<button>`.
- Form inputs in the reservation page use label+input pairing correctly — maintain this in React via `htmlFor` / `id`.
- Color contrast: `on-surface-variant` (#564337) on `surface` (#fff8f6) passes AA at body sizes. Do not use lower-contrast pairs for body text.
- Focus states: Tailwind's default `focus-visible:ring-2` is acceptable. Customize to `focus-visible:ring-primary` for brand alignment. Do not remove outlines.
- `prefers-reduced-motion`: wrap all scroll animations, parallax, and drift animations in the media query check described in the enhancement sections.
- The spice level indicator must not rely on color alone — include a text label "Spice Level: X/5" as a visually hidden `<span>` for screen readers.

---

## 10. Implementation Sequence (Recommended Build Order)

1. Set up routing (React Router), page shells, and `App.tsx` root layout
2. Configure Tailwind v4 theme tokens in `src/index.css`
3. Update `index.html` fonts
4. Build `Navbar` + `MobileBottomNav` + `Footer` (shared layout)
5. Build all shared atomic components (`HalalBadge`, `SpiceIndicator`, `StarRating`, `Icon`, `UrduWatermark`, `CategoryPill`, `SectionHeader`)
6. Build `HomePage` — it is the brand anchor; getting it right sets the bar
7. Build `MenuPage` — desktop first, then mobile card layout
8. Build `OurStoryPage`
9. Build `ReservationPage` (includes `ReservationForm` with `GuestCounter`)
10. Add scroll reveal animations (Enhancement 1)
11. Add parallax on home hero (Enhancement 2)
12. Add spice filter to menu (Enhancement 3)
13. Add Urdu drift animation (Enhancement 4)
14. Add ingredient reveal hover (Enhancement 5)

---

## 11. Key Implementation Gotchas

- **`surface` vs `background`:** Both resolve to `#fff8f6` in the design system. The mockup HTML uses them interchangeably on `<body>`. In React, set `bg-background` on `<body>` via `index.css` and let individual components use `bg-surface-container-*` for layering.

- **`rounded-full` on large containers:** In Tailwind, `rounded-full` on a rectangular element applies `border-radius: 9999px`, creating heavily rounded corners — not a circle. This is intentional in the mockups (form panels, info boxes). Do not fight it.

- **The glassmorphism nav requires `isolation: isolate`** on the nav element if content with `z-index` sits behind it — otherwise the backdrop-blur may bleed. Add `isolate` to the nav classes.

- **Noto Nastaliq Urdu** renders right-to-left. When placed inside a `dir="ltr"` container it may shift unexpectedly. Wrap watermark text in `<bdi>` or set explicit `dir="rtl"` on the watermark span.

- **Material Symbols** requires the font-variation-settings approach for fill state. The CSS class alone does not control fill — you must set `'FILL' 1` inline or via the `.material-symbols-outlined` override class. The shared `<Icon>` component handles this.

- **Mobile bottom nav and footer overlap:** Add `pb-24` (6rem) to every `<main>` on mobile to prevent content from hiding behind the fixed bottom nav.

- **Currency display:** The mockups show both USD (`$24.99`) and Pakistani Rupees (`Rs. 1,450`) inconsistently. For Bacolod/Cebu (Philippines), use PHP Peso (₱). Confirm the actual pricing currency with the client before hardcoding.

- **The "Since 1988" element** on the menu hero desktop: this appears to be a brand claim. Confirm with the client whether 1988 is accurate for their founding date.
