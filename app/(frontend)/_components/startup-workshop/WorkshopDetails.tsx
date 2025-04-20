import React from 'react'
import Spacer from '../../../../components/Spacer'

const WorkshopDetails: React.FC = () => {
  return (
    <>
      <div className="title">Who Needs This?</div>
      <Spacer size="small" />
      <div className="text">
        • Shower-thought millionaires whose ideas evaporate with the steam
        <br />
        • Corporate hostages with Stockholm syndrome and a side hustle itch
        <br />•{' '}
        {`People who've uttered "I could build that better" more than three times this month`}
        <br />•{' '}
        {`Anyone who's tired of watching others build mediocre versions of their brilliant ideas`}
      </div>
      <Spacer size="large" />

      <div className="title">The When & Where</div>
      <Spacer size="small" />
      <div className="text">
        Three consecutive Fridays, starting May 16th. 7-9pm CET.
        <br />
        In person (TBA) and Online - with cameras on (yes, we want to see your face when your idea
        finally clicks).
        <br />
        Recordings available for the responsible adults among you, but live attendance comes with
        the adrenaline rush you need to actually build something.
      </div>
    </>
  )
}

export default WorkshopDetails
