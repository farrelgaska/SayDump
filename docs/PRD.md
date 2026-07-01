# SayDump — Product Requirements Document (PRD)

## 1. Ringkasan Produk

**SayDump** adalah platform social publishing untuk Gen Z yang berfokus pada brain dump, memory dump, opini random, cerita personal, refleksi hidup, dan ekspresi diri yang raw tapi tetap readable.

SayDump bukan sekadar blog biasa. SayDump adalah gabungan dari:
- platform menulis artikel,
- social feed,
- digital diary,
- writer profile,
- dan discovery berdasarkan topik serta mood.

Produk ini dibuat sebagai project portfolio frontend/fullstack dengan visual identity **Midnight Dump**: dark-first, editorial, expressive, premium, dan sedikit chaotic tanpa mengorbankan keterbacaan.

---

## 2. Filosofi Produk

### 2.1 Nama

**SayDump**

- **Say** berarti berkata, berbicara, dan mengomunikasikan isi kepala.
- **Dump** berarti brain dump atau memory dump: kumpulan pikiran, memori, pengalaman, dan perasaan yang dikeluarkan secara jujur.

### 2.2 Tagline

> Your brain dump, but readable.

### 2.3 Hero Copy

> Say what’s on your mind.  
> Dump what’s been living rent-free.

### 2.4 Positioning

SayDump adalah **Gen-Z social publishing platform** untuk orang yang ingin menulis sesuatu yang belum tentu rapi, belum tentu sempurna, tapi tetap punya makna.

---

## 3. Tujuan Produk

### 3.1 Tujuan Utama

Membangun web app fullstack yang memungkinkan user untuk:
- membaca dump/artikel dari user lain,
- membuat tulisan baru,
- memberi reaction,
- menyimpan tulisan ke bookmark,
- memberi komentar,
- menjelajah berdasarkan topic dan mood,
- melihat profile writer,
- dan membangun identitas sebagai penulis.

### 3.2 Tujuan Portfolio

Project ini harus menunjukkan kemampuan:
- React component architecture,
- routing frontend,
- state management,
- form handling,
- REST API integration,
- backend Node.js,
- database modelling,
- authentication,
- CRUD,
- responsive layout,
- UI consistency,
- dan product thinking.

### 3.3 Success Criteria

Project dianggap berhasil jika:
- UI konsisten dengan desain Midnight Dump.
- User bisa register/login.
- User bisa membuat, membaca, mengedit, dan menghapus dump miliknya.
- User bisa melihat feed dump.
- User bisa melihat detail artikel.
- User bisa bookmark dump.
- User bisa memberi reaction.
- User bisa memberi komentar.
- User bisa melihat profile writer.
- Search dan filter topic/mood berjalan.
- Data tersimpan di database melalui backend Node.js.
- App bisa dijalankan lokal dengan frontend dan backend terpisah.
- README dan dokumentasi jelas untuk portfolio.

---

## 4. Target User

### 4.1 Primary User

Gen Z atau young adult yang:
- suka menulis opini/curhatan/refleksi,
- terbiasa berekspresi di internet,
- ingin tempat menulis yang tidak terlalu formal,
- suka membaca cerita/opini personal dari orang lain.

### 4.2 Secondary User

- pembaca yang ingin menemukan tulisan relatable,
- penulis pemula,
- mahasiswa,
- kreator konten,
- orang yang ingin menyimpan ide/random thoughts.

---

## 5. User Persona

### Persona 1 — The Overthinker

**Nama:** Raka  
**Umur:** 21  
**Kebutuhan:** ingin menulis isi kepala yang terlalu penuh tanpa harus terdengar terlalu formal.  
**Pain Point:** notes app terlalu pribadi, Twitter/X terlalu ramai, Medium terlalu serius.  
**Goal:** menulis dump singkat atau panjang yang bisa dibaca orang lain.

### Persona 2 — The Silent Reader

**Nama:** Dira  
**Umur:** 20  
**Kebutuhan:** mencari tulisan yang relatable dan emosional.  
**Pain Point:** artikel formal terasa jauh, social media terlalu cepat dan dangkal.  
**Goal:** membaca dump berdasarkan mood dan topic.

