import "./UserMain.scss";

import UserBanner from "../UserBanner/UserBanner";
import RichTextEditor from "../../RichTextEditor/RichTextEditor";

function UserMain({
  selectedEntry,
  selectedTemplate,
  setSelectedEntry,
  setEditorState,
  editorState,
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
      />
    </div>
  );
}

export default UserMain;
