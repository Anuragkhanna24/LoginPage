import React, { useState } from 'react'

export default function ColorPicker  () {
    const [colorpick,setColorPick]=useState('')
  return (
    <div className="p-2  "style={{backgroundColor:colorpick,width:"100vw",height:"100vh"}}>Choose your Color
        <input className='mx-2' type='color' onChange={(e)=>setColorPick(e.target.value)}/>
        <h1 >{colorpick}</h1>
    </div>
    
  )
}
