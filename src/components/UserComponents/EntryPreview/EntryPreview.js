import "./EntryPreview.scss";
import { Link } from "react-router-dom";

function EntryPreview({ entries }) {
  return (
    <>
      {entries.map((entry) => {
        return (
          <section className="entry-preview" key={entry.id}>
            <Link to={`/user/${entry.id}`}>
              <div className="entry-preview__container">
                <div className="entry-preview__wrapper">
                  <p className="entry-preview__entry">{`Journal Entry #${entry.id}`}</p>
                  <h3 className="entry-preview__title">{entry.title}</h3>
                </div>

                <div className="entry-preview__date">date</div>
              </div>
            </Link>
          </section>
        );
      })}
    </>
  );
}

export default EntryPreview;
