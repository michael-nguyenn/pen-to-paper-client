import "./EditEntryEditor.scss";
import "medium-draft/lib/index.css";

import React, { useState, useEffect, RichUtils } from "react";
import { Editor } from "medium-draft";
import { EditorState, convertFromRaw } from "draft-js";
import axios from "axios";

import deleteIcon from "../../assets/icons/delete.svg";

function EditEntryEditor({ selectedEntry }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(
      convertFromRaw(JSON.parse(selectedEntry.content))
    )
  );

  useEffect(() => {
    setEditorState(
      EditorState.createWithContent(
        convertFromRaw(JSON.parse(selectedEntry.content))
      )
    );
  }, [selectedEntry]);

  console.log(selectedEntry);

  const onChange = (editorState) => {
    setEditorState(editorState);
  };

  const refsEditor = React.createRef();

  useEffect(() => {
    refsEditor.current.focus();
  }, []);

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  return (
    <>
      <div className="editor">
        <form className="editor__form">
          <div className="editor__top">
            <label className="editor__label">
              <input
                type="text"
                name="title"
                className="editor__input"
                placeholder={selectedEntry.title}
              />
            </label>

            <button className="button--delete">
              <img src={deleteIcon} alt="delete icon" />
            </button>
          </div>
          <Editor
            ref={refsEditor}
            editorState={editorState}
            onChange={onChange}
            handleKeyCommand={handleKeyCommand}
          />

          <div className="editor__wrapper">
            <div className="editor__button">
              <button type="submit" className="button button--add">
                Add
              </button>

              <button className="button button--edit">Edit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditEntryEditor;
