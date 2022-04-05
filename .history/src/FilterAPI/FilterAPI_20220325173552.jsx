import React, { useState } from "react";
import db from "./db";

const newCategory = ["all", ...new Set(db.map((item) => item.category))];

function FilterAPI() {
  const [category, setCategory] = useState(newCategory);
  const [movie, setMovie] = useState(db);
  const handleFilter = (id) => {
    const filter = movie.filter()
  };
  return (
    <div>
      {category.map((i, index) => (
        <button key={index} onClick={() => handleFilter(i)}>
          {i}
        </button>
      ))}
    </div>
  );
}

export default FilterAPI;
