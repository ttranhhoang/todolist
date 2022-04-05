import React from "react";
import "./Filter.css";
function Filter({ handleStatus }) {
  return (
    <div className="select">
      <select onChange={handleStatus} name="todos">
        <optgroup value="all">All</optgroup>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
      <span className="custom-select"></span>
    </div>
  );
}

export default Filter;
