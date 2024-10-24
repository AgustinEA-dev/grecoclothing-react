import { Link } from "react-router-dom";

import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Toaster } from "sonner";

import ProductCard from "../../components/product-card/product-card.component";
import Footer from "../../components/footer/footer.component";

import { CategoriesContext } from "../../contexts/categories.context";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
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
      <Toaster position="bottom-center" richColors />
      <Footer />
    </>
  );
};

export default Category;
