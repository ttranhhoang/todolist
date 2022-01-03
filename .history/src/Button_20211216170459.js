import React from "react";

function Button({ children, onClick }) {
  if (!onClick) {
    return;
  }
  return <button onClick={onCl}>{children}</button>;
}

export default Button;
