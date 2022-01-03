import React from "react";
import "./inputTodo.css";

function InputTodo(props) {
  const { text, setText, onClick,onClickDelete,...inputProps } = props;

 
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
        <button type="submit" onClick={onClick}>
          Add
        </button>
       
        <button>Edit</button>
      </form>
    </div>
  );
}

export default InputTodo;
