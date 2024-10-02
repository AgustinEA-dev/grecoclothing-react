import { useContext } from "react";

import { Outlet, Link } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import Bars from "../../components/bars-icon/bars-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import MenuDropdown from "../../components/menu-dropdown/menu-dropdown.component";

import "./navigation.styles.scss";

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <header className="navbar-container">
        <div className="logo-links-container">
          <MenuDropdown />
          <Link className="logo" to={"/"}>
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
          <Link className="nav-link" to="/sign-in">Sign In</Link>
          <Bars />
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
