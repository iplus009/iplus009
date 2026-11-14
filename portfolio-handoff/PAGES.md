# Page and Section Blueprint

This is the proposed information architecture. Final page composition must be checked against the source Figma frames before implementation is considered design-approved.

## 1. Home
Purpose: establish identity and direct visitors to work.
- Header/navigation with logo/wordmark and section links.
- Hero: “Ismail”, concise developer/student positioning, short intro.
- Profile image slot (real photo to be supplied).
- Primary CTA: View Projects.
- Secondary CTA: Contact.
- Optional availability/status label only if owner confirms its meaning.
- Featured project cards using verified project data.
- Short skills/technology strip.
- Footer with social/contact links.

## 2. About
- Personal introduction.
- Education (confirm exact institution/program details before publishing).
- Interests and development focus.
- Learning journey and goals.
- No sensitive personal details unless explicitly approved.

## 3. Skills
- Group technologies by category (languages, frontend, backend, tools, platforms).
- Only list technologies the owner confirms.
- Do not assign proficiency percentages or progress bars without evidence.
- Optional links to relevant work.

## 4. Projects
Provide filters or categories:
- Completed
- In Progress
- Experiments / Learning
- Planned / Ideas
- Archived (optional; include failed projects only if owner wants them public)

Each card should show title, one-line summary, status, selected technologies, and available links.

## 5. Project case study
Suggested detail structure:
- Overview and current status.
- Problem / motivation.
- Goals and constraints.
- Features actually implemented.
- Architecture and technology choices.
- AI tools used (only if confirmed).
- Challenges and solutions.
- Screenshots / demo.
- GitHub repository link.
- Lessons learned and next steps.

Hide sections that have no verified content rather than showing empty placeholders.

## 6. Journey / Timeline
- Meaningful milestones, learning events, releases, and project updates.
- Dates must be verified.
- Avoid fabricated career history.

## 7. GitHub
- Initially show a neutral “GitHub profile will be connected” state.
- Once the owner provides the correct username, use the GitHub API or public profile data.
- Never invent contribution counts or activity.

## 8. Contact
- Email or contact method supplied by owner.
- Optional contact form with server-side validation and spam protection.
- Show clear success/error feedback.
- Do not expose private API keys or email service credentials in client code.

## 9. Global elements
- Responsive navigation.
- Consistent footer.
- 404 page.
- Metadata / Open Graph.
- Sitemap and robots directives.
- Privacy-conscious analytics only if later approved.
