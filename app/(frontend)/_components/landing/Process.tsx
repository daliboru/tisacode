import React from 'react'
import Spacer from '../../../../components/Spacer'

const stages = [
  {
    title: '1. Alignment & Strategy',
    description:
      "We start by deeply understanding your business goals. Through collaborative workshops, we define the problem, map the strategy, and ensure we're set up for success.",
  },
  {
    title: '2. Lean Execution',
    description:
      'We work in iterative cycles, delivering tangible progress every two weeks. This keeps you in the loop, allows for quick feedback, and ensures we’re always focused on the highest-value work.',
  },
  {
    title: '3. Seamless Handover & Support',
    description:
      'Our goal is to make you self-sufficient. We ensure a smooth transition with thorough documentation, training, and post-launch support to empower your team for the long term.',
  },
]

const Process: React.FC = () => {
  const board = Array(3)
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
      <div className="section">Our Engagement Model</div>
      <Spacer size="medium" />
      <div className="subtitle">
        A transparent, collaborative, and lean process designed for results.
      </div>
      <Spacer size="medium" />
      <div className="w-full">
        <div className="hidden relative md:grid grid-cols-2 gap-x-large gap-y-small after:absolute after:top-0 after:bottom-0 after:left-1/2 after:w-1 after:-ml-0.5 after:bg-black">
          {board.flat().map(({ id, isText }) => (
            <div key={id}>
              {isText && parseInt(id) < stages.length && (
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
        {/* Mobile */}
        <div className="md:hidden flex flex-col">
          {stages.map((stage, index) => (
            <div key={index}>
              <div className="flex flex-col">
                <div className="title">{stage.title}</div>
                <Spacer size="small" />
                <div className="text">{stage.description}</div>
              </div>
              {index !== stages.length - 1 && <Spacer size="medium" />}
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block">
        <div className="w-1/2">
          <div className="border-r-[10px] border-r-transparent border-t-[20px] border-t-black border-l-[10px] border-l-transparent relative float-end left-[10px]" />
        </div>
      </div>
    </>
  )
}

export default Process
