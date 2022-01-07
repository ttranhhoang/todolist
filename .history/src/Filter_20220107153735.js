import React from "react";
import './Filter.css';
function Filter({ handleStatus }) {
  return (
    <div className="select">
      <select onChange={handleStatus} name="todos" className="filter-todo">
        <option value="all" className="filter-options">
          All
        </option>
        <option value="completed" className="filter-options">
          Completed
        </option>
        <option value="uncompleted" className="filter-options">
          Uncompleted
        </option>
      </select>
    </div>
  );
}

export default Filter;
