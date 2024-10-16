import CategoryItem from "../category-item/category-item.component";
import Banner from "../banner/banner.component";
import Footer from "../footer/footer.component";

import { ReactComponent as WavySeparator } from "../../assets/wave.svg";

import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-section">
      <Banner />
      <h2 className="directory-h2">Welcome to our shop!</h2>
      <div className="directory-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
      <div className="footer-container">
        <WavySeparator className="wavy-separator" />
        <Footer />
      </div>
    </div>
  );
};

export default Directory;
