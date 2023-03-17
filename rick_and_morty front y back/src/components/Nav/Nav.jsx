import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav>
      <div>
        <Link to="/home">
          Home
        </Link>
        <Link to="/favorites">
          Favorites
        </Link>
        <Link to="/about">
          About
        </Link>
        <button onClick={props.logout}>
          LogOut
        </button>
      </div>
      <SearchBar onSearch={props.onSearch} random={props.random} />
    </nav>
  );
}
