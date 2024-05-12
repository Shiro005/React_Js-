import { useState } from 'react';
import './App.css';

function App() {

  const [Color, setColor] = useState('red')

  function bg_changer () {
  }


  return (
    <>
      <div className='color_change'>
        <button>Red</button>
        <button>White</button>
        <button>Black</button>
        <button>Pink</button>
        <button>Yellow</button>
      </div>
    </>
  )
}

export default App;