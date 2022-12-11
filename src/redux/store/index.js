import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { songsReducer } from '../reducers'




const bigReducer = combineReducers({
 songsReducer: songsReducer
}) 


const store = configureStore({
  reducer: bigReducer, 
})

export default store
