import React from 'react'
import Spacer from '../../../../components/Spacer'

const WorkshopHeader: React.FC = () => {
  return (
    <>
      <div className="section">
        Beyond the Brief: Engineering Solutions That Drive Real Business Value
      </div>
      <Spacer size="medium" />

      <div className="font-bold">A 1-hour online workshop + Q&A on May 15th </div>

      <div className="hero-message">
        {`How to move past superficial barrier of communicating problems and address root of why up to 85% of tech projects fail with scalable, sustainable solutions. Don’t just solve what users ask for—solve what they need. Engineer lean systems that turn those needs into quantifiable business gains.`}
      </div>
    </>
  )
}

export default WorkshopHeader
