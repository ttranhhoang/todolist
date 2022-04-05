import React, { useState, useEffect } from "react";

function Search() {
  const [search, setSearch] = useState([]);
  useEffect(() => {
    const response = fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => setSearch(result));
  }, []);
  return (
      {console.log}
    <div>
      <input type="text" />
      {search.map((search) => (
        <div key={search.id}>
          <p>{search.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Search;
