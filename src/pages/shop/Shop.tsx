import React from 'react';
import SHOP_DATA, { ShopCategory } from './Shop.data';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

class ShopPage extends React.Component<null, { collections: ShopCategory[] }> {
    constructor() {
        super(null);

        this.state = {
            collections: SHOP_DATA,
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {collections.map(({ id, ...restProps }) => (
                    <CollectionPreview key={id} {...restProps} />
                ))}
            </div>
        );
    }
}

export default ShopPage;
