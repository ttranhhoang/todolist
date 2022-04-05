import React from "react";
import "./Filter.css";
function Filter({ handleStatus }) {
  return (
    <div className="select">
      <se onChange={handleStatus} name="todos">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </se>
      <span className="custom-select"></span>
    </div>
  );
}

export default Filter;
