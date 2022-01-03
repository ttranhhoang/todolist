import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Example from "./Example";
import InputTodo from "./InputTodo";
import ListTodo from "./ListTodo";
import ReactContextAPI from "./ReactContextAPI";

function App() {
  const conText = useContext(ReactContextAPI);
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const tabs = ["post","comment",'code'];
  const [post, setPost] = useState([]);


  const handleChange = (e) => {
    setText(e.target.value);
    console.log("Text value", e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (text === "") {
      return;
    }
    setList([...list, { name: text }]);
    setText("");
  };

  const handleDelete = (todoIndex) => {
    const deleteTodo = list.filter((_, index) => index !== todoIndex);
    setList(deleteTodo);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((post) => setPost(post));
  }, []);

  return (
    <div className="app">
      <InputTodo
        text={text}
        setText={handleChange}
        onClick={handleClick}
        placeholder="enter name"
      />
      <ListTodo list={list} onClickDelete={handleDelete} />

      <div> {conText.name}</div>
      {tab.map(tabs=>(
        div
      ))}
      <div>
        {post.map((order) => (
          <li key={order.title}>{order.title}</li>
        ))}
      </div>
      <Example />
    </div>
  );
}

export default App;
