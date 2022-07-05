import "./UserCard.scss";
import React, { useRef } from "react";
import { useDetectOutsideClick } from "../../../hooks/useDetectOutsideClick";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

function UserCard({ templates, setSelectedTemplateId }) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  console.log(isActive);

  return (
    <section className="user-card">
      <div className="user-card__wrapper">
        <h2 className="user-card__title">Welcome Michael!</h2>
        <p className="user-card__message">Start your day now ✍️</p>

        <Menu className="user-card__container">
          <MenuButton className="button button--trigger" rightIcon="">
            Select Template~
          </MenuButton>
          <MenuList className="user-card__drop">
            {templates.map((template) => {
              return (
                <MenuItem
                  className="user-card__option"
                  onClick={() => setSelectedTemplateId(template.id)}
                  key={template.id}
                >
                  {template.title}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </div>
    </section>
  );
}

export default UserCard;
