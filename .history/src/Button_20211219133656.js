import React from "react";
import IconButton from "@mui/material/IconButton";
import "./Button.css";
function Button({ children, onClick }) {
  if (!onClick) {
    return;
  }
  return (
    <IconButton fontSize="'medium'" className="btn button" onClick={onClick}>
      {children}
    </IconButton>
  );
}

export default Button;
