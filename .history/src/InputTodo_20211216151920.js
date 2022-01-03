import React from "react";
import "./inputTodo.css";

function InputTodo({ onClick,on, ...props }) {
  if (!onClick) {
    return;
  }

  return (
    <div>
      <form>
        <input className="input" onChange={settext} {...props} />
        <button type="submit" onClick={onClick}>
          Add
        </button>
      </form>
    </div>
  );
}

export default InputTodo;
