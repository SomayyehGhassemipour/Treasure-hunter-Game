import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userName: "",
  score: 0,
  board: []
}

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {

      state.userName = action.payload.userName
      state.score = action.payload.score
      state.board = action.payload.boardMap

      localStorage.setItem('userName', state.userName)
      localStorage.setItem('score', state.score)
      localStorage.setItem('board', state.board)
    },
    setCurrentUserBoard: (state, action) => {
      state.board = action.payload

      localStorage.setItem('board', action.payload)
    },
    setScore: (state, action) => {
      state.score = action.payload;
      localStorage.setItem('score', state.score)
    },
    removeCurrentUser: (state) => {
      state.userName = ""
      state.score = 0
      state.board = []
    }
  }
})

export const { setCurrentUser, setCurrentUserBoard, setScore, removeCurrentUser } = currentUserSlice.actions

export const getCurrentUserName = (state) => state.currentUser.userName
export const getCurrentUserBoard = (state) => state.currentUser.board
export const getCurrentUserScore = (state) => state.currentUser.score

export default currentUserSlice.reducer