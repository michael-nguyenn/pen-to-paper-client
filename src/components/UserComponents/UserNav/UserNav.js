import "./UserNav.scss";

import UserCard from "../UserCard/UserCard";
import EntryPreview from "../EntryPreview/EntryPreview";

function UserNav({
  entries,
  templates,
  setSelectedTemplateId,
  setSelectedEntryId,
}) {
  return (
    <section className="user-nav">
      <UserCard
        templates={templates}
        setSelectedTemplateId={setSelectedTemplateId}
      />
      <EntryPreview entries={entries} setSelectedEntryId={setSelectedEntryId} />
    </section>
  );
}

export default UserNav;
