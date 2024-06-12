import { Box } from "@mui/material";
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
    <Box
      component={"button"}
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
    </Box>
  );
};

export default Button;
