import React from "react";

ListTodo.propTypes = {};

function ListTodo(props) {
  const { list } = props;
  console.log("list", list);

  return (
    <ul>
      {list.map((item, index) => (
        <
        <li key={index}>{item.name}</li>
         <button onClick= {onClickDelete}>Delete</button>
      ))}
    </ul>
  );
}

export default ListTodo;
