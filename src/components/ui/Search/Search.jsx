import { IoSearch } from "react-icons/io5";
import "./Search.css";

function SearchForm() {
  return (
    <form className="app-search">
      <div className="search-box">
        <input type="text" className="form-control" placeholder="Search..." />
        <IoSearch className="search-icon" />
      </div>
    </form>
  );
}

export default SearchForm;
