import React from 'react'
import {logo} from "../assets"

const Logo = ({className}) => {
  return (
    <a href="#">
      <img src={logo} alt="FYLO logo" className={className}/>
    </a>
  )
}

export default Logo