import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import InputTodo from "./InputTodo";
import "./App.css";

import ListTodo from "./ListTodo";
import Filter from "./Filter";

function App() {
  const [list, setList] = useState([
    { id: 1, name: "Hoàng", isCompleted: false },
    { id: 2, name: "Huy", isCompleted: false },
  ]);
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
    setList([
      ...list,
      { id: Math.floor(Math.random() * 100), name: text, isCompleted: false },
    ]);
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

  useEffect(() => {
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
  }, [list, status]);
 useEffect(() => {
   savelocalStorage();
 },[])

  const savelocalStorage = ()=> {
    if(localStorage.getItem('todo') === null ){
      localStorage.setItem('todo',JSON.stringify([]))
    }
    else{
      localStorage.setItem('todo',JSON.stringify(list))
    }
  }
  const getLocalStorage = ()=>{
    
  }
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
