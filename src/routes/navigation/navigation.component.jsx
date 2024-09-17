import { useContext } from "react";

import { Outlet, Link } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as BarsLogo } from "../../assets/bars-solid.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <header className="navbar-container">
        <div className="logo-links-container">
          <Link className="logo" to={"/"}>
            <span>LOGO</span>
          </Link>
          <nav className="links-container">
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/products">
              Products
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </nav>
        </div>
        <div className="icons-container">
          <BarsLogo className="bars-icon" />
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
