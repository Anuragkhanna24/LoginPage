import React, { useState } from "react";
import Conditional from "./conditionalRend";

export default function Rendering(){
const [isLoggedIn,setIsLoggedIn]=useState(false)

return(
    <div>
        <h1 className="text-center" style={{color:"Highlight"}}>Conditional Rendering</h1>
<Conditional isLoggedIn={isLoggedIn}/>
<button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
    {isLoggedIn?'Logout':'Login' }
</button>
    </div>
)
}