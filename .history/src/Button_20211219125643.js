import React from "react";

import "./Button.css";
function Button({ children, onClick }) {
  if (!onClick) {
    return;
  }
  return <IconButton  className='btn button' onClick={onClick}>{children}</IconButton>;
}

export default Button;
