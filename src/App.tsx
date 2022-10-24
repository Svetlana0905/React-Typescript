import "./styles/App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./views/aboutPage/AboutPage";
import { ProductPage } from "./views/productPage/ProductPage";
// import { ProductCard } from "./views/productCard/ProductCard";
import { HomePage } from "./views/homePage/HomePage";
import { Layout } from "./layouts/Layout";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="product" element={<ProductPage />} />
          {/* <Route path="product/:id" element={<ProductCard />} /> */}
        </Route>
      </Routes>
    </>
  );
};
export default App;
