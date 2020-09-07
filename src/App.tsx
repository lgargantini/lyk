import React from 'react';

import './App.css';
import Header from './components/Header';
import LeftNav from './components/LeftNav';
import {FilterableProductTable} from './components/ProductComponents';

const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <LeftNav />
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}

export default App;
