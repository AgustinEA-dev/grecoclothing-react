import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="card-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
        <Button
          id="add-to-cart-button"
          buttonType="inverted"
          onClick={addProductToCart}
        >
          Add to cart
        </Button>
      </div>
      <span className="bulk-span">Bulk purchase discount</span>
    </div>
  );
};

export default ProductCard;
