import React from 'react'
import Spacer from '../../../../components/Spacer'

const WorkshopHeader: React.FC = () => {
  return (
    <>
      <div className="section">Entrepreneurship First Principles Workshop</div>
      <Spacer size="medium" />

      <div className="hero-message">
        {`Join us on May 15th at 5pm CET (8am PT) for a 1h + Q&A that will transform how you think about entrepreneurship. 
        Learn the fundamental principles that separate successful founders from the rest.`}
      </div>
    </>
  )
}

export default WorkshopHeader
