import React from 'react'
import Spacer from '../../../../components/Spacer'

const WorkshopDetails: React.FC = () => {
  return (
    <>
      <div className="title">Who Should Attend?</div>
      <Spacer size="small" />
      <div className="text">
        • Software Engineers looking to increase their business impact
        <br />
        • Tech Leads and Engineering Managers driving strategic decisions
        <br />
        • Product Engineers focused on value-driven development
        <br />• Developers who want to bridge the gap between code and business outcomes
      </div>
      <Spacer size="large" />

      <div className="title">Workshop Details</div>
      <Spacer size="small" />
      <div className="text">
        <strong>Date:</strong> May 15th, 2024
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
