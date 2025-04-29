import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Spacer from '../../../../components/Spacer'

const WorkshopInstructor: React.FC = () => {
  return (
    <>
      <div className="title">About Your Instructor</div>
      <Spacer size="small" />

      <div className="flex flex-col md:flex-row gap-4 items-start">
        <Link
          href="https://www.linkedin.com/in/daliborbelic/"
          className="relative w-24 h-24 min-w-[6rem] rounded-full overflow-hidden"
          target="_blank"
        >
          <Image
            src="/images/dalibor-ln.webp"
            alt="Workshop Instructor"
            fill
            className="object-cover"
          />
        </Link>

        <div className="text">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold">Dalibor Belić</h2>
            <Link
              href="https://www.linkedin.com/in/daliborbelic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Dalibor on LinkedIn"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
              </svg>
            </Link>
          </div>
          <p className="mb-3">
            Dalibor is a problem solver, a priori. He&apos;s been building products and scaling
            startups in Serbia and Scandinavia for the past 7 years. He recently co-founded{' '}
            <Link className="font-bold" href="https://tiny-portals.com/">
              Tiny Portals
            </Link>
            , and started writing on{' '}
            <Link className="font-bold" href="https://daliborbeli.substack.com/">
              Substack.
            </Link>
          </p>
          <p>
            His approach is lean, pragmatic, and without fluff. Dalibor believes that communication
            is the key to building a successful startup, and he&apos;s passionate about sharing his
            knowledge with others.
          </p>
        </div>
      </div>
    </>
  )
}

export default WorkshopInstructor
