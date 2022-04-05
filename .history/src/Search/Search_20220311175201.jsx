import React, { useState, useEffect } from "react";

function Search() {
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
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {search
        .filter((el) => {
          if (input === "") {
            return el;
          } else if (el.title.toLoweCase().includes(input.toLowerCase())){
              return el;
          }
          return el
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
