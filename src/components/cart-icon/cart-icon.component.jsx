import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { setIsCartOpen, cartCount, cartIconRef } = useContext(CartContext);
  return (
    <div
      ref={cartIconRef}
      className="cart-icon-container"
      onClick={setIsCartOpen}
    >
      <ShoppingIcon className="cart-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
