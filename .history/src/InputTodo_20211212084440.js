import React from "react";
import "./inputTodo.css";

function InputTodo(props) {
  const { text, setText, onClick,onLcickDelete,...inputProps } = props;

 
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
        <button onClick= {onClickDelete}>Delete</button>
        <button>Edit</button>
      </form>
    </div>
  );
}

export default InputTodo;
