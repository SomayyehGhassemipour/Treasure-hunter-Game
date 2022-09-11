import React from 'react'
import './ScoreTable.css'
import { useSelector } from 'react-redux';
import Field from './Field';
import { getScoreBoard } from '../../redux/features/users/scoreBoardSlice'

function ScoreTable(props) {
  const scoreBoard = useSelector(getScoreBoard)
  return (
    <ul >
      <li className="table-header">
        <div className="rank"><img className="icon" src={"trophy.png"} alt="rankIcon" /></div>
        <div className="name">Name</div>
        <div className="score">Score</div>
      </li>
      {scoreBoard.flat().map((item, index) => {
        return (
          <Field item={item} index={index} />
        )
      })}
    </ul>
  );
}

export default ScoreTable;