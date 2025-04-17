import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../app/_components/landing/Footer'
import Logo from '../../components/Logo'
import Spacer from '../../components/Spacer'
import WorkshopDetails from './_components/WorkshopDetails'
import WorkshopForm from './_components/WorkshopForm'
import WorkshopHeader from './_components/WorkshopHeader'
import WorkshopQuote from './_components/WorkshopQuote'
import WorkshopSessions from './_components/WorkshopSessions'

export const metadata: Metadata = {
  title: 'Tisacode | Idea Resurrection Workshop',
  description:
    'A three-part workshop for people with brilliant ideas collecting dust in their mental attics. Time to build what AI can only dream about.',
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

        <WorkshopHeader />
        <Spacer size="large" />

        <WorkshopSessions />
        <Spacer size="large" />

        <WorkshopDetails />
        <Spacer size="large" />

        <div className="title">Resurrect Your Idea</div>
        <Spacer size="small" />
        <WorkshopForm />
        <Spacer size="large" />

        <WorkshopQuote />
        <Spacer size="large" />

        <Footer />
      </div>

      {/* Right static panel */}
      <div className="relative w-full md:w-1/2 px-small py-medium md:p-medium">
        <Image
          src="/images/startup-workshop.jpg"
          alt="Idea Resurrection Workshop"
          fill
          className="object-cover"
          sizes="50vw"
          priority
        />
        <div className="action sticky top-0">That idea you abandoned? It misses you.</div>
      </div>
    </div>
  )
}
