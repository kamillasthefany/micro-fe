import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./index.css";

const App = () => (
  <div className="container">
    <Header />
    <div>teste</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
