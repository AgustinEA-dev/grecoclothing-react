import { useContext } from "react";
import { MenuDropdownContext } from "../../contexts/menu-dropdown.context";

import { Link } from "react-router-dom";

import "./menu-dropdown.styles.scss";

const MenuDropdown = () => {
  const { isMenuOpen, toggleIsMenuOpen } = useContext(MenuDropdownContext);
  return (
    <div
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
        <Link onClick={toggleIsMenuOpen} className="menu-link" to="/sign-in">
          Sign in
        </Link>
      </ul>
    </div>
  );
};

export default MenuDropdown;
