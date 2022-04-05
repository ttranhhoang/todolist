import React, { useState, useEffect } from "react";

function Search() {
  const [search, setSearch] = useState([]);
  useEffect(() => {
    const response = fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => console.log(result));
  }, []);
  return (
    <div>
      <input type="text" />
      {search.map((search, index) => (
        <div key={index}>
          <p>{search.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Search;
