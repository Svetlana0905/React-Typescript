import "./styles/App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./views/aboutPage/AboutPage";
import { ProductPage } from "./views/productPage/ProductPage";
import { HomePage } from "./views/homePage/HomePage";
import { DeliveryPage } from "./views/deliveryPage/DeliveryPege";
import { AuthPage } from "./views/authPage/AuthPage";
import { Layout } from "./layouts/Layout";
import { BasketPage } from "./views/basketPage/BasketPage";
import { LikedProductPage } from "./views/likedProductPage/LikedProductPage";

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
          <Route path="basket" element={<BasketPage />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
