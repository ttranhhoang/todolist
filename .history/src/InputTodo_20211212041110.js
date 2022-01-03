import React, {useState} from "react";
import "./inputTodo.css";

function InputTodo(props) {
  const { text, setText, onClick,...inputProps } = props;

  const [type, setType] = useState("The loại");
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
        <button type="submit" onClick={onClick(type)}>
          Add
        </button>
      </form>
    </div>
  );
}

export default InputTodo;
