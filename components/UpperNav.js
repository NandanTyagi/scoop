import Link from "next/link";
import NavLink from "./NavLink";

const UpperNav = () => {
  let stnCss = "upper-nav-item nav-link"
  return (
    <ul className="upper-nav">
       <NavLink css={stnCss} rout="" text="Home" />
       <NavLink css={stnCss} rout="about" text="About" />
       <NavLink css={stnCss} rout="news" text="News" />
       <NavLink css={stnCss} rout="contact" text="Contact" />
       <NavLink css={stnCss} rout="international" text="International" />
    </ul>
  );
};

export default UpperNav;
