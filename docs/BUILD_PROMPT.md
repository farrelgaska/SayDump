# SayDump — Fullstack Build Prompt

Gunakan prompt ini untuk membuat web SayDump dengan **frontend React** dan **backend Node.js**.

Prompt ini sengaja dibuat detail supaya hasil dari AI coding tool tidak keluar jalur dari desain, PRD, dan UI HTML yang sudah ada.

---

# MASTER PROMPT

Buatkan aplikasi fullstack bernama **SayDump**.

SayDump adalah **Gen-Z social publishing platform** untuk brain dumps, memory dumps, raw thoughts, random opinions, cerita personal, refleksi hidup, dan ekspresi diri yang jujur tapi tetap readable.

SayDump bukan blog biasa. SayDump adalah produk web modern yang menggabungkan:
- social feed,
- platform menulis,
- writer profile,
- topic discovery,
- mood-based content,
- bookmark,
- reaction,
- comment,
- dan editorial article reading experience.

Project ini harus dibuat sebagai portfolio-ready fullstack project untuk role **Frontend Developer / Fullstack Web Developer**.

---

## 1. Tech Stack

Frontend:
- React
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- Framer Motion
- Lucide React icons
- TanStack Query
- React Hook Form
- Zod
- Axios
- Zustand optional untuk auth state

Backend:
- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication
- bcrypt
- Zod validation
- CORS
- Helmet
- Morgan

Architecture:
- Monorepo sederhana dengan folder `client` dan `server`.
- Frontend dan backend dipisah.
- Frontend consume REST API dari backend.
- Jangan pakai Next.js.
- Jangan pakai AI feature.
- Jangan pakai mobile app native.

---

## 2. Existing UI Reference

Gunakan UI HTML yang sudah ada sebagai referensi utama untuk:
- Feed page
- Writer profile page
- Write dump page
- Article detail page

Convert desain HTML tersebut menjadi React component yang reusable dan lebih rapi.

Pertahankan:
- warna Midnight Dump,
- layout desktop-first,
- sidebar,
- topbar,
- right panel,
- card styling,
- reading progress,
- write editor,
- publish settings panel,
- profile cover,
- dan article typography.

Jangan mengubah visual identity menjadi generic blog.

---

## 3. Brand and Product Identity

Brand name:

```txt
SayDump
```

Tagline:

```txt
Your brain dump, but readable.
```

Hero copy:

```txt
Say what’s on your mind.
Dump what’s been living rent-free.
```

Product description:

```txt
SayDump is a social publishing platform for raw thoughts, messy memories, personal stories, and random ideas worth keeping.
```

Tone:
- casual,
- honest,
- expressive,
- slightly witty,
- not corporate,
- not childish,
- not cringe.

Product feeling:
- raw but polished,
- chaotic but readable,
- personal but premium,
- dark editorial social app.

---

## 4. Visual Design System

Gunakan palette **Midnight Dump** secara konsisten.

### Colors

```ts
const colors = {
  background: "#0D0D10",
  surface: "#17171C",
  surfaceHover: "#202026",
  surfaceSoft: "#111116",
  border: "#2B2B33",
  textPrimary: "#F5F2EA",
  textMuted: "#A7A3B3",

  accentLime: "#C6FF4A",
  accentPurple: "#A855F7",
  accentPink: "#FF4D8D",
  accentBlue: "#38BDF8",
  accentOrange: "#F59E0B",

  danger: "#FB7185",
  success: "#84CC16"
};
```

### Tailwind Color Names

Tambahkan warna ini di `tailwind.config.ts`:

```ts
colors: {
  background: "#0D0D10",
  surface: "#17171C",
  "surface-hover": "#202026",
  "surface-soft": "#111116",
  border: "#2B2B33",
  "text-primary": "#F5F2EA",
  "text-muted": "#A7A3B3",
  "accent-lime": "#C6FF4A",
  "accent-purple": "#A855F7",
  "accent-pink": "#FF4D8D",
  "accent-blue": "#38BDF8",
  "accent-orange": "#F59E0B",
  danger: "#FB7185",
  success: "#84CC16"
}
```

### Color Rules

