import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
const HatsPage = () => {
  return (
    <div>
      <h1>HATS Page</h1>
    </div>
  );
};

function App() {
  return (
    // <div className="App">
    //   <HomePage />
    // </div>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
