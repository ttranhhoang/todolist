import React, { useState } from "react";
import db from "./db";

const newCategory = ["all", ...new Set(db.map((item) => item.category))];

function FilterAPI() {
  const [category, setCategory] = useState(newCategory);
  const [movie, setMovie] = useState(db);
console.log
  const handleFilter = (category) => {
    if (category === "all") {
      setMovie(db);
     
    }
    const newMovie = movie.filter((i) => i.category === category);
    console.log(setMovie(newMovie));
  };

  return (
    <div>
      {category.map((i, index) => (
        <button key={index} onClick={() => handleFilter(i)}>
          {i}
        </button>
      ))}
      <div>
        {movie.map((i, index) => (
          <li key={index}>{i.name}</li>
        ))}
      </div>
    </div>
  );
}

export default FilterAPI;
