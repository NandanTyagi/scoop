import Link from "next/link";
import SearchBar from "./SearchBar";
import LoginDropdown from "./LoginDropdown";

const LogSignBtn = () => {
  return (
    <div className="log-search-bar">
      <SearchBar/>
      <span className="p-2 pt-2 pb-0 cursor-pointer login-btn  ">
        Login
        <span className="ml-1 mr-2 ">
          <i className="fas fa-chevron-down text-xs"></i>
        </span>
        <LoginDropdown/>
      </span>
      <span className="p-2 pt-2 pb-0 cursor-pointer nav-link">Sign up</span>
    </div>
  );
};

export default LogSignBtn;