1. Body background harus `#0D0D10`.
2. Card utama harus `#17171C`.
3. Hover card harus `#202026`.
4. Border harus `#2B2B33`.
5. Text utama harus `#F5F2EA`.
6. Text muted harus `#A7A3B3`.
7. CTA utama harus acid lime `#C6FF4A`.
8. Text CTA utama harus dark `#0D0D10`.
9. Pink digunakan untuk reaction atau chaotic mood.
10. Purple digunakan untuk deep mood dan secondary accent.
11. Jangan pakai warna biru corporate sebagai warna utama.
12. Jangan pakai pure white dan pure black.
13. Jangan terlalu banyak neon dalam satu area.

---

## 5. Typography

Gunakan Google Fonts:

- `Space Grotesk` untuk logo, hero, page title, card title.
- `Inter` untuk UI text, navigation, metadata.
- `Literata` untuk article body.
- `JetBrains Mono` untuk label, badge, small metadata.

### Typography Rules

Hero heading:
- font: Space Grotesk
- size desktop: 72px–96px
- weight: 800
- line-height: 0.95
- letter-spacing: -0.04em

Page title:
- font: Space Grotesk
- size: 48px
- weight: 700
- line-height: 1.1

Card title:
- font: Space Grotesk
- size: 20px–22px
- weight: 600

Body UI:
- font: Inter
- size: 16px
- line-height: 1.6

Article body:
- font: Literata
- size: 20px
- line-height: 1.75
- max width: 720px

Metadata:
- font: Inter
- size: 13px
- color: text-muted

Label:
- font: JetBrains Mono
- size: 12px–13px
- uppercase optional
- letter spacing: 0.05em

---

## 6. Layout Requirements

Project harus **desktop-first**, bukan mobile-first.

### Main Desktop Width

- container max: 1440px
- sidebar width: 240px
- center feed max: 720px
- right panel: 320px
- gutter: 24px
- article max: 720px

### Feed Layout

```txt
Left Sidebar | Center Feed | Right Discovery Panel
240px        | 640–720px   | 300–340px
```

### Article Detail Layout

```txt
Reaction Bar | Article Column | Right Sidebar
72px         | 680–740px    | 300–340px
```

### Write Page Layout

```txt
Left Sidebar | Editor Area | Publish Panel
240px        | flexible    | 320px
```

### Profile Page Layout

- top fixed/desktop nav optional,
- sidebar on desktop,
- large cover banner,
- large avatar,
- profile stats,
- tabs,
- masonry/grid dump cards.

### Responsive Behavior

Desktop:
- show full sidebar,
- show right panel,
- show sticky reaction bar.

Tablet:
- hide right panel,
- sidebar can collapse.

Mobile:
- bottom nav,
- single column feed,
- article reaction bar becomes bottom action bar,
- write publish panel stacks below editor.

Mobile doesn't need to be perfect first, but must not break.

---

## 7. Pages to Build

Buat route berikut:

```txt
/                  Landing page
/feed              Feed/discovery page
/login             Login page
/register          Register page
/write             Write dump page
/dump/:slug        Article detail page
/profile/:username Writer profile page
/bookmarks         Bookmarks page
/topics            Topics page
/settings          User settings page
*                  Not found page
```

---

# 8. Frontend Components

Buat reusable components.

## 8.1 Layout Components

```txt
AppShell
Sidebar
TopBar
RightPanel
MobileNav
PageContainer
ProtectedRoute
```

## 8.2 UI Components

```txt
Button
Card
Badge
Input
Textarea
Modal
Skeleton
EmptyState
Avatar
Toast
Dropdown
Tabs
```

## 8.3 Dump Components

```txt
DumpCard
ShortDumpCard
FloatingDumpCard
DumpMeta
MoodBadge
TopicBadge
ReactionButton
ReactionBar
ReadingProgress
CommentSection
RelatedDumps
```

## 8.4 Discovery Components

```txt
TrendingTopics
SuggestedWriters
DailyPrompt
FeedTabs
TopicCard
SearchInput
```

## 8.5 Profile Components

```txt
ProfileHeader
ProfileStats
ProfileTabs
ProfileDumpGrid
WriterCard
```

## 8.6 Write Components

```txt
WriteEditor
PublishPanel
MoodSelector
TopicSelector
VisibilitySelector
DraftStatus
```

---

# 9. Backend Modules

Buat backend modular.

```txt
auth
users
dumps
topics
comments
bookmarks
reactions
follows
```

Setiap module minimal punya:
- routes,
- controller,
- service,
- validation,
- repository jika perlu.

---

# 10. Database Schema

Gunakan Prisma dengan PostgreSQL.

Buat model:
- User
- Dump
- Topic
- Comment
- Bookmark
- Reaction
- Follow

