import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../../components/product-card/product-card.component";
import Footer from "../../components/footer/footer.component";

import { selectCategoriesMap } from "../../store/categories/category.selector";

import "./category.styles.scss";

import { Toaster } from "sonner";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="title">{category.toLocaleUpperCase()}</h2>
      <div className="category-products-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      <div className="back-link-container">
        <Link className="back-link" to={"/shop"}>
          Back to categories
        </Link>
      </div>
      <Toaster />
      <Footer />
    </>
  );
};

export default Category;
