import React from "react";

function Button({ children, onClick }) {
  if (!onClick) {
    return;
  }
  return <button onClick={}>{children}</button>;
}

export default Button;
