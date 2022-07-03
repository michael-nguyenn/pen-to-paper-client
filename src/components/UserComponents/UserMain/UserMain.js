import "./UserMain.scss";

import UserBanner from "../UserBanner/UserBanner";
import RichTextEditor from "../../RichTextEditor/RichTextEditor";
import EditEntryEditor from "../../EditEntryEditor/EditEntryEditor";

function UserMain({ selectedEntry, selectedTemplate }) {
  return (
    <div className="user-main">
      <UserBanner />
      {selectedEntry ? (
        <EditEntryEditor selectedEntry={selectedEntry} />
      ) : (
        <RichTextEditor selectedTemplate={selectedTemplate} />
      )}
    </div>
  );
}

export default UserMain;
