import React from "react";

function Button({ children, onClick }) {
  if (!onClick) {
    return;
  }
  return <button onClick={onLc}>{children}</button>;
}

export default Button;
