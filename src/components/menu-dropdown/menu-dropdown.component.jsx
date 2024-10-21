import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";

import { Link } from "react-router-dom";

import "./menu-dropdown.styles.scss";

const MenuDropdown = () => {
  const { isMenuOpen, toggleIsMenuOpen, menuRef } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

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
          <Link onClick={toggleIsMenuOpen} className="menu-link" to="/auth">
            Sign Out
          </Link>
        ) : (
          <Link onClick={toggleIsMenuOpen} className="menu-link" to="/auth">
            Sign in
          </Link>
        )}
      </ul>
    </div>
  );
};

export default MenuDropdown;
