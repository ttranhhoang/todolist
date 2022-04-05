import React, { useState, useEffect } from "react";

function Search() {
  const [search, setSearch] = useState("");
  useEffect(() => {
    const response = fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then()
  }, []);
  return (
    <div>
      <input type="text" />
    </div>
  );
}

export default Search;
