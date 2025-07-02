import React from 'react'
import Spacer from '../../../../components/Spacer'

const CTA: React.FC = () => {
  return (
    <>
      <div className="section">Ready to turn your tech challenges into growth opportunities?</div>
      <Spacer size="medium" />
      <div className="flex justify-center">
        <a
          href="#contact"
          className="bg-black text-white py-3 px-6 rounded-lg text-lg font-semibold"
        >
          {"Let's Talk"}
        </a>
      </div>
      <Spacer size="large" />
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
