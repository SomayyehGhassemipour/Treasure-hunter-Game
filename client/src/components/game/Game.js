import React, { useEffect } from 'react'
import GameBoard from './GameBoard'
import Button from './Button'
import Container from '../utilities/Container'

import { useNavigate } from "react-router-dom"

import { setCurrentUser } from '../../redux/features/users/currentUserSlice'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentUserName, getCurrentUserBoard, getCurrentUserScore, setCurrentUserBoard, setScore } from '../../redux/features/users/currentUserSlice'
import { addPosition, getChoosedPosition, removePositions } from '../../redux/features/positionState/choosedPositionsSlice'
import { setTreasureCount, getTreasureCount } from '../../redux/features/treasures/treasureSlice'

import axios from 'axios'

function Game() {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const currentUser = useSelector(getCurrentUserName)
  const choosedPositions = useSelector(getChoosedPosition)
  const treasureCounter = useSelector(getTreasureCount)
  const btnValues = useSelector(getCurrentUserBoard)
  const score = useSelector(getCurrentUserScore)

  useEffect(() => {
    if (treasureCounter === 3) {
      axios.post('/endgame', { userName: currentUser, score: score })
      navigate("/scoreboard")
    }
  }, [treasureCounter])

  useEffect(() => {
    if (localStorage.getItem('userName')) {
      const row = localStorage.getItem('board').split(',')
      const board = []
      for (let treasureCounter = 0; treasureCounter < 5; treasureCounter++)
        board.push(row.splice(0, 5))

      dispatch(setCurrentUser({
        userName: localStorage.getItem('userName'),
        score: Number(localStorage.getItem('score')),
        boardMap: board
      }))
      dispatch(setTreasureCount(Number(localStorage.getItem('treasure'))))
    }

  }, [])


  const countTreatures = (board) => {
    let treasureCounter = 0
    board.forEach(row => row.forEach(col => col === "T" ? treasureCounter++ : treasureCounter))
    return treasureCounter
  }
  const choosePositionHandler = (e) => {
    dispatch(addPosition(e.target.id))
  }

  const revealHandler = () => {
    if (choosedPositions.length > 0) {
      axios.post('/reveal', {
        revealedArr: choosedPositions,
        userName: currentUser
      })
        .then(res => {
          dispatch(setCurrentUserBoard(res.data.boardMap))
          dispatch(setScore(res.data.score))
          dispatch(setTreasureCount(countTreatures(res.data.boardMap)))
        })
      dispatch(removePositions())

    }
    else alert("Please Choose Positions!")
  }

  return (
    <Container>
      <h1>Player Name : {currentUser}</h1>
      <h2>Your Score : {score}</h2>
      <GameBoard>
        {
          btnValues.flat().map((btn, treasureCounter) => {
            return (
              <Button
                key={treasureCounter}
                value={btn}
                id={treasureCounter % 5 + (Math.floor(treasureCounter / 5)).toString()}
                onClick={choosePositionHandler}
              />
            );
          })
        }
      </GameBoard>
      <button className="button" onClick={revealHandler}>REVEAL</button>
    </Container>
  );
}

export default Game;