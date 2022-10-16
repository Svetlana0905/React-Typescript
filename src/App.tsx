import "./styles/App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { ProductPage } from "./pages/ProductPage";
import { Layout } from "./components/Layout";

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
