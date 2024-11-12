import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as CloseIcon } from "../../assets/close-icon.svg";

import "./close-icon.styles.scss";

const Close = () => {
  const { setIsMenuOpen } = useContext(CartContext);
  return (
    <div className="close-icon-container" onClick={setIsMenuOpen}>
      <CloseIcon className="close-icon" />
    </div>
  );
};

export default Close;