### Persona 3 — The Young Writer

**Nama:** Naya  
**Umur:** 23  
**Kebutuhan:** membangun profile penulis dengan tulisan personal.  
**Pain Point:** platform blog biasa terasa kaku.  
**Goal:** punya profile, stats, followers, dan archive tulisan.

---

## 6. Scope Produk

## 6.1 MVP Scope

Fitur yang wajib dibuat untuk versi pertama:

### Public
- Landing page
- Feed page
- Article detail page
- Writer profile page
- Topics page

### Auth
- Register
- Login
- Logout
- Authenticated user session

### Dumps
- Create dump
- Read dump detail
- Update own dump
- Delete own dump
- List published dumps
- Filter by topic
- Filter by mood
- Search by title/content/author

### Social Interaction
- Bookmark dump
- Toggle reaction
- Add comment
- View comments

### Profile
- View writer profile
- View writer dumps
- Show basic stats:
  - total dumps
  - followers
  - total views

### Frontend UX
- Loading state
- Empty state
- Error state
- Toast notification
- Responsive desktop-first layout
- Reading progress bar on article detail
- Draft save on write page using localStorage

---

## 6.2 Nice-to-Have Scope

Fitur tambahan jika masih ada waktu:

- Follow/unfollow writer
- Edit profile
- Upload avatar
- Upload cover image
- Draft management page
- Infinite scroll
- Trending algorithm sederhana
- Admin moderation
- Report dump
- Rich text editor
- Markdown support
- Image upload for dump cover
- Light mode

---

## 6.3 Out of Scope for MVP

Tidak wajib dibuat di versi pertama:

- Real-time notification
- AI recommendation
- Payment/subscription
- Admin dashboard lengkap
- Email verification
- Password reset email
- Full markdown editor kompleks
- Collaborative writing
- Mobile app native

---

## 7. Platform

### Frontend

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- shadcn/ui style component system atau custom reusable components
- Lucide React icons
- TanStack Query untuk API state
- React Hook Form + Zod untuk form validation

### Backend

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication
- bcrypt untuk password hashing
- Zod/Joi untuk request validation
- Multer optional untuk upload file

### Dev Tools

- ESLint
- Prettier
- Nodemon/tsx
- concurrently
- dotenv

---

## 8. Information Architecture

### 8.1 Pages

| Route | Page | Access |
|---|---|---|
| `/` | Landing Page | Public |
| `/feed` | Feed / Discovery | Public/Auth |
| `/login` | Login | Public |
| `/register` | Register | Public |
| `/write` | Write Dump | Auth |
| `/dump/:slug` | Article Detail | Public/Auth |
| `/profile/:username` | Writer Profile | Public |
| `/bookmarks` | Bookmarks | Auth |
| `/topics` | Topics | Public |
| `/settings` | User Settings | Auth |

---

## 9. Core User Flow

### 9.1 Reader Flow

1. User membuka landing page.
2. User klik `Explore Dumps`.
3. User masuk ke feed.
4. User menggunakan search/filter.
5. User membuka salah satu dump.
6. User membaca artikel.
7. User memberi reaction/comment/bookmark.
8. Jika belum login, sistem meminta login untuk action tertentu.

### 9.2 Writer Flow

1. User login/register.
2. User klik `New Dump` atau `Write`.
3. User menulis title, subtitle, content.
4. User memilih mood dan topic.
5. User memilih visibility.
6. User publish dump.
7. Sistem menyimpan dump ke database.
8. Dump muncul di feed dan profile user.

### 9.3 Bookmark Flow

1. User membuka feed/detail.
2. User klik bookmark.
3. Frontend mengirim request ke backend.
4. Backend menyimpan bookmark.
5. UI berubah menjadi active state.
6. Dump muncul di halaman bookmarks.

### 9.4 Reaction Flow

1. User klik reaction.
2. Backend menyimpan reaction berdasarkan user dan dump.
3. Jika user klik lagi, reaction dihapus.
4. Counter reaction diperbarui.

