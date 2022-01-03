import React from "react";

ListTodo.propTypes = {};

function ListTodo(props) {
  const { list, onClickDelete } = props;
  console.log("list", list);

  return (
    <ul>
      {list.map((item, index) => (
        <input key={index}>
          {item.name}
          <button onClick={() => onClickDelete(index)}>Delete</button>
          <button>Edit</button>
        </input>
      ))}
    </>
  );
}

export default ListTodo;
