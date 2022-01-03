import React, { useState } from "react";
import "./inputTodo.css";

function InputTodo(props) {
  const { text, setText, onClick, edit, ...inputProps } = props;
  
  if (!onClick) {
    return;
  }

  return (
    <div>
      <form>
        {edit ?< }
       
      </form>
    </div>
  );
}

export default InputTodo;
