import React, { useEffect, useRef, useState } from "react";

export default function Timer(){
    const [time,setTime]=useState(0)
    
    useEffect(()=>{
return ()=>clearInterval(id.current);
    },[])

    let id=useRef()

    function handleTime(){
        id.current=setInterval(()=>{
            setTime((previous)=>previous+1);
            console.log(time)
        },1000)
    }
    return(
        <div className=" m-4 text-center">
            <h1>Timer</h1>
            <h1 className="border  border-primary rounded-circle p-4">{time}</h1>
            <button className="m-1" onClick={()=>handleTime()}>Start</button>
            <button className="m-1" onClick={()=>clearInterval(id.current)}>Pause</button>
            <button className="m-1" onClick={()=>{clearInterval(id.current);
            setTime(0)
        }}>Reset</button>

        </div>
    )

}