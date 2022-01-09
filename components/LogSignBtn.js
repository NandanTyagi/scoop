import Link from "next/link";
import SearchBar from "./SearchBar";
import LoginDropdown from "./LoginDropdown";

const LogSignBtn = () => {
  return (
    <div className="log-search-bar">
      <SearchBar/>
      <span className="login-btn nav-link" id="login-btn">
        Login
        <span className="chevron nav-link" >
          <i className="fas fa-chevron-down"></i>
        </span>
        <LoginDropdown/>
      </span>
      <span className="nav-link login-btn" id="sign-up-btn">Sign up</span>
    </div>
  );
};

export default LogSignBtn;
