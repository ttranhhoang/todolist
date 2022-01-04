import React from "react";
import { useEffect } from "react";
import "./inputTodo.css";

function InputTodo({  ...props }) {
  const ref = useRef(null);
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
