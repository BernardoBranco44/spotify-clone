import "../styles/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useStateProvider } from "../StateProvider";

export default function Header({spotify}) {
  const [{user}, dispatch] = useStateProvider()

  return (
    <div className="header">
      <div className="header-left">
        <SearchIcon />
        <input placeholder="Search for Artists, Songs, or Podcasts" type="text"/>
      </div>
      <div className="header-right">
        <Avatar src={user?.images[0]?.url} alt="avatar"/>
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}
