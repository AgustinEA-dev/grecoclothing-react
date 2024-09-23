import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../../routes/categories-preview/categories-preview.component";

import "./products.styles.scss";

const Products = () => {
  return (
    <div>
      <div className="shiping-bulk-info-container">
        <ul className="shiping-bulk-info">
          <li> Shipping throughout the country</li>
          <li> Bulk purchasing discounts</li>
          <li> Personal customer service </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<CategoriesPreview />}></Route>
      </Routes>
    </div>
  );
};

export default Products;
