import { useState } from "react";

function Example() {
  const [count, setCount] = useState();
  const handleClick = ()=>{
      setCount(count + 1)
  }
  return (
    <div className="example">
      {count}
      <button onClick={handleClick}></button>
    </div>
  );
}
export default Example;
