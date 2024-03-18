
import Product from "./Product.jsx";

function ProductTab() {
    // let options=[<li>"fast"</li>,<li>"middle"</li>,<li>"low"</li>]
    // let options=["fast","middle","low"];
    // return (
    //     <>
    //         <Product title="laptop" price={30000} features={options}/>
    //         <Product  title="phone" price={40000}  />
    //         <Product  title="pen" price={1}/>
    //     </>
    // );
let styles={
    display:"flex",
    flexWrap:"wrap",
    justifyContent :"center",
    alignItems:"center"
}
    return (
        <div style={styles}>
           
            <Product title="logicTech Mx master" idx={0}/>
            <Product  title="Apple pencil (2nd gen)" idx={1}/>
            <Product title="Zerbonics Zeb-Transformer" idx={2}/>
            <Product  title="Petronics Toad 23" idx={3}/>
        </div>
    );
}
export default ProductTab; 