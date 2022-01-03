import React from "react";
import "./inputTodo.css";

function InputTodo({ onClick,onChange, ...props }) {
  if (!onClick) {
    return;
  }

  return (
    <div>
      <form>
        <input className="input" onChange={onChange} {...props} />
        <button type="submit" onClick={onClick}>
          Add
        </button>
      </form>
    </div>
  );
}

export default InputTodo;
