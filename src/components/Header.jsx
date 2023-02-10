import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='px-20-80 py-24-74 flex justify-between items-center'>
      <Logo className="w-20" />
      <Nav />
    </header>
  )
}

export default Header