import React, { useState } from "react";
import db from "./db";

const newCategory = db.map(item=)
function FilterAPI() {
  const [category, setCategory] = useState(db);
  return (
    <div>
      {category.map((i) => (
        <li>{i.category}</li>
      ))}
    </div>
  );
}

export default FilterAPI;
