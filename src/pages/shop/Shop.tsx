import React, { useState } from 'react';
import SHOP_DATA, { ShopCategory } from './Shop.data';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

const ShopPage = () => {
    const [collections] = useState<ShopCategory[]>(SHOP_DATA);

    return (
        <div className="shop-page">
            {collections.map(({ id, ...restProps }) => (
                <CollectionPreview key={id} {...restProps} />
            ))}
        </div>
    );
};

export default ShopPage;
