import React from 'react'
import { useSelector } from 'react-redux'
import Song from './Song'


export default function DisplaySongs() {
  const songs =  useSelector((state) => state.songsReducer.songs)
  console.log(songs)
  return (
    <>
    <div className='right'>
    <div className='top'>TOP</div>
    
    <div className='bottomcontainer'>{songs.map((song) => <Song key={song.id} song={song}/>)}</div></div>
    </>
  )
}
