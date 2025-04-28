'use client'

import { useForm, ValidationError } from '@formspree/react'
import Spacer from './Spacer'

function ContactForm() {
  const [state, handleSubmit] = useForm('xyzyezgv')

  if (state.succeeded) {
    return (
      <div className="text-center">
        <p className="title mb-4">We have a liftoff! 🚀</p>
      </div>
    )
  }

  return (
    <>
      <div id="contact" className="section">
        Contact Us
      </div>
      <Spacer size="medium" />
      <div className="flex w-full flex-col">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="title">
            Email Address
          </label>
          <Spacer size="small" />
          <div>
            <input
              id="email"
              type="email"
              name="email"
              className="border-2 border-black rounded-lg  p-extrasmall w-full"
            />
          </div>
          {state.errors && <Spacer size="small" />}
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <Spacer size="medium" />
          <label htmlFor="message" className="title">
            Message
          </label>
          <Spacer size="small" />
          <textarea
            className="border-2 border-black rounded-lg w-full p-extrasmall"
            id="message"
            name="message"
            rows={4}
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <Spacer size="medium" />
          <div className="flex md:float-end bg-black rounded-lg content-center px-medium py-extrasmall">
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full title pointer"
              style={{ color: 'white' }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactForm
