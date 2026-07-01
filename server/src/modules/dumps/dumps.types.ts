import { z } from 'zod'
import { createDumpSchema } from './dumps.validation.js'

export type CreateDumpInput = z.infer<typeof createDumpSchema>['body']
