import React from "react";
import "./inputTodo.css";

function InputTodo({ ...props }) {
  return (
    <>
      <input className="input" ref={textRef} type="tex{...props}  />
    </>
  );
}

export default InputTodo;
