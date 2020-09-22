import React from 'react';
import { ShopItem } from '../../pages/shop/Shop.data';
import './CartItem.scss';

const CartItem = ({
    item: { imageUrl, price, name, quantity },
}: {
    item: ShopItem;
}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item" />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">
                {quantity} x ${price}
            </span>
        </div>
    </div>
);

export default CartItem;
