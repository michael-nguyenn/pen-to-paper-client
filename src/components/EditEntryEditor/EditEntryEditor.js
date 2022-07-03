import "./EditEntryEditor.scss";
import "medium-draft/lib/index.css";

import React, { useState, useEffect } from "react";
import { EditorState, convertFromRaw, RichUtils } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import deleteIcon from "../../assets/icons/delete.svg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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

export default EditEntryEditor;
