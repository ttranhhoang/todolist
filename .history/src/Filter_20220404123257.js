import React from "react";
import "./Filter.css";
function Filter({ handleStatus }) {
  return (
    <div className="select">
      <select className="simple" onChange={handleStatus} name="todos">
        <option className="selected" value="all">All</option>
        <option className="selected" value="completed">Completed</option>
        <option className="selected" value="uncompleted">Uncompleted</option>
      </select>
      <span className="custom-select"></span>
    </div>
  );
}

export default Filter;
