import React from "react";
import './Filter.css';
function Filter({ handleStatus }) {
  return (
    <div className="select">
      <select onChange={handleStatus} name="todos" className="filter-todo">
        <option value="all" className="filter_options">
          All
        </option>
        <option value="completed" className="filter_options">
          Completed
        </option>
        <option value="uncompleted" className="filter_options">
          Uncompleted
        </option>
      </select>
    </div>
  );
}

export default Filter;
