import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../components/Logo'
import Spacer from '../../../components/Spacer'
import Footer from '../_components/landing/Footer'
import WorkshopDetails from '../_components/startup-workshop/WorkshopDetails'
import WorkshopForm from '../_components/startup-workshop/WorkshopForm'
import WorkshopHeader from '../_components/startup-workshop/WorkshopHeader'
import WorkshopInstructor from '../_components/startup-workshop/WorkshopInstructor'
import WorkshopQuote from '../_components/startup-workshop/WorkshopQuote'
import WorkshopSessions from '../_components/startup-workshop/WorkshopSessions'

export const metadata: Metadata = {
  title: 'Tisacode | Startup First Principles Workshop',
  description:
    'A 1-hour online workshop + Q&A on May 16th exploring entrepreneurship first principles: good questions, leverage, edges, lean methodology, AI integration, side hustles, and programming.',
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

        <WorkshopInstructor />
        <Spacer size="large" />

        <WorkshopDetails />
        <Spacer size="large" />

        <div className="title">Join the Workshop</div>
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
          alt="Entrepreneurship First Principles Workshop"
          fill
          className="object-cover"
          sizes="50vw"
          priority
        />
        <div className="action sticky top-0 max-w-full break-words hyphens-auto">
          Master the first principles of entrepreneurship.
        </div>
      </div>
    </div>
  )
}
