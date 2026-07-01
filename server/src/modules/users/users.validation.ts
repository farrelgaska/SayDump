import { z } from 'zod'

export const updateProfileSchema = z.object({
  body: z.object({
    bio: z.string().max(250, 'Bio must be under 250 characters.').optional(),
    avatarUrl: z.string().url('Avatar must be a valid URL.').optional().or(z.literal('')),
    coverUrl: z.string().url('Cover must be a valid URL.').optional().or(z.literal('')),
  }),
})
