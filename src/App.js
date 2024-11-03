import { useEffect, useContext } from "react";
import { useDispatch } from "react-redux"

import { CartContext } from "./contexts/cart.context";
import { setCurrentUser } from "./store/user/user.action";

import { Routes, Route, useLocation } from "react-router-dom";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";

import Navigation from "./routes/navigation/navigation.component";
import Checkout from "./routes/checkout/checkout.component";
import About from "./routes/about/about.component";
import Contact from "./routes/contact/contact.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";
import BackgroundLayer from "./components/background-layer/background-layer.component";

function App() {
  const { isCartOpen } = useContext(CartContext)
  const dispatch = useDispatch()

  function GoToTop() {
    const routePath = useLocation();
    const onTop = () => {
      window.scrollTo(0, 0);
    }
    useEffect(() => {
      onTop()
    }, [routePath]);

    return null;
  }
  GoToTop()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <div className="App">
      {isCartOpen && <BackgroundLayer />}
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
