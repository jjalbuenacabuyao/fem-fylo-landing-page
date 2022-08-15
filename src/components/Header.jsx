import React from "react";
import logo from '../assets/logo.svg';

const Header = () => (
  <header className='flex items-center justify-between py-5 px-[1.125rem]'>
    <img src={logo} alt="" className="w-[4.6875rem] h-[1.5rem]"/>
    <nav>
      <ul className='flex gap-5 text-[0.75rem]'>
        <li><a href="#">Features</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Sign In</a></li>
      </ul>
    </nav>
  </header>
)

export default Header