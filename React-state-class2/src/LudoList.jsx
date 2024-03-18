import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function LudoList(){
    let [todos,setTodos]=useState([{task :"Sample Tasks",id:uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo]=useState("");

    let addNewTask=()=>{
        // console.log("we have to add new task in todo");
        setTodos((prevTodos)=>{
            return [...prevTodos,{ task: newTodo, id:uuidv4() ,isDone:false}];
        });
        setNewTodo("");
    };

    let updateTodoValue=(event)=>{
        // console.log(event.target.value)
        setNewTodo(event.target.value);
    };
   let deleteTodo=(id)=>{
    setTodos((prevTodos)=>prevTodos.filter((prevTodos)=>prevTodos.id !=id));
    
    };
 // let upperCaseAll=()=>{
 //  setTodos((todos)=>
 //  todos.map((todo)=>{
 //         return{
  //             ...todo,
 //             task:todo.task.toUpperCase()
 //         };
 //     }));
 //     // console.log(newArr);
 // }
let markDone=()=>{
    setTodos((todos)=>
    todos.map((todo)=>{
           return{
               ...todo,
               isDone:true,
           };
       }));
       // console.log(newArr);
   }
// let UpperCaseOne=(id)=>{
//     setTodos((todos)=>
//  todos.map((todo)=>{
//     if(todo.id===id){
//         return{
//             ...todo,
//             task:todo.task.toUpperCase()
//         };
   
// }else{
//     return todo;

// }
//  }));
 
//  };
let markAsDone=(id)=>{
    setTodos((todos)=>
 todos.map((todo)=>{
    if(todo.id===id){
        return{
            ...todo,
            isDone:true,
        };
   
}else{
    return todo;

}
 }));
 
 };
    return(
  <div>
    <input placeholder="add a task" onClick={newTodo} onChange={updateTodoValue}></input>
    <br></br>
    <button onClick={addNewTask}> Add Task</button>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <hr></hr>
    <h4>Tasks Todo</h4>
    <ul>
        {
          todos.map((todo)=>{
            return <li key={todo.id}>
                <span style={todo.isDone ?{textDecorationLine:"line-throuhg"}:{}}>{todo.task}</span>
                &nbsp;&nbsp;&nbsp;
                <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                {/* <button onClick={()=>UpperCaseOne(todo.id)}>delete one </button>  */}
                <button onClick={()=>markAsDone(todo.id)}>marks AS Done </button>  
            </li>
          })
        }
    </ul>
    <br></br>
    {/* <button onClick={upperCaseAll}>upperCaseAll</button> */}
    <button onClick={markDone}>Marks done</button>
    
 </div>
    );
}