import React, { useState } from "react";

export default function Counter (){
    const [count,setCount]=useState(0);

    const increament=()=>{
        setCount(count+1)
    }
    const decreament=()=>{
        setCount(count-1)
    }
    return(
        <div className="text-center p-4 ">
            <h1>Simple Counter</h1>
            <h1 className="bg-primary ">{count}</h1>
            <button className="mx-2" onClick={decreament}>-</button>
            <button className="mx-2" onClick={increament}>+</button>
        </div>
    )
}
