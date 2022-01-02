import Link from "next/link";

const UpperNav = () => {
  return (
    <ul className="upper-nav">
      <li className="upper-nav-item"><Link href='/'>Home</Link></li>
      <li className="upper-nav-item"><Link href='/about'>About</Link></li>
      <li className="upper-nav-item"><Link href='/news'>News</Link></li>
      <li className="upper-nav-item"><Link href='/contact'>Contact</Link></li>
      <li className="upper-nav-item"><Link href='/international'>International</Link></li>
    </ul>
  );
};

export default UpperNav;
