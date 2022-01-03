import React from "react";

ListTodo.propTypes = {};

function ListTodo(props) {
  const { list, onClickDelete, onClickEdit } = props;
  console.log("list", list);
const [editValue, setEditValue] =[{
  id: null
}]

  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          {item.name}
          <button onClick={() => onClickDelete(index)}>Delete</button>
          <button onClick={()=> onClickEdit(index)}>Edit</button>
        </li>
      ))}
    </ul>
  );
}

export default ListTodo;
