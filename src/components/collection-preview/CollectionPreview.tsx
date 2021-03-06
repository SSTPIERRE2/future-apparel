import React from 'react';
import './CollectionPreview.scss';
import { ShopCategory } from '../../redux/shop/shop.data';
import CollectionItem from '../collection-item/CollectionItem';

const CollectionPreview = ({ title, items }: Omit<ShopCategory, 'id'>) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((_item, i) => i < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
);

export default CollectionPreview;
