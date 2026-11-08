import React from 'react'
import Spacer from '../../../../components/Spacer'

const principles = [
  {
    title: 'Change is the only spec.',
    description:
      'Your market will move. Your roadmap will move. We build systems that take a new requirement without tearing the walls open.',
  },
  {
    title: 'No bare wires.',
    description:
      "We don't ship what we wouldn't run ourselves. Quality is how the work gets done from the first commit, so your product is reliable from the first release.",
  },
  {
    title: 'Small releases. Often.',
    description:
      "Small, frequent releases mean small, cheap mistakes. You see working software early, tell us what's off, and we fix it while it's still a small fix.",
  },
  {
    title: 'We ask why.',
    description:
      'A ticket tells us what to build. We want to know why, because half the time the real problem sits one room over.',
  },
  {
    title: 'Someone has to live here.',
    description:
      "We pick maintainability over the quick hack. Some day, someone will open this code at 2 a.m. We'd like them to find labels on the fuse box.",
  },
  {
    title: 'Agile, minus the theatre.',
    description:
      'We keep the agile practices that work (short cycles, honest demos, a backlog someone actually reads) and drop the ceremonies that only produce more meetings.',
  },
]

const WorkPhilosophy: React.FC = () => {
  return (
    <>
      <div className="section">House rules.</div>
      <Spacer size="medium" />
      <div className="subtitle">
        A few things we hold to, whatever framework is in fashion this year. Oh, and the name: Tisa
        is the river our founder grew up on.
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
