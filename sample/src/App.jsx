import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);

  const reset = () => {
    setNumber(0)
  }

  const even = () => {
    setNumber(number + 2)
  }

  const odd = () => {
    if (number % 2 === 0) {
      setNumber(number + 1)
    } else {
      setNumber(number + 1)
    }
  }

  return (
    <>
      <h2>Even Numbers and Odd Numbers</h2>
      <h2>{number}</h2>
      <button onClick={even}>Even Number</button>
      <button onClick={odd}>Odd Number</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App;