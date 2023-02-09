import React from "react";

const Button = ({ text, className }) => {
  return (
    <button
      className={`bg-gradient-to-r from-accent-cyan to-accent-blue py-3 font-raleway font-bold leading-none rounded-full ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
