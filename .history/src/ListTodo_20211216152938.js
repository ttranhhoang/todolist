import React from "react";
import Button from "./Button";

ListTodo.propTypes = {};

function ListTodo(props) {
  const { list, onClickDelete, onClickEdit } = props;
  console.log("list", list);

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <div>{item.name}</div>
            <Button onClick={() => onClickDelete(item.id)}>Delete</Button>
            <Button onClick={() => onClickEdit(item.id)}>Edit</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTodo;
