import React, { useState } from 'react';
import './App.css';

function App() {

  const [Color, setColor] = useState('orange')

  const [Name, setName] = useState('None')

  function changeData() {
    let Colors = ['white', 'red', 'blue', 'orange', 'yellow', 'skyblue', 'darkred', 'pink', 'hotpink', 'green', 'lightgreen']

    let RandomColors = Colors[Math.floor(Math.random() * Colors.length)]
    setColor(RandomColors)

    let Names = ['Suresh', 'Mahesh', 'Adrash', 'Shriyash', 'Pranav', 'Yash', 'Adinath', 'Akshay', 'Babalu', 'Gopal']

    let randomName = Names[Math.floor(Math.random() * Names.length)]
    setName(randomName)
  }

  return (
    <>
      <div style={{ border: '1px solid white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px', borderRadius: '10px', backgroundColor: 'white' }}>
        <h2 style={{ color: 'black' }}>In this box every click background color of box and data inside the box is changes</h2>

        <div style={{ backgroundColor: Color, height: '200px', width: '500px', margin: '10px', borderRadius: '10px', textAlign: 'center', fontWeight: 'bold', color: 'white' }}>
          <h2>I am {Name}</h2>
        </div >

        <button onClick={changeData}>Change Data</button>
      </div>

    </>
  )
}

export default App;
