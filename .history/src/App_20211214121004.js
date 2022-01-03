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

  const tabs = ["posts","comments",'albums'];
  const [post, setPost] = useState([]);
  const [type, setType] = useState('posts')

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

  const handleEdit = (editIndex, newValue)=>{
     if (newValue === "") {
       return;
     }
    setList(prev=>) 
  }

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
        onClick={handleClick}
        placeholder="enter name"
      />
      <ListTodo list={list} onClickDelete={handleDelete} onClickEdit={handleEdit} />

      <div> {conText.name}</div>

      {tabs.map(tab=>(
        <button key={tab} onClick={()=>setType(tab)} className={type === tab ? 'active':''}>{tab}</button>
      ))}
      <div>
        {post.map((order) => (
          <li key={order.id}>{order.title}</li>
        ))}
      </div>
      <Example />
    </div>
  );
}

export default App;
