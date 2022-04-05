import React, { useState, useEffect } from "react";

function Search() {
  const [search, setSearch] = useState([]);
  useEffect(() => {
    const response = fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then(result => setSearch(result))
    //   .then((result) => console.log(result));
  }, []);
  return (
    <div>
      <input type="text" />
      {search.map((search) =>(
          <div>
              <p></p>
          </div>
      ))}
    </div>
  );
}

export default Search;
