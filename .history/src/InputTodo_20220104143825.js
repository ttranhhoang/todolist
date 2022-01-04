import React from "react";
import "./inputTodo.css";

function InputTodo({text ...props }) {
  return (
    <>
      <input className="input" ref={textRef} {...props}  />
    </>
  );
}

export default InputTodo;
