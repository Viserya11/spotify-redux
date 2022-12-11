export const GET_SONGS = "GET_SONGS"

// getSongsActionCreator
export const getSongsAction = (query) => {
    return async (dispatch, getState) =>  {
       let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
        if (response.ok) {
            let {data} = await response.json()
            console.log(data)
            dispatch({type: GET_SONGS, payload:data})
        }
    }

}