import React from "react";

ListTodo.propTypes = {};

function ListTodo(props) {
  const { list, onClickDelete } = props;
  console.log("list", list);

  return (
    <ul>
      {list.map((item, index) => (
        <>
          <li>{item.name}</li>
          
        </>
      ))}
    </ul>
  );
}

export default ListTodo;
