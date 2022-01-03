import React, { useEffect, useState } from "react";
import "./App.css";
import Example from "./Example";
import ListTodo from "./ListTodo";
import Test from "./Test";

function App() {
  const [list, setList] = useState([
    { id: 1, name: "Hoàng" },
    { id: 2, name: "Huy" },
  ]);
  const [text, setText] = useState("");

  const [editingValue, setEditingValue] = useState("");
  const [isEditing, setIsEditing] = useState(null);

  const tabs = ["posts", "comments", "albums"];
  const [post, setPost] = useState([]);
  const [type, setType] = useState("posts");

  const handleChange = (e) => {
    setText(e.target.value);
    console.log("Text value", e.target.value);
  };

  const handleChangeEdit = (e) => {
    setEditingValue(e.target.value);
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
    const updateValue = [...list].map((item) => {
      if (item.id === editIndex) {
        list.name = editingValue;
      }
      return item;
    });
    
    setList(updateValue);
    setIsEditing(null);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((data) => data.json())
      .then((post) => setPost(post));
  }, [type]);

  return (
    <div className="app">
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
        setEditTodo={}
      />

      {tabs.map((tab) => (
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
      <Test />
    </div>
  );
}

export default App;
