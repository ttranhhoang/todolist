import React from "react";
import "./inputTodo.css";

function InputTodo(props) {
  const { text, setText, onClick,...input } = props;

  if (!onClick) {
    return;
  }

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
