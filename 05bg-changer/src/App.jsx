import { useState } from "react"
import Card from "./components/Card"

function App() {
  const [Color, setColor] = useState('white')

  function create_laptop(laptopName, laptopDesc, image) {
    this.laptopName = laptopName
    this.laptopDesc = laptopDesc
    this.image = image
  }

  const laptop1 = new create_laptop('Macbook', 'Apple 2022 MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Midnight', 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D')

  const laptop2 = new create_laptop('Asus TUF F15', 'Apple 2022 MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Midnight', 'https://images.unsplash.com/photo-1636211993589-6daf32038bd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFzdXMlMjB6ZW5ib29rfGVufDB8fDB8fHww')

  function orange() {
    setColor('orange')
  }

  function reset() {
    setColor('white')
  }

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: Color }}>

        <Card laptopName={laptop1.laptopName} laptopDesc={laptop1.laptopDesc} image={laptop1.image} />

        <Card laptopName={laptop2.laptopName} laptopDesc={laptop2.laptopDesc} image={laptop2.image} />

        <div className="fixed flex flex-wrap justify-center align-center inset-x-0 px-2 p-4">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-4 rounded-lg font-serif text-lg">

            <button onClick={function () { setColor('red') }} className=" bg-red-500 px-4 shadow-lg py-2 rounded-lg m-2 text-white">Red</button>

            <button onClick={function () { setColor('blue') }} className="bg-blue-500 px-4 py-2 shadow-lg rounded-lg m-2 text-white">Blue</button>

            <button onClick={function () { setColor('green') }} className="bg-green-500 px-4 py-2 rounded-lg m-2 shadow-lg text-white">Green</button>

            <button onClick={orange} className="bg-orange-500 px-4 py-2 rounded-lg m-2 shadow-lg text-white">Orange</button>

            <button onClick={reset} className="bg-white-500 px-4 py-2 rounded-lg m-2 shadow-lg text-black">Reset</button>

          </div>
        </div>

      </div >
    </>
  )
}

export default App
