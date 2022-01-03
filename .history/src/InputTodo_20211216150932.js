import React from "react";
import "./inputTodo.css";

function InputTodo({ onClick, ...props }) {
  if (!onClick) {
    return;
  }

  return (
    <div>
      <form>
        <input
          type="text"
          value={text}
          onChange={setText}
          className="input"
          {...inputProps}
        />
        <button type="submit" onClick={onClick}>
          Add
        </button>
      </form>
    </div>
  );
}

export default InputTodo;
