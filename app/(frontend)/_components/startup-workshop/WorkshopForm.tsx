'use client'

import { useState } from 'react'

function WorkshopForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '' })
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim()) {
      setError('Your idea deserves a name and email at minimum.')
      return
    }
    // Here you would send the data to your backend or service
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center font-sf-pro text-xl">
        🎉 Your idea is doing a happy dance, {form.name || 'mysterious creator'}! <br />
        Check your inbox for workshop details (we promise not to send you cryptocurrency opportunities).
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="w-full mb-4">
        <label htmlFor="name" className="block text-black font-bold mb-1">
          Your Creator Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className="w-full rounded-lg border-2 border-orange-dark p-extrasmall font-inter"
          value={form.name}
          onChange={handleChange}
          placeholder="The name your future fans will know you by"
        />
      </div>
      <div className="w-full mb-4">
        <label htmlFor="email" className="block text-black font-bold mb-1">
          Idea Delivery Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="w-full rounded-lg border-2 border-orange-dark p-extrasmall font-inter"
          value={form.email}
          onChange={handleChange}
          placeholder="Where we'll send workshop details"
        />
      </div>
      {error && <div className="text-orange-dark font-bold mb-2">{error}</div>}
      <button
        type="submit"
        className="w-full bg-orange-dark text-white font-sf-pro font-bold px-large py-small rounded-lg shadow hover:bg-blue transition"
      >
        Free Your Idea From Captivity
      </button>
    </form>
  )
}

export default WorkshopForm