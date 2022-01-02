import Logo from "./Logo";
import LogSignBtn from "./LogSignBtn";
import UpperNav from "./UpperNav";

const Header = () => {
  return (
    <header className="bg-blue-800">
      <LogSignBtn />
      <Logo />
      <UpperNav />
      
    </header>
  );
};

export default Header;
