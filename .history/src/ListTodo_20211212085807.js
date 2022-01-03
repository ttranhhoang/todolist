import React from "react";

ListTodo.propTypes = {};

function ListTodo(props) {
  const { list, onClickDelete } = props;
  console.log("list", list);

  return (
    <ul>
      {list.map((item, index) => (
        <>
          <li key={index}>{item.name}</li>
          <button keyonClick={onClickDelete(index)}>Delete</button>
        </>
      ))}
    </ul>
  );
}

export default ListTodo;