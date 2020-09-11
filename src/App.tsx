import React from 'react';
import './App.css';
import Homepage from './Homepage';
import { Route } from 'react-router-dom';
import ShopPage from './pages/shop/Shop';

function App() {
    return (
        <div className="App">
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
        </div>
    );
}

export default App;
