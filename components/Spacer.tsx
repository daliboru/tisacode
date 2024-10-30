import React from 'react'

interface SpacerProps {
  size: 'extrasmall' | 'small' | 'medium' | 'semilarge' | 'large'
}

const sizeMap = {
  extrasmall: 'h-extrasmall',
  small: 'h-small',
  medium: 'h-medium',
  semilarge: 'h-semilarge',
  large: 'h-large',
}

const Spacer: React.FC<SpacerProps> = ({ size }) => {
  return <div className={sizeMap[size]} />
}

export default Spacer
