import { z } from 'zod'

export const toggleReactionSchema = z.object({
  body: z.object({
    type: z.string().min(1, 'Reaction type is required.'),
  }),
  params: z.object({
    dumpId: z.string().uuid('Invalid dump identifier.'),
  }),
})
