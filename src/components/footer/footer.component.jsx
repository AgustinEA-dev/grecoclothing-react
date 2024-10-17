import { Link } from "react-router-dom";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; 2024
          <Link to={"/"}>
            <img src="greco-white.png" alt="" className="footer-logo" />
          </Link>
          All rights reserved.
        </p>
        <ul className="footer-links">
          <Link to={"/about"}>
            <a href="/sobre-nosotros">About</a>
          </Link>
          <Link to={"/contact"}>
            <a href="/contacto">Contact</a>
          </Link>
          <a href="/privacidad">Privacy Policy</a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
