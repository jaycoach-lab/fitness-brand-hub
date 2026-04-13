# Fitness Brand Hub

## Project Overview
Mobile-first marketing site for "Jaycoach" — a fitness solo-preneur education platform helping Korean fitness trainers build independent brands, sell workshops/VOD/ebooks, and grow sustainable revenue without relying on gyms. **Current stage:** marketing/landing site only — no backend, auth, or payments installed yet. Target user: Korean-speaking fitness trainers on mobile devices.

## Tech Stack (Currently Installed)
- **Framework:** Next.js 16.1.6 (App Router, Webpack mode only — NOT Turbopack)
- **UI:** React 19.2.3, React DOM 19.2.3, Tailwind CSS v4.2.1, TypeScript 5
- **Analytics:** @vercel/analytics 2.x
- **Deploy:** Vercel (auto-deploy on push to `main`)
- **Fonts:** Geist (Google Fonts) + Paperlogy (local, `public/fonts/`)

## Project Structure
```
app/                    # Next.js App Router
  layout.tsx            # Root layout (fonts, metadata, analytics)
  page.tsx              # Entry — renders HomeScreen
  globals.css           # Global styles
components/             # Screen-level components (5-tab shell)
  HomeScreen.tsx        # Main shell: tab state, hero intro modal
  BottomTabBar.tsx      # Bottom nav (5 tabs: 홈/자료실/워크샵/VOD 강의/후기)
  TopBar.tsx            # Top bar
  LibraryScreen.tsx     # 자료실 (ebook/content library) tab
  WorkshopScreen.tsx    # 워크샵 (workshop listings) tab
  VodScreen.tsx         # VOD 강의 tab
  ReviewsScreen.tsx     # 후기 (course reviews) tab
  PlaceholderScreen.tsx # Fallback for unimplemented tabs
components/home/        # Home tab sub-sections
  HomeHeroSection.tsx          # Hero banner + intro modal trigger
  HomeQuickMenu.tsx            # Quick menu (ebook/workshop/AI)
  HomeLatestWorkshopCard.tsx   # Latest workshop CTA card
  HomeWorkshopReviewsMarquee.tsx # Review marquee animation
  HomeEbookPromos.tsx          # Ebook promotions
  HomeContentAICallout.tsx     # AI content callout
  HomeMemberBanner.tsx         # Member banner
  HomeCourseReviews.tsx        # Course review cards
public/                 # Static assets
  slots/                # Swappable image slots (fixed filenames — swap without code edits)
  fonts/                # Local Paperlogy font files
```

## Key Commands
```bash
npm run dev      # Dev server (Webpack mode, port 3000)
npm run build    # Production build
npm run lint     # ESLint
```

## Design System — "Kinetic Precision"
Full spec in `DESIGN.md`. Key rules:
- **Primary accent:** Neon Green `#DFFF00` — use sparingly, max 3 on screen
- **No-Line Rule:** Never use 1px borders for sectioning. Use background color shifts only
- **No drop shadows:** Use tonal layering or neon glow (`#576500` at 5% opacity, 40px blur)
- **Glassmorphism:** Semi-transparent surfaces with 20–40px backdrop-blur for floating elements
- **Buttons:** Primary bg `#DFFF00` text `#1C1B1B`, radius 2rem, no border
- **Cards:** radius-xl (3rem), no dividers — use spacing or alternating backgrounds

## Development Rules
Full details in `DEVELOPMENT_RUNBOOK.md`. Critical rules:
- **Always use `npm run dev`** — never run `next dev` directly
- **Webpack-only:** Turbopack caused panic/cache regressions on Next 16 — see `DEVELOPMENT_RUNBOOK.md` §1. Do not re-introduce it for perf.
- **One section at a time** — modify only one component/section per change, then verify
- **Terminal separation** — one terminal for dev server, another for lint/build
- **Image slots** — use fixed filenames in `public/slots/`, swap files without code changes
- **Cache issues** — if dev server stalls, delete `.next/` and restart

## Planned Integrations (not yet installed)
The following services are on the roadmap but have **zero code or dependencies in the repo today**. When implementing, scaffold from scratch — there is no existing wiring to extend.

| Service | Purpose | Env Vars (future) |
|---------|---------|------|
| PostgreSQL | Database | `DATABASE_URL` |
| Auth.js | Authentication | `AUTH_SECRET`, `NEXTAUTH_URL` |
| Google OAuth | Social login | `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET` |
| Kakao OAuth | Social login (Korea) | `AUTH_KAKAO_ID`, `AUTH_KAKAO_SECRET` |
| PortOne | Payment gateway | `PORTONE_STORE_ID`, `PORTONE_API_KEY`, `PORTONE_API_SECRET` |
| Solapi | SMS notifications | `SOLAPI_API_KEY`, `SOLAPI_SENDER_NUMBER` |

## External Links in Code
- `latpeed.com/products/*` — Workshop registration (external payment platform, used until PortOne integration)

## Deployment
Push to `main` branch triggers automatic Vercel deployment.

## Communication
- Reply to the user in Korean (한국어). Keep responses concise.
