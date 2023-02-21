import "../styles/SongRow.css"

export default function SongRow({track, playSong}) {
  return (
    <div className="song-row" onClick={() => playSong(track.id)}>
      <img src={track.album.images[0].url} alt="song image" className="song-row-album" />
      <div className="song-row-info">
        <h1>{track.name}</h1>
        <p>{track.artists.map((artist) => artist.name).join(",")} -{" "}{track.album.name}</p>
      </div>
    </div>
  )
}
