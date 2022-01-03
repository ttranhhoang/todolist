import React from "react";

function Button({ children, onClick }) {
  if (!onClick) {
    return;
  }
  return <button onClick={()=>onClick}>{children}</button>;
}

export default Button;
