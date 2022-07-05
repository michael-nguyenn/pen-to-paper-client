import "./Home.scss";
import hero from "../../assets/images/hero-banner.jpg";

import Header from "../../components/Header/Header";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <div className="hero">
        <div className="hero__container">
          <div className="hero__left">
            <img src={hero} alt="hero" className="hero__image" />
          </div>

          <div className="hero__right">
            <div className="hero__text">
              <h1 className="hero__title">Pen to Paper</h1>
              <p className="hero__description">
                Unwind your thoughts. Pen to Paper is a place where you can
                journal out your everyday.
              </p>
            </div>

            <div className="hero__button">
              <Link to="/signup" className="button">
                Sign Up
              </Link>
              <Link to="/login" className="button button--special">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
