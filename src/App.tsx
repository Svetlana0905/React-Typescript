import "./styles/app.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AboutPage,
  CartPage,
  HomePage,
  LikedProductPage,
  ProductPage,
  AuthPage,
  DeliveryPage,
  Layout,
} from "./views";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="product/liked-product" element={<LikedProductPage />} />
          <Route path="delivery" element={<DeliveryPage />} />
          <Route path="login-page" element={<AuthPage />} />
          <Route path="product/basket" element={<CartPage />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
