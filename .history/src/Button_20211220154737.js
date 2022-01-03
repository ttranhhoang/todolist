import React from "react";
import IconButton from "@mui/material/IconButton";
import "./Button.css";
function Button({ children,onClick}) {
  // if (!onClick) {
  //   return;
  // }
  return <IconButton onClick ={e=>e.preventDefault()}className="button">{children}</IconButton>;
}

export default Button;
