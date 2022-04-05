import React, { useState, useEffect, PropTypes } from "react";


function Search({email, password}) {
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => setSearch(result));
  }, []);

  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {search
        .filter((el) => {
          if (input === "") {
            return el;
          } else return el.title.toLowerCase().includes(input.toLowerCase());
        })
        .map((search) => (
          <div key={search.id}>
            <p>{search.title}</p>
          </div>
        ))}
    </div>
  );
}

export default Search;
