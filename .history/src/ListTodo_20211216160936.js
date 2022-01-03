import React from "react";
import Button from "./Button";
import InputTodo from "./InputTodo";

ListTodo.propTypes = {};

function ListTodo(props) {
  const {
    list,
    onClickAdd,
    onClickDelete,
    onClickEdit,
    text,
    handleChange,
    isEditing,
    editingValue,
    handleChangeEdit,
  } = props;
  console.log("list", list);

  return (
    <div>
      <div>
        <InputTodo
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="enter name"
        />
        <Button onClick={onClickAdd}>Add</Button>
      </div>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            { isEditing ? <InputTodo value='text' value={editingValue}onChange={handleChangeEdit}/>}
            
            <Button onClick={() => onClickDelete(item.id)}>Delete</Button>
            <Button onClick={() => onClickEdit(item.id)}>Edit</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTodo;
