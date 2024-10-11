import { Link } from "react-router-dom";

import "./banner.styles.scss";
import "../../animations.scss";

const Banner = () => {
  return (
    <div className="banner-container">
      <h2 className="banner-h2">
        Bulk Purchase Discounts: Save More on Your Orders!
      </h2>
      <Link className="banner-link">NOW MORE!</Link>
    </div>
  );
};

export default Banner;
