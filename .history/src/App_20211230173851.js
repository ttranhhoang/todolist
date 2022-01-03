import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import InputTodo from "./InputTodo";
import "./App.css";

import ListTodo from "./ListTodo";
import Filter from "./Filter";

function App() {
  // let todoLocal = JSON.parse(localStorage.getItem("todos"));
  const [list, setList] = useState(() => {
    const todoLocal = JSON.parse(localStorage.getItem("todos"));
    return todoLocal ?? [];
  });
  const [text, setText] = useState("");

  const [editingValue, setEditingValue] = useState("");
  const [isEditing, setIsEditing] = useState(null);

  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState([]);
  // const tabs = ["posts", "comments", "albums"];
  // const [post, setPost] = useState([]);
  // const [type, setType] = useState("posts");

  const handleChange = (e) => {
    setText(e.target.value);
    console.log("Text value", e.target.value);
  };

  const handleChangeEdit = (e) => {
    setEditingValue(e.target.value);
    console.log("Text value update", e.target.value);
  };
  const handleClickAdd = (e) => {
    e.preventDefault();
    if (text === "") {
      return;
    }
    setList((prev) => {
      const newTodo = [
        ...prev,
        { id: Math.floor(Math.random() * 100), name: text, isCompleted: false },
      ];
      // Save localstorage
      // localStorage.setItem("todos", JSON.stringify(newTodo));
      return newTodo;
    });
    setText("");
  };

  const handleDelete = (todoIndex) => {
    const deleteTodo = list.filter((item) => item.id !== todoIndex);
    setList(deleteTodo);
  };

  const handleEdit = (editIndex) => {
    if (editingValue === "") {
      return;
    }
    const updateValue = list.map((item) => {
      if (item.id === editIndex) {
        item.name = editingValue;
      }
      return item;
    });
    // setList((prev) =>
    //   prev.map((item) =>
    //     item.id === editIndex ?  { name: editingValue } : item
    //   )
    // );
    setList(updateValue);
    setIsEditing(null);
  };
  const compleTodo = (index) => {
    const completed = list.map((item) => {
      if (item.id === index) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });
    setList(completed);
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleFilter = () => {
    switch (status) {
      case "completed":
        const completed = list.filter((item) => item.isCompleted === true);
        setFilter(completed);
        break;
      case "uncompleted":
        const uncompleted = list.filter((item) => item.isCompleted === false);
        setFilter(uncompleted);
        break;
      default:
        setFilter(list);
        break;
    }
  };
  useEffect(() => {
    handleFilter();
    savelocalStorage();
  }, [list, status]);

  // useEffect(() => {

  //    getLocalStorage();
  // }, []);

  const savelocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(list));
  };
  // const getLocalStorage = () => {
  //   // if (localStorage.getItem("todos") === null) {
  //   //   localStorage.setItem("todos", JSON.stringify([]));
  //   // } else {
  //   //   let todoLocal = JSON.parse(localStorage.getItem("todos"));
  //   //   setList(todoLocal);
  //   // }
  //   const todoLocal = JSON.parse(localStorage.getItem("list"));
  //   if (todoLocal) {
  //     setList(todoLocal);
  //   }
  // };

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${type}`)
  //     .then((data) => data.json())
  //     .then((post) => setPost(post));
  // }, [type]);

  return (
    <div className="app">
      <h3 className="app_title">To do list</h3>
      <form onSubmit={handleClickAdd} className="form">
        <InputTodo
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter name..."
        />
        <IconButton onClick={handleClickAdd}>
          <AddCircleIcon color="success" />
        </IconButton>
        <Filter handleStatus={handleStatus} />
      </form>

      <ListTodo
        list={list}
        onClickAdd={handleClickAdd}
        onClickDelete={handleDelete}
        onClickEdit={handleEdit}
        isEditing={isEditing}
        editingValue={editingValue}
        text={text}
        handleChange={handleChange}
        handleChangeEdit={handleChangeEdit}
        setEditTodo={setIsEditing}
        onClickComplete={compleTodo}
        filterTodo={filter}
      />

      {/* {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setType(tab)}
          className={type === tab ? "active" : ""}
        >
          {tab}
        </button>
      ))}
      <div>
        {post.map((order) => (
          <li key={order.id}>{order.title}</li>
        ))}
      </div>
      <Example />
      <Test /> */}
    </div>
  );
}

export default App;
