import React from "react";
import "./Button.css";
function Button({ children, onClick }) {
  if (!onClick) {
    return;
  }
  return <button className='btn button' onClick={onClick}>{children}</button>;
}

export default Button;
