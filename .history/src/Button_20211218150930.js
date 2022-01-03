import React from "react";
import "./"
function Button({ children, onClick }) {
  if (!onClick) {
    return;
  }
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
