const SET_NAME = "SET_NAME"

function reducer (currentState = state, action) {
    switch (action.type) {
        case SET_NAME:
            return {
                ...currentState,
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