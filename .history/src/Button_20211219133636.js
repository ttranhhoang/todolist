import React from "react";
import IconButton from "@mui/material/IconButton";
import "./Button.css";
function Button({ children, onClick }) {
  if (!onClick) {
    return;
  }
  return (
    <IconButton fontSize="small" className="btn button" onClick={onClick}>
      {children}
    </IconButton>
  );
}

export default Button;
