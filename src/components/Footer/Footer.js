import "./Footer.scss";

import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import facebook from "../../assets/icons/facebook.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <p className="footer__text">&copy; Pen To Paper</p>
        </div>

        <div className="footer__right">
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="footer__link"
          >
            <img src={instagram} alt="instagram" className="footer__icon" />
          </a>

          <a
            href="https://www.twitter.com"
            target="_blank"
            className="footer__link"
          >
            <img src={twitter} alt="twitter" className="footer__icon" />
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            className="footer__link"
          >
            <img src={facebook} alt="facebook" className="footer__icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
