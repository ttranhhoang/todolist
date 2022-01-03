import React from "react";

ListTodo.propTypes = {};

function ListTodo(props) {
  const { list, onClickDelete } = props;
  console.log("list", list);

  return (
    <ul>
      {list.map((item, index) => (
        <<div></div>>
          <li key={index}>{item.name}</li>
          <button key={item.name} onClick={()=>{onClickDelete(index)}}>Delete</button>
        </div>
      ))}
    </ul>
  );
}

export default ListTodo;
