import React from 'react';
import './App.css';
import Homepage from './Homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';

function App() {
    return (
        <main className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/shop" component={ShopPage} />
            </Switch>
        </main>
    );
}

export default App;
