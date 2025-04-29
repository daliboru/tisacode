import React from 'react'
import Spacer from '../../../../components/Spacer'

const WorkshopSessions: React.FC = () => {
  return (
    <>
      <div className="title">First Principles of Entrepreneurship</div>
      <Spacer size="small" />
      <div className="text">
        <div className="mb-4">
          <span className="font-bold">{`Asking the Right Questions`}</span>
          <p>{`Learn how to frame problems in ways that lead to breakthrough solutions. 
          The quality of your questions determines the quality of your business.`}</p>
        </div>

        <div className="mb-4">
          <span className="font-bold">{`Finding Your Edge & Leverage`}</span>
          <p>{`Discover your unfair advantages and how to apply leverage to multiply your impact. 
          We'll explore how to identify and exploit asymmetric opportunities in the market.`}</p>
        </div>

        <div className="mb-4">
          <span className="font-bold">{`Lean Methodology & Rapid Iteration`}</span>
          <p>{`Master the art of building, measuring, and learning with minimal resources. 
          Learn how to validate ideas quickly and pivot when necessary.`}</p>
        </div>

        <div>
          <span className="font-bold">{`AI Integration & Programming`}</span>
          <p>{`Harness AI as your co-founder and learn how programming skills can accelerate your 
          side hustle. We'll cover practical tools and workflows for non-technical founders.`}</p>
        </div>
      </div>
    </>
  )
}

export default WorkshopSessions
