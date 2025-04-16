'use client'

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Logo from '../../components/Logo'
import Spacer from '../../components/Spacer'

export const metadata: Metadata = {
  title: 'Tisacode | AI-Era Startup Workshop',
  description:
    'Join us for an AI-Era Startup Workshop where we teach you to build something so original, even the algorithms will do a double-take.',
}

function WorkshopSignupForm() {
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
      setError('Please enter your name and email.')
      return
    }
    // Here you would send the data to your backend or service
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center font-sf-pro text-xl">
        🎉 You&apos;re on the list, {form.name || 'fellow human'}! <br />
        Check your inbox (and maybe that forgotten spam folder).
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="w-full mb-4">
        <label htmlFor="name" className="block text-black font-bold mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className="w-full rounded-lg border-2 border-orange-dark p-extrasmall font-inter"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div className="w-full mb-4">
        <label htmlFor="email" className="block text-black font-bold mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="w-full rounded-lg border-2 border-orange-dark p-extrasmall font-inter"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      {error && <div className="text-orange-dark font-bold mb-2">{error}</div>}
      <button
        type="submit"
        className="w-full bg-orange-dark text-white font-sf-pro font-bold px-large py-small rounded-lg shadow hover:bg-blue transition"
      >
        Claim Your Spot
      </button>
    </form>
  )
}

export default function StartupWorkshopPage() {
  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row w-full">
      {/* Left scrollable panel */}
      <div className="w-full md:w-1/2 md:overflow-y-auto md:overflow-hidden px-small pb-extrasmall md:px-medium pt-medium scrollable-container">
        <Link href="/">
          <Logo />
        </Link>
        <Spacer size="large" />

        <div className="section">AI-Era Startup Workshop</div>
        <Spacer size="medium" />

        <div className="hero-message">
          {`Three sessions where we'll teach you to build something so original, even the algorithms
          will do a double-take.`}
        </div>
        <Spacer size="large" />

        <div className="title">{"What You'll Experience"}</div>
        <Spacer size="small" />
        <div className="text">
          <div className="mb-4">
            <span className="font-bold">{`Session 1: "The Human Advantage"`}</span>
            <p>{`While AI churns out cookie-cutter solutions, we'll help you find the weird, wonderful idea 
            only your particular brain could create. The kind that makes venture capitalists say, 
            "I don't get it, but here's money."`}</p>
          </div>

          <div className="mb-4">
            <span className="font-bold">{`Session 2: "Prototype Like Nobody's Watching"`}</span>
            <p>{`Build fast, break things, fix them with duct tape. We'll show you how to create 
        a working prototype while your competitors are still formatting their spreadsheets.`}</p>
          </div>

          <div className="mb-4">
            <span className="font-bold">{`Session 3: "Launch Before You're Ready"`}</span>
            <p>
              Perfect is the enemy of shipped. Learn to release your creation into the wild before
              your inner critic has time to talk you out of it.
            </p>
          </div>
        </div>
        <Spacer size="large" />

        <div className="title">Who Should Join?</div>
        <Spacer size="small" />
        <div className="text">
          • People who&apos;ve had an idea in the shower and forgotten it by breakfast
          <br />
          • Professionals tired of building someone else&apos;s dream
          <br />
          • Anyone who&apos;s ever said &quot;I could build something better than this&quot;
          <br />• Humans who want to create something AI can&apos;t replicate
        </div>
        <Spacer size="large" />

        <div className="title">When & Where</div>
        <Spacer size="small" />
        <div className="text">
          Three consecutive Thursdays, starting June 6th.
          <br />
          7-9pm CET. Online, interactive, and surprisingly fun.
          <br />
          Recordings available, but live attendance strongly encouraged for maximum chaos and
          creativity.
        </div>
        <Spacer size="large" />

        <div className="title">Reserve Your Spot</div>
        <Spacer size="small" />
        <WorkshopSignupForm />
        <Spacer size="large" />

        <div className="text italic text-center">
          {`"In the age of AI, the most valuable businesses will be the ones that could only have come
          from your weird, wonderful, human brain."`}
        </div>
        <Spacer size="large" />

        <footer className="flex justify-between">
          <div className="text">© TisaCode 2024</div>
          <Link
            href="https://www.linkedin.com/company/tisacode"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TisaCode's LinkedIn page"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                clipRule="evenodd"
              />
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
            </svg>
          </Link>
        </footer>
      </div>

      {/* Right static panel */}
      <div className="relative w-full md:w-1/2 px-small py-medium md:p-medium">
        <Image
          src="/images/startup-workshop.jpg"
          alt="AI-Era Startup Workshop"
          fill
          className="object-cover"
          sizes="50vw"
          priority
        />
        <div className=" action sticky top-0">Build what AI can&apos;t imagine.</div>
      </div>
    </div>
  )
}
