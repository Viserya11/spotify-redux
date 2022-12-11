import { useDispatch } from "react-redux"
import { getSongsAction } from "../redux/actions"
import { useEffect } from "react"

const AlbumFetch = () => { 
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getSongsAction("queen"))
    }, [])
    
}

export default AlbumFetch