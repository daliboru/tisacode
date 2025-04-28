import { z } from 'zod'

export const workshopFormSchema = z
  .object({
    name: z
      .string()
      .min(1, 'Please enter your name')
      .min(2, 'Name must be at least 2 characters')
      .max(100, 'Name is too long')
      .trim(),
    email: z.string().email('Invalid email address').min(1, 'Email is required').trim(),
    background: z.string().optional(),
    timePreference: z.string().min(1, { message: 'Please select or specify a time preference' }),
    workshopId: z.string(),
    customTime: z.string().optional(),
  })
  .refine(
    data => data.timePreference !== 'other' || (data.customTime && data.customTime.length > 0),
    {
      message: 'Please specify your preferred time',
      path: ['customTime'],
    },
  )

export type WorkshopFormInputs = z.infer<typeof workshopFormSchema>
