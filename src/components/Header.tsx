import React from 'react';

import logo from './logo.svg';
import './Header.css';

const Header = () => (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Header.js</code> and save to reload.
        </p>
        <a
          className="App-header-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
            Header
            </a>
      </header>
  );

export default Header;
