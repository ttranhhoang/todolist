import { useState } from "react";


function Example (){
    const [count, setCount] = useState();
    return (
        <div className="example">{count}</div>
        <button onClick={handleCli}></button>
    );
}
export default Example;