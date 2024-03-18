import { useState } from "react";

export default  function Counter(){
    // let count=0;
    
    // function inCount(){
    //     count +=1;
    //     console.log(count);
    // }
let [state,setState]=setState(0);
    let [count,setCount]=useState(0);
    // console.log(arr);
let inCount=()=>{
           setCount(count+1)
        //  console.log(count);
};
    return (
        <div>
            <h3>Count = {count}</h3>
        <button onClick={inCount}>Count Increase</button>
        {/* <h3>Count = {count}</h3>
        <button onClick={inCount}>Count Increase</button> */}
        </div>
    );
}
