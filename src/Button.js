import React from "react";

const Button = props => {
  const buttonClass = props.buttonClass !== undefined ? props.buttonClass : "";

  return (
    <div
      id={props.buttonID}
      className={`button ${buttonClass}`}
      onClick={props.click}
    >
      {props.buttonText}
    </div>
  );
};

export default Button;
