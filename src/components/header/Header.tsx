import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { useSelector } from 'react-redux';
import { State } from '../../redux/store';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { User } from '../../types/user.types';

const Header = () => {
    // const { currentUser, cartHidden } = useSelector((state: State) => ({
    //     currentUser: state.user.currentUser,
    //     cartHidden: selectCartHidden(state),
    // }));
    const { currentUser, cartHidden } = useSelector(
        createStructuredSelector<
            State,
            {
                currentUser: User;
                cartHidden: boolean;
            }
        >({
            currentUser: selectCurrentUser,
            cartHidden: selectCartHidden,
        })
    );

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
                <CartIcon />
            </nav>
            {!cartHidden && <CartDropdown />}
        </header>
    );
};

export default Header;
