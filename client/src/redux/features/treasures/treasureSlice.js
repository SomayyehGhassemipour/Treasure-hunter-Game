import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

export const treasureSlice = createSlice({
  name: 'treasure',
  initialState,
  reducers: {
    setTreasureCount: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('treasure', state.value)
    }
  }
})

export const { setTreasureCount } = treasureSlice.actions

export const getTreasureCount = (state) => state.treasure.value

export default treasureSlice.reducer