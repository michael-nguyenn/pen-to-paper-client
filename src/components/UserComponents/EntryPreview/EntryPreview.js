import "./EntryPreview.scss";

function EntryPreview({ entries, setSelectedEntryId }) {
  const dateConvert = (entryDate) => {
    const date = new Date(entryDate);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const handleNewEntry = () => {
    window.location.replace("http://localhost:3000/user");
  };

  return (
    <>
      <div className="entry__wrapper">
        <button onClick={handleNewEntry} className="button button--create">
          Create New Entry!
        </button>
      </div>
      <section className="entry">
        {entries.map((entry) => {
          return (
            <div
              className="entry-preview"
              key={entry.id}
              onClick={() => setSelectedEntryId(entry.id)}
            >
              <div className="entry-preview__container">
                <div className="entry-preview__wrapper">
                  <p className="entry-preview__entry">{`Journal Entry #${entry.id}`}</p>
                  <h3 className="entry-preview__title">{entry.title}</h3>
                </div>

                <div className="entry-preview__date">
                  {dateConvert(entry.date_created)}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default EntryPreview;
