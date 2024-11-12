import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as BarsIcon } from "../../assets/bars-icon.svg";

import "./bars-icon.styles.scss";

const Bars = () => {
  const { setIsMenuOpen } = useContext(CartContext);

  return (
    <div className="bars-icon-container" onClick={setIsMenuOpen}>
      <BarsIcon className="bars-icon" />
    </div>
  );
};

export default Bars;
