import { createContext, useReducer } from "react";

import { signOutUser } from "../utils/firebase/firebase.utils";
// import { getItem, setItem } from "../utils/localStorage/localStorage";

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

const CART_ACTIONS_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_IS_MENU_OPEN: "SET_IS_MENU_OPEN",
  CLOSE_CART_AND_NAVIGATE: "CLOSE_CART_AND_NAVIGATE",
  CLOSE_MENU_AND_SIGN_OUT: "CLOSE_MENU_AND_SIGN_OUT",
};

const INITIAL_STATE = {
  isCartOpen: false,
  isMenuOpen: false,
  cartCount: 0,
  cartTotal: 0,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTIONS_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTIONS_TYPES.SET_IS_MENU_OPEN:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTIONS_TYPES.CLOSE_CART_AND_NAVIGATE:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTIONS_TYPES.CLOSE_MENU_AND_SIGN_OUT:
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
    { cartItems, isCartOpen, cartCount, isMenuOpen, cartTotal },
    dispatch,
  ] = useReducer(cartReducer, INITIAL_STATE);

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
      type: CART_ACTIONS_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      },
    });
  };

  const setIsCartOpen = () => {
    dispatch({
      type: CART_ACTIONS_TYPES.SET_IS_CART_OPEN,
      payload: { isCartOpen: !isCartOpen, isMenuOpen: false },
    });
  };

  const setIsMenuOpen = () => {
    dispatch({
      type: CART_ACTIONS_TYPES.SET_IS_MENU_OPEN,
      payload: { isMenuOpen: !isMenuOpen, isCartOpen: false },
    });
  };

  const closeCartAndNavigate = (func) => {
    dispatch({
      type: CART_ACTIONS_TYPES.CLOSE_CART_AND_NAVIGATE,
      payload: !isCartOpen,
    });
    func();
  };

  const closeMenuAndSignOut = () => {
    dispatch({
      type: CART_ACTIONS_TYPES.CLOSE_MENU_AND_SIGN_OUT,
      payload: !isMenuOpen,
    });
    signOutUser();
  };
  // let cartRef = useRef();
  // let menuRef = useRef();
  // let cartIconRef = useRef();

  // useEffect(() => {
  //   let closeOnWindowClick = (e) => {
  //     if (
  //       !cartRef.current.contains(e.target) &&
  //       !menuRef.current.contains(e.target) &&
  //       !cartIconRef.current.contains(e.target)
  //     ) {
  //       setIsCartOpen(false);
  //       setIsMenuOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", closeOnWindowClick);
  // });

  const value = {
    isCartOpen,
    setIsCartOpen,
    setIsMenuOpen,
    closeCartAndNavigate,
    closeMenuAndSignOut,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
    isMenuOpen,
    // cartRef,
    // menuRef,
    // cartIconRef,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
