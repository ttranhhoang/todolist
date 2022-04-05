import React from "react";
import "./Filter.css";
function Filter({ handleStatus }) {
  return (
    <div className="select">
      <selectme onChange={handleStatus} name="todos">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </selectm>
      <span className="custom-select"></span>
    </div>
  );
}

export default Filter;
