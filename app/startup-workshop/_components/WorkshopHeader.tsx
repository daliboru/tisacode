import React from 'react'
import Spacer from '../../../components/Spacer'

const WorkshopHeader: React.FC = () => {
  return (
    <>
      <div className="section">Idea Resurrection Workshop</div>
      <Spacer size="medium" />

      <div className="hero-message">
        {`Your brilliant idea is trapped in your head, banging on the walls of your skull, 
        begging to be set free. This workshop is the jailbreak it's been waiting for.`}
      </div>
    </>
  )
}

export default WorkshopHeader