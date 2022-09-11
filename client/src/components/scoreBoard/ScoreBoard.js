import axios from 'axios';
import React, { useEffect } from 'react';
import './ScoreBoard.css'
import ScoreTable from './ScoreTable';
import Container from '../utilities/Container';

import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setTreasureCount } from '../../redux/features/treasures/treasureSlice'
import { removeCurrentUser } from '../../redux/features/users/currentUserSlice'
import { setScoreBoard } from '../../redux/features/users/scoreBoardSlice'


function ScoreBoard(props) {

  let navigate = useNavigate()
  const dispatch = useDispatch()


  useEffect(() => {
    axios.get('/scoreboard')
      .then(res => {
        dispatch(setScoreBoard(res.data))
      })
  }, [])

  const newGameHandler = () => {
    dispatch(removeCurrentUser())
    dispatch(setTreasureCount(0))
    localStorage.clear();
    navigate("/login");
  }

  return (
    <Container>
      {localStorage.getItem('userName') && <h1 className='header'>Your Rank</h1>}
      <ScoreTable />
      <button className="button" onClick={newGameHandler}>NEW GAME</button>
    </Container>
  );
}

export default ScoreBoard;