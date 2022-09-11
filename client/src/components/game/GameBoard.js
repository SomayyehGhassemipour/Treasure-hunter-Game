import React from 'react'
import "./GameBoard.css"

function GameBoard({ children }) {
  return <div className="gameBoard">{children}</div>
}

export default GameBoard;