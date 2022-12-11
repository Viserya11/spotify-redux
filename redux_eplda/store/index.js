import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { nameReducer } from '../reducers'



const bigReducer = combineReducers({
 nameReducer:nameReducer
}) 
/*

{
    name/nameReducer:{
        name:""
    }
}
*/

const store = configureStore({
  reducer: bigReducer, // here there's place for just 1 value!
})

export default store
