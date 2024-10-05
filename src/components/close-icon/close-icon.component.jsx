import { useContext } from "react";
import { MenuDropdownContext } from "../../contexts/menu-dropdown.context";

import { ReactComponent as CloseIcon } from "../../assets/close-icon.svg";

import "./close-icon.styles.scss";

const Close = () => {
  const { toggleIsMenuOpen } = useContext(MenuDropdownContext);
  return (
    <div className="close-icon-container" onClick={toggleIsMenuOpen}>
      <CloseIcon className="close-icon" />
    </div>
  );
};

export default Close;
