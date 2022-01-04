import React from "react";
import "./inputTodo.css";

function InputTodo({re ...props }) {
  return (
    <>
      <input className="input" ref={ref}  {...props}  />
    </>
  );
}

export default InputTodo;
