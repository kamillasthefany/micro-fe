import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Header from "home/Header";
import Footer from "home/Footer";

const App = () => {
  const [showHeader, setShowHeader] = useState(false);
  return (
    <div className="container">
      {showHeader &&
        <Suspense fallback={<div>carregando</div>}>
          <Header />
        </Suspense>
      }
      <div>PDP</div>
      <button onClick={() => setShowHeader(!showHeader)}>Mostrar Header</button>
      <Footer />
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
