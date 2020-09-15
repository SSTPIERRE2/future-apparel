import React, { useState, useEffect } from 'react';
import './App.css';
import Homepage from './Homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import { auth } from './firebase/firebase.utils';

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    let unsubscribeFromAuth: firebase.Unsubscribe = null;

    useEffect(() => {
        unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        });

        return () => {
            unsubscribeFromAuth();
        };
    }, []);

    return (
        <main className="App">
            <Header currentUser={currentUser} />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/signin" component={SignInAndSignUp} />
            </Switch>
        </main>
    );
}

export default App;
