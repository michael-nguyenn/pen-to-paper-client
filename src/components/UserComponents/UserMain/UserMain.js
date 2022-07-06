import "./UserMain.scss";

import UserBanner from "../UserBanner/UserBanner";
import RichTextEditor from "../../RichTextEditor/RichTextEditor";

function UserMain({
  selectedEntry,
  selectedTemplate,
  setSelectedEntry,
  setEditorState,
  editorState,
  selectedTemplateId,
  entries,
  templates,
}) {
  return (
    <div className="user-main">
      <UserBanner />
      <RichTextEditor
        setSelectedEntry={setSelectedEntry}
        selectedTemplate={selectedTemplate}
        selectedEntry={selectedEntry}
        editorState={editorState}
        setEditorState={setEditorState}
        selectedTemplateId={selectedTemplateId}
        entries={entries}
        templates={templates}
      />
    </div>
  );
}

export default UserMain;
