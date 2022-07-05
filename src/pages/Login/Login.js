import "./Login.scss";

import Header from "../../components/Header/Header";

import login from "../../assets/images/log-in.jpg";

import { Link } from "react-router-dom";
// import axios from "axios";

function Login({ setErrorMessage, setIsLoggedIn, setIsLoginError }) {
  const handleLogin = (e) => {
    e.preventDefault();

    // // Here send a POST request to loginUrl with username and password data
    // axios
    //   .post("http://localhost:8080/login", {
    //     username: e.target.username.value,
    //     password: e.target.password.value,
    //   })
    //   .then(({ data }) => {
    //     sessionStorage.authToken = data.token;

    //     if (data.token === "") {
    //       setIsLoginError(true);
    //       setErrorMessage(data.error.message);
    //     } else {
    //       setIsLoggedIn(true);
    //       setIsLoginError(false);
    //       setErrorMessage("");
    //     }
    //   })
    //   .then()
    //   .catch((error) => {
    //     console.log(error);
    //   });

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
            <form className="login__form" onSubmit={handleLogin}>
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
                <button className="button button--login" type="submit">
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