---

## 10. Functional Requirements

## 10.1 Authentication

### Requirement

User harus bisa register, login, logout.

### Acceptance Criteria

- Register membutuhkan name, username, email, password.
- Email harus unik.
- Username harus unik.
- Password minimal 8 karakter.
- Password disimpan dalam bentuk hash.
- Login mengembalikan JWT token.
- Token disimpan di frontend.
- Protected route hanya bisa diakses jika token valid.

---

## 10.2 Feed

### Requirement

User bisa melihat daftar dump terbaru/popular.

### Acceptance Criteria

- Feed menampilkan list dump card.
- Setiap card menampilkan:
  - author avatar,
  - author name,
  - username,
  - title,
  - excerpt,
  - mood badge,
  - topic badge,
  - reading time,
  - reaction count,
  - comment count,
  - bookmark icon.
- User bisa search berdasarkan title/content/author.
- User bisa filter berdasarkan mood.
- User bisa filter berdasarkan topic.
- User bisa sort:
  - latest,
  - top,
  - following optional.

---

## 10.3 Dump Detail

### Requirement

User bisa membaca detail dump.

### Acceptance Criteria

- Halaman detail menampilkan:
  - title,
  - subtitle,
  - author meta,
  - mood,
  - topic,
  - cover image optional,
  - content,
  - reading progress bar,
  - reaction bar,
  - comments,
  - related dumps.
- Reading progress berjalan saat user scroll.
- Reaction bar sticky di desktop.
- Action bar berubah menjadi bottom bar di mobile.

---

## 10.4 Write Dump

### Requirement

User login bisa membuat dump.

### Acceptance Criteria

- Halaman write hanya untuk user login.
- Field wajib:
  - title,
  - content,
  - mood,
  - topic,
  - visibility.
- Field optional:
  - subtitle,
  - cover image URL.
- Draft tersimpan otomatis di localStorage.
- Publish menyimpan data ke backend.
- Setelah publish, user diarahkan ke detail dump.
- Form memiliki validation error.

---

## 10.5 Edit/Delete Dump

### Requirement

User bisa mengedit/menghapus dump miliknya.

### Acceptance Criteria

- Tombol edit/delete hanya muncul untuk owner dump.
- Edit dump memuat data lama.
- Delete memunculkan confirmation modal.
- Setelah delete, user diarahkan ke feed/profile.

---

## 10.6 Profile

### Requirement

User bisa melihat profile writer.

### Acceptance Criteria

- Profile menampilkan:
  - avatar,
  - name,
  - username,
  - bio,
  - stats,
  - daftar dump.
- Jika profile milik user sendiri, tampil tombol edit profile.
- Jika profile orang lain, tampil tombol follow/message dummy.

---

## 10.7 Bookmark

### Requirement

User login bisa menyimpan dump.

### Acceptance Criteria

- Klik bookmark menyimpan dump.
- Klik ulang menghapus bookmark.
- Halaman bookmarks menampilkan dump yang disimpan.
- Jika bookmark kosong, tampil empty state.

---

## 10.8 Comment

### Requirement

User login bisa memberi komentar.

### Acceptance Criteria

- Comment minimal 1 karakter.
- Comment tampil setelah berhasil dikirim.
- Comment list menampilkan author, timestamp, content.
- Owner comment bisa menghapus comment.

---

## 10.9 Reaction

### Requirement

User login bisa memberi reaction.

### Supported Reaction

- relate
- fire
- deep
- felt_that

### Acceptance Criteria

- User hanya bisa memberi satu reaction type yang sama sekali per dump.
- Reaction bisa di-toggle.
- Counter reaction diperbarui.

---

## 10.10 Topics

### Requirement

User bisa menjelajah dump berdasarkan topic.

### Acceptance Criteria

- Topics page menampilkan daftar topic.
- Topic card menampilkan name, description, dump count.
- Klik topic memfilter dump.

---

## 11. Non-Functional Requirements

### 11.1 Performance

