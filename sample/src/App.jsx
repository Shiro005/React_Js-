import React, { useState } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const App = () => {
    const [color, setColor] = useState('red')

    function changeColor() {
        setColor('purple')
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route path="" element={<Home />} />
            </Route>
        )
    )

    return (
        <>
            <h3 style={{ backgroundColor: color }}>This is a react page</h3>
            <button onClick={changeColor}>Click Me</button>
        </>
    )
}

export default App