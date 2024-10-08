import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Checkout from "./routes/checkout/checkout.component";
import About from "./routes/about/about.component";
import Contact from "./routes/contact/contact.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";


function App() {
  return (
    <div className="App">
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
