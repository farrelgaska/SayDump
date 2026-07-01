import { z } from 'zod'
import { updateProfileSchema } from './users.validation.js'

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>['body']
