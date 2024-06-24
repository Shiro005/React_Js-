import React from 'react'
import UserContextProvider from './context/UserContextProvider'

const App = () => {
  return (
    <UserContextProvider>
      <h3>Mini Context app in react js</h3>
    </UserContextProvider>
  )
}

export default App