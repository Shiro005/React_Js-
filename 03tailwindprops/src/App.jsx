import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let name1 = "Shriyash";
  let name2 = "Hitesh";

  let info_shriyash = `Hello myself shriyash and my mentor name is hitesh choudhary and he is a nice person `;

  let info_hitesh = `Hello myself hitesh and I am a tech expert and my student is shriyash rulhe he is a good person`;


  return (
    <>
      <h1 className='bg-gray-400 text-black p-4 rounded-xl mb-4 font-bold'>Tailwind test</h1>

      <Card username={name1} info = {info_shriyash} btnText="click me" />
      <Card username={name2} info = {info_hitesh} />
    </>
  )
}

export default App