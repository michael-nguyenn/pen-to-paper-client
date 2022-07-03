import "./UserNav.scss";

import UserCard from "../UserCard/UserCard";
import EntryPreview from "../EntryPreview/EntryPreview";

function UserNav({ entries }) {
  return (
    <section className="user-nav">
      <UserCard entries={entries} />
      <EntryPreview />
    </section>
  );
}

export default UserNav;
