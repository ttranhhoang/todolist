import React, { useState, useEffect } from "react";

function Search() {
  const [search, setSearch] = useState("");
  useEffect(() => {
    const response = fetch('')
  }, []);
  return (
    <div>
      <input type="text" />
    </div>
  );
}

export default Search;
