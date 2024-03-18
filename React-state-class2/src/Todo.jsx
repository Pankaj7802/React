import { useState } from "react"

export default function Todo(){

let [todos,setTodos]=useState(["Sample task"])
let [newTodo,setNewTodo]=useState("");
let addtask=()=>{
    
}


    return (<div>
<input type="text" placeholder="Add task" />
<button>Add task</button>
<br />
<br /><br />
<hr />
<h4>Taska todo</h4>
<ul>
    {todos.map((todo)=>(
        <li>{todo}</li>
    ))}
</ul>
    </div>)
}