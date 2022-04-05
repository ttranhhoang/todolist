import React, { useState, useEffect } from "react";

function Search() {
  const [search, setSearch] = useState([]);
  useEffect(() => {
    const response = fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((result) => setSearch(result));
  }, []);
  return (
    <div>
      <input type="text" />
      {search.map((search) => (
        <div>
          <p>{search.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Search;
