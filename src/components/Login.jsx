import { loginUrl } from "../spotify";
import "../styles/Login.css";

export default function Login() {
  return (
    <div className="login">
      <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify logo" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}
