import { useContext } from "react";

import { ReactComponent as BarsIcon } from "../../assets/bars-icon.svg";

import { MenuDropdownContext } from "../../contexts/menu-dropdown.context";

import "./bars-icon.styles.scss";

const Bars = () => {
  const { isMenuOpen, toggleIsMenuOpen } = useContext(MenuDropdownContext);

  return (
    <div className="bars-icon-container" onClick={toggleIsMenuOpen}>
      <BarsIcon className="bars-icon" />
    </div>
  );
};

export default Bars;
