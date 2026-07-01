# Database Schema Specification

Below is the relational mapping implemented via Prisma.

## Models

### User
- `id` (UUID, Primary Key)
- `email` (String, Unique)
- `username` (String, Unique)
- `password` (String, Hashed)
- `avatarUrl` (String, Nullable)
- `coverUrl` (String, Nullable)
- `bio` (String, Nullable)
- `createdAt` (DateTime)
- `updatedAt` (DateTime)

### Dump
- `id` (UUID, Primary Key)
- `title` (String)
- `content` (Text)
- `mood` (String)
- `topicId` (UUID, Foreign Key)
- `authorId` (UUID, Foreign Key)
- `published` (Boolean)
- `readingTime` (Integer)
- `createdAt` (DateTime)
- `updatedAt` (DateTime)

### Comment
- `id` (UUID, Primary Key)
- `content` (String)
- `authorId` (UUID, Foreign Key)
- `dumpId` (UUID, Foreign Key)
- `createdAt` (DateTime)

### Reaction
- `id` (UUID, Primary Key)
- `type` (String)
- `authorId` (UUID, Foreign Key)
- `dumpId` (UUID, Foreign Key)

### Follow
- `followerId` (UUID, Foreign Key)
- `followingId` (UUID, Foreign Key)
- Primary Key is (`followerId`, `followingId`)
