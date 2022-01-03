import React from "react";
import "./Button"
function Button({ children, onClick }) {
  if (!onClick) {
    return;
  }
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
