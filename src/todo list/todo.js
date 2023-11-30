import React, { useState } from "react";

export default function Todo(){
    const [list,setList]=useState([])
    const [input,setInput]=useState("")

    const addTodo=(todo)=>{
        const newTodo={
            id:Math.random(),
            todo:todo
        };
        setList([...list,newTodo]);
        setInput("")
    };
    const deleteTodo=(id)=>{
const newlist=list.filter((todo)=>todo.id!==id)
setList(newlist)
    }
    return(
        <div >
            <h1 className="text-center m-4">Todo List</h1>
            <h2 className="m-3">You can Add and Delete Your information</h2>
            <input className="mx-2" type="text" placeholder="enter Text" value={input} onChange={(e)=>setInput(e.target.value)}></input>
            <button onClick={()=>addTodo(input)}>Add</button>
            <ul>
                {list.map((todo)=>(
                    <li key={todo.id}>
                        {todo.todo}
                        <button  className="m-2" onClick={()=>deleteTodo(todo.id)}> Delete </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
