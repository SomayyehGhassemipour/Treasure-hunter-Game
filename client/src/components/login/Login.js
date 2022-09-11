import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import './Login.css'
import Container from '../utilities/Container';
import { setCurrentUser } from '../../redux/features/users/currentUserSlice'

function Login() {

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const [name, setName] = useState('')

  const changeHandler = e => {
    setName(e.target.value)
  };

  const startGameHandler = () => {
    !name ? alert("Please Enter Your Name.") :
      axios.post('/newUser', { userName: name })
        .then(res => {
          if (!res.data)
            alert("This name already existed. Please choose another name.")
          else {
            dispatch(setCurrentUser(res.data))
            navigate("/game")
          }
        })
  }

  return (
    <Container>
      <h1 htmlFor="">Welcome to Treasure Game</h1>
      <h2>Please Enter Your name</h2>
      <input type="text" id="username" name="username" value={name} onChange={changeHandler} />
      <button className='button' onClick={startGameHandler}>START</button>
    </Container>
  );
}

export default Login;