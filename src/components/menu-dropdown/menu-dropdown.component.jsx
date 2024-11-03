import { useSelector } from "react-redux";
import { useContext } from "react";

import { selectCurrentUser } from "../../store/user/user.selector";
import { CartContext } from "../../contexts/cart.context";

import { Link } from "react-router-dom";

import "./menu-dropdown.styles.scss";

const MenuDropdown = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isMenuOpen, toggleIsMenuOpen, menuRef, toggleIsMenuOpenAndSignOut } =
    useContext(CartContext);

  return (
    <div
      ref={menuRef}
      className={`${
        isMenuOpen ? "menu-dropdown-container-open" : "menu-dropdown-container"
      }`}
    >
      <ul className="menu-links-container">
        <Link onClick={toggleIsMenuOpen} className="menu-link" to="/about">
          About
        </Link>
        <Link onClick={toggleIsMenuOpen} className="menu-link" to="/shop">
          Products
        </Link>
        <Link onClick={toggleIsMenuOpen} className="menu-link" to="/contact">
          Contact
        </Link>
        {currentUser ? (
          <Link
            onClick={toggleIsMenuOpenAndSignOut}
            className="menu-link"
            to="/auth"
          >
            Sign Out
          </Link>
        ) : (
          <Link onClick={toggleIsMenuOpen} className="menu-link" to="/auth">
            Sign in
          </Link>
        )}
        <Link onClick={toggleIsMenuOpen} className="nav-logo" to={"/"}>
          <img className="logo-drop-menu" src="greco.png" alt="greco-logo" />
        </Link>
      </ul>
    </div>
  );
};

export default MenuDropdown;
