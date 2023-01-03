import "./styles.css";
import { IoSearch } from "react-icons/io5";
const SearchBar = ({ searchInput }) => {
  return (
    <>
      <div className="search-bar">
        <IoSearch className="search-bar-icon" />
        <input
          type="text"
          className="search-bar-input"
          onChange={(e) => searchInput(e.target.value)}
        ></input>
      </div>
    </>
  );
};

export default SearchBar;
