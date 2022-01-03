import React, { useContext, useState } from "react";
import "./App.css";
import Example from "./Example";
import InputTodo from "./InputTodo";
import ListTodo from "./ListTodo";
import ReactContextAPI from "./ReactContextAPI";

function App() {

  const conText = useContext(ReactContextAPI);
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

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

  const handleDelete = ()=>{
    const delete = 
  }
  return (
    <div className="app">
      <InputTodo
        text={text}
        setText={handleChange}
        onClick={handleClick}
        // setList={setList}
        placeholder="enter name"
      />
      <ListTodo list={list} onClickDelete={handleDelete} />
      <div> {conText.name}</div>
      <Example />
    </div>
  );
}

export default App;
