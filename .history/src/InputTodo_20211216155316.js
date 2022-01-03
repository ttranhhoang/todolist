import React from "react";
import "./inputTodo.css";

function InputTodo({ ...props }) {
  return (
    <div>
      <form>
        <input className="input" {...props} />
      </form>
    </div>
  );
}

export default InputTodo;
