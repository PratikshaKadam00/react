
import './App.css';
import { useState, useEffect } from 'react';

function App() {

   /*
   react controls changes on ui pages 
   to show changes of variables on ui hooks are provided
   */
  
   
   let[counter, setCounter]=useState(15)
  
  
  const addValue=()=>
  {
    setCounter(counter+1);
    console.log("value added", counter);
  }

  const removeValue=()=>
  {
    
    setCounter(counter-1);
  }
  return (
    <div className="App">
      <h1>Learn React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value: {counter}</button>
      <br></br>
      <button onClick={(removeValue)}>Remove: {counter}</button>
    </div>
  );
}

export default App;
