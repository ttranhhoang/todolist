import { useState } from "react";

function Example() {
  const [count, setCount] = useState();
  const handleClick = ()
  return (
    <div className="example">
      {count}
      <button onClick={handleClick}></button>
    </div>
  );
}
export default Example;
