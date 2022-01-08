import React from "react";
import Link from "next/link";

const NavLink = ({ rout, text, css }) => {
  return (
    <li className={css}>
      <Link href={"/" + rout}>{text}</Link>
    </li>
  );
};

export default NavLink;
