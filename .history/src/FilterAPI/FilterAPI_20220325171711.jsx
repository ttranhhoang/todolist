import React, { useState } from "react";
import db from "./db";

function FilterAPI() {
  const [category, setCategory] = useState(db);
  return <div>
      {category.map}
  </div>;
}

export default FilterAPI;
