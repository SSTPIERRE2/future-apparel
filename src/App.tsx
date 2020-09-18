import React, { useEffect } from 'react';
import './App.css';
import Homepage from './Homepage';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { UserData } from './types/user.types';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { useCurrentUser } from './hooks/user';

function App() {
    const dispatch = useDispatch();
    const currentUser = useCurrentUser();
    let unsubscribeFromAuth: firebase.Unsubscribe = null;

    useEffect(() => {
        unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
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
        });

        return () => {
            unsubscribeFromAuth();
        };
    }, []);

    return (
        <main className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/shop" component={ShopPage} />
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
