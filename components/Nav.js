import Link from "next/link";
import NavLink from "./NavLink";
const Nav = () => {
    let stnCss = "ml-5 p-2 text-gray-100 nav-link";
  return (
    <nav className="bg-gray-400 p-2 ">
      <ul className="flex justify-center container grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 text-sm sm:text-base">
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
