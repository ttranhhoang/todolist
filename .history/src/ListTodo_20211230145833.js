import React from "react";
import Button from "./Button";
import InputTodo from "./InputTodo";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import "./ListTodo.css";

ListTodo.propTypes = {};

function ListTodo(props) {
  const {
    list,
    
    onClickDelete,
    onClickEdit,
   
    isEditing,
    editingValue,
    handleChangeEdit,
    setEditTodo,

    onClickComplete,
    filterTodo
  } = props;
  console.log("list", list);
console.log("filter", filter);
  return (
    <>
      <ul className="list_todo">
        {filterTodo.map((item, index) => (
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
                className={item.isCompleted ? "list_name through" : "list_name"}
                onClick={() => onClickComplete(item.id)}
              >
                {item.name}
              </div>
            )}

            <div className="list_button">
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
