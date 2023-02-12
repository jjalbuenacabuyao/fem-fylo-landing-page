import React from "react";
import { logo } from "../assets";

const Logo = ({ className }) => {
  return (
    <a href="#" className={className}>
      <img src={logo} alt="FYLO logo" />
    </a>
  );
};

export default Logo;
