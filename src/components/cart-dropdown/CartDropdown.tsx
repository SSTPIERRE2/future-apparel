import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import './CartDropdown.scss';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../redux/store';
import CartItem from '../cart-item/CartItem';
import './CartDropdown.scss';
import { createStructuredSelector } from 'reselect';
import { ShopItem } from '../../redux/shop/shop.data';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

interface Props extends RouteComponentProps {}

const CartDropdown = ({ history }: Props) => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector(
        createStructuredSelector<
            State,
            {
                cartItems: ShopItem[];
            }
        >({
            cartItems: selectCartItems,
        })
    );

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
            <CustomButton
                onClick={() => {
                    dispatch(toggleCartHidden());
                    history.push('/checkout');
                }}
            >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
};

export default withRouter(CartDropdown);
