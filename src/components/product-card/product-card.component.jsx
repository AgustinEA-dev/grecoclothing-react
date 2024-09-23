import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img className="product-card-image" src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <div className="name-price-container">
          <span className="name">{name}</span>
          <span className="price">${price}</span>
        </div>
        <button onClick={addProductToCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
