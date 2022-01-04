import React from "react";
import "./inputTodo.css";

function InputTodo({ref, ...props }) {
  const 
  return (
    <>
      <input className="input" ref={ref}  {...props}  />
    </>
  );
}

export default InputTodo;
