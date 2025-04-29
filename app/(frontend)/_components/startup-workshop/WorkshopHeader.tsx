import React from 'react'
import Spacer from '../../../../components/Spacer'

const WorkshopHeader: React.FC = () => {
  return (
    <>
      <div className="section">Entrepreneurship First Principles Workshop</div>
      <Spacer size="medium" />

      <div className="hero-message">
        {`Join us on May 15th for a 1h + Q&A and let this workshop nudge you in the right direction when it comes to building a business.`}
      </div>
    </>
  )
}

export default WorkshopHeader
