import "./SignUp.scss";

import Header from "../../components/Header/Header";
import signup from "../../assets/images/sign-up.jpg";
import axios from "axios";

function SignUp() {
  const handleSignup = (e) => {
    e.preventDefault();
    // Here send a POST request to signupUrl with username, name and password data
    axios
      .post("http://localhost:8080/signup", {
        username: e.target.username.value,
        name: e.target.name.value,
        password: e.target.password.value,
      })
      .then(() => {
        window.location.replace("http://localhost:3000/login");
      });
  };
  return (
    <>
      <Header />
      <section className="login">
        <div className="login__container login__container--special">
          <div className="login__left">
            <img src={signup} alt="login" className="login__image" />
          </div>

          <div className="login__right">
            <form className="login__form" onSubmit={handleSignup}>
              <h1 className="login__title">Sign up</h1>
              <label className="login__label">
                Name
                <input type="text" name="name" className="login__input" />
              </label>

              <label className="login__label">
                Username
                <input type="text" name="username" className="login__input" />
              </label>

              <label className="login__label">
                Password
                <input
                  type="password"
                  name="password"
                  className="login__input"
                />
              </label>

              <div className="login__button">
                <button className="button button--login" type="submit">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
