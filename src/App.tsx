import React, { useEffect } from 'react';
import './App.css';
import Homepage from './Homepage';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { UserData, User } from './types/user.types';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { State } from './redux/store';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/Checkout';

function App() {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(
        createStructuredSelector<
            State,
            {
                currentUser: User;
            }
        >({
            currentUser: selectCurrentUser,
        })
    );

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(
            async (userAuth) => {
                if (userAuth) {
                    const userRef = await createUserProfileDocument(userAuth);

                    userRef.onSnapshot((snapshot) => {
                        dispatch(
                            setCurrentUser({
                                id: snapshot.id,
                                ...(snapshot.data() as UserData),
                            })
                        );
                    });
                } else {
                    dispatch(setCurrentUser(null));
                }
            }
        );

        return () => {
            unsubscribeFromAuth();
        };
    }, [dispatch]);

    return (
        <main className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/checkout" component={CheckoutPage} />
                <Route
                    exact
                    path="/signin"
                    render={() =>
                        currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
                    }
                />
            </Switch>
        </main>
    );
}

export default App;
