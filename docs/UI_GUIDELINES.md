# SayDump — API Specification

Base URL:

```txt
http://localhost:5000/api/v1
```

---

## 1. Response Format

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
  "message": "Something went wrong",
  "errors": []
}
```

### Pagination

```json
{
  "success": true,
  "message": "Request success",
  "data": [],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 42,
    "totalPages": 5
  }
}
```

---

## 2. Authentication

Use JWT Bearer token.

Header:

```http
Authorization: Bearer <token>
```

---

## 3. Auth Endpoints

### POST /auth/register

Request:

```json
{
  "name": "Farrel",
  "username": "farreldump",
  "email": "farrel@example.com",
  "password": "password123"
}
```

Response:

```json
{
  "success": true,
  "message": "Register success",
  "data": {
    "user": {
      "id": "uuid",
      "name": "Farrel",
      "username": "farreldump",
      "email": "farrel@example.com",
      "avatarUrl": null,
      "bio": null
    },
    "token": "jwt-token"
  }
}
```

### POST /auth/login

Request:

```json
{
  "email": "farrel@example.com",
  "password": "password123"
}
```

Response:

```json
{
  "success": true,
  "message": "Login success",
  "data": {
    "user": {},
    "token": "jwt-token"
  }
}
```

### GET /auth/me

Protected.

Response:

```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "Farrel",
    "username": "farreldump",
    "email": "farrel@example.com"
  }
}
```

---

## 4. Dumps Endpoints

### GET /dumps

Query:

```txt
?q=&topic=&mood=&sort=latest&page=1&limit=10
```

Response:

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "slug": "the-moment-i-realized-i-outgrew-almost-everyone",
      "title": "The moment I realized I outgrew almost everyone",
      "subtitle": "Sometimes the hardest part of personal growth is looking around and realizing the room doesn't fit you anymore.",
      "excerpt": "There isn't a singular explosion...",
      "mood": "HONEST",
      "visibility": "PUBLIC",
      "readingTime": 6,
      "viewCount": 6200,
      "createdAt": "2026-07-02T00:00:00.000Z",
      "author": {
        "id": "uuid",
        "name": "inkandwind",
        "username": "inkandwind",
        "avatarUrl": "/images/avatars/inkandwind.jpg"
      },
      "topic": {
        "id": "uuid",
        "name": "Life Rants",
        "slug": "life-rants"
      },
      "_count": {
        "comments": 42,
        "bookmarks": 3100,
        "reactions": 2400
      },
      "viewerState": {
        "isBookmarked": false,
        "reactions": []
      }
    }
  ],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 12,
    "totalPages": 2
  }
}
```

### GET /dumps/:slug

Response:

```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "slug": "the-moment-i-realized-i-outgrew-almost-everyone",
    "title": "The moment I realized I outgrew almost everyone",
    "subtitle": "Sometimes the hardest part of personal growth is looking around and realizing the room doesn't fit you anymore.",
    "excerpt": "There isn't a singular explosion...",
    "content": "Full article content here...",
    "coverImage": "/images/covers/outgrew.jpg",
    "mood": "HONEST",
    "visibility": "PUBLIC",
    "readingTime": 6,
    "viewCount": 6200,
    "createdAt": "2026-07-02T00:00:00.000Z",
    "author": {},
    "topic": {},
    "comments": [],
    "reactionSummary": {
      "RELATE": 2400,
      "FIRE": 120,
      "DEEP": 390,
      "FELT_THAT": 800
    },
    "viewerState": {
      "isBookmarked": false,
      "reactions": []
    }
  }
}
```

### POST /dumps

Protected.

Request:

```json
{
  "title": "I romanticize my life a little too much",
  "subtitle": "Some days I’m the main character, other days I’m just surviving ad breaks.",
  "content": "Full dump content here...",
  "coverImage": "https://example.com/image.jpg",
  "mood": "CHILL",
  "topicId": "uuid",
  "visibility": "PUBLIC"
}
```

Response:

```json
{
  "success": true,
  "message": "Dump published",
  "data": {
    "id": "uuid",
    "slug": "i-romanticize-my-life-a-little-too-much"
  }
}
```

### PATCH /dumps/:id

Protected. Owner only.

### DELETE /dumps/:id

Protected. Owner only.

---

## 5. Comments Endpoints

### GET /dumps/:id/comments

Response:

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "content": "This hit so hard.",
      "createdAt": "2026-07-02T00:00:00.000Z",
      "author": {
        "id": "uuid",
        "name": "void_walker",
        "username": "void_walker",
        "avatarUrl": null
      }
    }
  ]
}
```

### POST /dumps/:id/comments

Protected.

Request:

```json
{
  "content": "This hit so hard. The quiet part is the realest."
}
```

### DELETE /comments/:id

Protected. Owner only.

---

## 6. Bookmark Endpoints

### GET /bookmarks

Protected.

Response:

```json
{
  "success": true,
  "data": []
}
```

### POST /dumps/:id/bookmark

Protected. Toggle behavior.

Response:

```json
{
  "success": true,
  "message": "Bookmark toggled",
  "data": {
    "isBookmarked": true
  }
}
```

---

## 7. Reaction Endpoints

### POST /dumps/:id/reactions

Protected. Toggle behavior.

Request:

```json
{
  "type": "RELATE"
}
```

Response:

```json
{
  "success": true,
  "message": "Reaction toggled",
  "data": {
    "active": true,
    "type": "RELATE",
    "summary": {
      "RELATE": 2401,
      "FIRE": 120,
      "DEEP": 390,
      "FELT_THAT": 800
    }
  }
}
```

---

## 8. Topics Endpoints

### GET /topics

Response:

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "Mental Health",
      "slug": "mental-health",
      "description": "Thoughts about mental health, growth, and emotional survival.",
      "color": "#C6FF4A",
      "icon": "brain",
      "dumpCount": 12400
    }
  ]
}
```

### GET /topics/:slug/dumps

Returns dumps filtered by topic.

---

## 9. Users Endpoints

### GET /users/:username

Response:

```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "inkandwind",
    "username": "inkandwind",
    "avatarUrl": "/images/avatars/inkandwind.jpg",
    "bio": "Writing the thoughts I usually overthink at 2AM.",
    "stats": {
      "dumps": 102,
      "followers": 24300,
      "views": 312000
    },
    "viewerState": {
      "isFollowing": false,
      "isOwnProfile": false
    }
  }
}
```

### GET /users/:username/dumps

Returns dumps from selected user.

### PATCH /users/me

Protected.

Request:

```json
{
  "name": "Farrel",
  "bio": "Frontend dev who dumps thoughts at 2AM.",
  "avatarUrl": "https://example.com/avatar.jpg"
}
```

---

## 10. Follow Endpoints

### POST /users/:id/follow

Protected. Toggle follow.

Response:

```json
{
  "success": true,
  "data": {
    "isFollowing": true
  }
}
```

### GET /users/:username/followers

### GET /users/:username/following
