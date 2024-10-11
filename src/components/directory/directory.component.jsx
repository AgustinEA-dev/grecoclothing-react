import CategoryItem from "../category-item/category-item.component";
import Banner from "../banner/banner.component";

import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-section">
      <h2 className="directory-h2">Welcome to our shop!</h2>
      <Banner />
      <div className="directory-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
