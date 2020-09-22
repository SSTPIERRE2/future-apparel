import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { State } from '../../redux/store';

const CartIcon = () => {
    const dispatch = useDispatch();
    const toggleCart = () => dispatch(toggleCartHidden());
    const { itemCount } = useSelector(
        createStructuredSelector<
            State,
            {
                itemCount: number;
            }
        >({
            itemCount: selectCartItemsCount,
        })
    );

    return (
        <div className="cart-icon" onClick={toggleCart}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

export default CartIcon;
