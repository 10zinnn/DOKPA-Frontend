# Activities Section - Visual Guide

## 🎨 What You'll See

### Desktop View (>1200px)
```
┌────────────────────────────────────────────────────────────────┐
│                    ADVENTURE ACTIVITIES                         │
│                                                                 │
│  ◄  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  [more...]  ►     │
│     │ 🧗   │  │ 🧊   │  │ 🏍️   │  │ 🚣   │                    │
│     │Rock  │  │Ice   │  │Motor │  │River │                    │
│     │Climb │  │Climb │  │Bike  │  │Raft  │                    │
│     └──────┘  └──────┘  └──────┘  └──────┘                    │
│                                                                 │
│              ← Swipe or scroll to explore →                    │
└────────────────────────────────────────────────────────────────┘
```

### Tablet View (768-1200px)
```
┌──────────────────────────────────────────┐
│      ADVENTURE ACTIVITIES                │
│                                          │
│  ┌──────┐  ┌──────┐  ┌──────┐  [more]  │
│  │ 🧗   │  │ 🧊   │  │ 🏍️   │          │
│  │Rock  │  │Ice   │  │Motor │          │
│  └──────┘  └──────┘  └──────┘          │
│                                          │
│     ← Swipe or scroll to explore →     │
└──────────────────────────────────────────┘
```

### Mobile View (<768px)
```
┌────────────────────┐
│ ADVENTURE          │
│ ACTIVITIES         │
│                    │
│  ┌──────────────┐  │
│  │   🧗         │  │
│  │ Rock Climbing│  │
│  │              │  │
│  │ [Details]    │  │
│  │ Book Now →   │  │
│  └──────────────┘  │
│                    │
│  ← Swipe →        │
└────────────────────┘
```

## 🎯 Interactive Elements

### 1. Activity Card (Default State)
```
┌─────────────────────────────┐
│ ┌─────────────────────────┐ │
│ │   [Activity Image]      │ │
│ │                    🧗   │ │ ← Icon Badge
│ └─────────────────────────┘ │
│                             │
│ Rock Climbing               │ ← Title
│                             │
│ Scale dramatic cliff faces  │ ← Description
│ and granite walls with      │
│ expert guidance.            │
│                             │
│ ┌──────────┬──────────────┐│
│ │Difficulty│ Season       ││ ← Meta Info
│ │Inter-Adv │ Apr - Oct    ││
│ └──────────┴──────────────┘│
│                             │
│ Book Now →                  │ ← CTA
└─────────────────────────────┘
```

### 2. Activity Card (Hover State)
```
┌─────────────────────────────┐
│ ┌─────────────────────────┐ │
│ │   [Image Zoomed 110%]   │ │ ← Image scales
│ │                    🧗   │ │
│ └─────────────────────────┘ │
│                             │
│ Rock Climbing               │
│                             │
│ Scale dramatic cliff faces  │
│ and granite walls with      │
│ expert guidance.            │
│                             │
│ ┌──────────┬──────────────┐│
│ │Difficulty│ Season       ││
│ │Inter-Adv │ Apr - Oct    ││
│ └──────────┴──────────────┘│
│                             │
│ Book Now  →→                │ ← Arrow moves
└─────────────────────────────┘
     ↑ Card lifts up 10px
```

### 3. Scroll Buttons (Desktop Only)
```
     ◄                                    ►
   [Left]                              [Right]
   Button                              Button
   
   • Circular shape
   • Sage green background
   • White arrow icon
   • Hover: scales to 110%
   • Click: scrolls 400px
```

### 4. Custom Scrollbar
```
┌────────────────────────────────────────┐
│ [Cards...]                             │
└────────────────────────────────────────┘
 ▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 ↑ Thumb (sage green)
   Track (light gray)
```

## 🎨 Color Palette

### Light Mode
- **Card Background:** #EFEDE9 (Sand light)
- **Text:** #1A1F23 (Charcoal)
- **Accent:** #6B8E6F (Sage green)
- **Icon Badge:** White with blur

### Dark Mode
- **Card Background:** #121619 (Dark gray)
- **Text:** #F7F3F0 (Sand)
- **Accent:** #6B8E6F (Sage green)
- **Icon Badge:** Dark with blur

## 📏 Spacing & Sizing

### Card Dimensions
- **Width:** 380px (desktop), 320px (mobile)
- **Image Height:** 240px (desktop), 200px (mobile)
- **Padding:** 32px all sides
- **Gap Between Cards:** 32px (desktop), 16px (mobile)

### Typography
- **Title:** 1.75rem, Outfit (serif), Bold
- **Description:** 0.95rem, Inter (sans), Regular
- **Meta Label:** 0.7rem, Uppercase, Bold
- **Meta Value:** 0.9rem, Semi-bold
- **CTA:** 0.95rem, Bold

