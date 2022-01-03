import React from "react";
import Button from "./Button";
import InputTodo from "./InputTodo";

ListTodo.propTypes = {};

function ListTodo(props) {
  const { list, onClickAdd,onClickDelete, onClickEdit, text,handleChange, isEdit  } = props;
  console.log("list", list);

  return (
    <div>
      <InputTodo
        text={text}
        settext={handleChange}
        isediting={isEditing}
        editingvalue={editingValue}
        setedit={handleChangeEdit}
        onClick={handleClick}
        placeholder="enter name"
      />
      <Button onClick={onClickAdd}>Add</Button>
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
