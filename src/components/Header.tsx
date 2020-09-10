import React from "react";

import logo from "./logo.svg";
import "./Header.css";

const Header = () => (
  <div>
    <img src={logo} className="app-header-logo" alt="logo" />
    <h1 className="app-header-h1">TEST PAGE</h1>
  </div>
);

export default Header;
