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
  console.log(onClickEdit);
  return (
    <>
      {list.length === 0 ? (
        <h3 className="list_title">Hãy thêm todo vào danh sách!</h3>
      ) : filterTodo.length === 0 ? (
        <h3 className="list_title">Chưa hoàn thành todo nào cả!</h3>
      ) : (
        <ul className="list_todo">
          {filterTodo.map((item, index) => (
            <li className="list_item" key={index}>
              {item.id === isEditing ? (
                <form onSubmit={() => onClickEdit()}>
                  <InputTodo
                    type="text"
                    value={editingValue}
                    onChange={handleChangeEdit}
                    placeholder="Update..."
                  />
                  <Button onClick={() => onClickEdit(item.id)}>
                    <EditIcon />
                  </Button>
                </form>
              ) : (
                <div
                  className={
                    item.isCompleted ? "list_name through" : "list_name"
                  }
                  onClick={() => onClickComplete(item.id)}
                >
                  {item.name}
                </div>
              )}

              <div className="list_button">
                <Button onClick={() => onClickDelete(item.id)}>
                  <DeleteIcon color="error" fontSize="inherit" />
                </Button>

                <Button onClick={() => setEditTodo(item.id)}>
                  <EditIcon color="warning" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ListTodo;
