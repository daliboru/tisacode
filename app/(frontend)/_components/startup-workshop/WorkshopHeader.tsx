import React from 'react'
import Spacer from '../../../../components/Spacer'

const WorkshopHeader: React.FC = () => {
  return (
    <>
      <div className="section">
        Beyond the Brief: Engineering Solutions That Drive Real Business Value
      </div>
      <Spacer size="medium" />

      <div className="hero-message">
        {`A 1-hour online workshop + Q&A on May 15th exploring how to move past superficial and address root causes with scalable, sustainable solutions. Don’t just solve what users ask for—solve what they need. Engineer lean systems that turn those needs into quantifiable business gains.`}
      </div>
    </>
  )
}

export default WorkshopHeader
