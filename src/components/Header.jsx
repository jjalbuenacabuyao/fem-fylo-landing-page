import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='px-5 py-6 flex justify-between items-between'>
      <Logo className="w-20" />
      <Nav />
    </header>
  )
}

export default Header