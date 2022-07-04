import "./RichTextEditor.scss";

import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, RichUtils, convertFromRaw } from "draft-js";
import axios from "axios";

import deleteIcon from "../../assets/icons/delete.svg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";

function RichTextEditor({ selectedTemplate, selectedEntry }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    selectedTemplate
      ? setEditorState(
          EditorState.createWithContent(
            convertFromRaw(JSON.parse(selectedTemplate.content))
          )
        )
      : setEditorState(EditorState.createEmpty());
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

    axios
      .post("http://localhost:8080/entries", {
        title: e.target.title.value,
        content: content,
      })
      .then((response) => {
        console.log(response);
        window.location.replace("http://localhost:3000/user");
      })
      .catch((err) => console.log(err));
  };

  // const placeholder = () => {
  //   let placeholder;
  //   if (selectedEntry) {
  //     placeholder = selectedEntry.title;
  //   }
  //   if (selectedTemplate) {
  //     placeholder = selectedTemplate.title;
  //   }
  // };

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
                placeholder="Title"
                defaultValue=""
              />
            </label>

            <button className="button--delete">
              <img src={deleteIcon} alt="delete icon" />
            </button>
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
