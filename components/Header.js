import Logo from "./Logo";
import LogSignBtn from "./LogSignBtn";
import Hamburger from "./HamburgerMenu";

const Header = () => {
  return (
    <header>
      <LogSignBtn />
      <Logo />
      <Hamburger/>
    </header>
  );
};

export default Header;
