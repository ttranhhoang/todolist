import React from "react";
import "./Filter.css";
function Filter({ handleStatus }) {
  return (
    <div className="select">
      <selec onChange={handleStatus} name="todos">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </selec>
      <span className="custom-select"></span>
    </div>
  );
}

export default Filter;
