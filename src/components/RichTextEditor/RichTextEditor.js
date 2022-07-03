import "./RichTextEditor.scss";
import "medium-draft/lib/index.css";

import React, { useState, useEffect, RichUtils } from "react";
import { Editor } from "medium-draft";
import { EditorState, convertToRaw } from "draft-js";
import axios from "axios";

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
        <form onSubmit={handleSubmit} className="">
          <h1>Hello!</h1>
          <Editor
            ref={refsEditor}
            editorState={editorState}
            onChange={onChange}
            handleKeyCommand={handleKeyCommand}
          />

          <div>
            <button type="submit" className="button">
              Add Entry
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RichTextEditor;
