import react from 'react'

function Demo ({num1, num2}) {
    const result = num1 + num2
    
    return (
        <>
        <h3>This is the sum of {num1} and {num2} is {result}</h3>
        </>
    )
}

export default Demo