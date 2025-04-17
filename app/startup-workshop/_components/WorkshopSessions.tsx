import React from 'react'
import Spacer from '../../../components/Spacer'

const WorkshopSessions: React.FC = () => {
  return (
    <>
      <div className="title">{'The Liberation Process'}</div>
      <Spacer size="small" />
      <div className="text">
        <div className="mb-4">
          <span className="font-bold">{`Session 1: "Idea Archaeology"`}</span>
          <p>{`We'll excavate that idea you buried under "someday" and "maybe later." 
          Dust it off, examine it under the light of 2024, and see if it still has a pulse. 
          Spoiler alert: it does, and it's stronger than you think.`}</p>
        </div>

        <div className="mb-4">
          <span className="font-bold">{`Session 2: "Minimum Viable Rebellion"`}</span>
          <p>{`While everyone else is writing business plans that will never see daylight, 
          you'll build something real using AI tools as your accomplices. By the end of this session, 
          you'll have something that works—ugly, wobbly, but gloriously alive.`}</p>
        </div>

        <div className="mb-4">
          <span className="font-bold">{`Session 3: "The Premature Launch"`}</span>
          <p>{`Your creation isn't ready? Perfect. We'll push it out of the nest anyway and watch it
            either soar or plummet spectacularly. Either way, you'll learn more in this controlled
            crash than months of theoretical planning.`}</p>
        </div>
      </div>
    </>
  )
}

export default WorkshopSessions
