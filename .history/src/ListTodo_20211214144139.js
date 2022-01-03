import React, { useState } from "react";
import InputTodo from "./InputTodo";

ListTodo.propTypes = {};

function ListTodo(props) {
  const { list, onClickDelete, onClickEdit } = props;
  console.log("list", list);

  
  const handleEdit = (newValue) => {
    onClickEdit(editValue.id, newValue);
    setEditValue({ id: null, value: "" });
  };

  if (editValue.id) {
    return <InputTodo onClick={handleEdit} edit={editValue}/>;
  }
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          {item.name}
          <button onClick={() => onClickDelete(item.id)}>Delete</button>
          <button
            onClick={() => setEditValue(item.id)}
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListTodo;