import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Context from "./Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Context>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Context>
)