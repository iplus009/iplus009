# Design System — Initial Tokens

## Status
Initial design direction only. Values below are starting points, not measured Figma tokens. Reconcile them against the actual Figma file during the full audit.

## Color tokens
```css
:root {
  --color-bg: #08090b;
  --color-surface: #111318;
  --color-surface-elevated: #191c23;
  --color-text: #f4f5f7;
  --color-text-secondary: #a5a9b2;
  --color-text-muted: #737985;
  --color-accent: #f04452;
  --color-accent-deep: #a92332;
  --color-border: #2a2e37;
  --color-success: #54c58a;
}
```

## Layout
- Use a centered content container with a readable maximum width.
- Use a consistent spacing scale (4, 8, 12, 16, 24, 32, 48, 64, 96).
- Keep section spacing generous; reduce decorative density on small screens.
- Use CSS Grid/Flexbox rather than fixed-position layouts for primary content.

## Shape and depth
- Cards: medium radius, subtle border, restrained shadow.
- Buttons: consistent height, clear label, adequate hit area.
- Avoid excessive glass blur; the reference direction is dark HUD rather than a generic glassmorphism template.
- Use red gradients sparingly.

## Typography scale (starting point)
- Display: clamp(2.5rem, 7vw, 5.5rem)
- H1: clamp(2.25rem, 5vw, 4rem)
- H2: clamp(1.75rem, 3vw, 2.5rem)
- H3: 1.25–1.5rem
- Body: 1rem–1.125rem
- Metadata: 0.75rem–0.875rem

## Motion
- Use Framer Motion or CSS transitions only where useful.
- Prefer opacity/transform animation over layout animation.
- Respect prefers-reduced-motion.
- Avoid long intro sequences and motion that delays content access.

## Iconography
- Use one consistent icon family (Lucide recommended).
- Icons must support labels, not replace important text.
- No emoji as interface icons.

## States
Every interactive component needs default, hover, focus-visible, active, disabled, and (where relevant) loading/error/success states.
