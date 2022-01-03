import React from "react";
import "./Button.css";
function Button({ children, onClick }) {
  if (!onClick) {
    return;
  }
  return <button className='btn btn' onClick={onClick}>{children}</button>;
}

export default Button;
