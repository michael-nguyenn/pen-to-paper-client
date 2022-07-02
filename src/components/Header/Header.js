import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__container">
          <Link to="/" className="nav__link">
            <img src={logo} alt="site logo" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
