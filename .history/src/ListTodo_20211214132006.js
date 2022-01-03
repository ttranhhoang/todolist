import React, { useState } from "react";
import InputTodo from "./InputTodo";

ListTodo.propTypes = {};

function ListTodo(props) {
  const { list, onClickDelete, onClickEdit } = props;
  console.log("list", list);

  const [editValue, setEditValue] = useState(
    {
      value: "",
    },
  );
  const handleEdit = (newValue) => {
    onClickEdit(newValue);
    setEditValue({ value: "" });
  };

  
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          {item.name}
          <button onClick={() => onClickDelete(index)}>Delete</button>
          <button onClick={() => setEditValue({ value: item.name })}>
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListTodo;
