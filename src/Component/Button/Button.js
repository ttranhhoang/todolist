import React from "react";
import IconButton from "@mui/material/IconButton";
import "./Button.css";
function Button({ children, onClick, className }) {
  // if (!onClick) {
  //   return;
  // }
  return (
    <IconButton onClick={onClick} className={className}>
      {children}
    </IconButton>
  );
}

export default Button;
