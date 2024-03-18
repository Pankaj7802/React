import { useState } from "react";

export default  function ReCount(){
    
let [state,setState]=useState(0);
     let [count,setCount]=useState(0); //initialization
    console.log("Component is rendered");
    console.log(`count = ${count}`);
   
let inCount=()=>{
    setCount(count+1)
       
};
    return (
        <div>
            <h3>Count = {count}</h3>
        <button onClick={inCount}>Count Increase</button>
      
        </div>
    );
}
