import React from 'react'
import Spacer from '../../../../components/Spacer'

const earlyStageServices = [
  {
    title: 'Product & tech validation.',
    description:
      'Got an idea and a deadline? We define the MVP, map the one user journey that matters, and plan the leanest tech that can test your assumptions. Before you put serious money in.',
  },
  {
    title: 'MVP & core product.',
    description:
      'From validated idea to something people can use and pay for. We build the core fast and properly, on a foundation that can carry whatever comes next.',
  },
]

const establishedServices = [
  {
    title: 'Tech & product audit.',
    description:
      'Something feels slow and nobody can say why. We go through your systems, processes and team structure, and come back with a map of the bottlenecks and the places with room to grow.',
  },
  {
    title: 'Legacy modernisation.',
    description:
      'The hallway-switch, bathroom-light kind of system. We modernise it piece by piece, so it runs faster, costs less to maintain, and can finally take new features.',
  },
  {
    title: 'Team enablement.',
    description:
      'Your in-house team, with the habits of a high-performing one. From CI/CD pipelines to agile workflows, we set the practices up with your people, then step back.',
  },
]

const Services: React.FC = () => {
  return (
    <>
      <div id="services" className="section">
        What we do.
      </div>
      <Spacer size="medium" />
      <div className="subtitle">
        Product engineering for tech businesses. We validate ideas, build products and rewire the
        ones that already run.
      </div>
      <Spacer size="large" />

      <div className="title">Early stage. Validate, then build.</div>
      <Spacer size="medium" />
      {earlyStageServices.map((service, index) => (
        <div key={index} className="mb-medium">
          <div className="font-bold subtitle">{service.title}</div>
          <Spacer size="small" />
          <div className="text">{service.description}</div>
        </div>
      ))}

      <Spacer size="large" />

      <div className="title">Established. Audit, rewire, grow.</div>
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
