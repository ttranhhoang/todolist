import React, { useEffect, useState } from "react";
import "./App.css";
import Example from "./Example";
import InputTodo from "./InputTodo";
import ListTodo from "./ListTodo";
import Test from "./Test";

function App() {
  const [list, setList] = useState([
    { id: 1, name: "Hoàng" },
    { id: 2, name: "Huy" },
  ]);
  const [text, setText] = useState("");
  
  const [editingValue, setEditingValue] = useState("");
  const [isEdting, setIsEditing] = useState(false);

  const tabs = ["posts", "comments", "albums"];
  const [post, setPost] = useState([]);
  const [type, setType] = useState("posts");

  const handleChange = (e) => {
    setText(e.target.value);
    console.log("Text value", e.target.value);
  };

  const handleClick = (e) => {
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
      return text;
    });
    setList(updateValue);
    
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((data) => data.json())
      .then((post) => setPost(post));
  }, [type]);

  return (
    <div className="app">
      <InputTodo
        text={text}
        setText={handleChange}
        setEdit={(e)=>setEditingValue(e.target.value)}
        onClick={handleClick}
        placeholder="enter name"
      />
      <ListTodo
        list={list}
        onClickDelete={handleDelete}
        onClickEdit={handleEdit}
        isEdting={isEditting}
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
