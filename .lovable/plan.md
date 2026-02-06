
# Smooth Page Loading Animations and Skeleton Loaders

This plan will enhance the user experience with polished loading states, smooth page transitions, and skeleton loaders that provide visual feedback while content loads.

---

## Overview

We'll implement:
1. An enhanced preloader with smooth exit animation
2. Page-level transition animations
3. Reusable skeleton loader components for different content types
4. Content loading states with graceful fade-in effects
5. Staggered animation system for lists and grids

---

## Implementation Details

### 1. Enhanced Preloader with Smooth Exit Animation

**File: `src/components/Preloader.tsx`**

Upgrade the existing preloader with:
- Smooth fade-out and scale animation when loading completes
- Brand-aligned animated logo with pulse and glow effects
- Progress indicator with animated gradient
- CSS-based exit animation using `transform` and `opacity`

```text
Preloader Flow:
+------------------+     +------------------+     +------------------+
|   Logo Pulse     | --> | Progress Bar     | --> | Fade Out + Scale |
|   Animation      |     | Animation        |     | Content Reveal   |
+------------------+     +------------------+     +------------------+
```

### 2. Page Transition Wrapper Component

**New File: `src/components/PageTransition.tsx`**

Create a reusable wrapper that:
- Wraps page content with entry/exit animations
- Provides smooth fade-in on mount
- Supports configurable animation duration and delay
- Uses CSS transforms for GPU-accelerated performance

### 3. Skeleton Loader Components

**New File: `src/components/ui/skeletons.tsx`**

Create specialized skeleton variants:

| Skeleton Type | Use Case |
|---------------|----------|
| `TextSkeleton` | Paragraph text, headings |
| `CardSkeleton` | Service cards, testimonial cards |
| `ImageSkeleton` | Hero images, founder photo |
| `StatSkeleton` | Statistics numbers |
| `FormSkeleton` | Contact form fields |
| `TestimonialSkeleton` | Full testimonial card loading state |

Each skeleton will feature:
- Shimmer animation effect (moving gradient)
- Rounded corners matching the design system
- Responsive sizing
- Brand-aligned muted colors

### 4. Enhanced CSS Animations

**File: `src/index.css`**

Add new animation utilities:

```css
/* Shimmer effect for skeletons */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Page fade in */
@keyframes pageEnter {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Content reveal with blur */
@keyframes contentReveal {
  from { opacity: 0; filter: blur(10px); }
  to { opacity: 1; filter: blur(0); }
}

/* Preloader exit */
@keyframes preloaderExit {
  to { opacity: 0; transform: scale(1.05); }
}
```

### 5. Loading Hook

**New File: `src/hooks/useContentLoading.ts`**

Create a hook to manage loading states:
- Track when content is ready to display
- Provide `isLoading` and `isReady` states
- Support artificial minimum delay for consistent UX
- Handle async content loading

### 6. Component Updates

**Updates to existing components:**

| Component | Enhancement |
|-----------|-------------|
| `Hero.tsx` | Add staggered content reveal, skeleton for stats |
| `About.tsx` | Image skeleton loader with shimmer |
| `Services.tsx` | Card skeleton grid during initial load |
| `Testimonials.tsx` | Testimonial card skeletons |
| `Contact.tsx` | Form skeleton loader |
| `Stats.tsx` | Number counter animation with skeleton fallback |

### 7. Staggered Animation System

**File: `src/hooks/useScrollAnimation.ts`**

Enhance with:
- Configurable stagger delays per item
- Support for different animation variants
- Intersection observer optimization

---

## Technical Details

### Skeleton Shimmer Effect

```css
.skeleton-shimmer {
  background: linear-gradient(
    90deg,
    hsl(var(--muted)) 0%,
    hsl(var(--muted-foreground) / 0.1) 50%,
    hsl(var(--muted)) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}
```

### Preloader Exit Sequence

1. Page content loads in background
2. Minimum 1.5s display time for brand impression
3. Preloader fades out with scale effect (300ms)
4. Main content fades in with stagger (400ms)
5. Scroll animations activate on viewport entry

### Performance Considerations

- All animations use `transform` and `opacity` for GPU acceleration
- Skeleton components are lightweight with minimal DOM
- Intersection Observer for efficient scroll detection
- CSS animations instead of JavaScript for smooth 60fps

---

## Files to Create

| File | Purpose |
|------|---------|
| `src/components/PageTransition.tsx` | Page entry/exit animation wrapper |
| `src/components/ui/skeletons.tsx` | All skeleton loader variants |
| `src/hooks/useContentLoading.ts` | Loading state management |

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/Preloader.tsx` | Enhanced animations, smooth exit |
| `src/index.css` | New animation keyframes and utilities |
| `src/hooks/useScrollAnimation.ts` | Stagger animation improvements |
| `src/components/Hero.tsx` | Add page transition, skeleton stats |
| `src/components/About.tsx` | Image skeleton, content reveal |
| `src/components/Services.tsx` | Card skeleton grid |
| `src/components/Testimonials.tsx` | Testimonial skeletons |
| `src/pages/Index.tsx` | Wrap with PageTransition |

---

## Expected Result

- Polished loading experience with branded preloader
- Smooth content reveal as page loads
- Skeleton loaders that match the design system
- Staggered animations for visual hierarchy
- Consistent 60fps animations across all devices
- Better perceived performance through visual feedback
