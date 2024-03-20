
import './App.css';
import React from 'react';
const name=<span>Hello React</span>
const newElement=React.createElement('h2', {className :'newElement'}, 'hello h2 tag')


const test=() =>
{
  alert("Hello Pratiksha");
}

const add= function(a, b)
{
  if(a>8)
  {
     return <span>You are elegible</span>
  }
  else
  {
    return "<span>not elegible </span>";
  }

}

function App() {
  return (
    <div className="App">
     <h1>Hello, {name}</h1>
     {newElement}
     <button onClick={test}></button>
     {add(19)};
    </div>
  );
}

export default App;
