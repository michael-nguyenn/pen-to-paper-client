import "./User.scss";

import UserNav from "../../components/UserComponents/UserNav/UserNav";
import UserHeader from "../../components/UserComponents/UserHeader/UserHeader";
import RichTextEditor from "../../components/RichTextEditor/RichTextEditor";

function User() {
  return (
    <>
      <UserHeader />
      <UserNav />
    </>
  );
}

export default User;
