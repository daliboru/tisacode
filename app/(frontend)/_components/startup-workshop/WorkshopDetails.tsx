import React from 'react'
import Spacer from '../../../../components/Spacer'

const WorkshopDetails: React.FC = () => {
  return (
    <>
      <div className="title">Who Should Attend?</div>
      <Spacer size="small" />
      <div className="text">
        • Aspiring entrepreneurs looking to validate their ideas
        <br />
        • Side hustlers ready to take their projects to the next level
        <br />
        • Professionals interested in first-principles thinking
        <br />• Anyone who wants to build something meaningful in the AI era
      </div>
      <Spacer size="large" />

      <div className="title">Workshop Details</div>
      <Spacer size="small" />
      <div className="text">
        <strong>Date:</strong> May 16th, 2024
        <br />
        <strong>Time:</strong> 5pm CET (8am PT), 1h + Q&A
        <br />
        <strong>Format:</strong> Online with live interaction
        <br />
        <strong>Cost:</strong> Free, but registration required
        <br />
        <strong>Recording:</strong> Available for registered participants
      </div>
    </>
  )
}

export default WorkshopDetails
