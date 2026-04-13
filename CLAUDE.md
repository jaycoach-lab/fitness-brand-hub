# Fitness Brand Hub

## Project Overview
Mobile-first web app for "Jaycoach" — a fitness solo-preneur education platform.
Helps fitness trainers build independent brands, attract clients, and create sustainable revenue without relying on gyms/centers.

## Tech Stack
- **Framework:** Next.js 16.1.6 (App Router, Webpack mode — NOT Turbopack)
- **UI:** React 19, Tailwind CSS v4, TypeScript
- **Database:** PostgreSQL via Prisma ORM
- **Auth:** Auth.js (NextAuth) — Google OAuth + Kakao OAuth
- **Payments:** PortOne payment gateway
- **SMS:** Solapi
- **Analytics:** @vercel/analytics
- **Deploy:** Vercel (auto-deploy on push to `main`)
- **Fonts:** Geist (Google Fonts) + Paperlogy (local, `public/fonts/`)

## Project Structure
```
app/                    # Next.js App Router pages + layout
  layout.tsx            # Root layout (fonts, metadata, analytics)
  page.tsx              # Entry — renders HomeScreen
components/             # Top-level screen components
  HomeScreen.tsx        # Main shell: tab state, hero intro modal
  BottomTabBar.tsx      # Bottom nav (홈/자료실/워크샵)
  TopBar.tsx            # Top bar
  LibraryScreen.tsx     # Ebook/content library tab
  WorkshopScreen.tsx    # Workshop listings tab
  ReviewsScreen.tsx     # Course reviews tab
components/home/        # Home tab sub-sections
  HomeHeroSection.tsx   # Hero banner + intro modal trigger
  HomeQuickMenu.tsx     # Quick menu (ebook/workshop/AI)
  HomeLatestWorkshopCard.tsx  # Latest workshop CTA card
  HomeWorkshopReviewsMarquee.tsx  # Review marquee animation
  HomeEbookPromos.tsx   # Ebook promotions
  HomeContentAICallout.tsx    # AI content callout
  HomeMemberBanner.tsx  # Member banner
  HomeCourseReviews.tsx # Course review cards
src/                    # Backend utilities
  auth.ts               # Auth.js config (Google + Kakao providers)
  lib/prisma.ts         # Prisma client singleton
prisma/
  schema.prisma         # DB schema (User, Account, Session, Product, Order)
public/                 # Static assets
  slots/                # Swappable image slots (fixed filenames)
  fonts/                # Local font files (Paperlogy)
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
- **Glassmorphism:** Semi-transparent surfaces with 20-40px backdrop-blur for floating elements
- **Buttons:** Primary bg `#DFFF00` text `#1C1B1B`, radius 2rem, no border
- **Cards:** radius-xl (3rem), no dividers — use spacing or alternating backgrounds

## Development Rules
Full details in `DEVELOPMENT_RUNBOOK.md`. Critical rules:
- **Always use `npm run dev`** — never run `next dev` directly
- **One section at a time** — modify only one component/section per change, then verify
- **Terminal separation** — one terminal for dev server, another for lint/build
- **Image slots** — use fixed filenames in `public/slots/`, swap files without code changes
- **Cache issues** — if dev server stalls, delete `.next/` and restart

## External Services
| Service | Purpose | Env Vars |
|---------|---------|----------|
| PostgreSQL | Database | `DATABASE_URL` |
| Auth.js | Authentication | `AUTH_SECRET`, `NEXTAUTH_URL` |
| Google OAuth | Social login | `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET` |
| Kakao OAuth | Social login (Korea) | `AUTH_KAKAO_ID`, `AUTH_KAKAO_SECRET` |
| PortOne | Payment gateway | `PORTONE_STORE_ID`, `PORTONE_API_KEY`, `PORTONE_API_SECRET` |
| Solapi | SMS notifications | `SOLAPI_API_KEY`, `SOLAPI_SENDER_NUMBER` |
| Vercel | Hosting + analytics | Auto-configured |

## External Links in Code
- `latpeed.com/products/*` — Workshop registration (payment platform)

## Deployment
Push to `main` branch triggers automatic Vercel deployment.

## Communication
- Respond in Korean (한국어)
- Keep responses concise
