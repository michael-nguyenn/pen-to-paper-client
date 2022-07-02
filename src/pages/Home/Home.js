import "./Home.scss";
import hero from "../../assets/images/hero-banner.jpg";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <>
      <Header />
      <div className="hero">
        <div className="hero__container">
          <div className="hero__left">
            <img src={hero} alt="hero image" className="hero__image" />
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
              <Button className="button" text="Sign Up" />
              <Button className="button button--special" text="Sign In" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
