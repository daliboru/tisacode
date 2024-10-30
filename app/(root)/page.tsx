import Image from 'next/image'
import React from 'react'
import ContactForm from '../../components/ContactForm'
import Spacer from '../../components/Spacer'
import Footer from './components/Footer'
import Process from './components/Process'
import Services from './components/Services'
import WorkPhilosophy from './components/WorkPhilosophy'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen md:h-screen md:overflow-hidden flex flex-col-reverse md:flex-row w-full">
      {/* Left scrollable panel */}
      <div className="w-full md:w-1/2 md:overflow-y-auto md:overflow-hidden px-small pb-extrasmall md:px-medium pt-medium">
        {/* future logo */}
        <div className="title md:block hidden">TisaCode</div>
        <Spacer size="large" className="md:block hidden" />
        <Spacer size="small" className="md:hidden block" />
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
        <Footer />
        <Spacer size="large" />
        <ContactForm />
        <Spacer size="small" />
        <div className="text">© TisaCode 2024</div>
      </div>

      {/* Right static panel */}
      {/* <div className="w-full md:w-1/2 p-6 bg-black">
        <div className="action">Software is a service, not a commodity.</div>
      </div> */}
      <div className="relative w-full md:w-1/2 px-small py-medium md:p-medium">
        <Image
          src="/images/background.jpg"
          alt="background"
          fill
          className="object-cover"
          sizes="50vw"
        />
        <div className="relative action">Software is a service, not a commodity.</div>
      </div>
    </div>
  )
}

export default HomePage
