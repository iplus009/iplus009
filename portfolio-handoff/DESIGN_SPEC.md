# Design Specification — Ismail Portfolio

## 1. Product goal
Create a polished, personal developer portfolio that communicates identity, skills, projects, learning journey, and contact information. It should feel distinctive and futuristic without looking like a gaming dashboard or sacrificing readability.

## 2. Design approach
**Enhanced interpretation of the supplied Figma Community reference.**

High-level visual characteristics observed from the reference:
- Dark, near-black foundation.
- Red as the main accent.
- Futuristic / sci-fi / HUD-inspired visual language.
- Profile-oriented hero composition and dashboard-like information modules.
- Strong visual framing and decorative interface details.

These are directional observations, not a verified complete inventory of every Figma frame. Inspect the actual Figma file before copying exact layouts or dimensions.

## 3. Brand personality
- Technical, curious, inventive, independent.
- Confident but not boastful.
- Experimental visual language with professional content structure.
- Minimal unnecessary decoration; meaningful motion only.

## 4. Visual priorities
1. Name and role should be immediately understandable.
2. A concise introduction and primary action should be visible above the fold.
3. Featured projects should be prominent and scannable.
4. Skills and experience should be factual, not inflated.
5. Contact and external links should be easy to find.
6. Decorative HUD details must never interfere with reading or interaction.

## 5. Suggested color direction
Treat these as starting tokens; refine after direct Figma inspection and contrast testing.

| Token | Suggested value | Usage |
|---|---|---|
| Background | #08090B | Main page background |
| Surface | #111318 | Cards and panels |
| Elevated surface | #191C23 | Hover / nested panels |
| Primary text | #F4F5F7 | Headings and body |
| Secondary text | #A5A9B2 | Supporting text |
| Muted text | #737985 | Metadata |
| Accent red | #F04452 | Primary accent |
| Accent deep red | #A92332 | Subtle gradients / emphasis |
| Border | #2A2E37 | Dividers and card edges |
| Success | #54C58A | Availability/status only |

Do not use red for every element. Reserve it for important actions, active states, small highlights, and selected metrics.

## 6. Typography
Use a readable modern sans-serif for body text and a restrained display face for headings. Suggested starting combination:
- Body/UI: Inter or Geist Sans.
- Display: Space Grotesk or Geist.
- Monospace: Geist Mono for small technical labels only.

Keep body copy comfortable on mobile. Avoid using sci-fi fonts for paragraphs.

## 7. Component language
- Cards: restrained borders, subtle depth, consistent radius.
- Buttons: clear primary/secondary hierarchy, visible focus state.
- Navigation: compact, obvious active state, accessible mobile menu.
- Labels: small uppercase technical labels used sparingly.
- HUD decoration: corner marks, thin lines, grid accents; decorative elements should be aria-hidden.
- Motion: short, subtle transitions; respect prefers-reduced-motion.

## 8. Content integrity
Do not fabricate:
- Project names or descriptions.
- Skill proficiency levels.
- Client work or employment.
- Download counts, stars, visitors, or activity metrics.
- Testimonials, awards, or certifications.

Use explicit TODO content fields until the owner provides verified information.

## 9. Photo and assets
The owner intends to provide a real profile photo. Do not invent or synthesize a real-person portrait. Build a graceful image slot with a neutral placeholder until the photo is supplied. Optimize supplied images and provide meaningful alt text.

## 10. Accessibility and usability
- WCAG-minded contrast, especially muted text on dark surfaces.
- Semantic headings and landmarks.
- Keyboard-operable navigation and controls.
- Visible focus indicators.
- Descriptive link text.
- Avoid conveying status by color alone.
- No auto-playing audio or distracting animation.
