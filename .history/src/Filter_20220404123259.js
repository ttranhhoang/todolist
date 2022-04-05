import React from "react";
import "./Filter.css";
function Filter({ handleStatus }) {
  return (
    <div className="select">
      <select className="simple" onChange={handleStatus} name="todos">
        <option className="" value="all">All</option>
        <option className="" value="completed">Completed</option>
        <option className="" value="uncompleted">Uncompleted</option>
      </select>
      <span className="custom-select"></span>
    </div>
  );
}

export default Filter;
