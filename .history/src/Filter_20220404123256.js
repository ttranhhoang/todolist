import React from "react";
import "./Filter.css";
function Filter({ handleStatus }) {
  return (
    <div className="select">
      <select className="simple" onChange={handleStatus} name="todos">
        <option class value="all">All</option>
        <option class value="completed">Completed</option>
        <option class value="uncompleted">Uncompleted</option>
      </select>
      <span className="custom-select"></span>
    </div>
  );
}

export default Filter;
