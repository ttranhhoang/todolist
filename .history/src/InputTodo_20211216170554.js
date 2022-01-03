import React from "react";
import "./inputTodo.css";

function InputTodo({ ...props }) {
  return (
    <div>
      
        <input className="input" {...props} />
    >
    </div>
  );
}

export default InputTodo;
