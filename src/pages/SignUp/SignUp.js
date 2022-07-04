import "./SignUp.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import signup from "../../assets/images/sign-up.jpg";

function SignUp() {
  const handleSignup = () => {
    window.location.replace("http://localhost:3000/login");
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
            <form className="login__form">
              <h1 className="login__title">Sign up</h1>
              <label className="login__label">
                Name
                <input type="text" name="username" className="login__input" />
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
                <button
                  onClick={handleSignup}
                  className="button button--login"
                  type="button"
                >
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
