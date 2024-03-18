import { useState } from "react"

export default function LudoBoard(){
    let [arr,SetArr]=useState(["No moves"])
    let [move,setMove]=useState({blue:0,red:0,yellow:0,green:0});




    let updateBlue=()=>{
        // move.blue +=1;
        // console.log(`move.blue =${move.blue}`);
        // setMove({...move,blue: move.blue +=1});


        // arr.push("blue moves")
        // SetArr([arr,"blue move "])
        SetArr((prevArr)=>{
            return [...prevArr,"blue move"]
        });
        console.log(arr)
    }; 
  

let updateYellow=()=>{
        // move.blue +=1;
        // console.log(`moves yellow =${move.yellow}`);
        setMove({...move,yellow: move.yellow +=1});
    }; 


    return (
    <div>
        <p>Game Begins!</p>
       
<p>{arr}</p>
        <div className="Board">
            <p>Blue moves ={move.blue}</p>
            <button style={{backgroundColor : "blue"}} onClick={updateBlue}>+1</button>
            <p>Yellow moves ={move.yellow}</p>
            <button style={{backgroundColor : "yellow"}} onClick={updateYellow}>+1</button>
            <p>Green moves ={move.green}</p>
            <button style={{backgroundColor : "green"}}>+1</button>
            <p>Red moves ={move.red}</p>
            <button style={{backgroundColor : "red"}}>+1</button>
        </div>

        </div>
    );
}