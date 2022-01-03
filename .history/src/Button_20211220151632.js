import React from "react";
import IconButton from "@mui/material/IconButton";
import "./Button.css";
function Button({ ...props,children }) {
  // if (!onClick) {
  //   return;
  // }
  return <IconButton {...props}className="button">{children}</IconButton>;
}

export default Button;
