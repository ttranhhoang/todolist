import React, { useState } from "react";
import db from "./db";

const newCategory = ["all", ...new Set(db.map((item) => item.category))];

function FilterAPI() {
  const [category, setCategory] = useState(newCategory);
  const [movie, setMovie] = useState([]);
  const handleFilter = (id) => {

  };
  return (
    <div>
      {category.map((i, index) => (
        <b key={index} onClick={() => handleFilter(i)}>
          {i}
        </li>
      ))}
    </div>
  );
}

export default FilterAPI;
