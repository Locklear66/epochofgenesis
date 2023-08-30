import Image from "next/image";
import logo from "/public/logo.png";
import NavCss from "./nav.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
      <div className={NavCss.nav__bar}>
        <ul className={NavCss.list__wrapper}>
        <Image className={NavCss.logo} src={logo} alt="Game Logo"/>
          <li className={NavCss.list}>
            <Link className={NavCss.links} href="/">
              Homepage
            </Link>
          </li>
          <li className={NavCss.list}>
            <Link className={NavCss.links} href="#">
              Equipment
            </Link>
          </li>
          
          <li className={NavCss.list}>
            <Link className={NavCss.links} href="#">
              Spells
            </Link>
          </li>
        
          <li className={NavCss.list}>
            <Link className={NavCss.links} href="#">
              Skills
            </Link>
          </li>
          <li className={NavCss.list}>
            <Link className={NavCss.links} href="#">
              Guides
            </Link>
          </li>
          <li className={NavCss.list}>
            <Link className={NavCss.links} href="/account">
              Account
            </Link>
          </li>
        </ul>
      </div>
  );
}
