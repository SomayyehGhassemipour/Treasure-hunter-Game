import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: []
}

export const scoreBoardSlice = createSlice({
  name: 'scoreBoard',
  initialState,
  reducers: {
    setScoreBoard: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setScoreBoard } = scoreBoardSlice.actions
export const getScoreBoard = (state) => state.scoreBoard.value

export default scoreBoardSlice.reducer