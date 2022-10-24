import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { setupStor } from "./stor";

const store = setupStor();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const baseName = process.env.REACT_APP_BASE_NAME;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={`/${baseName}`}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
