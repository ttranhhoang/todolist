import React from "react";
import "./Filter.css";
function Filter({ handleStatus }) {
  return (
    <div className="select">
      <select className="simple" onChange={handleStatus} name="todos">
        <option className="op" value="all">All</option>
        <option className="op" value="completed">Completed</option>
        <option className="op" value="uncompleted">Uncompleted</option>
      </select>
      <span className="custom-select"></span>
    </div>
  );
}

export default Filter;
