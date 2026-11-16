import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../../components/Logo'
import Menu from '../../../components/Menu'
import Spacer from '../../../components/Spacer'
import ourProductsImage from '../../../public/images/our-products.webp'
import Footer from '../_components/landing/Footer'
import SpeakXCaseStudy from '../_components/our-products/SpeakXCaseStudy'

export const metadata: Metadata = {
  title: 'Tisacode - our products',
  description:
    'Software we built for ourselves. Case study: Speak-X, three language platforms on one engine, where you speak from the first lesson.',
}

const OurProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen md:h-screen md:overflow-hidden flex flex-col-reverse md:flex-row w-full">
      {/* Left scrollable panel */}
      <div className="w-full md:w-1/2 md:overflow-y-auto md:overflow-hidden px-small pb-extrasmall md:px-medium pt-medium scrollable-container">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>
          <Menu />
        </div>
        <Spacer size="large" />
        <h1 className="section">Our products.</h1>
        <Spacer size="medium" />
        <div className="hero-message">
          We build software for other businesses. Here is one we built for ourselves, told the way
          we would tell a client story: what was wrong, what we did, what came out.
        </div>
        <Spacer size="large" />
        <SpeakXCaseStudy />
        <Spacer size="large" />
        <Footer />
      </div>

      {/* Right static panel */}
      <div className="relative w-full md:w-1/2 px-small py-medium md:p-medium">
        <Image
          src={ourProductsImage}
          alt=""
          fill
          className="object-cover"
          sizes="50vw"
          quality={60}
          placeholder="blur"
          priority
        />
        <div className="relative action !text-black">Start at the last chapter.</div>
      </div>
    </div>
  )
}

export default OurProductsPage
