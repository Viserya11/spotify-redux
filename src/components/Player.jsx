import React from "react";
import Play from './Play.png'
import Next from './Next.png'
import Repeat from './Repeat.png'
import Shuffle from './Shuffle.png'
import Previous from './Previous.png'

class Player extends React.Component {
  render() {
    return (
      <footer>
        <div className="footerleft">
          {" "}
          <img
            className="playerimg"
            src="/assets/Bohemian_Rhapsody_soundtrack.jpg"
            alt=""
          />
          <div className="flexbottomtext">
            <p className="bottomsongtitle">Song title</p>{" "}
            <p className="bottomalbumname">Album name</p>
          </div>
        </div>
        <div className="player container-fluid fixed-bottom bg-container pt-1 bottom-container">
          <div className="row flex-nowrap justify-content-between playBar py-3">
            <div className="col-auto">
              <div className="playerArtistInfo d-flex">
                <img />
                <div className="d-flex flex-column pl-2">
                  <h6 />
                  <p />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="playerControls w-50 d-flex justify-content-between">
                <a href="#">
                  <img src={Shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={Previous} alt="previous" />
                </a>
                <a href="#" onclick="playSong()">
                  <img src={Play} alt="play" id="play" />
                </a>
                <a href="#" onclick="pauseSong()" id="pause">
                  <img src="playerbuttons/Pause.png" alt="" />
                </a>
                <a href="#">
                  <img src={Next} alt="next" id="next" />
                </a>
                <a href="#">
                  <img src={Repeat} alt="repeat" />
                </a>
              </div>
              <div className="progressContainer d-flex align-items-center">
                <span className="currentTime">00:00</span>
                <div className="progress w-100">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={0}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <audio />
                  </div>
                </div>
                <span className="duration">00:00</span>
              </div>
            </div>
            <div className="col-auto mr-3">
              <div className="playerVolume">
                <i className="fa fa-volume-up" />
                <input type="range" defaultValue={100} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Player;
