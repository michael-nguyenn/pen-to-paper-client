import "./Login.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import login from "../../assets/images/log-in.jpg";

import { Link } from "react-router-dom";

function Login() {
  const handleLogin = () => {
    window.location.replace("http://localhost:3000/user");
  };

  return (
    <>
      <Header />
      <section className="login">
        <div className="login__container">
          <div className="login__left">
            <img src={login} alt="login" className="login__image" />
          </div>

          <div className="login__right">
            <form className="login__form">
              <h1 className="login__title">Login</h1>
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
                  className="button button--login"
                  type="button"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <div className="login__wrapper">
                  <Link to="/signup" className="login__link">
                    Don't have an account yet?
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
