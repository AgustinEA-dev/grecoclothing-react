import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import Footer from "../../components/footer/footer.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <>
      <div className="checkout-container">
        <h2 className="checkout-title">Complete your buy!</h2>
        {cartItems.length ? (
          <>
            {cartItems.map((cartItem) => (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className="total">TOTAL: ${cartTotal}</div>{" "}
          </>
        ) : (
          <h3 className="empty-message">No products yet</h3>
        )}
      </div>
    </>
  );
};

export default Checkout;
