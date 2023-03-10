import { useEffect } from "react";
import "../styles/Footer.css"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlinedIcon from '@mui/icons-material/PauseCircleOutlined';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { useStateProvider } from "../StateProvider";

export default function Footer({spotify}) {
  const [{token, item, playing}, dispatch] = useStateProvider()

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {


      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  // const skipNext = () => {
  //   spotify.skipToNext();
  //   spotify.getMyCurrentPlayingTrack().then((r) => {
  //     dispatch({
  //       type: "SET_ITEM",
  //       item: r.item,
  //     });
  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: true,
  //     });
  //   });
  // };

  // const skipPrevious = () => {
  //   spotify.skipToPrevious();
  //   spotify.getMyCurrentPlayingTrack().then((r) => {
  //     dispatch({
  //       type: "SET_ITEM",
  //       item: r.item,
  //     });
  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: true,
  //     });
  //   });
  // };

  return (
    <div className="footer">
      <div className="footer-left">
        <img className="footer-album" src={item?.album.images[0].url} alt="" />
        {console.log(item?.album.images[0])}
        {item ? (
          <div className="footer-song-nfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer_-song-info">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>
      <div className="footer-center">
        <ShuffleIcon className="footer-green" />
        <SkipPreviousIcon className="footer-icon" />

        {playing ? (
          <PauseCircleOutlinedIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        )}

        <SkipNextIcon className="footer-icon" />
        <RepeatIcon className="footer-green" />
      </div>
      <div className="footer-right">
        <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider aria-labelledby="continuous-slider" />
            </Grid>
          </Grid>
      </div>
    </div>
  )
}
