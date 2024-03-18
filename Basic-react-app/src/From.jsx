function FormSumit(event){
    event.preventDefault();
    console.log(event)
    console.log("form was sumited");
}
function From(){
return(
    <form >
        <input type="text" name="" id="" />
        <button onClick={FormSumit}>Sumit</button>
    </form>
)
}
export default From;