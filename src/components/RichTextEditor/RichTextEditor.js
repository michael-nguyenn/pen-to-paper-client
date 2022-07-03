import "./RichTextEditor.scss";
import "medium-draft/lib/index.css";

import React, { useState, useEffect, RichUtils } from "react";
import { Editor } from "medium-draft";
import { EditorState, convertToRaw } from "draft-js";
import axios from "axios";

import deleteIcon from "../../assets/icons/delete.svg";

function RichTextEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = editorState.getCurrentContent();
    const content = JSON.stringify(convertToRaw(data));

    axios
      .post("http://localhost:8080/entries", {
        content: content,
        type: "daily",
      })
      .then((response) => {
        console.log(response);
        window.location.replace("http://localhost:3001/user");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="editor">
        <form onSubmit={handleSubmit} className="editor__form">
          <div className="editor__top">
            <label>
              <input
                type="text"
                name="title"
                className="editor__input"
                placeholder="Entry Title"
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

export default RichTextEditor;
