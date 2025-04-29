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
          <p className="font-bold mb-2">Dalibor Belić</p>
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
