const express = require('express');
const { getBoard } = require('./board');
const { findUser, createNewUser, getTop10Users } = require('./users');

const app = express()

app.use(express.json())

const board = getBoard()

app.post("/newUser", (req, res) => {
  let newUserName = req.body.userName
  findUser(newUserName) ? res.send(false) : res.send(createNewUser(newUserName))
})

app.post("/reveal", (req, res) => {
  let user = findUser(req.body.userName)

  user.score = user.score + 1
  req.body.revealedArr.forEach((position) => {
    const col = position[1];
    const row = position[0];
    user.boardMap[col][row] = board[col][row]
  })

  res.send(user)
})

app.post('/endgame', (req, res) => {
  let user = findUser(req.body.userName)
  user.boardMap = null
})

app.get('/scoreboard', (req, res) => {
  let top10 = getTop10Users();
  res.send(top10)
})


const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server started on port 5000 ..."))
