import React from 'react'
import Spacer from '../../components/Spacer'
import Process from './components/Process'
import Services from './components/Services'
import WorkPhilosophy from './components/WorkPhilosophy'

const HomePage: React.FC = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left scrollable panel */}
      <div className="w-1/2 overflow-y-auto pb-[6px] px-[22px] pt-[22px]">
        {/* future logo */}
        <div className="title">Logo</div>
        <Spacer size="large" />
        {/* her message */}
        <div className="hero-message">
          Your partner in building evolutionary architectures and sustainable codebases, where
          developer expertise drives business outcomes through technical craftsmanship.
        </div>
        <Spacer size="large" />
        {/* SECTIONS */}
        <WorkPhilosophy />
        <Spacer size="large" />
        <Services />
        <Spacer size="large" />
        <Process />
        <Spacer size="large" />
        <div className="text">© Company Name 2024</div>
      </div>

      {/* Right static panel */}
      <div className="w-1/2 p-6 bg-black">
        <div className=" action">we solve problems in the software world.</div>
      </div>
      {/* <div className="relative w-1/2 p-6">
        <Image
          src="/images/background.jpg"
          alt="background"
          fill
          className="object-cover"
          sizes="50vw"
        />
        <div className="relative action">we solve problems in the software world.</div>
      </div> */}
    </div>
  )
}

export default HomePage
