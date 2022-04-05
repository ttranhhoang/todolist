import React from "react";
import "./Filter.css";
function Filter({ handleStatus }) {
  return (
    <div className="select">
      <select onChange={handleStatus} name="todos">
        <option className="option" value="all">All</option>
        <option className="option" value="completed">Completed</option>
        <option className="option" value="uncompleted">Uncompleted</option>
      </select>
      <span className="custom-select"></span>
    </div>
  );
}

export default Filter;
