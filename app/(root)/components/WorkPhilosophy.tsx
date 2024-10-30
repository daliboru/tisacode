import React from 'react'
import Spacer from '../../../components/Spacer'

const commandments = [
  {
    title: 'Evolutionary Architecture',
    description:
      'We design systems that embrace change, using modularity and clean architecture to ensure your software can evolve with your business needs.',
  },
  {
    title: 'Technical Excellence',
    description:
      'Quality is non-negotiable. We practice test-driven development, continuous refactoring, and pair programming to maintain high standards.',
  },
  {
    title: 'Continuous Delivery',
    description:
      'Small, frequent releases reduce risk and accelerate feedback. We build robust deployment pipelines for reliable software delivery.',
  },
  {
    title: 'Developer Empowerment',
    description:
      'Developers are strategic partners, not code manufacturers. We foster autonomy, mastery, and purpose in technical decision-making.',
  },
  {
    title: 'Sustainable Practices',
    description:
      'We prioritise long-term maintainability over short-term gains, ensuring your codebase remains healthy and adaptable.',
  },
  {
    title: 'Agile Technical Practices',
    description:
      'We combine XP practices with modern development approaches to deliver value continuously and reliably.',
  },
]

const WorkPhilosophy: React.FC = () => {
  return (
    <>
      <div className="section">Work Philosophy</div>
      <Spacer size="medium" />
      <div className="subtitle">
        Our approach combines modern engineering practices with timeless principles of software
        craftsmanship.
      </div>
      <Spacer size="medium" />
      {commandments.map((commandment, index) => (
        <div key={index}>
          <div className="flex flex-row border-b-4 border-black pb-medium">
            <h1 className="w-1/2 title">{commandment.title}</h1>
            <p className="w-1/2 ml-3 text">{commandment.description}</p>
          </div>
          {index < commandments.length - 1 && <Spacer size="medium" />}
        </div>
      ))}
    </>
  )
}

export default WorkPhilosophy
