import { useContext } from "react";

import ProductCard from "../product-card/product-card.component";

import { ProductsContext } from "../../contexts/products.context";

import "./products.styles.scss";

const Products = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-section">
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
