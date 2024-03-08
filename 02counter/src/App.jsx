import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App () {
  let [counter, setCounter] = useState(1);

  function addValue () {
    counter = counter + 1;
    setCounter(counter);
  } 

  function removeValue() {
    counter = counter - 1;
    setCounter(counter);
  }

  return (
    <>
    <h2>This is a counter : {counter}</h2>
    <button onClick={addValue}>Add Value {counter}</button>
    <button onClick={removeValue}>Remove Value {counter}</button>

    <h3>Main Value : {counter}</h3>
    </>
  );
}

export default App
