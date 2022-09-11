import { configureStore } from '@reduxjs/toolkit'
import currentUserReducer from './features/users/currentUserSlice'
import choosedPositionsReducer from './features/positionState/choosedPositionsSlice'
import treasureReducer from './features/treasures/treasureSlice'
import scoreBoardReducer from './features/users/scoreBoardSlice'

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    choosedPositions: choosedPositionsReducer,
    treasure: treasureReducer,
    scoreBoard: scoreBoardReducer
  },
})

export default store