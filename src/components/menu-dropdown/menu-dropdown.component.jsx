import "./menu-dropdown.styles.scss";

const MenuDropdown = () => {
  return (
    <div className="menu-dropdown-container">
      <ul className="menu-links-container">
        <li className="menu-link">About</li>
        <li className="menu-link">Products</li>
        <li className="menu-link">Contact</li>
      </ul>
    </div>
  );
};

export default MenuDropdown;
