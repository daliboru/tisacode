import React from 'react'
import Spacer from '../../../components/Spacer'

const Footer: React.FC = () => {
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
          className="absolute w-full h-full"
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <Spacer size="small" />
      <div className="text">© TisaCode 2024</div>
    </>
  )
}

export default Footer
