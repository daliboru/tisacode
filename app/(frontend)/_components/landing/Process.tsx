import React from 'react'
import Spacer from '../../../../components/Spacer'

const stages = [
  {
    title: '1. Understand.',
    description:
      'Workshops first, code later. We learn your business goals, define the problem together and agree on a strategy before anyone opens an editor.',
  },
  {
    title: '2. Build in short cycles.',
    description:
      'Every two weeks you see working progress. You react, we adjust, and the most valuable work always goes first.',
  },
  {
    title: '3. Hand over.',
    description:
      'Our job is to make ourselves unnecessary. Documentation, training and post-launch support, so your team knows where every wire goes.',
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
      <div className="section">How we work.</div>
      <Spacer size="medium" />
      <div className="subtitle">Three steps. Out in the open.</div>
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
