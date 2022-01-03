import React from "react";

function Button({ children, onClick }) {
  if (!onClick) {
    return;
  }
  return (
    <button onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
