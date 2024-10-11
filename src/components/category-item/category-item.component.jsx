import { Link } from "react-router-dom";

import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Link className="category-body-container" to={title}>
        <div>
          <h2>{title.toUpperCase()}</h2>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
