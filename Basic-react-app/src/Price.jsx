export default function Price({oldPrice,newPrice}){
    let oldstyles={
        textDecorationLine : " Line-through"
    }
    let newstyle={
        fontWeight:"bold"
    }
    let styles={
        backgroundColor:"yellow",
        height:"30px",
        width:"200px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px"
    }
    return <div style={styles}>
        <span style={oldstyles}>{oldPrice}</span>
        &nbsp;&nbsp;&nbsp;
       <span style={newstyle}>{newPrice}</span> 
    </div>
}