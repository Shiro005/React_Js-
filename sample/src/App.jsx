import React from 'react'
import { useState } from 'react'
import CopyButton from './components'


const App = () => {
    const text = "This is normal text and copy this text"

    return (
        <>
            <h2>{text}</h2>
            <CopyButton code={text} />
        </>
    )
}

export default App