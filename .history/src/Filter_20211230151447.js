import React from "react";

function Filter(setStas) {
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
