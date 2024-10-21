import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import Bars from "../../components/bars-icon/bars-icon.component";
import Close from "../../components/close-icon/close-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import MenuDropdown from "../../components/menu-dropdown/menu-dropdown.component";

import "./navigation.styles.scss";
import "../../animations.scss";

import { Toaster, toast } from "sonner";

const Navigation = () => {
  const { isMenuOpen } = useContext(CartContext);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const singnOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
    toast.success("Sign Out successfuly.");
  };

  return (
    <>
      <header className="navbar-container">
        <div className="logo-links-container">
          <MenuDropdown />
          <Link className="nav-logo" to={"/"}>
            <img className="navigation-logo" src="greco.png" alt="greco-logo" />
          </Link>
          <nav className="links-container">
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/shop">
              Products
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </nav>
        </div>
        <div className="icons-container">
          {currentUser ? (
            <Link onClick={singnOutHandler} className="nav-link">
              Sign Out
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          {!isMenuOpen ? <Bars /> : <Close />}
          <CartIcon />
        </div>
        <CartDropdown />
      </header>
      <Toaster position="bottom-center" richColors />
      <Outlet />
    </>
  );
};

export default Navigation;
