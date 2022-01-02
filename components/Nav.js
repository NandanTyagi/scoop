import Link from "next/link";
const Nav = () => {
  return (
    <nav className="bg-gray-400 p-2 " >
      <ul className="flex justify-center">
          <li className="mr-5 p-2 text-gray-100">
              <Link href='/politics'>Politics</Link>
          </li>
          <li className="ml-5 p-2 mr-10 text-gray-100">
              <Link href='/culture'>Culture</Link>
          </li>
          <li className="mr-5 p-2 text-gray-100">
              <Link href='/science'>Science</Link>
          </li>
          <li className="ml-5 p-2 mr-10 text-gray-100">
              <Link href='/business'>Business</Link>
          </li>
          <li className="mr-5 p-2 text-gray-100">
              <Link href='/crypto'>Crypto</Link>
          </li>
          <li className="ml-5 p-2 mr-10 text-gray-100">
              <Link href='/tech'>Tech</Link>
          </li>
          <li className="ml-5 p-2 mr-10 text-gray-100">
              <Link href='/sports'>Sports</Link>
          </li>
          <li className="ml-5 p-2 mr-10 text-gray-100">
              <Link href='/music'>Music</Link>
          </li>
      </ul>
    </nav>
  );
};

export default Nav;
