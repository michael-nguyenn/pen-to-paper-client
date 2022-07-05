import "./UserCard.scss";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function UserCard({ templates, setSelectedTemplateId }) {
  return (
    <section className="user-card">
      <div className="user-card__wrapper">
        <h2 className="user-card__title">Welcome Michael!</h2>
        <p className="user-card__message">Start your day now ✍️</p>

        <Menu className="user-card__container">
          <MenuButton
            className="button button--trigger"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
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
