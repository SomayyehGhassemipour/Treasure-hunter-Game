import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Login from './components/login/Login'
import Game from './components/game/Game'
import Protected from './components/utilities/Protected'
import ScoreBoard from './components/scoreBoard/ScoreBoard'


function App(props) {

  let navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("userName")) {
      navigate("/game")
    }
  }, [localStorage])

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/game" element={<Protected isLoggedIn={localStorage.getItem("userName")}> <Game /> </Protected>} />
        <Route path="/scoreboard" element={<ScoreBoard />} />
      </Routes>
    </div>
  );
}

export default App;