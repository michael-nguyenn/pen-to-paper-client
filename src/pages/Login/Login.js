import "./Login.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Login() {
  return (
    <>
      <Header />
      <section className="login">
        <div className="login__left">
          <img src="" alt="login" className="login__image" />
        </div>

        <div className="login__right">
          <form>
            <label>
              Username
              <input></input>
            </label>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
