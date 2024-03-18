import { useState } from "react";

export default function CommentForm() {
    let [formData, setFormData] = useState({
        userName: "",
        remarks: "",
        rating: 5
    });
    let inputChange=((event)=>{
        setFormData((currData)=>{
            return {...currData, [event.target.name] : event.target.value}
        });
    });

    let handleSumit=(event)=>{
        event.preventDefault();
        console.log(formData);
        
        // setFormData({
        //     userName: "",
        //     remarks: "",
        //     rating: 5
        // });
    };
    return (
        <div>
            <h4>Give a Comments</h4>
            <form onSubmit={handleSumit}>
                <label htmlFor="userName">UserName : </label>
                <input type="text" placeholder="Enter your user name :  " value={formData.userName} onChange={inputChange} id="userName" name="userName" />
                <br ></br><br />
                <label htmlFor="remarks">Remarks : </label>
                <textarea value={formData.remarks} placeholder="add remarks" name="remarks" id="remarks" onChange={inputChange}>Remarks</textarea>
                <br /><br />
                <label htmlFor="rating">Rating : </label>
                <input type="number" placeholder="Rating" min={1} max={5} value={formData.rating} id="rating" name="rating" onChange={inputChange}/>
                <br /><br /><br />
                <button>Add comment </button>
            </form>
        </div>
    );
}