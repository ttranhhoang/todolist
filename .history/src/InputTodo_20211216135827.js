import React  from "react";
import "./inputTodo.css";

function InputTodo(props) {
  const { text, setText, onClick, isEditing, ...inputProps } = props;
  
  if (!onClick) {
    return;
  }

  return (
    <div>
      <form>
        {edit ? (
          <>
            {" "}
            <input
              type="text"
              value={text}
              onChange={setText}
              className="input"
              {...inputProps}
            />
            <button type="submit" onClick={onClick}>
              Edit
            </button>
          </>
        ) : (
          <>
            {" "}
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
          </>
        )}
      </form>
    </div>
  );
}

export default InputTodo;
