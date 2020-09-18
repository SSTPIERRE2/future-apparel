import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { useCurrentUser } from '../../hooks/user';

const Header = () => {
    const currentUser = useCurrentUser();

    return (
        <header className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <nav className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/shop" className="option">
                    CONTACT
                </Link>
                {currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
