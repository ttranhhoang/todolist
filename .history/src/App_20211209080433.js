import React, { useContext, useState } from "react";
import "./App.css";
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
  
  const handleChangeClick = (e) => {
    e.preventDefault();
    if (text === "") {
      return;
    }
    setList([...list, { name: text }]);
    setText("");
  };

  return (
    <div className="app">
      <InputTodo
        text={text}
        setText={handleChange}
        onClick={handleChangeClick}
        setList={setList}
        label="Name"
        placeholder
      />
      <ListTodo list={list} />
      <div> {conText.name}</div>
    </div>
   
  );
}

export default App;
