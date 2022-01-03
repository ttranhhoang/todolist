import React, { useState } from "react";
import "./App.css";

import ListTodo from "./ListTodo";

function App() {
  const [list, setList] = useState([
    { id: 1, name: "Hoàng", isCompleted: false },
    { id: 2, name: "Huy", isCompleted: false },
  ]);
  const [text, setText] = useState("");

  const [editingValue, setEditingValue] = useState("");
  const [isEditing, setIsEditing] = useState(null);

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
    setList([...list, { id: Math.floor(Math.random() * 100), name: text }]);
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
    const completed = list.map((item) =>
      item.id === index
        ? { ...item, isCompleted: !item.isCompleted }
        : { ...item }
    );
    setList(completed);
  };
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${type}`)
  //     .then((data) => data.json())
  //     .then((post) => setPost(post));
  // }, [type]);

  return (
    <div className="app">
      <h3 className="app_title">To do list</h3>
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
        isCompleted={list.isCompleted}
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
