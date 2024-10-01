import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"

import './index.scss';


import App from './App';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';
import { MenuDropDownProvider } from './contexts/menu-dropdown.context';

import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoriesProvider>
        <MenuDropDownProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </MenuDropDownProvider>
      </CategoriesProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
