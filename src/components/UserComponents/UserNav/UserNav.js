import "./UserNav.scss";

import UserCard from "../UserCard/UserCard";
import EntryPreview from "../EntryPreview/EntryPreview";

function UserNav() {
  return (
    <section className="user-nav">
      <UserCard />
      <EntryPreview />
    </section>
  );
}

export default UserNav;
