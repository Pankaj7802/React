import { useState } from "react"

export default function Form() {
    // let [fullName,setFullName]=useState("Pankaj")
    // let [userNmae,setUserName]=useState("")

    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password:""
    });


    // let handleFullNameChange=(event)=>{
    //     // console.log(event.target.value);
    //     setFullName(event.target.value);
    // }
    // let handleUserNameChange=(event)=>{
    //     // console.log(event.target.value);
    //     setUserName(event.target.value);
    // }

    let handleInputNameChange = (event) => {
        let fildName = event.target.name;
        // console.log(fildName); fullNmae
        let newValue = event.target.value;

        // console.log(newValue);
        setFormData((currData) => {
            // currData[fildName] = newValue;
            return { ...currData ,[event.target.name]:event.target.value}
         });

    }

    let handleSumit=((event)=>{
event.preventDefault();
console.log(formData);
setFormData({
    fullName:"",
    userName:"",
    password:""
});
    })
    return (
        <form onSubmit={handleSumit}>
            <label htmlFor="fullName">Full Name :  </label>
            <input type="text" placeholder="Enter your full name :" name="fullName" id="fullName" value={formData.fullName} onChange={handleInputNameChange} />
            <br /><br />

            <label htmlFor="password">Password :  </label>
            <input type="password" placeholder="Enter your password :" name="password" id="fpassword" value={formData.password} onChange={handleInputNameChange} />
            <br /><br />
            
            <label htmlFor="userName">USerName :  </label>
            <input type="text" placeholder="Enter your user name :" name="userName" id="userName" value={formData.userName} onChange={handleInputNameChange} />
            <button>Sumit</button>
        </form>
    )

}