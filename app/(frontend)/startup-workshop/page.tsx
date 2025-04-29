import config from '@payload-config'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import Logo from '../../../components/Logo'
import Spacer from '../../../components/Spacer'
import Footer from '../_components/landing/Footer'
import WorkshopDetails from '../_components/startup-workshop/WorkshopDetails'
import WorkshopForm from '../_components/startup-workshop/WorkshopForm'
import WorkshopHeader from '../_components/startup-workshop/WorkshopHeader'
import WorkshopInstructor from '../_components/startup-workshop/WorkshopInstructor'
import WorkshopQuote from '../_components/startup-workshop/WorkshopQuote'
import WorkshopSessions from '../_components/startup-workshop/WorkshopSessions'

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config })

  const workshopBanner = await payload.find({
    collection: 'media',
    where: {
      alt: {
        equals: 'workshop-may-2025',
      },
    },
  })

  return {
    title: 'Tisacode | Beyond the Brief: Engineering Solutions That Drive Real Business Value',
    description:
      'A 1-hour online workshop + Q&A on May 15th exploring how to move past superficial and address root causes with scalable, sustainable solutions.',
    keywords: [
      'engineering solutions',
      'business value',
      'software development',
      'technical strategy',
      'software architecture',
      'business impact',
      'engineering excellence',
      'technical leadership',
    ],
    openGraph: {
      title: 'Tisacode | Beyond the Brief: Engineering Solutions That Drive Real Business Value',
      description:
        'A 1-hour online workshop + Q&A on May 15th exploring how to move past superficial and address root causes with scalable, sustainable solutions.',
      url: 'https://www.tisacode.com/startup-workshop',
      type: 'website',
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SERVER_URL}${workshopBanner.docs[0].url}`,
          width: 1200,
          height: 630,
          alt: 'Beyond the Brief: Engineering Solutions That Drive Real Business Value',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Tisacode | Beyond the Brief: Engineering Solutions That Drive Real Business Value',
      description:
        'A 1-hour online workshop + Q&A on May 15th exploring how to move past superficial and address root causes with scalable, sustainable solutions.',
      images: [`${process.env.NEXT_PUBLIC_SERVER_URL}${workshopBanner.docs[0].url}`],
    },
    authors: [{ name: 'Dalibor Belic', url: 'https://tisacode.com' }],
    robots: 'index, follow',
    themeColor: '#FB8B02',
    icons: {
      icon: '/favicon.ico',
    },
  }
}

export default async function StartupWorkshopPage() {
  const payload = await getPayload({ config })

  const workshopBanner = await payload.find({
    collection: 'media',
    where: {
      alt: {
        equals: 'workshop-may-2025',
      },
    },
  })

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
          src={workshopBanner.docs[0].url!}
          alt="Beyond the Brief: Engineering Solutions That Drive Real Business Value"
          fill
          className="object-cover"
          sizes="50vw"
          priority
        />
        <div className="action sticky top-0 max-w-full break-words hyphens-auto">
          First Principles. Lasting Impact.
        </div>
      </div>
    </div>
  )
}
