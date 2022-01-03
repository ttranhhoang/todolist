import React, { useState } from "react";

ListTodo.propTypes = {};

function ListTodo(props) {
  const { list, onClickDelete, onClickEdit } = props;
  console.log("list", list);
const [editValue, setEditValue] =useState([{
  id: null,
  value: '',
}])
const handleEdit = (newValue)=>{
onClickEdit(editValue,newValue);
setEditValue([{id:null,value:newValue}])
}
if(editValue.id){
  <InputTodo />
}

  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          {item.name}
          <button onClick={() => onClickDelete(index)}>Delete</button>
          <button onClick={() => setEditValue([{id: item.id, value:item.name}])}>
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListTodo;
