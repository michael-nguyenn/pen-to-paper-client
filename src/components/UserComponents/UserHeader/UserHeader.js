import "./UserHeader.scss";

import calendar from "../../../assets/icons/calendar.svg";
import person from "../../../assets/icons/person.svg";

function UserHeader() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="user-header">
          <img src={calendar} alt="calendar" className="user-header__logo" />
          <p className="user-header__text">Timeline</p>
        </div>

        <div className="user-nav__right">
          <img src={person} alt="person" className="user-header__user" />
        </div>
      </nav>
    </header>
  );
}

export default UserHeader;
