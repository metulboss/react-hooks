import React, { useState } from 'react';

const Reacthook = () => {

    const [count,setCount] = useState(0)

   const handelIncress =() =>{

       setCount(count+1)
    }

    return (
        <div>
            <h1>Count:{count}</h1>
           <button onClick={handelIncress}>Increment</button>
        </div>
    );
};

export default Reacthook;