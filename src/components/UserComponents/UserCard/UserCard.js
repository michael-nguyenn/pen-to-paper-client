import "./UserCard.scss";
import React, { useState } from "react";

function UserCard({ templates, setSelectedTemplateId }) {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };

  return (
    <section className="user-card">
      <div className="user-card__wrapper">
        <h2 className="user-card__title">Welcome Michael!</h2>
        <p className="user-card__message">Start your day now ✍️</p>

        <div className="user-card__button">
          <button onClick={openMenu} className="button">
            Select Template~
          </button>

          {showMenu ? (
            <ul className="user-card__drop">
              {templates.map((template) => {
                return (
                  <button
                    className="user-card__option"
                    onClick={() => setSelectedTemplateId(template.id)}
                    key={template.id}
                  >
                    {template.title}
                  </button>
                );
              })}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default UserCard;
