
import './App.css'
import LudoBoard from './LudoBoard'
import LudoList from './LudoList';
import Lottery from './Lottery';    
import Ticket from './Ticket';
import { sum } from "./helper";
import Todo from './Todo';
function App() {
 let winCondition=(ticket)=>{
  // return sum(ticket)===15;
  return ticket.every((num)=>num===ticket[0]);
 }

  return (
    <>
{/* <LudoBoard/> */}
    {/* <LudoList></LudoList> */}
    {/* <Lottery n={3} winCondition={winCondition}/> */}
     {/* <Ticket ticket={[0,1,2]}/> */}
    <br /> 
    {/* <Ticket ticket={[5,6,7,8,9]}/>  */}
    <Todo/>
      </>
  );
}


// ************************Form***********************************************************

// import Form from './Form';
// import CommentForm from './CommentForm';
// import Counter from './Counter';
// import Joker from './Joker';
// function App(){
//   return(<>
// {/* <Form/> */}
// {/* <CommentForm/> */}
// {/* <Counter/> */}
// {/* <Joker/> */}
//   </>)
// }
export default App;

