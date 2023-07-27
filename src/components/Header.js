import logo from "../assets/images/logo.png";
import {NavLink, useMatch} from "react-router-dom";

export default function Header() {
  // useMatch matches the paths relative to the current location
  const matchHome = useMatch("/");
  const matchAbout = useMatch("/about");

  return (
    <header className="header">
      <img src={logo} alt="Logo kasa" />
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={matchHome ? "active" : ""}>
              ACCUEIL
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={matchAbout ? "active" : ""}>
              À PROPOS
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
