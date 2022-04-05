import React from "react";
import "./Filter.css";
function Filter({ handleStatus }) {
  return (
    <div className="select">
      <select onChange={handleStatus} name="todos">
        <optio value="all">All</optio>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
      <span className="custom-select"></span>
    </div>
  );
}

export default Filter;
