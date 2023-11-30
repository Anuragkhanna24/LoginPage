import React from "react";

export default function Conditional({isLoggedIn})
{
   
        
            if(isLoggedIn){
                return(
                    <div className="border text-center fs-4 p-4 m-3"style={{backgroundColor:"lightgreen",fontStyle:"italic"}}>
                         <p>Welcome To Home Page</p>
                    </div>
                )
            }
            else{
                return <p className="bg-danger text-center p-4 m-3">Please Click On Login Button</p>
            }
                
            }
        
    
