import { SET_NAME } from "../actions"

const state = {
    name:""
}

/*
1. indul az app
store = {

}
2. init action
reducer(state, {type:init})
=> ujState
3.
az ujState lesz a redux storeban


dispatch({
          type: GET_BOOKS,
          payload: fetchedBooks, 
                 })

reducer(mostani state, {
          type: GET_BOOKS,
          payload: fetchedBooks, 
                 })


         action====> {    
       type:SET_NAME,
       payload:nameToSet
    }
    */

export function nameReducer (currentState = state, action) {
    switch (action.type) {
        case SET_NAME:
            return {
                name:action.payload
            }         
            
        default:
            return currentState
    }
}

reducer({name:""}, {    
    type:SET_NAME,
    payload:"feri"
 })