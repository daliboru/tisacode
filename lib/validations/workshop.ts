import { z } from 'zod'

export const workshopFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Please enter your name')
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long')
    .trim(),
  email: z.string().email('Invalid email address').min(1, 'Email is required').trim(),
  background: z.string().optional(),
  workshopId: z.string(),
})

export type WorkshopFormInputs = z.infer<typeof workshopFormSchema>
