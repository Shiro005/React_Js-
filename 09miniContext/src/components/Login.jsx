import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handelSubmit = () => {

    }

  return (
    <>
    <h3>Login app</h3>
    <input type="text" placeholder='Username'/>
    <input type="text" placeholder='Password'/>
    <button onClick={handelSubmit}>Submit</button>
    </>
  )
}

export default Login