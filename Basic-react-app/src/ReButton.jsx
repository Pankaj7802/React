function printHello(){
    console.log("Print hello");
}
function printBye(){
    console.log("Bye !")
}
export default function ReButton(){
    return (
        <>
        <button onClick={printHello}>Click me!</button>
        {/* <p onClick={printBye}>this parh is for event demo</p> */}
        <p onMouseOver={printBye}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempora animi pariatur, aspernatur, veritatis officiis atque et molestiae quam itaque,
             sint dolorem totam nisi? Quam corporis nisi vero cupiditate quibusdam.</p>
        </>
    );
}