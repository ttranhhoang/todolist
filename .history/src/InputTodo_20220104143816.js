import React from "react";
import "./inputTodo.css";

function InputTodo({ ...props }) {
  return (
    <>
      <input className="input" ref={text} {...props}  />
    </>
  );
}

export default InputTodo;
