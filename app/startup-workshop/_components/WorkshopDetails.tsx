import React from 'react'
import Spacer from '../../../components/Spacer'

const WorkshopDetails: React.FC = () => {
  return (
    <>
      <div className="title">Who Should Join?</div>
      <Spacer size="small" />
      <div className="text">
        • People who&apos;ve had an idea in the shower and forgotten it by breakfast
        <br />
        • Professionals tired of building someone else&apos;s dream
        <br />
        • Anyone who&apos;s ever said &quot;I could build something better than this&quot;
        <br />• Humans who want to create something AI can&apos;t replicate
      </div>
      <Spacer size="large" />

      <div className="title">When & Where</div>
      <Spacer size="small" />
      <div className="text">
        Three consecutive Thursdays, starting June 6th.
        <br />
        7-9pm CET. Online, interactive, and surprisingly fun.
        <br />
        Recordings available, but live attendance strongly encouraged for maximum chaos and
        creativity.
      </div>
    </>
  )
}

export default WorkshopDetails