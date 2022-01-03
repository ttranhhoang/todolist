import React, {useState} from "react";
import "./inputTodo.css";

function InputTodo(props) {
  const { text, setText, onClick, edit, ...inputProps } = props;
const [input, setInput] = useState(edit ? props.edit.value : "");
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
      </form>
    </div>
  );
}

export default InputTodo;