Enums:
- Visibility
- Mood
- ReactionType

## Prisma Schema

```prisma
enum Visibility {
  PUBLIC
  PRIVATE
}

enum Mood {
  CHAOTIC
  DEEP
  CHILL
  HONEST
  RANDOM
  NOSTALGIC
}

enum ReactionType {
  RELATE
  FIRE
  DEEP
  FELT_THAT
}

model User {
  id            String     @id @default(uuid())
  name          String
  username      String     @unique
  email         String     @unique
  passwordHash  String
  avatarUrl     String?
  bio           String?
  createdAt     DateTime   @default(now())
  updatedAt     DateTime   @updatedAt

  dumps         Dump[]
  comments      Comment[]
  bookmarks     Bookmark[]
  reactions     Reaction[]
  followers     Follow[]   @relation("followers")
  following     Follow[]   @relation("following")
}

model Dump {
  id          String      @id @default(uuid())
  slug        String      @unique
  title       String
  subtitle    String?
  excerpt     String
  content     String
  coverImage  String?
  visibility  Visibility  @default(PUBLIC)
  mood        Mood
  topicId     String
  authorId    String
  viewCount   Int         @default(0)
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt

  author      User        @relation(fields: [authorId], references: [id])
  topic       Topic       @relation(fields: [topicId], references: [id])
  comments    Comment[]
  bookmarks   Bookmark[]
  reactions   Reaction[]
}

model Topic {
  id          String   @id @default(uuid())
  name        String   @unique
  slug        String   @unique
  description String?
  color       String?
  icon        String?
  dumps       Dump[]
}

model Comment {
  id        String   @id @default(uuid())
  content   String
  dumpId    String
  authorId  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  dump      Dump     @relation(fields: [dumpId], references: [id])
  author    User     @relation(fields: [authorId], references: [id])
}

model Bookmark {
  id        String   @id @default(uuid())
  userId    String
  dumpId    String
  createdAt DateTime @default(now())

  user      User     @relation(fields: [userId], references: [id])
  dump      Dump     @relation(fields: [dumpId], references: [id])

  @@unique([userId, dumpId])
}

model Reaction {
  id        String       @id @default(uuid())
  type      ReactionType
  userId    String
  dumpId    String
  createdAt DateTime     @default(now())

  user      User         @relation(fields: [userId], references: [id])
  dump      Dump         @relation(fields: [dumpId], references: [id])

  @@unique([userId, dumpId, type])
}

model Follow {
  id          String   @id @default(uuid())
  followerId  String
  followingId String
  createdAt   DateTime @default(now())

  follower    User     @relation("following", fields: [followerId], references: [id])
  following   User     @relation("followers", fields: [followingId], references: [id])

  @@unique([followerId, followingId])
}
```

---

# 11. API Endpoints

Base URL:

```txt
/api/v1
```

## Auth

```txt
POST   /auth/register
POST   /auth/login
GET    /auth/me
```

## Dumps

```txt
GET    /dumps
GET    /dumps/:slug
POST   /dumps
PATCH  /dumps/:id
DELETE /dumps/:id
```

`GET /dumps` query:

```txt
?q=&topic=&mood=&sort=latest|top&page=1&limit=10
```

## Comments

```txt
GET    /dumps/:id/comments
POST   /dumps/:id/comments
DELETE /comments/:id
```

## Bookmarks

```txt
GET    /bookmarks
POST   /dumps/:id/bookmark
```

## Reactions

```txt
POST   /dumps/:id/reactions
```

Request:

```json
{
  "type": "RELATE"
}
```

## Topics

```txt
GET    /topics
GET    /topics/:slug/dumps
```

## Users

```txt
GET    /users/:username
GET    /users/:username/dumps
PATCH  /users/me
```

## Follows

```txt
POST   /users/:id/follow
GET    /users/:username/followers
GET    /users/:username/following
```

---

# 12. API Response Format

Success:

```json
{
  "success": true,
  "message": "Request success",
  "data": {}
}
```

Error:

```json
{
  "success": false,
  "message": "Something went wrong",
  "errors": []
}
```

Pagination:

