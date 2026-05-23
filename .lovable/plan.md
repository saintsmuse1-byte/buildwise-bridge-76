# BuildWise Consulting Website — Plan

## Overview
A single-page scroll website for BuildWise, a building project management consultancy run by James Robinson. The site communicates trust, professionalism, and expertise. Color scheme: navy blue, gold, and white.

## Page Structure (single route `/`)
1. **Navigation** — Sticky nav with smooth-scroll anchors: Home, About, Experience, Contact.
2. **Hero** — Full-viewport section with a stock aerial countryside estate video background (autoplay, muted, loop), dark overlay, headline, and subheadline.
3. **About Me** — Clean two-column layout: portrait area + concise overview of James's role as the bridge between homeowner and builder, protecting clients' interests.
4. **Experience / CV** — Timeline or card grid showing plausible placeholder career highlights for James Robinson (to be edited later by the client).
5. **Contact** — Contact section with email, phone, and service area (KwaZulu-Natal, South Africa).
6. **Footer** — Minimal footer with branding and copyright.

## Design Direction
- **Palette**: Navy blue (`#0f1b3d` / `#1e3a5f`) as primary dark, gold (`#c9a84c` / `#f0d78c`) as accent, white/off-white backgrounds.
- **Typography**: A modern serif or clean sans-serif pairing (e.g., DM Serif Display for headings + DM Sans for body) to convey authority and approachability.
- **Motion**: Subtle scroll-triggered fade/slide animations (Framer Motion or CSS) for sections as they enter the viewport. Smooth-scroll anchor navigation.
- **Video hero**: Stock aerial video placeholder (autoplay, muted, loop) with a dark navy overlay for text readability.

## Technical Details
- **Stack**: TanStack Start, React, Tailwind CSS v4, shadcn/ui components.
- **Fonts**: Import via Google Fonts (DM Serif Display + DM Sans).
- **Color tokens**: Define navy/gold/white in `src/styles.css` as custom CSS variables mapped to Tailwind utilities.
- **Video asset**: Use a placeholder video URL (Pexels/Coverr free stock aerial footage) — user can replace later.
- **Responsiveness**: Fully responsive; stacked layout on mobile.
- **No backend needed**: Static content site.

## Content
- **Hero**: "Your Trusted Partner in Building Projects" — "Expert project management bridging homeowners and builders."
- **About**: 2–3 paragraphs on the consulting role, quotation/variation reviews, workmanship monitoring, practical guidance.
- **CV/Experience**: Placeholder entries for 20+ years in construction, project management roles, notable residential builds in KZN.
- **Contact**: james.angus.robinson@gmail.com | +27 61 592 717 | KwaZulu-Natal, South Africa.

## Next Steps
Implement the site as a single `src/routes/index.tsx` page with section components in `src/components/`, update `src/styles.css` with the gold/navy/white design tokens, and wire smooth-scroll anchor navigation.
