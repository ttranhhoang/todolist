import { useState } from "react";


function Example (){
    const [count, setCount] = useState();
    return (
        <div className="example">{count}</div>
    );
}
export default Example;