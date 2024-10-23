import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { Toaster } from "sonner";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import ShippingForm from "../../components/shipping-form/shipping-form.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import Footer from "../../components/footer/footer.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <>
      <Toaster position="bottom-center" richColors />
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
          <h3 className="empty-message">Your cart is empty</h3>
        )}
      </div>
      <ShippingForm />
      <PaymentForm />
      <Footer />
    </>
  );
};

export default Checkout;
