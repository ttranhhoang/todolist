import React from "react";

function Filter(setStatus) {
    console.log('setState',setStatus);
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
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
