import React from "react";
import "./Button.css";
function Button({ children, onClick }) {
  if (!onClick) {
    return;
  }
  return <button classonClick={onClick}>{children}</button>;
}

export default Button;
