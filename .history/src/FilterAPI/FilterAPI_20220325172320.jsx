import React, { useState } from "react";
import db from "./db";

const newCategory = [new Set(db.map((item) => item.category));
console.log(newCategory);
function FilterAPI() {
  const [category, setCategory] = useState(db);
  return (
    <div>
      {category.map((i,index) => (
        <li key={index}>{i.category}</li>
      ))}
    </div>
  );
}

export default FilterAPI;
