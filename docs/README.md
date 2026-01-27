# 5k-Heroes – Fundraising Platform

**Turn your 5K run/walk into real impact.**  
Create personal or team fundraising campaigns linked to verified charities, collect donations securely via Stripe, show real-time progress, and share your story + run proof.

**MVP Launch Target:** September 26, 2026  
**Current Phase:** Epic 0 – Project Skeleton (starting now)

## What is 5k-Heroes?

A simple, modern platform where:
- Runners/walkers create 5K campaigns for approved charities
- Donors give one-time donations (recurring post-MVP)
- Fundraisers prove participation (upload bib/medal photos)
- Charities track total raised across campaigns

Built as a solo/small-team MVP following a strict Product Requirements Document (PRD.md).

## Tech Stack (Fixed for MVP)

- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Database**: Prisma ORM + PostgreSQL (Neon or Supabase free tier)
- **Auth**: Auth.js v5 (email magic links + Google OAuth)
- **Payments**: Stripe Checkout + Stripe Connect (Destination Charges)
- **Deployment**: Vercel
- **Emails**: Resend (or Nodemailer)
- **Image Uploads**: Uploadthing (free tier) or Cloudinary
- **Other**: React Hook Form + Zod (forms/validation)

## Quick Start (Development)

1. Clone the repo
   ```bash
   git clone https://github.com/Blueavian9/run-for-good.git
   cd run-for-good
