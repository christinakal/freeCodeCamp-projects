import React from "react";

const Button = ({ name, handleClick, display }) => {
  return (
    <button id="display" onClick={() => handleClick(name)}>
      {name}
    </button>
  );
};
export default Button;
