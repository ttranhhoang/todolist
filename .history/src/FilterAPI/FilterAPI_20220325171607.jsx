import React, { useState } from "react";
import db from "./db";

function FilterAPI() {
  const [category, setCategory] = useState(db);
  return 
    <div>
        {category.map(i=><div key={i}></d)}
    </div>
}

export default FilterAPI;
