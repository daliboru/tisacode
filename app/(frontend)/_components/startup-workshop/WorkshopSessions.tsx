import React from 'react'
import Spacer from '../../../../components/Spacer'

const WorkshopSessions: React.FC = () => {
  return (
    <>
      <div className="title">First Principles of Creating Value</div>
      <Spacer size="small" />
      <div className="text">
        <div className="mb-4">
          <span className="font-bold">{`Asking the right questions`}</span>
          <p>{`Frame engineering problems through business impact lens. Learn to ask questions that uncover core value drivers and guide technical decisions.`}</p>
        </div>
        <div className="mb-4">
          <span className="font-bold">{`Breaking Down Complex Problems`}</span>
          <p>{`Decompose business challenges into fundamental components. Learn to identify core value drivers and translate them into technical solutions that matter.`}</p>
        </div>

        <div className="mb-4">
          <span className="font-bold">{`Engineering Leverage Points`}</span>
          <p>{`Spot high-impact opportunities where minimal engineering effort yields maximum business returns. Focus on solutions that create compound value over time.`}</p>
        </div>

        <div>
          <span className="font-bold">{`Rapid Value Validation`}</span>
          <p>{`Build quick prototypes that test business assumptions. Learn to measure engineering impact through revenue, cost savings, and market advantage metrics.`}</p>
        </div>
      </div>
    </>
  )
}

export default WorkshopSessions
