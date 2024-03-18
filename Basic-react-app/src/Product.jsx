 import "./Product.css"
 import Price from "./Price";
//  function product({title,price,features}){ 
//    // function pro/duct(prop){
// //  let list=features.Map((feature)=><li>{feature}</li>);
// // let isDiscount=price>30000;
// // let styles={backgroundColor:isDiscount ? "yellow":"blue"}
//     // return <div className="Product" style={styles}>
//     {/* <h3> {prop.title}</h3>  */}
//     {/* <h5>Price{prop.price}</h5>  */}
//     {/* <h3>{title}</h3> */}
//     {/* <h5>Price :{price}</h5> */}
//     {/* <p>{features.Map((feature)=><li>{feature}</li>)}</p> */}
//     {/* {isDiscount && <p>Discount 5%</p>} */}
    
    
//   //  </div>
//  }
 function product({title ,idx }){ 
  let oldPrice=["12,45","11,99","15,49","699"];
  let newPrice=["11,99","11,00","15,00","19,99"];
  let description=[["8000 DPI","5 Programmable buttons"],["intuitive surface",
  "designed for iPad Pro"],["designed for iPad Pro","intuitive surface"],["wireless","Optical orientation"],];
  return <div className="Product">
    
    <h4>{title}</h4>
    <p>{description[idx][0]}</p>
    <p>{description[idx][1]}</p>
    <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
  </div>
}
 export default product;
