import React, { useState } from "react";

ListTodo.propTypes = {};

function ListTodo(props) {
  const { list, onClickDelete, onClickEdit } = props;
  console.log("list", list);
const [editValue, setEditValue] =useState([{
  id: null,
  name: '',
}])
const handleEdit = ()=>{

}

  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          {item.name}
          <button onClick={() => onClickDelete(index)}>Delete</button>
          <button onClick={() => setEditValue([{id:}])}>
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListTodo;
