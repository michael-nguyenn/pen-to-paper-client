import "./RichTextEditor.scss";

import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, RichUtils, convertFromRaw } from "draft-js";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";

function RichTextEditor({
  selectedTemplate,
  selectedEntry,
  setSelectedEntry,
  setEditorState,
  editorState,
  selectedTemplateId,
  entries,
  templates,
}) {
  const [isTemplate, setIsTemplate] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (selectedTemplate) {
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(JSON.parse(selectedTemplate.content))
        )
      );
      setSelectedEntry(null);
    } else {
      setEditorState(EditorState.createEmpty());
    }
  }, [selectedTemplate]);

  useEffect(() => {
    if (selectedEntry) {
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(JSON.parse(selectedEntry.content))
        )
      );
      setIsTemplate(false);
    } else {
      setEditorState(EditorState.createEmpty());
    }
  }, [selectedEntry]);

  useEffect(() => {
    if (selectedTemplateId === 1) {
      setEditorState(EditorState.createEmpty());
      setIsTemplate(true);
    } else {
      setIsTemplate(false);
    }
  }, [selectedTemplate]);

  const onChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = editorState.getCurrentContent();
    const content = JSON.stringify(convertToRaw(data));

    if (isTemplate) {
      axios
        .post("http://localhost:8080/templates", {
          title: e.target.title.value,
          content: content,
        })
        .then(() => {
          setIsTemplate(false);
          window.location.replace("http://localhost:3000/user");
        });
    }

    if (selectedEntry === null && selectedTemplateId !== 1) {
      axios
        .post("http://localhost:8080/entries", {
          title: e.target.title.value,
          content: content,
        })
        .then(() => {
          window.location.replace("http://localhost:3000/user");
        })
        .then(() => setSelectedEntry(null))
        .catch((err) => console.log(err));
    }

    if (selectedEntry.id) {
      axios
        .patch(`http://localhost:8080/entries/${selectedEntry.id}`, {
          title: e.target.title.value,
          content: content,
        })
        .then(() => {
          window.location.replace("http://localhost:3000/user");
        })
        .then(() => setSelectedEntry(null))
        .catch((err) => console.log(err));
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    console.log(selectedEntry.id);

    if (selectedEntry.id) {
      axios
        .delete(`http://localhost:8080/entries/${selectedEntry.id}`)
        .then(() => window.location.replace("http://localhost:3000/user"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Entry?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Are you sure you want to delete this entry?</ModalBody>

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

      <div className="editor">
        <form onSubmit={handleSubmit} className="editor__form">
          <div className="editor__top">
            <label className="editor__label">
              <input
                type="text"
                name="title"
                className="editor__input"
                placeholder="Your Title Here"
                defaultValue={
                  (selectedEntry && selectedEntry.title) ||
                  (selectedTemplate && "") ||
                  ""
                }
              />
            </label>
          </div>
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            placeholder="Start typing..."
            handleKeyCommand={handleKeyCommand}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            spellCheck={true}
            toolbar={{
              options: [
                "inline",
                "blockType",
                "fontSize",
                "fontFamily",
                "list",
                "textAlign",
                "colorPicker",
                "link",
                "image",
                "history",
              ],
              inline: { inDropdown: true },
              blockType: { dropdownClassName: "block-type" },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
            }}
            hashtag={{
              separator: " ",
              trigger: "#",
            }}
          />

          <div className="editor__wrapper">
            <div className="editor__button">
              {isTemplate ? (
                <button type="submit" className="button button--save">
                  Save Template
                </button>
              ) : (
                <button type="submit" className="button button--add">
                  {selectedEntry === null ? "Add" : "Save"}
                </button>
              )}

              {!isTemplate
                ? entries.length !== 0 && (
                    <Button
                      className="button button--delete"
                      onClick={onOpen}
                      bg="red"
                    >
                      DELETE
                    </Button>
                  )
                : ""}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default RichTextEditor;
