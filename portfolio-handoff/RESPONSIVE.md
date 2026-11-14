# Responsive and Interaction Requirements

## Breakpoint strategy
Use content-driven breakpoints; these are suggested starting points:
- Small: 320–479px
- Medium: 480–767px
- Tablet: 768–1023px
- Desktop: 1024px and above

## Mobile
- Single-column content flow.
- Collapsible accessible navigation.
- Hero text and primary action must appear before decorative artwork.
- Cards stack vertically; avoid tiny multi-column dashboard widgets.
- Buttons and touch targets should be comfortably tappable.
- Avoid horizontal scrolling except for intentionally scrollable media.
- Decorative HUD lines and grids should simplify or disappear.

## Tablet
- Two-column hero only when text remains readable.
- Project cards may use two columns when width permits.
- Preserve generous spacing and avoid squeezing desktop layouts.

## Desktop
- Use a balanced two-column hero where appropriate.
- Project grids can use two or three columns depending on card width.
- Keep line length controlled for paragraphs.
- Use hover effects as enhancement, never as the only way to reveal information.

## Navigation and interaction
- All links and buttons must perform their advertised actions.
- Mobile menu must support keyboard operation and announce expanded state.
- External links should be identifiable and open safely.
- Forms require labels, validation, and clear feedback.
- Focus state must be visible on dark backgrounds.

## Testing
Check at minimum:
- 320px narrow mobile
- 375px common mobile
- 768px tablet
- 1024px laptop
- 1440px desktop

Also test keyboard-only navigation, zoom/reflow, reduced motion, and long project titles.
