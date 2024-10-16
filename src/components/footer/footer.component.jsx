import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; 2024{" "}
          <img src="greco-white.png" alt="" className="footer-logo" /> All
          rights reserved.
        </p>
        <ul className="footer-links">
          <li>
            <a href="/sobre-nosotros">About</a>
          </li>
          <li>
            <a href="/contacto">Contact</a>
          </li>
          <li>
            <a href="/privacidad">Privacy Policy</a>
          </li>
        </ul>
      </div>
      {/* <img className="greco-illustration" src="greco.jpg" alt="" /> */}
    </footer>
  );
};

export default Footer;
