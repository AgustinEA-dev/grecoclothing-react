import { Link } from "react-router-dom";

import "./hero.styles.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="image-container">
        <img className="hero-image" src="foto-hero.jpg" alt="" />
        <Link className="shop-link" to={"/products"}>
          SHOP
        </Link>
      </div>
      <div className="hero-text-container">
        <h2 className="hero-h2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          iusto quam voluptate deleniti autem error soluta dolorem provident,
        </h2>
        <Link className="about-link" to={"/about"}>
          <span>Know more</span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
