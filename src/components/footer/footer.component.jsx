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
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link>Privacy Policy</Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
