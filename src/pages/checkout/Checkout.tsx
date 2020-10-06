import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { State } from '../../redux/store';
import { ShopItem } from '../../redux/shop/shop.data';
import {
    selectCartItems,
    selectCartTotal,
} from '../../redux/cart/cart.selectors';
import './Checkout.scss';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';

const CheckoutPage = () => {
    const { cartItems, cartTotal } = useSelector(
        createStructuredSelector<
            State,
            {
                cartItems: ShopItem[];
                cartTotal: number;
            }
        >({
            cartItems: selectCartItems,
            cartTotal: selectCartTotal,
        })
    );

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} item={cartItem} />
            ))}

            <div className="total">
                <span>TOTAL: ${cartTotal}</span>
            </div>
        </div>
    );
};

export default CheckoutPage;
