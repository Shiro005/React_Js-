import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  function CreatelaptopData(laptopName, laptopDesc, image) {
    this.laptopName = laptopName
    this.laptopDesc = laptopDesc
    this.image = image
  }

  const laptop1 = new CreatelaptopData('Asus TUF f15', 'HP 2023 Latest Pavilion Business Laptop, 15.6" FHD Touchscreen, 13th Gen Intel Core i7-1355U, 64GB RAM, 2TB PCIe SSD, Webcam, FP Reader, Backlit KB, Wi-Fi 6, Windows 11 Pro, Silver', 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D')

  const laptop2 = new CreatelaptopData('Macbook M2', 'HP 2023 Latest Pavilion Business Laptop, 15.6" FHD Touchscreen, 13th Gen Intel Core i7-1355U, 64GB RAM, 2TB PCIe SSD, Webcam, FP Reader, Backlit KB, Wi-Fi 6, Windows 11 Pro, Silver', 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D')

  return (
    <>
      <Card laptopName={laptop1.laptopName} laptopDesc={laptop1.laptopDesc} image={laptop1.image} />

      <Card laptopName={laptop2.laptopName} laptopDesc={laptop2.laptopDesc} image={laptop2.image} />
    </>
  )
}

export default App
