import React from 'react'
import Spacer from '../../../../components/Spacer'

const earlyStageServices = [
  {
    title: 'Product & Tech Validation',
    description:
      "Got an idea? We help you fail fast or validate quickly. We'll define your MVP, map the core user journey, and create a lean technical strategy to test your assumptions before you invest heavily.",
  },
  {
    title: 'MVP & Core Product Development',
    description:
      'From a validated idea to a market-ready product. We build the core of your application with a focus on speed, quality, and scalability, ensuring you have a solid foundation to grow on.',
  },
]

const establishedServices = [
  {
    title: 'Tech & Product Audit',
    description:
      'Is your tech holding you back? We conduct a deep-dive into your existing systems, processes, and team structure to identify bottlenecks and opportunities for growth.',
  },
  {
    title: 'Legacy Modernisation & Optimisation',
    description:
      'Unlock the hidden value in your existing tech. We transform legacy systems into modern, efficient assets, improving performance, reducing maintenance costs, and enabling new features.',
  },
  {
    title: 'Strategic Team Enablement',
    description:
      'Empower your in-house team. We help you implement the practices and processes of high-performing tech teams, from CI/CD pipelines to agile workflows, fostering a culture of excellence.',
  },
]

const Services: React.FC = () => {
  return (
    <>
      <div id="services" className="section">
        How We Help
      </div>
      <Spacer size="medium" />
      <div className="subtitle">
        Strategic product development for tech-driven businesses. We help you validate, build, and
        optimize.
      </div>
      <Spacer size="large" />

      <div className="title">For Early-Stage Businesses: Validate & Build</div>
      <Spacer size="medium" />
      {earlyStageServices.map((service, index) => (
        <div key={index} className="mb-medium">
          <div className="font-bold subtitle">{service.title}</div>
          <Spacer size="small" />
          <div className="text">{service.description}</div>
        </div>
      ))}

      <Spacer size="large" />

      <div className="title">For Established Businesses: Optimize & Grow</div>
      <Spacer size="medium" />
      {establishedServices.map((service, index) => (
        <div key={index} className="mb-medium">
          <div className="font-bold subtitle">{service.title}</div>
          <Spacer size="small" />
          <div className="text">{service.description}</div>
        </div>
      ))}
    </>
  )
}

export default Services
