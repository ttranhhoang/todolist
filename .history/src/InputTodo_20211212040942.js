import React from "react";
import "./inputTodo.css";

function InputTodo(props) {
  const { text, setText, onClick,...inputProps } = props;

  if (!onClick) {
    return;
  }

  return (
    <div>
      <form>
        <input
          type="text"
          value={text}
          onChange={setText}
          className="input"
          {...inputProps}
        />
        <button type="submit" onClick={onClick(t)}>
          Add
        </button>
      </form>
    </div>
  );
}

export default InputTodo;
