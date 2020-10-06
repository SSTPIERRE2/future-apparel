import React from 'react';
import { useDispatch } from 'react-redux';
import { ShopItem } from '../../redux/shop/shop.data';
import {
    clearItemFromCart,
    createAddItemAction,
    createRemoveItemAction,
} from '../../redux/cart/cart.actions';
import './CheckoutItem.scss';

interface Props {
    item: ShopItem;
}

const CheckoutItem = ({ item }: Props) => {
    const dispatch = useDispatch();
    const { name, imageUrl, price, quantity } = item;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div
                    className="arrow"
                    onClick={() => dispatch(createRemoveItemAction(item))}
                >
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div
                    className="arrow"
                    onClick={() => dispatch(createAddItemAction(item))}
                >
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div
                className="remove-button"
                onClick={() => dispatch(clearItemFromCart(item))}
            >
                &#10005;
            </div>
        </div>
    );
};

export default CheckoutItem;
