import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const App = () => {

    const [Password, setPassword] = useState("")
    const [Length, setLength] = useState(8)
    const [AllowedEmojis, setAllowedEmojis] = useState(false)


    const PasswordRef = useRef("null")

    const PasswordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (AllowedEmojis) str += "😊🌟🎉💖🔥🌈"

        for (let i = 0; i < Length; i++) {
            let char = Math.floor(Math.random() * str.length)
            pass += str.charAt(char)
        }

        setPassword(pass)
    }, [setPassword, Length, AllowedEmojis])

    const copyPassword = useCallback(() => {
        PasswordRef.current?.select()
        window.navigator.clipboard.writeText(Password)
    }, [Password])

    return (
        <>
            <h2>This is a Password Generator</h2>

            <input
                type="text"
                value={Password}
                id='PasswordInput'
                readOnly
                ref={PasswordRef}
            />
            <label htmlFor="PasswordInput">Length : {Length}</label>



            <button onClick={PasswordGenerator}>Generate</button>
            <button onClick={copyPassword}>Copy</button>

            <input
                type="range"
                value={Length}
                id='lengthInput'
                min={6}
                max={15}
                onChange={(e) => setLength(e.target.value)}
            />

            <input
                type="checkbox"
                checked={AllowedEmojis}
                onChange={() => setAllowedEmojis((prev) => !prev)}
                id='emojisInput'
            />
            <label htmlFor="emojisInput"></label>
        </>
    )
}

export default App