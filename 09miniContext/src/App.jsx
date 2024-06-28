import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

const App = () => {
  

  return (
    <UserContextProvider>
      <h3>React js with Shriyash</h3>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App