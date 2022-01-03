import React, { useState } from "react";


ListTodo.propTypes = {};

function ListTodo(props) {
  const { list, onClickDelete, onClickEdit } = props;
  console.log("list", list);

  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          {item.name}
          <button onClick={() => onClickDelete(item.id)}>Delete</button>
          <button onClick={() => onClickEdit(item.id)}>Edit</button>
        </li>
      ))}
    </ul>
  );
}

export default ListTodo;
