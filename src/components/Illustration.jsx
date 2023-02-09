import React from 'react'

const Illustration = ({src, altText, className}) => {
  return (
    <div>
      <img src={src} alt={altText} className={className} />
    </div>
  )
}

export default Illustration