```json
{
  "success": true,
  "data": [],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

---

# 13. Page Details

## 13.1 Landing Page

Build a dark editorial landing page.

Sections:
1. Navbar
2. Hero section
3. Floating dump cards
4. Featured topics
5. Community value cards
6. Featured dumps preview
7. Final CTA

Hero:
```txt
Say what’s on your mind.
Dump what’s been living rent-free.
```

CTA:
- Start Dumping
- Explore Dumps

Floating cards:
- chaotic card
- deep card
- chill card
- honest card

Use subtle grain background and glow.

---

## 13.2 Feed Page

Use existing feed HTML as visual reference.

Features:
- left sidebar,
- sticky top search,
- feed tabs,
- center dump cards,
- right trending panel,
- suggested writers,
- daily prompt.

Feed card must include:
- author avatar,
- name,
- timestamp,
- title,
- excerpt,
- mood badge,
- topic badge,
- reading time,
- reactions,
- comments,
- share,
- bookmark.

Functional:
- fetch data from `GET /dumps`,
- search,
- filter mood,
- filter topic,
- sort tabs,
- bookmark toggle,
- reaction toggle.

---

## 13.3 Article Detail Page

Use existing article detail HTML as visual reference.

Features:
- top reading progress bar,
- back to feed,
- article header,
- badges,
- title,
- subtitle,
- author row,
- cover image,
- article body using Literata,
- highlighted quote,
- sticky reaction bar,
- right author card,
- related dumps,
- comment section.

Functional:
- fetch dump by slug,
- increment view count on read,
- post comment,
- toggle reaction,
- toggle bookmark.

---

## 13.4 Write Page

Use existing write page HTML as visual reference.

Features:
- sidebar,
- large title input,
- subtitle input,
- body textarea/editor,
- draft saved indicator,
- word count,
- publish settings panel,
- mood selector,
- topic selector,
- visibility radio,
- publish button,
- save draft button.

Functional:
- protected route,
- auto-save draft to localStorage,
- validate input,
- submit to `POST /dumps`,
- redirect to `/dump/:slug`.

---

## 13.5 Profile Page

Use existing profile HTML as visual reference.

Features:
- cover banner,
- big avatar,
- username,
- handle,
- bio,
- follow/message buttons,
- stats,
- tabs,
- masonry dump grid.

Functional:
- fetch user profile,
- fetch user dumps,
- follow toggle optional,
- show edit profile button for own profile.

---

## 13.6 Bookmarks Page

Features:
- title: Saved Dumps,
- search saved dumps,
- mood/topic filter,
- list bookmarked dumps,
- empty state.

Functional:
- protected route,
- fetch `GET /bookmarks`,
- remove bookmark.

Empty state copy:
```txt
No dumps saved yet.
Start collecting thoughts that hit a little too hard.
```

---

## 13.7 Topics Page

Features:
- topic grid,
- search topic,
- trending moods,
- recent dumps under selected topic.

Functional:
- fetch topics,
- filter dumps by selected topic.

---

# 14. Auth Requirements

Implement JWT auth.

Frontend:
- save token in localStorage as `saydump_token`,
- attach token to axios Authorization header,
- protect `/write`, `/bookmarks`, `/settings`,
- redirect unauthenticated user to login.

Backend:
- register hashes password,
- login compares password,
- return token and user data,
- auth middleware validates token,
- protect required routes.

---

# 15. Validation

Use Zod on both frontend and backend.

## Register

```ts
name: min 2
username: lowercase, no space, min 3
email: valid email
password: min 8
```

## Create Dump

```ts
title: min 5, max 120
subtitle: max 180 optional
content: min 30
mood: required enum
topicId: required
visibility: PUBLIC or PRIVATE
coverImage: optional url
```

## Comment

```ts
content: min 1, max 500
```

---

# 16. Utility Functions

Implement these utilities:

Frontend:
- `cn()`
- `formatDate()`
- `calculateReadingTime()`
- `slugify()`
- `getToken()`
- `setToken()`
- `removeToken()`
- `saveDraft()`
- `loadDraft()`

Backend:
- `asyncHandler()`
- `apiResponse()`
- `slugify()`
- `calculateReadingTime()`
- `generateToken()`
- `hashPassword()`
- `comparePassword()`
- `paginate()`

---

# 17. Seeding Data

Create seed data with:

- 6 users,
- 8 topics,
- 12 dumps,
- 20 comments,
- sample reactions,
- sample bookmarks.

Users:
- inkandwind
- museinchaos
- sleeplessthoughts
- just_a_dumper
- midnightjo
- barelyfunctional

Topics:
- Mental Health
- Relationships
- Overthinking
- Life Rants
- School / Work
- Random
- Self Growth
- Spiritual

Dump titles:
- The moment I realized I outgrew almost everyone
- I romanticize my life a little too much
- Things I wish someone told me at 18
- 3AM thoughts hit different
- Unpopular opinion: it’s okay to outgrow people
- The tyranny of the optimized morning routine
- Small joys that don’t get talked about enough
- I’m not okay and that’s okay
- The friendships that faded and it’s okay
- How to rebuild your inner circle intentionally
- Signs you’re outgrowing your environment
- Being alone is not the same as being lonely

---

# 18. Folder Structure to Generate

Generate this folder structure:

```txt
saydump/
├── client/
│   ├── public/
│   └── src/
│       ├── app/
│       ├── components/
│       ├── features/
│       ├── pages/
│       ├── lib/
│       ├── styles/
│       ├── types/
│       └── main.tsx
├── server/
│   ├── prisma/
│   └── src/
│       ├── config/
│       ├── modules/
│       ├── middlewares/
│       ├── utils/
│       ├── types/
│       ├── routes.ts
│       ├── app.ts
│       └── server.ts
└── docs/
```

---

# 19. Implementation Order

Build in this order:

## Step 1 — Setup

- create monorepo,
- setup React Vite client,
- setup Express TypeScript server,
- setup Tailwind,
- setup Prisma,
- setup env files.

## Step 2 — Design System

- add colors,
- add fonts,
- add global styles,
- add noise background,
- create Button/Card/Badge/Input/Skeleton.

## Step 3 — Static React UI

- convert feed HTML to React,
- convert profile HTML to React,
- convert write HTML to React,
- convert article detail HTML to React,
- create landing page.

## Step 4 — Backend API

- implement auth,
- implement users,
- implement topics,
- implement dumps,
- implement comments,
- implement bookmarks,
- implement reactions.

## Step 5 — API Integration

- connect auth,
- connect feed,
- connect article detail,
- connect write/publish,
- connect comments,
- connect bookmarks,
- connect reactions,
- connect profile.

## Step 6 — Polish

- loading skeleton,
- empty states,
- error states,
- toast,
- responsive fallback,
- README.

---

# 20. Important UI Consistency Rules

Do not break these rules:

1. Do not change SayDump into a generic blog layout.
2. Keep dark-first Midnight Dump identity.
3. Keep acid lime only for important active/CTA states.
4. Keep typography hierarchy consistent.
5. Use rounded cards and thin borders.
6. Use desktop-first layout.
7. Feed must feel like a social app.
8. Article detail must feel calm and readable.
9. Write page must feel like a focused editor.
10. Profile page must feel like a creator page.
11. Avoid excessive neon.
12. Avoid random color usage.
13. Avoid inconsistent spacing.
14. Avoid components with random radius.
15. Use reusable components, not repeated JSX everywhere.

---

# 21. Final Deliverables

Generate:
- complete frontend React app,
- complete backend Node Express API,
- Prisma schema,
- seed data,
- API integration,
- README,
- `.env.example` for client and server,
- responsive UI,
- clean folder structure,
- reusable components.

The final project should run with:

```bash
npm run install:all
npm run dev
```

or separately:

```bash
cd server
npm install
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

```bash
cd client
npm install
npm run dev
```

---

# 22. README Requirements

Create portfolio-ready README with:

- project title,
- product description,
- problem statement,
- solution,
- features,
- tech stack,
- screenshots placeholder,
- folder structure,
- database schema summary,
- API endpoints summary,
- installation guide,
- environment variables,
- future improvements,
- live demo placeholder.

Title:

```txt
SayDump — A Gen-Z Social Publishing Platform for Raw Thoughts and Memory Dumps
```

Description:

```txt
SayDump is a fullstack social publishing platform designed for young creators to write, discover, and save raw thoughts, memory dumps, personal stories, and random ideas. The project focuses on dark editorial UI, social feed interaction, REST API integration, authentication, reusable React components, and backend architecture using Node.js and Express.
```

---

# 23. Final Quality Standard

The final result must look and feel like a real product.

It must demonstrate:
- frontend UI taste,
- React architecture,
- backend API structure,
- database modelling,
- authentication,
- CRUD,
- responsive layout,
- readable article experience,
- social feed UX,
- and portfolio-quality documentation.

Final vibe:

> Medium if it grew up inside a Gen-Z notes app, got a dark mode obsession, and learned how to make chaos readable.
