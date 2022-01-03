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
    {list.length === 0  ? <h3 className="list_title">Hãy thêm todo vào danh sách!</h3> :(
      
    )}
      
    </>
  );
}

export default ListTodo;
