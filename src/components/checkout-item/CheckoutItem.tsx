import React from 'react';
import { ShopItem } from '../../pages/shop/Shop.data';
import './CheckoutItem.scss';

interface Props {
    item: ShopItem;
}

const CheckoutItem = ({ item: { name, imageUrl, price, quantity } }: Props) => (
    <div className="checkout-item">
        <div className="image-container">
            <img alt="item" src={imageUrl} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div className="remove-button">&#10005;</div>
    </div>
);

export default CheckoutItem;
