import React from "react";

const Button = ({
  border,
  children,
  background,
  textColor,
  onClick,
  borderRadius,
  padding,
}) => {
  return (
    <button
      style={{
        border: border ? border : "none",
        backgroundColor: background ? background : "#fff",
        color: textColor ? textColor : "#000",
        borderRadius: borderRadius ? borderRadius : "0px",
        padding: padding ? padding : "0px",
      }}
      onClick={() => onClick()}
    >
        {children}
    </button>
  );
};

export default Button;
