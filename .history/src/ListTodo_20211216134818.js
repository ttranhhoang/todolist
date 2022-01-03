import React from "react";
import InputTodo from "./InputTodo";

ListTodo.propTypes = {};

function ListTodo(props) {
  const { list, onClickDelete, onClickEdit, isEdting } = props;
  console.log("list", list);

  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          {isEditing ? <InputTodo /> : <div>{item.name}</div>}
          <button onClick={() => onClickDelete(item.id)}>Delete</button>
          <button onClick={() => onClickEdit(item.id)}>Edit</button>
        </li>
      ))}
    </ul>
  );
}

export default ListTodo;
