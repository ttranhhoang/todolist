import React, { useState, useEffect } from "react";

function Search() {
  const [search, setSearch] = useState("");
  useEffect(() => {
    const res fetch("https://jsonplaceholder.typicode.com/todos/1")
       .then((response) => response.json())
       .then((json) => console.log(json));
  }, []);
  return (
    <div>
      <input type="text" />
    </div>
  );
}

export default Search;
