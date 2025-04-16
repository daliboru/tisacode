import React from 'react'
import Spacer from '../../../components/Spacer'

const CTA: React.FC = () => {
  return (
    <>
      <div className="section">
        Leverage code,
        <br /> drive value.
      </div>
      <Spacer size="medium" />
      <div className="relative w-full pb-[57%]">
        <iframe
          src="https://giphy.com/embed/mi6DsSSNKDbUY"
          className="absolute w-full h-full "
          allowFullScreen
          title="Rocket launch"
        />
      </div>
    </>
  )
}

export default CTA
