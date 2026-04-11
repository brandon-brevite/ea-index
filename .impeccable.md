## Design Context

### Users
Founders, executives, and entrepreneurs actively shopping for remote executive assistant support. They arrive via search with high intent, often comparing 2-3 options. They're busy, skeptical of marketing, and want to make a confident decision quickly. Most are evaluating EA services for the first time and don't know the industry well enough to separate signal from noise.

### Brand Personality
**Direct, warm, independent.**

The EA Index speaks like a founder who did the research and is sharing what they found. Not a faceless review site. Not a sales funnel disguised as content. The tone is honest even when it's uncomfortable (calling out overpriced services, admitting when data is missing). Warmth comes through in the conversational register, not in enthusiasm or exclamation marks.

### Emotional Goals
**Trust and clarity.** A visitor should feel: "I'm in good hands, this is straightforward, I can make a decision here." The interface should reduce cognitive load, not add to it. Every element earns its place by helping the reader compare, evaluate, or decide.

### Aesthetic Direction
- **Visual tone**: Editorial magazine meets data-driven review site. Think Wirecutter's rigor with Monocle's restraint.
- **Reference**: The Wirecutter — data-driven reviews, editorial authority, clear recommendations with a single top pick.
- **Anti-references**: Cluttered affiliate sites with banner ads. SaaS landing pages with gradient heroes and "trusted by 10,000+ companies" badges. Anything with stock photos of people shaking hands.
- **Theme**: Light mode only. Warm off-white, not clinical white. No dark mode.

### Color System
| Token         | Value     | Usage                                      |
|---------------|-----------|---------------------------------------------|
| bg            | #FAFAF7   | Page background (warm off-white)            |
| text          | #1A1A1A   | Primary text                                |
| text-muted    | #6B6B6B   | Secondary text, labels, metadata            |
| accent        | #1B4D5C   | CTAs, links, Editor's Pick badge, focus     |
| accent-light  | #E8F1F4   | Highlighted row background                  |
| border        | #E8E4DD   | Primary borders and dividers                |
| border-light  | #F0EDE8   | Subtle borders, tag backgrounds             |
| row-alt       | #F7F5F0   | Alternating table row tint                  |

One accent color used sparingly. No gradients. No secondary brand colors.

### Typography
- **Headings**: Instrument Serif (400) — editorial character, not decorative
- **Body**: Outfit — clean, modern, readable at 18-20px
- **Body line-height**: 1.7-1.75 (generous, magazine-level readability)
- **Pairing intent**: High-end business publication, not tech landing page

### Layout Principles
- Article content max-width: 720px
- Comparison table max-width: 1100px
- Generous whitespace. Content breathes.
- No sidebar on blog posts. Single column.
- No stock photos, illustrations, or decorative icons. Typography and whitespace do the work.
- Minimal UI chrome. Text-based navigation.

### Design Principles

1. **Data first, decoration never.** The comparison table is the product. Every design decision should make it easier to scan, filter, and compare. If an element doesn't help the reader decide, remove it.

2. **Earn trust through transparency.** Label the Editor's Pick honestly. Show real prices (or say when they're missing). Use affiliate disclosure links. The design should feel like it has nothing to hide — clean lines, readable type, no dark patterns.

3. **Quiet confidence over loud persuasion.** No urgency tactics, countdown timers, or "limited spots" copy. The site's authority comes from being well-organized and well-written, not from visual pressure. Restraint is the brand.

4. **Write like a person, design like a magazine.** The voice is conversational and opinionated (first person, contractions, dry humor). The visual design is polished and structured (serif headings, consistent spacing, deliberate hierarchy). The tension between casual voice and refined presentation is the brand identity.

5. **Accessible by default.** WCAG AA compliance: 4.5:1 contrast ratios for text, keyboard navigable, semantic HTML, screen reader friendly. Accessibility is not an afterthought — it's part of the quality bar.

### Component Patterns
- **Buttons**: Outlined (border accent) for secondary, filled (bg accent) for primary. Small, understated. Text: "Visit site".
- **Badges**: Pill-shaped, 10-11px text, rounded-full. Editor's Pick in accent+white. Category/tags in muted bg.
- **Cards**: Border with border-border, rounded-lg, p-5/p-6. No shadows.
- **Tables**: Clean horizontal rows, subtle alternating tint, responsive horizontal scroll on mobile.
- **Links**: Accent color, underlined with 2px offset. Darker on hover.
- **Modals**: Semi-transparent black overlay, bg-bg card, max-width constrained.

### What This Site Is NOT
- Not a SaaS product with onboarding flows
- Not dark mode
- Not playful or startup-y
- Not animated beyond subtle transitions
- Not a content farm — every page has editorial intent
- Not showing commission data, CPA, or referral economics on the front end
