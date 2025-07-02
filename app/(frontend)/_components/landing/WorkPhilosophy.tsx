import React from 'react'
import Spacer from '../../../../components/Spacer'

const principles = [
  {
    title: 'Built to Adapt',
    description:
      'We design systems that embrace change, ensuring your technology can evolve with your market and business needs.',
  },
  {
    title: 'Quality as a Foundation',
    description:
      'Quality is non-negotiable. Our commitment to technical excellence mitigates risk and ensures your product is reliable from day one.',
  },
  {
    title: 'Momentum and Feedback',
    description:
      'Small, frequent releases reduce risk and accelerate feedback. This lean approach means we’re always building what’s most valuable and can adapt quickly.',
  },
  {
    title: 'A Partnership Approach',
    description:
      'We act as strategic partners, not just coders. This means fostering autonomy and purpose to solve your business challenges, not just complete tasks.',
  },
  {
    title: 'Long-Term Value',
    description:
      'We prioritize long-term maintainability over short-term gains, building a tech asset that remains healthy and adaptable for years to come.',
  },
  {
    title: 'Efficient & Effective',
    description:
      'We combine proven agile practices with modern development to deliver value continuously and reliably, ensuring efficiency and focus.',
  },
]

const WorkPhilosophy: React.FC = () => {
  return (
    <>
      <div className="section">Our Guiding Principles</div>
      <Spacer size="medium" />
      <div className="subtitle">
        Our approach blends modern engineering with timeless craftsmanship, treating software as a
        strategic asset, not a deliverable.
      </div>
      <Spacer size="medium" />
      {principles.map((principle, index) => (
        <div key={index}>
          <div className="flex flex-col md:flex-row border-b-4 border-black pb-medium">
            <h1 className="w-full md:w-1/2 title mb-2 md:mb-0">{principle.title}</h1>
            <p className="w-full md:w-1/2 md:ml-3 text">{principle.description}</p>
          </div>
          {index < principles.length - 1 && <Spacer size="medium" />}
        </div>
      ))}
    </>
  )
}

export default WorkPhilosophy
