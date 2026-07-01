import { z } from 'zod'

export const createDumpSchema = z.object({
  body: z.object({
    title: z.string().min(1, 'Title is required.').max(100, 'Title is too long.'),
    content: z.string().min(1, 'Content is required.'),
    mood: z.enum(['happy', 'sad', 'excited', 'angry', 'neutral']).optional(),
    topicId: z.string().uuid('Invalid topic identifier.'),
  }),
})
