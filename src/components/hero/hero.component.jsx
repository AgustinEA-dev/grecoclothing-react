import { Link } from "react-router-dom";

import "./hero.styles.scss";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero">
        <div className="hero-text-container">
          <h2 className="hero-h2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            iusto quam voluptate deleniti autem error soluta dolorem provident,
            inventore cupiditate impedit perferendis eos laboriosam a tenetur
            excepturi repellat animi molestiae?
          </h2>
          <Link className="hero-span" to={"/about"}>
            <span>Know more</span>
          </Link>
        </div>
        <div className="hero-img-container">
          <div className="image-container">
            <Link className="shop-link" to={"/products"}>SHOP</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
