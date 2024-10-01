import { useContext } from "react";
import { MenuDropdownContext } from "../../contexts/menu-dropdown.context";

import { Link } from "react-router-dom";

import "./menu-dropdown.styles.scss";

const MenuDropdown = () => {
  const { isMenuOpen } = useContext(MenuDropdownContext);
  return (
    <div
      className={`${
        !isMenuOpen ? "menu-dropdown-container" : "menu-dropdown-container-open"
      }` }
    >
      <ul className="menu-links-container">
        <Link className="menu-link" to="/about">
          About
        </Link>
        <Link className="menu-link" to="/shop">
          Products
        </Link>
        <Link className="menu-link" to="/contact">
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default MenuDropdown;
