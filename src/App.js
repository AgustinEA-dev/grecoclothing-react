import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Checkout from "./routes/checkout/checkout.component";
import About from "./components/about/about.component";
import Products from "./components/products/products.component";
import Contact from "./components/contact/contact.component";
import Home from "./routes/home/home.component";
import Hats from "./components/hats/hats.component";
import Jackets from "./components/jackets/jackets.component";
import Mens from "./components/mens/mens.component";
import Sneakers from "./components/sneakers/sneakers.component";
import Womens from "./components/womens/womes.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="hats" element={<Hats />} />
          <Route path="jackets" element={<Jackets />} />
          <Route path="mens" element={<Mens />} />
          <Route path="sneakers" element={<Sneakers />} />
          <Route path="womens" element={<Womens />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
