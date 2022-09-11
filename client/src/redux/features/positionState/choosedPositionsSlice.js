import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const choosedPositionsSlice = createSlice({
  name: 'choosedPositions',
  initialState,
  reducers: {

    addPosition: (state, action) => {
      if (!state.value.includes(action.payload)) {
        if (state.value.length >= 3)
          state.value.shift();

        state.value.push(action.payload)
      }
      else {
        let index = state.value.indexOf(action.payload)
        state.value.splice(index, 1)
      }
    },

    removePositions: (state) => {
      state.value = []
    },
  }
})

export const { addPosition, removePositions } = choosedPositionsSlice.actions

export const getChoosedPosition = (state) => state.choosedPositions.value

export default choosedPositionsSlice.reducer