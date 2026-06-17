This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# AI Social Media Scheduler

An AI-powered social media management platform that allows users to create, schedule, manage, and publish content across multiple social media platforms from a single dashboard.

## Features

### Content Management

* Create and edit social media posts
* Rich text editor support
* Media upload and management
* AI-generated captions and content ideas
* Post preview before publishing

### Scheduling

* Schedule posts for future publishing
* Calendar View for content planning
* List View for scheduled posts
* Automated publishing workflow
* Time zone support

### Multi-Platform Publishing

* Twitter/X
* LinkedIn
* Facebook
* Instagram
* Threads
* YouTube
* TikTok
* Bluesky

### Dashboard

* Unified content management dashboard
* Analytics overview
* Connected accounts management
* Publishing history
* Activity tracking

### AI Features

* AI caption generation
* Content suggestions
* Hashtag recommendations
* Post optimization assistance

### Workflow Management

* Kanban board for content planning
* Draft management
* Scheduled posts tracking
* Publishing queue monitoring

---

## Tech Stack

### Frontend

* Next.js 15
* React 19
* TypeScript
* Tailwind CSS
* Shadcn/UI

### Backend

* Next.js API Routes
* Inngest
* Clerk Authentication
* InsForge

### Database

* PostgreSQL

### AI

* OpenAI
* AI SDK

### Deployment

* Vercel

---

## Environment Variables

Create a `.env.local` file:

```env
# InsForge
NEXT_PUBLIC_INSFORGE_BASE_URL=
NEXT_PUBLIC_INSFORGE_ANON_KEY=
INSFORGE_PROJECT_API_KEY=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_INSFORGE_TEMPLATE=insforge

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Security
CHANNEL_TOKEN_ENCRYPTION_KEY=
CHANNEL_OAUTH_STATE_SECRET=

# Twitter/X
TWITTER_CLIENT_ID=
TWITTER_CLIENT_SECRET=
TWITTER_AUTH_URL=https://x.com/i/oauth2/authorize
TWITTER_TOKEN_URL=https://api.x.com/2/oauth2/token
TWITTER_PROFILE_URL=https://api.x.com/2/users/me
TWITTER_SCOPES=tweet.read,users.read,tweet.write,offline.access

# LinkedIn
LINKEDIN_CLIENT_ID=
LINKEDIN_CLIENT_SECRET=

# Facebook
FACEBOOK_CLIENT_ID=
FACEBOOK_CLIENT_SECRET=

# Instagram
INSTAGRAM_CLIENT_ID=
INSTAGRAM_CLIENT_SECRET=

# Threads
THREADS_CLIENT_ID=
THREADS_CLIENT_SECRET=

# TikTok
TIKTOK_CLIENT_ID=
TIKTOK_CLIENT_SECRET=

# YouTube
YOUTUBE_CLIENT_ID=
YOUTUBE_CLIENT_SECRET=

# Bluesky
BLUESKY_CLIENT_ID=
BLUESKY_CLIENT_SECRET=
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd media-scheduler
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```text
src/
├── app/
├── components/
├── lib/
├── actions/
├── hooks/
├── providers/
├── services/
├── types/
└── inngest/
```

---

## OAuth Setup

### Twitter/X

1. Create a Developer App
2. Generate Client ID and Client Secret
3. Configure Redirect URI
4. Add credentials to `.env.local`

### LinkedIn

1. Create LinkedIn Developer App
2. Enable Sign In with LinkedIn
3. Configure OAuth Redirect URLs
4. Add credentials to `.env.local`

### Meta Platforms

Used for:

* Facebook
* Instagram
* Threads

Create an app in Meta Developer Console and configure required permissions.

### Google

Used for:

* YouTube

Create OAuth credentials in Google Cloud Console.

---

## Deployment

### Vercel

```bash
vercel
```

Add all environment variables in the Vercel dashboard before deployment.

---

## Future Improvements

* Team collaboration
* Advanced analytics
* AI content generation enhancements
* Bulk scheduling
* Social listening
* Engagement tracking
* Custom workflows

---

## License

MIT License

---

## Author

Developed by Suguda Thakur Marndi.

