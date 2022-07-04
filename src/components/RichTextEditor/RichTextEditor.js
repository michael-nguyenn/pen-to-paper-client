import "./RichTextEditor.scss";

import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, RichUtils, convertFromRaw } from "draft-js";
import axios from "axios";

import deleteIcon from "../../assets/icons/delete.svg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";

function RichTextEditor({
  selectedTemplate,
  selectedEntry,
  setSelectedEntry,
  setEditorState,
  editorState,
}) {
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
    selectedEntry
      ? setEditorState(
          EditorState.createWithContent(
            convertFromRaw(JSON.parse(selectedEntry.content))
          )
        )
      : setEditorState(EditorState.createEmpty());
  }, [selectedEntry]);

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

    if (selectedEntry === null) {
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

  const handleTemplate = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <>
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
              inline: { inDropdown: true },
              blockType: { dropdownClassName: "block-type" },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
            }}
          />

          <div className="editor__wrapper">
            <div className="editor__button">
              <button type="submit" className="button button--add">
                Save
              </button>

              <button
                type="button"
                onClick={handleDelete}
                className="button button--delete"
              >
                Delete Entry
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default RichTextEditor;
