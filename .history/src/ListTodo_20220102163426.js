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
    filterTodo,
  } = props;
  console.log("list", list);
  console.log("filter", filterTodo);
  return (
    <>
      {filterTodo.length === 0 ? (
        <h3 className="list_title">Chưa có danh sách todo</h3>
      ) : (
        <ul className="list_todo">
          {filterTodo.map((item, index) => (
            item.isCompleted ? : 
            
          ))}
        </ul>
      )}
    </>
  );
}

export default ListTodo;