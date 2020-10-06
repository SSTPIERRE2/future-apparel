import React from 'react';

import './CollectionItem.scss';
import { ShopItem } from '../../redux/shop/shop.data';
import CustomButton from '../custom-button/CustomButton';
import { useDispatch } from 'react-redux';
import { createAddItemAction } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item }: { item: ShopItem }) => {
    const dispatch = useDispatch();
    const { name, price, imageUrl } = item;
    const addItem = () => dispatch(createAddItemAction(item));

    return (
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
            <CustomButton onClick={addItem} inverted>
                Add to cart
            </CustomButton>
        </div>
    );
};

export default CollectionItem;
