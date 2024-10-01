import { useContext } from "react";

import { Outlet, Link } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";
import { MenuDropdownContext } from "../../contexts/menu-dropdown.context";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import Bars from "../../components/bars-icon/bars-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import MenuDropdown from "../../components/menu-dropdown/menu-dropdown.component";

import "./navigation.styles.scss";
import "../../components/menu-dropdown/menu-dropdown.styles.scss";

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);
  const { isMenuOpen } = useContext(MenuDropdownContext);
  return (
    <>
      <header className="navbar-container">
        <div className="logo-links-container">
          {isMenuOpen  && <MenuDropdown />}
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
