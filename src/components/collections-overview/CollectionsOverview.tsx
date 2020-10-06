import React from 'react';
import { useSelector } from 'react-redux';
import { selectShopCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/CollectionPreview';
import './CollectionsOverview.scss';

const CollectionsOverview = () => {
    const collections = useSelector(selectShopCollections);

    return (
        <div className="collections-overview">
            {collections.map(({ id, ...restProps }) => (
                <CollectionPreview key={id} {...restProps} />
            ))}
        </div>
    );
};

export default CollectionsOverview;
