import React, { useState, useEffect } from "react";

function Search() {
  const [search, setSearch] = useState("");
  useEffect(() => {
      const respone = fetch('https://https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(resu)
  }, []);
  return (
    <div>
      <input type="text" />
    </div>
  );
}

export default Search;
