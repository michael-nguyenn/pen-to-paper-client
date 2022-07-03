import "./UserNav.scss";

import UserCard from "../UserCard/UserCard";
import EntryPreview from "../EntryPreview/EntryPreview";

function UserNav({ entries }) {
  return (
    <section className="user-nav">
      <UserCard />
      <EntryPreview entries={entries} />
    </section>
  );
}

export default UserNav;
