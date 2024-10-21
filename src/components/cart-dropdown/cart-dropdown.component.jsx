import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const {
    isCartOpen,
    cartItems,
    toggleIsCartOpenAndNavigateToCheckout,
    cartRef,
  } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div
      ref={cartRef}
      className={`${
        isCartOpen ? "cart-dropdown-container" : "cart-dropdown-container-hide"
      }`}
    >
      {cartItems.length ? (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </div>
        </>
      ) : (
        <h3 className="empty-message">No products yet</h3>
      )}
      <button
        onClick={() =>
          toggleIsCartOpenAndNavigateToCheckout(goToCheckoutHandler)
        }
      >
        GO TO CHECK OUT{" "}
      </button>
    </div>
  );
};

export default CartDropdown;
