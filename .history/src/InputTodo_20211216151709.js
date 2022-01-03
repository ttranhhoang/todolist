import React from "react";
import "./inputTodo.css";

function InputTodo({ onClick,settext,setedit, ...props }) {
  if (!onClick) {
    return;
  }

  return (
    <div>
      <form>
        <input className="input" settext {...props} />
        <button type="submit" onClick={onClick}>
          Add
        </button>
      </form>
    </div>
  );
}

export default InputTodo;