import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/SideBar';
import './stylesheet.scss'
import Player from './components/Player';
import AlbumFetch from './components/AlbumFetch';
import DisplaySongs from './components/DisplaySongs';

function App() {
  return (
    <>
  <div className="flex">
    <SideBar/>
    <Player/>
    <AlbumFetch/>
    <DisplaySongs/>
    </div>
    
   </>
  );
}

export default App;
