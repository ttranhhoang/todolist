import React from "react";
import Button from "./Button";
import InputTodo from "./InputTodo";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './ListTodo.css';

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
    <>
      <form>
        <InputTodo
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter name..."
        />
        <Button onClick={onClickAdd}></Button>
      </form>

      <ul className="list_todo">
        {list.map((item, index) => (
          <li key={index}>
            {item.id === isEditing ? (
              <InputTodo
                type="text"
                value={editingValue}
                onChange={handleChangeEdit}
                placeholder='Update'
              />
            ) : (
              <div><p className="list_item">{item.name}</p></div>
            )}

            <Button onClick={() => onClickDelete(item.id)}><DeleteIcon fontSize="small"/></Button>
            {item.id === isEditing ? (
              <Button onClick={() => onClickEdit(item.id)}>Submit Edits</Button>
            ) : (
              <Button onClick={() => setEditTodo(item.id)}>Edit</Button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListTodo;
