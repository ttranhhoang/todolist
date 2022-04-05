import React, { useState } from "react";
import db from "./db";

const newCategory = ["all", ...new Set(db.map((item) => item.category))];

function FilterAPI() {
  const [category, setCategory] = useState(newCategory);
  const [movie, setMovie] = useState([]);
  return (
    <div>
      {category.map((i, index) => (
        <li key={index} on>{i}</li>
      ))}
    </div>
  );
}

export default FilterAPI;
