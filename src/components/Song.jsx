import React from 'react'


export default function Song({song}) {
  return (<div className="right">

    <div className="song-info container text-left">
    <div className="songrow">
      <div className="songtitle col">
        {song.title}
      </div>
      <div className="col order-5">
        {song.duration}
      </div>
      <div className="col order-1">
        {song.album.title}
      </div>
    </div>
  </div>
  </div>
);
}



