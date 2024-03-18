export default function MsgBox({textcolor,username}){
    let styles={color :textcolor};
    return(
        <h1 style={styles}> hello,{username}</h1>
    );
}