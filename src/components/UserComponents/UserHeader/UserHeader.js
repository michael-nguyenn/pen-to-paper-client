import "./UserHeader.scss";

import calendar from "../../../assets/icons/calendar.svg";
import person from "../../../assets/icons/person.svg";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

function UserHeader() {
  const handleLogout = () => {
    window.location.replace("http://localhost:3000");
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="user-header">
          <img src={calendar} alt="calendar" className="user-header__logo" />
          <p className="user-header__text">Timeline</p>
        </div>

        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </nav>
    </header>
  );
}

export default UserHeader;
