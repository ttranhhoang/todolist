import React from "react";
import "./inputTodo.css";

function InputTodo({ ...props }) {
  return (
    <>
      <input className="input" re {...props}  />
    </>
  );
}

export default InputTodo;
