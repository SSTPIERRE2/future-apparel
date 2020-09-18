import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';
import { useDispatch } from 'react-redux';
import { toggleCardHidden } from '../../redux/cart/cart.actions';

const CartIcon = () => {
    const dispatch = useDispatch();
    const toggleCart = () => dispatch(toggleCardHidden());

    return (
        <div className="cart-icon" onClick={toggleCart}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
};

export default CartIcon;
