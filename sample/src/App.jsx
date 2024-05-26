import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'


const App = () => {

    const [Color, setColor] = useState('black')

    const ChangeColor = useCallback(() => {
        let Colors = ['red', 'white', 'pink', 'blue', 'yellow', 'purple', 'skyblue']

        let randomColor = Math.floor(Math.random() * Colors.length)

        setColor(Colors[randomColor])

    }, [setColor])


    return (
        <>
            <body className='h-screen' style={{ backgroundColor: Color }}>
                <h2>This is the Color</h2>
                <button onClick={ChangeColor}>Click ME</button>
            </body>
        </>
    )
}

export default App