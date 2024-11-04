import { createContext, useState, useEffect, useRef } from "react";

import { signOutUser } from "../utils/firebase/firebase.utils";
import { getItem, setItem } from "../utils/localStorage/localStorage";

import { toast } from "sonner";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    toast.warning("Product already added");
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  toast.success("Product added succesfully!");
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  toast.success("Item removed.");

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  toast.success("Product removed from cart");
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  closeOnWindowClick: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    const cartItem = getItem("cartItems");
    return cartItem || [];
  });

  useEffect(() => {
    setItem("cartItems", cartItems);
  }, [cartItems]);

  let cartRef = useRef();
  let menuRef = useRef();
  let cartIconRef = useRef();

  useEffect(() => {
    let closeOnWindowClick = (e) => {
      if (
        !cartRef.current.contains(e.target) &&
        !menuRef.current.contains(e.target) &&
        !cartIconRef.current.contains(e.target)
      ) {
        setIsCartOpen(false);
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", closeOnWindowClick);
  });

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
    setIsMenuOpen(false);
  };

  const toggleIsCartOpenAndNavigateToCheckout = (func) => {
    setIsCartOpen(!isCartOpen);
    func();
  };

  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCartOpen(false);
  };

  const toggleIsMenuOpenAndSignOut = () => {
    signOutUser();
    setIsMenuOpen(!isMenuOpen);
    setIsCartOpen(false);
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    toggleIsCartOpen,
    toggleIsMenuOpen,
    toggleIsCartOpenAndNavigateToCheckout,
    toggleIsMenuOpenAndSignOut,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
    isMenuOpen,
    cartRef,
    menuRef,
    cartIconRef,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