- Initial page load harus ringan.
- Gunakan lazy loading untuk route.
- Gunakan skeleton loading saat fetch.
- Hindari render list berlebihan.
- Image harus diberi size dan object-fit.

### 11.2 Accessibility

- Semua button harus semantic.
- Icon button harus punya aria-label.
- Focus state harus terlihat.
- Contrast text harus cukup.
- Article body harus readable.
- Jangan hanya mengandalkan warna untuk state.

### 11.3 Security

- Password harus di-hash.
- JWT secret disimpan di `.env`.
- Protected API harus memvalidasi token.
- User tidak boleh mengedit/delete dump milik orang lain.
- Validasi semua request body.
- Gunakan CORS dengan origin frontend.

### 11.4 Maintainability

- Gunakan struktur folder modular.
- Pisahkan controller, service, repository.
- Gunakan reusable components.
- Gunakan TypeScript types.
- Gunakan consistent naming.

---

## 12. Visual Requirements

SayDump harus mempertahankan visual identity **Midnight Dump**.

### Color Tokens

| Token | Hex |
|---|---|
| background | `#0D0D10` |
| surface | `#17171C` |
| surface-hover | `#202026` |
| border | `#2B2B33` |
| text-primary | `#F5F2EA` |
| text-muted | `#A7A3B3` |
| accent-lime | `#C6FF4A` |
| accent-purple | `#A855F7` |
| accent-pink | `#FF4D8D` |
| accent-blue | `#38BDF8` |
| accent-orange | `#F59E0B` |

### Fonts

| Use | Font |
|---|---|
| Heading | Space Grotesk |
| UI Body | Inter |
| Article Body | Literata |
| Label | JetBrains Mono |

### Layout Rules

- Desktop-first.
- Feed pakai 3 kolom:
  - left sidebar 240px,
  - center feed 640–720px,
  - right panel 300–340px.
- Article detail pakai:
  - sticky reaction bar,
  - article width 680–740px,
  - right author sidebar.
- Write page pakai:
  - editor utama,
  - publish panel kanan.
- Profile pakai:
  - cover header,
  - avatar besar,
  - stats,
  - tabs,
  - masonry/grid dump list.

---

## 13. Database Model

### 13.1 User

```prisma
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
```

### 13.2 Dump

```prisma
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
```

### 13.3 Topic

```prisma
model Topic {
  id          String   @id @default(uuid())
  name        String   @unique
  slug        String   @unique
  description String?
  color       String?
  icon        String?
  dumps       Dump[]
}
```

### 13.4 Comment

```prisma
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
```

### 13.5 Bookmark

```prisma
model Bookmark {
  id        String   @id @default(uuid())
  userId    String
  dumpId    String
  createdAt DateTime @default(now())

  user      User     @relation(fields: [userId], references: [id])
  dump      Dump     @relation(fields: [dumpId], references: [id])

  @@unique([userId, dumpId])
}
```

### 13.6 Reaction

```prisma
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
```

### 13.7 Follow

```prisma
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

### 13.8 Enums

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
```

---

## 14. API Requirements

Base URL:

```txt
/api/v1
```

