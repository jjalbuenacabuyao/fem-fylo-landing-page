import React from "react";
import logo from '../assets/logo.svg';

const Header = () => (
  <header>
    <img src={logo} alt=""/>
    <nav>
      <ul>
        <li><a href="#">Features</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Sign In</a></li>
      </ul>
    </nav>
  </header>
)

export default Header