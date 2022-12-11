/* action 
 {
    type:"mit csinalok",
    payload:adat
 }

action creator/builder

function actionCreator (adat) {
 return {    
    type:"mit csinalok",
    payload:adat
 }
}

action creator/builder
export const getBooksAction = () => {
   return async (dispatch, getState) => {
    console.log('Fetching the books from the API...')
    try {
      let resp = await fetch(
        'https://striveschool-api.herokuapp.com/food-books'
      )
      if (resp.ok) {
        let fetchedBooks = await resp.json()
        dispatch({
          type: GET_BOOKS,
          payload: fetchedBooks, // the reducer is just being given
          // the final result, the array of books! so it cannot fail :)
        })
      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error)
    }
  }
}
dispatch(getBooksAction()) => 
getBooks(dispatch, getState)
 */
export const SET_NAME = 'SET_NAME'

function actionCreator (nameToSet) {
    return {    
       type:SET_NAME,
       payload:nameToSet
    }
   }

