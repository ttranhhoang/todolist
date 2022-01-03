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
    setEditTodo,
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
            {item.id === isEditing ? (
              <InputTodo
                type="text"
                value={editingValue}
                onChange={handleChangeEdit}
                place
              />
            ) : (
              <div>{item.name}</div>
            )}

            <Button onClick={() => onClickDelete(item.id)}>Delete</Button>
            {item.id === isEditing ? (
              <Button onClick={() => onClickEdit(item.id)}>Submit Edits</Button>
            ) : (
              <Button onClick={() => setEditTodo(item.id)}>Edit</Button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTodo;
