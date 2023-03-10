import "../styles/Player.css"
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

export default function Player({spotify}) {
  return (
    <div className="player">
      <div className="player-body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  )
}
