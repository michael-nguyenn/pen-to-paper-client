import "./UserMain.scss";

import UserBanner from "../UserBanner/UserBanner";
import RichTextEditor from "../../RichTextEditor/RichTextEditor";

function UserMain({ selectedEntry, selectedTemplate }) {
  return (
    <div className="user-main">
      <UserBanner />
      <RichTextEditor
        selectedTemplate={selectedTemplate}
        selectedEntry={selectedEntry}
      />
    </div>
  );
}

export default UserMain;
