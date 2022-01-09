import Link from "next/link";
import NavLink from "./NavLink";
const Nav = () => {
    let stnCss = "ml-5 p-2 text-gray-100 nav-link";
  return (
    <nav>
      <ul className="">
        <NavLink css={stnCss} rout="politics" text="Politics" />
        <NavLink css={stnCss} rout="culture" text="Culture" />
        <NavLink css={stnCss} rout="science" text="Science" />
        <NavLink css={stnCss} rout="business" text="Business" />
        <NavLink css={stnCss} rout="crypto" text="Crypto" />
        <NavLink css={stnCss} rout="tech" text="Tech" />
        <NavLink css={stnCss} rout="sports" text="Sports" />
        <NavLink css={stnCss} rout="music" text="Music" />
      </ul>
    </nav>
  );
};

export default Nav;
