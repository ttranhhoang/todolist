import React from "react";
import "./inputTodo.css";

function InputTodo({ ...props }) {
  return (
    <>
      <input className="input" {...props} ref />
    </>
  );
}

export default InputTodo;
