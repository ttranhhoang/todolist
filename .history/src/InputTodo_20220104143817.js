import React from "react";
import "./inputTodo.css";

function InputTodo({ ...props }) {
  return (
    <>
      <input className="input" ref={textRef} type="text"{...props}  />
    </>
  );
}

export default InputTodo;
