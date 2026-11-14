# Instructions for the AI Website-Building Agent

You are implementing a real portfolio website for the owner. Treat this handoff as requirements, not as permission to invent facts.

## Before coding
1. Read every document in this folder.
2. Inspect the supplied Figma source directly: https://www.figma.com/design/QLjW1Lpu9Hh1Cm2kJDkDc3/Web-Portfolio-Design--Community-
3. Audit all relevant desktop and mobile frames and record exact frame names, dimensions, typography, colors, spacing, and reusable components.
4. Compare the source with this enhanced design direction.
5. Produce a concise implementation plan and list any missing assets/content.
6. Do not start coding until the owner approves the plan.

## Implementation direction
Suggested stack (confirm current compatibility before choosing versions):
- Next.js + TypeScript
- Tailwind CSS
- Framer Motion for restrained animation
- Lucide icons
- Markdown/MDX or structured JSON/TS content
- GitHub as source control and content source where appropriate
- Cloudflare Pages/Workers deployment using the currently supported Next.js path

Keep data separate from UI components so the owner or maintenance agent can update project content without redesigning the site.

## Required behavior
- Build functional pages and interactions; no fake demo buttons.
- Use real project data only after it is provided or verified.
- Leave GitHub profile integration pending until the owner supplies the correct username/profile URL.
- Leave the profile photo slot ready until the owner supplies the image.
- English is the initial site language.
- Start with a free Cloudflare subdomain; do not purchase or configure a paid domain.
- Include SEO metadata, Open Graph, sitemap, robots, accessible navigation, and responsive layouts.
- Add a contact form only when a real destination and secure backend path are configured.

## AI maintenance / approvals
The long-term goal is AI-assisted maintenance:
- Detect relevant repository/project changes.
- Propose content, SEO, link, dependency, and security improvements.
- Show a human-readable diff and test results.
- Require owner approval before writing to the production branch or deploying.
- Never delete files, replace important assets, expose secrets, or deploy unapproved changes.
- Keep an audit trail of proposed and approved changes.

## Verification
Before reporting completion:
- Install dependencies cleanly.
- Run lint/type checks and production build.
- Test every route and interactive control.
- Check mobile and desktop layouts.
- Check links and image loading.
- Verify accessibility basics and reduced-motion behavior.
- Verify Cloudflare deployment with the current supported adapter/runtime.
- Report exact commands, results, known limitations, and unfinished items.

## Do not
- Do not fabricate content or metrics.
- Do not claim a full Figma audit if it was not completed.
- Do not create a generic template unrelated to the reference.
- Do not replace the repository's existing README or other files without approval.
- Do not treat a screenshot as a complete implementation.
