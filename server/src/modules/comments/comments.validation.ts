import { z } from 'zod'

export const createCommentSchema = z.object({
  body: z.object({
    content: z.string().min(1, 'Comment body is required.').max(500, 'Comment is too long.'),
    dumpId: z.string().uuid('Invalid dump identifier.'),
  }),
})
