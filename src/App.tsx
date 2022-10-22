import "./styles/App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./views/aboutPage/AboutPage";
import { ProductPage } from "./views/productPage/ProductPage";
import { Layout } from "./layouts/Layout";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="React-Typescript/" element={<Layout />}>
          <Route index element={<ProductPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
