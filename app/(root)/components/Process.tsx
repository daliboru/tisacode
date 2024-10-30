import React from 'react'
import Spacer from '../../../components/Spacer'

const stages = [
  {
    title: '1. Initial Contact',
    description:
      'We start by understanding your business needs and challenges. Through initial calls and a pre-discovery phase, we ensure mutual fit and prepare for a productive engagement.',
  },
  {
    title: '2. Discovery Phase',
    description:
      'Our team conducts in-depth workshops and analysis to map your value streams, identify technical requirements, and design the optimal solution for your business goals.',
  },
  {
    title: '3. Engagement Setup',
    description:
      'Once terms are agreed, we assemble your dedicated team, establish development environments, and kick off the project with clear objectives and technical foundations.',
  },
  {
    title: '4. Development Cycles',
    description:
      "Using iterative development cycles, we deliver working software every two weeks. Regular demos and feedback sessions ensure we're always aligned with your expectations.",
  },
  {
    title: '5. Transition & Handover',
    description:
      'As we approach completion, we focus on thorough testing, documentation, and knowledge transfer to ensure a smooth transition to your team.',
  },
  {
    title: '6. Post-Launch Support',
    description:
      "We don't just deliver and leave. Our hypercare period ensures your system runs smoothly, while we train your team and establish a sustainable maintenance plan.",
  },
]

const Process: React.FC = () => {
  const board = Array(6)
    .fill(null)
    .map((_, rowIndex) =>
      Array(2)
        .fill(null)
        .map((_, colIndex) => ({
          id: `${rowIndex}-${colIndex}`,
          isText: (rowIndex + colIndex) % 2 === 0,
        })),
    )

  return (
    <>
      <div className="section">Our Process</div>
      <Spacer size="medium" />
      <div className="subtitle">
        A proven technical delivery approach combining agile practices with engineering excellence.
      </div>
      <Spacer size="medium" />
      <div className="w-full">
        <div className="relative grid grid-cols-2 gap-x-large gap-y-small after:absolute after:top-0 after:bottom-0 after:left-1/2 after:w-1 after:-ml-0.5 after:bg-black">
          {board.flat().map(({ id, isText }) => (
            <div key={id}>
              {isText && (
                <>
                  <div className="title">{stages[parseInt(id)].title}</div>
                  <Spacer size="medium" />
                  <div className="text">{stages[parseInt(id)].description}</div>
                </>
              )}
            </div>
          ))}
          <Spacer size="small" />
        </div>
      </div>
      <div className="w-1/2">
        <div className="border-r-[10px] border-r-transparent border-t-[20px] border-t-black border-l-[10px] border-l-transparent relative float-end left-[10px]" />
      </div>
      <Spacer size="medium" />
      <Spacer size="small" />
      <div className="place-self-center">
        <input
          type="text"
          placeholder="Insert your goal..."
          className="subtitle rounded-lg p-2 border-black border-2"
        />
      </div>
    </>
  )
}

export default Process
