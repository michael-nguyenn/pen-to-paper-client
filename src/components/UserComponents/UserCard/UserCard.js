import "./UserCard.scss";

function UserCard() {
  return (
    <section className="user-card">
      <div className="user-card__wrapper">
        <h2 className="user-card__title">Welcome Michael!</h2>
        <p className="user-card__message">Start your day now ✍️</p>

        <div className="user-card__button">
          <button className="button button--usernav">Select Template</button>
        </div>
      </div>
    </section>
  );
}

export default UserCard;
