import React from 'react'
import Spacer from '../../../../components/Spacer'

const WorkshopDetails: React.FC = () => {
  return (
    <>
      <div className="title">Who Should Attend?</div>
      <Spacer size="small" />
      <div className="text">
        • <span className="font-bold">Software engineers</span> who want to create solutions with
        measurable business impact rather than just meeting technical specifications
        <br />• <span className="font-bold">Product managers</span> looking to better translate user
        needs into viable technical solutions that drive business value
        <br />• <span className="font-bold">Tech leads</span> and{' '}
        <span className="font-bold">engineering managers</span> responsible for guiding teams toward
        business-aligned outcomes and improving project success rates
        <br />• <span className="font-bold">Business stakeholders</span> who need to understand how
        technology investments directly connect to ROI and business growth
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
