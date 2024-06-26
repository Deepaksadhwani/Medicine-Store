import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductContextProvider from "./contexts/PorductContextProvider.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductContextProvider>
    <App />
  </ProductContextProvider>,
);
