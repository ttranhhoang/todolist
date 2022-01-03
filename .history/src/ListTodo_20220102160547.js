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
console.log("filter", filterTodo);
  return (
    <>
    {filter.length < 0 ? 'Chưa có danh sách todo'
    :}
      
    </>
  );
}

export default ListTodo;
