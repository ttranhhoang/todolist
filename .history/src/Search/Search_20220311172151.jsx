import React, { useState, useEffect } from "react";

function Search() {
  const [search, setSearch] = useState("");
  useEffect(() => {
      const respone = fetch('https://https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(result => console.log(result))
  }, []);
  return (
    <div>
      <input type="text" />
    </div>
  );
}

export default Search;
