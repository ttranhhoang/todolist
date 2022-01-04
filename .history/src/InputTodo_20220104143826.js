import React from "react";
import "./inputTodo.css";

function InputTodo({textRef ...props }) {
  return (
    <>
      <input className="input" ref={textRef} {...props}  />
    </>
  );
}

export default InputTodo;
