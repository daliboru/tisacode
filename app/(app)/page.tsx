import Image from 'next/image'
import React from 'react'
import ContactForm from '../../components/ContactForm'
import Logo from '../../components/Logo'
import Menu from '../../components/Menu'
import Spacer from '../../components/Spacer'
import CTA from './_components/landing/CTA'
import Footer from './_components/landing/Footer'
import Process from './_components/landing/Process'
import Services from './_components/landing/Services'
import WorkPhilosophy from './_components/landing/WorkPhilosophy'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen md:h-screen md:overflow-hidden flex flex-col-reverse md:flex-row w-full">
      {/* Left scrollable panel */}
      <div className="w-full md:w-1/2 md:overflow-y-auto md:overflow-hidden px-small pb-extrasmall md:px-medium pt-medium scrollable-container">
        <div className="flex justify-between items-center">
          <Logo />
          <Menu />
        </div>
        <Spacer size="large" className="md:block " />
        <div className="hero-message">
          We craft clean, scalable code that grows with your business, delivering straightforward,
          maintainable solutions that drive real results for you.
        </div>
        <Spacer size="large" />
        {/* SECTIONS */}
        <WorkPhilosophy />
        <Spacer size="large" />
        <Services />
        <Spacer size="large" />
        <Process />
        <Spacer size="large" />
        <CTA />
        <Spacer size="large" />
        <ContactForm />
        <Spacer size="small" />
        <Footer />
      </div>

      {/* Right static panel */}
      <div className="relative w-full md:w-1/2 px-small py-medium md:p-medium">
        <Image
          src="/images/background.jpg"
          alt="background"
          fill
          className="object-cover"
          sizes="50vw"
          priority
        />
        <div className="relative action">Software is a service, not a commodity.</div>
      </div>
    </div>
  )
}

export default HomePage
