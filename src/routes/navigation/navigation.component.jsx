import { useContext } from "react";

import { useSelector } from "react-redux";

import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../store/user/user.selector";

import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import Bars from "../../components/bars-icon/bars-icon.component";
import Close from "../../components/close-icon/close-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import MenuDropdown from "../../components/menu-dropdown/menu-dropdown.component";

import "./navigation.styles.scss";
import "../../animations.scss";

import { Toaster } from "sonner";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isMenuOpen } = useContext(CartContext);

  return (
    <>
      <header className="navbar-container">
        <div className="logo-links-container">
          <MenuDropdown />
          <Link className="nav-logo" to={"/"}>
            <img className="navigation-logo" src="greco.png" alt="greco-logo" />
          </Link>
          <nav className="links-container">
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/shop">
              Products
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </nav>
        </div>
        <div className="icons-container">
          {currentUser ? (
            <Link onClick={signOutUser} className="nav-link">
              Sign Out
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          {!isMenuOpen ? <Bars /> : <Close />}
          <CartIcon />
        </div>
        <CartDropdown />
      </header>
      <Toaster position="bottom-center" richColors />
      <Outlet />
    </>
  );
};

export default Navigation;