### Auth

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/register` | Register user |
| POST | `/auth/login` | Login user |
| GET | `/auth/me` | Get current user |
| POST | `/auth/logout` | Optional logout |

### Dumps

| Method | Endpoint | Description |
|---|---|---|
| GET | `/dumps` | Get feed dumps |
| GET | `/dumps/:slug` | Get dump detail |
| POST | `/dumps` | Create dump |
| PATCH | `/dumps/:id` | Update own dump |
| DELETE | `/dumps/:id` | Delete own dump |

Query params for `GET /dumps`:

```txt
?q=&topic=&mood=&sort=latest|top&page=1&limit=10
```

### Bookmarks

| Method | Endpoint | Description |
|---|---|---|
| GET | `/bookmarks` | Get current user bookmarks |
| POST | `/dumps/:id/bookmark` | Toggle bookmark |

### Reactions

| Method | Endpoint | Description |
|---|---|---|
| POST | `/dumps/:id/reactions` | Toggle reaction |

Request body:

```json
{
  "type": "RELATE"
}
```

### Comments

| Method | Endpoint | Description |
|---|---|---|
| GET | `/dumps/:id/comments` | Get comments |
| POST | `/dumps/:id/comments` | Add comment |
| DELETE | `/comments/:id` | Delete own comment |

### Profiles

| Method | Endpoint | Description |
|---|---|---|
| GET | `/users/:username` | Get profile |
| GET | `/users/:username/dumps` | Get user dumps |
| PATCH | `/users/me` | Update current user |

### Topics

| Method | Endpoint | Description |
|---|---|---|
| GET | `/topics` | Get all topics |
| GET | `/topics/:slug/dumps` | Get dumps by topic |

### Follows

| Method | Endpoint | Description |
|---|---|---|
| POST | `/users/:id/follow` | Toggle follow |
| GET | `/users/:username/followers` | Get followers |
| GET | `/users/:username/following` | Get following |

---

## 15. API Response Format

### Success

```json
{
  "success": true,
  "message": "Request success",
  "data": {}
}
```

### Error

```json
{
  "success": false,
  "message": "Validation error",
  "errors": []
}
```

### Pagination

```json
{
  "success": true,
  "data": [],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 58,
    "totalPages": 6
  }
}
```

---

## 16. Frontend State

### Global State

Use:
- TanStack Query for server state.
- React Context/Zustand optional for auth state.
- localStorage for draft and theme.

### LocalStorage Keys

```txt
saydump_token
saydump_theme
saydump_draft
saydump_feed_preferences
```

### Draft Object

```ts
type Draft = {
  title: string;
  subtitle?: string;
  content: string;
  mood?: string;
  topicId?: string;
  visibility: "PUBLIC" | "PRIVATE";
  updatedAt: string;
};
```

---

## 17. Validation Rules

### Register

- name: required, min 2
- username: required, lowercase, no space, unique
- email: valid email, unique
- password: min 8

### Login

- email: required
- password: required

### Create Dump

- title: required, min 5, max 120
- subtitle: optional, max 180
- content: required, min 30
- mood: required
- topicId: required
- visibility: required

### Comment

- content: required, min 1, max 500

---

## 18. Error Handling

Frontend harus menangani:

- 400 validation error
- 401 unauthorized
- 403 forbidden
- 404 not found
- 500 server error
- network error

UI state:
- toast error
- inline form error
- empty state
- loading skeleton

---

## 19. MVP Development Milestones

### Milestone 1 — Project Setup

- Setup monorepo/client-server.
- Setup React + Vite.
- Setup Node + Express.
- Setup Tailwind.
- Setup Prisma.
- Setup database.
- Setup shared design tokens.

### Milestone 2 — Static UI Migration

- Convert HTML UI ke React components.
- Build layout:
  - AppShell
  - Sidebar
  - TopBar
  - RightPanel
- Build pages:
  - Feed
  - Article detail
  - Write page
  - Profile

### Milestone 3 — Backend Core

- Auth routes.
- Dump routes.
- Topic seed.
- User seed.
- Database schema.
- Error middleware.

### Milestone 4 — Frontend API Integration

- Auth integration.
- Feed fetch.
- Dump detail fetch.
- Create dump.
- Bookmark toggle.
- Reaction toggle.
- Comment submit.

### Milestone 5 — Polish

- Loading skeleton.
- Empty state.
- Error state.
- Responsive fallback.
- README.
- Deployment.

---

## 20. Acceptance Criteria Final

- [ ] User bisa register/login/logout.
- [ ] Feed data berasal dari backend.
- [ ] User bisa membuat dump.
- [ ] User bisa membaca detail dump.
- [ ] User bisa memberi reaction.
- [ ] User bisa bookmark.
- [ ] User bisa comment.
- [ ] Profile menampilkan data user dan dump.
- [ ] Search/filter bekerja.
- [ ] UI konsisten dengan Midnight Dump.
- [ ] Desktop layout terlihat premium.
- [ ] Mobile tidak hancur.
- [ ] README lengkap.
- [ ] Project bisa dijalankan lokal.
