import { useSelector } from "react-redux";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { selectCurrentUser } from "../../store/user/user.selector";

import { Link } from "react-router-dom";

import "./menu-dropdown.styles.scss";

const MenuDropdown = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isMenuOpen, setIsMenuOpen, menuRef, closeMenuAndSignOut } =
    useContext(CartContext);

  return (
    <div
      ref={menuRef}
      className={`${
        isMenuOpen ? "menu-dropdown-container-open" : "menu-dropdown-container"
      }`}
    >
      <ul className="menu-links-container">
        <Link onClick={setIsMenuOpen} className="menu-link" to="/about">
          About
        </Link>
        <Link onClick={setIsMenuOpen} className="menu-link" to="/shop">
          Products
        </Link>
        <Link onClick={setIsMenuOpen} className="menu-link" to="/contact">
          Contact
        </Link>
        {currentUser ? (
          <Link onClick={closeMenuAndSignOut} className="menu-link" to="/auth">
            Sign Out
          </Link>
        ) : (
          <Link onClick={setIsMenuOpen} className="menu-link" to="/auth">
            Sign in
          </Link>
        )}
        <Link onClick={setIsMenuOpen} className="nav-logo" to={"/"}>
          <img className="logo-drop-menu" src="greco.png" alt="greco-logo" />
        </Link>
      </ul>
    </div>
  );
};

export default MenuDropdown;
