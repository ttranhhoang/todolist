import React from "react";
import IconButton from "@mui/material/IconButton";
import "./Button.css";
function Button({ children, onClick, fontSize }) {
  if (!onClick) {
    return;
  }
  return (
    <IconButton fontSize="" className="button" onClick={onClick}>
      {children}
    </IconButton>
  );
}

export default Button;
