import React from 'react'
import Spacer from '../../../components/Spacer'

const WorkshopSessions: React.FC = () => {
  return (
    <>
      <div className="title">{"What You'll Experience"}</div>
      <Spacer size="small" />
      <div className="text">
        <div className="mb-4">
          <span className="font-bold">{`Session 1: "The Human Advantage"`}</span>
          <p>{`While AI churns out cookie-cutter solutions, we'll help you find the weird, wonderful idea 
          only your particular brain could create. The kind that makes venture capitalists say, 
          "I don't get it, but here's money."`}</p>
        </div>

        <div className="mb-4">
          <span className="font-bold">{`Session 2: "Prototype Like Nobody's Watching"`}</span>
          <p>{`Build fast, break things, fix them with duct tape. We'll show you how to create 
      a working prototype while your competitors are still formatting their spreadsheets.`}</p>
        </div>

        <div className="mb-4">
          <span className="font-bold">{`Session 3: "Launch Before You're Ready"`}</span>
          <p>
            Perfect is the enemy of shipped. Learn to release your creation into the wild before
            your inner critic has time to talk you out of it.
          </p>
        </div>
      </div>
    </>
  )
}

export default WorkshopSessions