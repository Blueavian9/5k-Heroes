5K Run Fundraising Platform – 
Product Requirements Document (PRD.md)
Launch Target: September 26, 2026
Current date reference: January 26, 2026
Audience of this document: Cesar (solo / junior developer + small team) – written to be followed step-by-step without deviation
This PRD has been refined for fast, sequential implementation by a junior developer or small team.

Epics are ordered in strict build order — finish one before starting the next.
Each epic contains only granular, actionable sub-tasks that can be checked off.
No speculative features; only MVP essentials.



Project Overview
Product Name (working): 5k-heroes
One-sentence goal: Let runners create 5K fundraising pages linked to real charities, collect donations via Stripe, and show real-time progress + proof of run.
MVP success definition (must-have by Sep 26, 2026):

Anyone can sign up
Charities can apply and be manually approved
Runners can create one campaign for an approved charity
Visitors can donate (one-time only in MVP)
Fundraiser sees donations & progress
Charity sees total raised across their campaigns
Basic mobile-friendly design

Tech stack – fixed for speed & low complexity

Next.js 15 (App Router) + TypeScript
Tailwind CSS + shadcn/ui
Prisma + PostgreSQL (use Neon free tier or Supabase)
Auth.js (NextAuth v5) – email + Google
Stripe (Checkout + Connect Destination Charges)
Vercel hosting
Resend or Nodemailer for emails
Uploadthing or Cloudinary free tier for images




Build Order & Epics (must follow exactly this sequence):



Epic 0 – Project Skeleton & Environment (1–2 weeks)
Goal: Working repo, login screen, deployable boilerplate

[X] Create GitHub repository (private until launch)
[X] Initialize Next.js 15 project with TypeScript & Tailwind (npx create-next-app@latest)
[X] Install & configure shadcn/ui (npx shadcn-ui@latest init)
[X] Add basic layout: Header (logo + Login button), Footer (simple text)
[X] Deploy to Vercel (connect GitHub repo)
[X] Set environment variables template (.env.example)
[X] Add 404 page & global error boundary
[X] Commit & push – first green build on Vercel






Epic 1 – Authentication & Basic User Profile (2–3 weeks)

[ ] Install & configure Auth.js v5 (email magic link + Google OAuth)
[ ] Create /api/auth/[...nextauth]/route.ts
[ ] Build sign-in page with email input + Google button
[ ] Create protected layout (middleware) – redirect to /signin if not logged in
[ ] Build /profile page – show name, email, avatar upload (use Uploadthing)
[ ] Add Prisma schema: User table (id, name, email, image, createdAt)
[ ] Run npx prisma generate & npx prisma db push
[ ] Add session provider & useSession hook example
[ ] Show logged-in user name in header






Epic 2 – Charity Onboarding & Approval (2–3 weeks)

[ ] Add Charity table in Prisma (id, name, ein, description, website, logo, status: PENDING|APPROVED|REJECTED, stripeAccountId, createdAt)
[ ] Build /charities/apply form (protected) – name, EIN, description, website, logo upload
[ ] Create /api/charities/apply route – save to DB with status PENDING
[ ] Build admin-only /admin/charities page – list pending charities
[ ] Add approve/reject buttons → update status
[ ] When approved: show verified badge on public charity profile
[ ] Create public /charities/[id] page – show name, logo, description, 
   total raised (stub 0)






Epic 3 – Campaign Creation & Basic Management (3 weeks)

[ ] Add Campaign table (id, userId, charityId, title, slug, story, goalAmount,   currentAmount:0, endDate, coverImage, createdAt).
[ ] Build /campaigns/new form (protected) – title, charity dropdown (only APPROVED), goal $, end date, rich text story (use simple textarea or Tiptap minimal)
[ ] Generate unique slug (title → kebab-case + random if needed)
[ ] Save campaign + redirect to /campaigns/[slug]
[ ] Build public /campaigns/[slug] page – hero image, title, goal progress bar, days left, story.
[ ] Add “Edit” button visible only to owner
[ ] Basic edit form on same page (PATCH)






Epic 4 – Donations – One-Time Only (MVP) (4–5 weeks – longest & riskiest)
[ ] Configure Stripe platform account + Connect (test mode first)
[ ] Add Stripe keys to .env
[ ] Build donation modal on campaign page (triggered by “Donate Now” sticky button)
[ ] Suggested amounts: $25 / $50 / $100 / $250 / Other (input)
[ ] Add “Dedicate donation” checkbox + name/message field
[ ] Create /api/donate route – create Checkout Session (Destination Charge)
* application_fee_amount = Math.round(amount * 0.05) + 30 // 5% + $0.30 example
* transfer_data: { destination: charity.stripeAccountId }
* metadata: { campaignId, donorName?, donorMessage? }
[ ] Redirect to Stripe Checkout
[ ] Create webhook route /api/stripe/webhook
* Verify signature.
* Handle checkout.session.completed → create Donation record, add to   
  campaign.currentAmount
[ ] Show thank-you page after success (/donate/success?session_id=xxx)
Fetch session → show amount + charity name
[ ] Update progress bar in real-time (simple polling every 10s or Supabase realtime if you add it)






Epic 5 – Admin & Charity Dashboards + Basics (2–3 weeks)
[ ] /dashboard for fundraisers – list my campaigns, total raised
[ ] /admin – list charities, approve/reject, list all campaigns
[ ] Charity dashboard /charities/[id]/dashboard (only admins) – list campaigns, total 
   raised, recent donations (table).
[ ] Add CSV export button on donation list (simple client-side)






Epic 6 – Polish, Mobile, Emails, Security (3–4 weeks)
 [ ] Make the entire site responsive (test on phone)
 [ ] Add basic share buttons (X, Facebook, WhatsApp, copy link)
 [ ] Set up Resend or Nodemailer – send donation receipt
 [ ] Add rate limiting on API routes (up to you – simple middleware or Vercel edge)
 [ ] Add CSP headers
 [ ] Final accessibility check (keyboard nav, contrast)






Epic 7 – Launch Readiness & Buffer (last 4–6 weeks)
 [ ] Seed 5–10 fake campaigns + charities for screenshots
 [ ] Write privacy policy & terms (use generator + customize)
 [ ] Switch Stripe to live keys
 [ ] Beta test with 10–20 real users (friends / LA running groups)
 [ ] Fix final bugs
 [ ] Deploy & announce Sep 26, 2026.



Rules while building
1. Never start the next epic until the current one is 100% checked off
2. Commit every completed sub-task with a clear message
3. Deploy to Vercel after every epic
4. Test on mobile every day.
5. When stuck → ask me for the exact code snippet for that sub-task only


