import React from "react";

function Button({ child, onClick }) {
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
