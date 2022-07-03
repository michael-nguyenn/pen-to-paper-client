import "./UserMain.scss";

import UserBanner from "../UserBanner/UserBanner";
import RichTextEditor from "../../RichTextEditor/RichTextEditor";

function UserMain() {
  return (
    <div className="user-main">
      <UserBanner />
      <RichTextEditor />
    </div>
  );
}

export default UserMain;
