import React, { useState, useEffect } from "react";

function Search() {
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    const response = fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => setSearch(result));
  }, []);
  return (
    <div>
      {console.log(search)}
      <input type="text" onChange={(e) => setInput(e.target.va)} />
      {search.map((search) => (
        <div key={search.id}>
          <p>{search.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Search;
