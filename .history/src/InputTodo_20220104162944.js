import React from "react";
import { useEffect, useRef } from "react";
import "./inputTodo.css";

function InputTodo({  ...props }) {
  const ref = useRef(null);
  console.log("ref",ref.current.focus)
  useEffect(() => {
    ref.current.focus();
  });
  return (
    <>
      <input className="input" ref={ref} {...props} />
    </>
  );
}

export default InputTodo;
