import React, { useEffect } from "react";
import "./inputTodo.css";

function InputTodo(props) {
  const { text, setText, onClick } = props;

  if (!onClick) {
    return;
  }

  useEffect = ()=>{

  },[]
  return (
    <div>
      <form>
        <input type="text" value={text} onChange={setText} className="input" />
        <button type="submit" onClick={onClick}>
          Add
        </button>
      </form>
    </div>
  );
}

export default InputTodo;
