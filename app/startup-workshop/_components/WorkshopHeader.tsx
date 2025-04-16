import React from 'react'
import Spacer from '../../../components/Spacer'

const WorkshopHeader: React.FC = () => {
  return (
    <>
      <div className="section">AI-Era Startup Workshop</div>
      <Spacer size="medium" />

      <div className="hero-message">
        {`Three sessions where we'll teach you to build something so original, even the algorithms
        will do a double-take.`}
      </div>
    </>
  )
}

export default WorkshopHeader