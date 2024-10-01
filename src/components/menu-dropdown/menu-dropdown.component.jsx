import { Link } from "react-router-dom";

import "./menu-dropdown.styles.scss";

const MenuDropdown = () => {
  return (
    <div className="menu-dropdown-container">
      <ul className="menu-links-container">
        <Link className="menu-link" to="/about">
          About
        </Link>
        <Link className="menu-link" to="/products">
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
