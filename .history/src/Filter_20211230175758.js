import React from "react";
import './Filter.css'
function Filter({ handleStatus }) {
  return (
    <div className="select">
      <select onChange={handleStatus} name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}

export default Filter;
