import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { COUNTER_DECREMENT, COUNTER_INCREMENT } from './store/action.type';
import { add, substract } from './store/action';


function App() {

  // const [count,setCount]=useState(0)

  const dispatch=useDispatch()
 const state=useSelector((state)=>state.count)// state

  return (
    <div className="App">
   
   {/* //state.count */}
   <h1>Counter:{state}</h1>

   <button onClick={()=>dispatch(add())}>+</button>
   <button onClick={()=>dispatch(substract())}>-</button>
    </div>
  );
}

export default App;
