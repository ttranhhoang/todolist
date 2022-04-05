import React, { useState, useEffect } from "react";

function Search() {
  const [search, setSearch] = useState("");
  useEffect(() => {
    const response = fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then(resul)
    //   .then((result) => console.log(result));
  }, []);
  return (
    <div>
      <input type="text" />
    </div>
  );
}

export default Search;
