import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);

  // let myObj = {
  //   username: "React and Javascript",
  //   age: 21
  // }

  // let newArr = [1, 2, 4];

  let ArrayName = ["Shriyash", "Akshay", "Pranav"];

  let ArrayInfo = {
    shriyash: "This is a shriyash and shriyash is the best man in the akola and he is the lord of knowledge and coding specially in web development ",
    akshay: "This is a akshay bhaltilak and i live in akola and i am go every day into college and there is a coding hackathon and how ever is very ",
  }

  return (
    <>
      <h2 className="p-4 bg-slate-50 text-black rounded-xl m-4 font-bold">This is a pratice react code </h2>
      <Card username={ArrayName[0]} info={ArrayInfo.shriyash} btnText="Click Me"/>
      <Card username={ArrayName[1]} info={ArrayInfo.akshay} btnText="Visit Me" />
    </>
  )
}

export default App
