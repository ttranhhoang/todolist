import React from "react";

function Filter() {
  return (
    <div class="select">
      <select name="todos" class="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}

export default Filter;
