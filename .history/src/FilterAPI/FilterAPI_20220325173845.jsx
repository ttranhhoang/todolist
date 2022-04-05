import React, { useState } from "react";
import db from "./db";

const newCategory = ["all", ...new Set(db.map((item) => item.category))];

function FilterAPI() {
  const [category, setCategory] = useState(newCategory);
  const [movie, setMovie] = useState(db);
  const handleFilter = (category) => {
      if(category === "all") {
          setMovie(db, category);return
      }
    const filter = movie.filter((i) => i.category === category);
    setMovie(filter);
  };
  return (
    <div>
      {category.map((i, index) => (
        <button key={index} onClick={() => handleFilter(i)}>
          {i}
        </button>
      ))}
      {movie.map((i,index)=> (
          <li key={index}>{i.name}</li>
      ))}
    </div>
  );
}

export default FilterAPI;
