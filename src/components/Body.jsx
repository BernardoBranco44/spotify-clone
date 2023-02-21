import "../styles/Body.css";
import Header from "./Header";
import SongRow from "./SongRow";
import { useStateProvider } from "../StateProvider";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Body({spotify}) {
  const [{discover_weekly}, dispatch] = useStateProvider()

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify}/>
      <div className="body-info">
        <img src={discover_weekly?.images[0].url} alt="discovery weekly image" />
        <div className="body-info-text">
          <strong></strong>
          <h2></h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body-songs">
        <div className="body-icons">
          <PlayCircleFilledIcon className="body-shuffle" onClick={playPlaylist} />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon  />
        </div>
        {discover_weekly?.tracks.items.map(item => (
          <SongRow key={item.track.name} track={item.track} playSong={playSong}/>
        ))}
      </div>
    </div>
  )
}
