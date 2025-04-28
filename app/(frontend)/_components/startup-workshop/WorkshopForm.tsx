'use client'

import { createSubscriberFromWorkshop } from '@/lib/actions/subscribers'
import { WorkshopFormInputs, workshopFormSchema } from '@/lib/validations/workshop'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

function WorkshopForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WorkshopFormInputs>({
    resolver: zodResolver(workshopFormSchema),
    defaultValues: {
      name: '',
      email: '',
      background: '',
      workshopId: 'startup-first-principles-may-2025',
    },
    mode: 'onChange',
  })

  const onSubmit = async (data: WorkshopFormInputs) => {
    try {
      const response = await createSubscriberFromWorkshop(data)

      if (response.success) {
        setSubmitted(true)
      } else {
        setServerError(response.message)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setServerError('Something went wrong. Please try again.')
    }
  }

  if (submitted) {
    return (
      <div className="text-center font-sf-pro text-xl">
        🎉 Your future self is doing a happy dance! <br />
        Check your inbox for workshop details (we promise not to send you cryptocurrency
        opportunities).
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      {serverError && (
        <div className="text-orange-dark text-sm mb-4 p-2 bg-orange-50 rounded">{serverError}</div>
      )}
      <div className="w-full mb-4">
        <label htmlFor="name" className="block text-black font-bold mb-1">
          Name*
        </label>
        <input
          id="name"
          {...register('name')}
          type="text"
          autoComplete="name"
          required
          className="w-full rounded-lg border-2 border-orange-dark p-extrasmall font-inter"
          placeholder="The name your future fans will know you by"
        />
        {errors.name && <p className="text-orange-dark text-sm mt-1">{errors.name.message}</p>}
      </div>
      <div className="w-full mb-4">
        <label htmlFor="email" className="block text-black font-bold mb-1">
          Email Address*
        </label>
        <input
          id="email"
          {...register('email')}
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border-2 border-orange-dark p-extrasmall font-inter"
          placeholder="Where we'll send workshop details"
        />
        {errors.email && <p className="text-orange-dark text-sm mt-1">{errors.email.message}</p>}
      </div>
      <div className="w-full mb-4">
        <label htmlFor="background" className="block text-black font-bold mb-1">
          Your Background (Optional)
        </label>
        <select
          id="background"
          {...register('background')}
          className="w-full rounded-lg border-2 border-orange-dark p-extrasmall font-inter"
        >
          <option value="">Select your background</option>
          <option value="entrepreneur">Entrepreneur/Founder</option>
          <option value="developer">Software Developer</option>
          <option value="designer">Designer</option>
          <option value="marketer">Marketer</option>
          <option value="student">Student</option>
          <option value="corporate">Corporate Professional</option>
          <option value="other">Other</option>
        </select>
        {errors.background && (
          <p className="text-orange-dark text-sm mt-1">{errors.background.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange-dark text-white font-sf-pro font-bold px-large py-small rounded-lg shadow hover:bg-blue transition disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Leverage your potential'}
      </button>
    </form>
  )
}

export default WorkshopForm
