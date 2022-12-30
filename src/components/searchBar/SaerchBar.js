import "./styles.css";
import { IoSearch } from "react-icons/io5";
const SearchBar = ({ searchInput }) => {
  const handelInput = (data) => {
    searchInput(data);
  };
  return (
    <>
      <div className="search-bar">
        <IoSearch className="search-bar-icon" />
        <input
          type="text"
          className="search-bar-input"
          onChange={(e) => handelInput(e.target.value)}
        ></input>
      </div>
    </>
  );
};

export default SearchBar;
