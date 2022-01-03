import React from "react";
import Button from "./Button";
import InputTodo from "./InputTodo";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import "./ListTodo.css";

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

    onClickComplete,
    
  } = props;
  console.log("list", list);
 
  return (
    <>
      <form onSubmit={onClickAdd} className="form">
        <InputTodo
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter name..."
        />
        <IconButton onClick={onClickAdd}>
          <AddCircleIcon color="success" />
        </IconButton>
      </form>

      <ul className="list_todo">
        {list.map((item, index) => (
          <li className="list_item" key={index}>
            {item.id === isEditing ? (
              <InputTodo
                type="text"
                value={editingValue}
                onChange={handleChangeEdit}
                placeholder="Update"
              />
            ) : (
              <div
                className={item.isCompleted ? 'list_name through':'list_name'}
                onClick={() => onClickComplete(item.id)}
              >
                {item.name}
              </div>
            )}

            <div className=>
              <Button onClick={() => onClickDelete(item.id)}>
                <DeleteIcon color="error" fontSize="inherit" />
              </Button>
              {item.id === isEditing ? (
                <Button onClick={() => onClickEdit(item.id)}>
                  <EditIcon />
                </Button>
              ) : (
                <Button onClick={() => setEditTodo(item.id)}>
                  <EditIcon color="warning" />
                </Button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListTodo;
