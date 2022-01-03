import React from "react";
import "./inputTodo.css";

function InputTodo({ onClick, onChange, ...props }) {
  if (!onClick) {
    return;
  }
  return (
    <div>
      <form>
        <input className="input"  {...props} />
      </form>
    </div>
  );
}

export default InputTodo;
