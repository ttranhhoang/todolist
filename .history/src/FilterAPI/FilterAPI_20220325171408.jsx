import React, { useState } from "react";
import db from "./db";

function FilterAPI() {
  const [category, setCategory] = useState(db);
  console.log(db)
  return <div>{}</div>;
}

export default FilterAPI;
