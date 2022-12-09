import React from "react";
import spotify from "./spotify.png"
import home from "./home.png"
import searchicon from "./searchicon.png"
import library from "./library.png"
import liked from "./liked.jpeg"
import createicon from "./createicon.png"

class SideBar extends React.Component {
  render() {
    return (
      <div className="flex">
        <div className="left">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="logoline"
                aria-current="page"
                href="home.html"
              >
                <img className="spotlogo" src={spotify} alt="spotify logo" /> Spotify{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="home.html">
                {" "}
                <img
                  className="homeicon"
                  src={home}
                  alt="home icon"
                  srcSet
                />{" "}
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {" "}
                <img
                  className="searchicon"
                  src={searchicon}
                  alt="search icon"
                  srcSet
                />{" "}
                Search
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">
                {" "}
                <img
                  className="libraryicon"
                  src={library}
                  alt="library icon"
                />{" "}
                Your library
              </a>
            </li>
          </ul>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link aria-current page" href="#">
                {" "}
                <img
                  className="createicon"
                  src={createicon}
                  alt="create icon"
                />{" "}
                Create Playlist
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {" "}
                <img
                  className="likedicon"
                  src={liked}
                  alt="liked songs icon"
                />{" "}
                Liked Songs
              </a>
            </li>
            <hr />
          </ul>
          <div className="scrolly">
            <div className="overflow">
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
              <p>
                {" "}
                <a className="link" href>
                  Example playlist
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
