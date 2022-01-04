import React from "react";
import { useEffect } from "react";
import "./inputTodo.css";

function InputTodo({ref, ...props }) {
  const ref = useRef(null);
  useEffect(())
  return (
    <>
      <input className="input" ref={ref}  {...props}  />
    </>
  );
}

export default InputTodo;
