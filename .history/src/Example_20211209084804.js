import { useState } from "react";

function Example() {
  const [count, setCount] = useState(1);
  const handleClick = () => {
    setCount((prev) => {
      prev + 1;
    });
  };
  return (
    <div className="example">
      {count}
      <button onClick={handleClick}>LCick</button>
    </div>
  );
}
export default Example;
