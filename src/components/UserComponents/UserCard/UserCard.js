import "./UserCard.scss";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import axios from "axios";

function UserCard({
  templates,
  setSelectedTemplateId,
  selectedTemplate,
  selectedTemplateId,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = (e) => {
    e.preventDefault();
    console.log(selectedTemplate.id);

    if (selectedTemplate.id) {
      axios
        .delete(`http://localhost:8080/templates/${selectedTemplate.id}`)
        .then(() => window.location.replace("http://localhost:3000/user"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Template?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Are you sure you want to delete this Template?</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={handleDelete} variant="ghost">
              DELETE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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
                    <div
                      className={
                        template.id === 1 ? "close-hidden" : "close-icon"
                      }
                    >
                      <div
                        onClick={handleDelete}
                        className="close-icon__text"
                      ></div>
                      <Button className="button--template" onClick={onOpen}>
                        x
                      </Button>
                    </div>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </div>
      </section>
    </>
  );
}

export default UserCard;
