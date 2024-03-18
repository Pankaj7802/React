import { useState } from "react"
export default function LikeButton(){
    let [isLiked,setIsliked]=useState(false)
let [clicks,setClicks]=useState(1)
    let toggleLike=()=>{
        setIsliked(!isLiked);
        setClicks(clicks+1);
    };
    let likestyle={color:"red"}
    return(
        <div>
<p onClick={toggleLike}>click={clicks}</p>
        <p onClick={toggleLike}> 
        {isLiked ? (<i class="fa-solid fa-heart" style={likestyle}></i>):(<i class="fa-regular fa-heart"></i>)}</p> 
        </div>
    );
}