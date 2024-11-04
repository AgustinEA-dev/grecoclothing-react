import { createContext, useEffect, useRef, useReducer } from "react";

import { signOutUser } from "../utils/firebase/firebase.utils";

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
  
  closeOnWindowClick: () => {},
});

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_IS_MENU_OPEN: "SET_IS_MENU_OPEN",
};

const INITIAL_STATE = {
  cartCount: 0,
  cartTotal: 0,
  cartItems: [],
  isMenuOpen: false,
  isCartOpen: false,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPES.SET_IS_MENU_OPEN:
      return {
        ...state,
        isMenuOpen: payload,
      };
    default:
      throw new Error(`unhandled type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [
    { cartItems, cartTotal, cartCount, isCartOpen, isMenuOpen },
    dispatch,
  ] = useReducer(cartReducer, INITIAL_STATE);

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

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch({
      type: "SET_CART_ITEMS",
      payload: {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      },
    });
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemToCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch({ type: "SET_IS_CART_OPEN", payload: bool });
  };

  const setIsMenuOpen = (bool) => {
    dispatch({ type: "SET_IS_MENU_OPEN", payload: bool });
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
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
    setIsMenuOpen,
    cartRef,
    menuRef,
    cartIconRef,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
