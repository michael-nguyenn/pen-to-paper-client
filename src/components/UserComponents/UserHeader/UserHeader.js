import "./UserHeader.scss";

import calendar from "../../../assets/icons/calendar.svg";
import person from "../../../assets/icons/person.svg";

function UserHeader() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="user-nav">
          <img src={calendar} alt="calendar" className="user-nav__logo" />
          <p className="user-nav__text">Timeline</p>
        </div>

        <div className="user-nav__right">
          <img src={person} alt="person" className="user-nav__user" />
        </div>
      </nav>
    </header>
  );
}

export default UserHeader;
