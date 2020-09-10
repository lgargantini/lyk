import React from "react";
import "./App.css";
import Header from "./components/Header";
import LeftNav from "./components/LeftNav";
import FilterableProductTable from "./components/ProductComponents";
import { PRODUCTS } from "./constants";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <Header />
      </header>
      <nav className="app-nav">
        <LeftNav />
      </nav>
      <div className="app-content">
        <FilterableProductTable products={PRODUCTS} />
      </div>
    </div>
  );
};

export default App;
