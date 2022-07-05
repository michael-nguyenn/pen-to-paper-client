import "./UserNav.scss";

import UserCard from "../UserCard/UserCard";
import EntryPreview from "../EntryPreview/EntryPreview";

function UserNav({
  entries,
  templates,
  setSelectedTemplateId,
  setSelectedEntryId,
  selectedTemplateId,
  selectedTemplate,
}) {
  return (
    <section className="user-nav">
      <UserCard
        templates={templates}
        setSelectedTemplateId={setSelectedTemplateId}
        selectedTemplateId={selectedTemplateId}
        selectedTemplate={selectedTemplate}
      />
      <EntryPreview entries={entries} setSelectedEntryId={setSelectedEntryId} />
    </section>
  );
}

export default UserNav;
