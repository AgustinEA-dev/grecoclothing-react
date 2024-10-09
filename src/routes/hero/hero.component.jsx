import { Link } from "react-router-dom";

import "./hero.styles.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="image-container">
        <img className="logo" src="greco-white.png" alt="" />
        {/* <Link className="shop-link" to={"/shop"}>
          SHOP
        </Link> */}
      </div>
      <div className="hero-text-container">
        <Link className="about-link" to={"/about"}>
          <span>Know more about us</span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
