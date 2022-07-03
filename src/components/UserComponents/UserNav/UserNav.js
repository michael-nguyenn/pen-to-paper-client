import "./UserNav.scss";

import UserCard from "../UserCard/UserCard";

function UserNav() {
  return (
    <section className="user-nav">
      <UserCard />

      <section className="entry-preview">
        <div className="entry-preview__container">
          <div className="entry-preview__wrapper">
            <p className="entry-preview__entry">Journal Entry #1</p>
            <h3 className="entry-preview__title">Title of Entry</h3>
          </div>

          <div className="entry-preview__date">Date</div>
        </div>
      </section>
    </section>
  );
}

export default UserNav;
