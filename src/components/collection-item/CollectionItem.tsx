import React from 'react';

import './CollectionItem.scss';
import { ShopItem } from '../../pages/shop/Shop.data';

const CollectionItem = ({ name, price, imageUrl }: Omit<ShopItem, 'id'>) => (
    <div className="collection-item">
        <div
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
    </div>
);

export default CollectionItem;