### Icon Badge
- **Size:** 60px × 60px (desktop), 50px × 50px (mobile)
- **Position:** Top-right corner
- **Icon Size:** 2rem (desktop), 1.5rem (mobile)

## 🎬 Animations

### Card Hover
```css
transform: translateY(-10px);
box-shadow: 0 20px 40px rgba(0,0,0,0.15);
transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
```

### Image Zoom
```css
transform: scale(1.1);
transition: 0.8s ease;
```

### Arrow Slide
```css
/* Default */
Book Now →

/* Hover */
Book Now  →→
gap increases from 8px to 16px
```

### Scroll Button
```css
/* Hover */
transform: translateY(-50%) scale(1.1);
background: #3E5241 (darker sage);
```

## 🔄 User Flow

### Desktop Experience
1. User sees section with 3-4 cards visible
2. Notices arrow buttons on sides
3. Hovers over card → sees lift effect
4. Clicks arrow or scrolls → smooth animation
5. Explores all 7 activities
6. Clicks "Book Now" → jumps to contact form

### Mobile Experience
1. User sees section with 1-1.5 cards visible
2. Sees "Swipe to explore" hint
3. Swipes left → card snaps to center
4. Continues swiping through activities
5. Taps card → sees details
6. Taps "Book Now" → jumps to contact form

## 🎯 Key Features

### ✅ What Makes It Great

1. **Visual Hierarchy**
   - Large images grab attention
   - Icon badges add personality
   - Clear CTA on every card

2. **Information Density**
   - Shows 7 activities without clutter
   - Key info (difficulty, season) at a glance
   - Descriptions are concise but compelling

3. **Interaction Design**
   - Natural horizontal scroll
   - Helpful navigation buttons
   - Smooth animations
   - Clear feedback on hover/tap

4. **Responsive Behavior**
   - Adapts to all screen sizes
   - Touch-optimized for mobile
   - Keyboard accessible
   - Screen reader friendly

5. **Performance**
   - Lazy loaded images
   - GPU-accelerated animations
   - Smooth 60fps scrolling
   - Optimized for mobile

## 📱 Touch Gestures

### Mobile Interactions
```
Swipe Left  →  Next activity
Swipe Right ←  Previous activity
Tap Card    →  View details (hover effect)
Tap CTA     →  Navigate to contact
```

### Scroll Snap
```
[Card 1]  [Card 2]  [Card 3]
    ↓         ↓         ↓
  Snaps    Snaps    Snaps
  Center   Center   Center
```

## 🎨 Visual Hierarchy

### Priority Levels
1. **Primary:** Activity image + icon
2. **Secondary:** Activity title
3. **Tertiary:** Description text
4. **Quaternary:** Meta information
5. **Action:** Book Now CTA

### Eye Flow
```
    1. Image (First impression)
         ↓
    2. Icon (Activity type)
         ↓
    3. Title (What is it?)
         ↓
    4. Description (Why do it?)
         ↓
    5. Meta (When/Who?)
         ↓
    6. CTA (Take action)
```

## 🌟 Standout Elements

### Icon Badges
- **Purpose:** Quick visual identification
- **Style:** Floating, glassmorphic
- **Effect:** Adds playfulness and clarity

### Scroll Hint
- **Text:** "← Swipe or scroll to explore →"
- **Purpose:** Guides first-time users
- **Style:** Subtle, italic, centered

### Custom Scrollbar
- **Purpose:** Visual feedback on position
- **Style:** Thin, rounded, branded color
- **Behavior:** Appears on hover (desktop)

## 🎯 Conversion Elements

### Every Card Has:
1. ✅ Compelling image
2. ✅ Clear title
3. ✅ Benefit-focused description
4. ✅ Trust indicators (difficulty, season)
5. ✅ Strong CTA

### Psychological Triggers:
- **Scarcity:** Season information
- **Social Proof:** Difficulty levels
- **Curiosity:** Horizontal scroll encourages exploration
- **Action:** Clear "Book Now" on every card

---

## 💡 Pro Tips

### For Best Results:
1. Use high-quality, action-oriented images
2. Keep descriptions under 100 characters
3. Update seasonal information regularly
4. Test scroll behavior on real devices
5. Monitor which activities get most clicks

### Image Guidelines:
- **Format:** JPG or WebP
- **Size:** 800×600px minimum
- **Aspect Ratio:** 4:3 or 16:9
- **File Size:** Under 200KB (optimized)
- **Content:** Show people doing the activity

---

**This horizontal scroll design creates an engaging, modern experience that encourages exploration while maintaining clarity and conversion focus!** 🎯
