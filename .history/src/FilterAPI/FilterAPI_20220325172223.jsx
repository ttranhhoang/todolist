import React, { useState } from "react";
import db from "./db";

const newCategory = db.map((item) => item.category);
console.log(newCategory);
function FilterAPI() {
  const [category, setCategory] = useState(db);
  return (
    <div>
      {category.map((i) => (
        <li key={}>{i.category}</li>
      ))}
    </div>
  );
}

export default FilterAPI;
