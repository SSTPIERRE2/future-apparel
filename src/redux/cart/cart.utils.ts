import { ShopItem } from '../../pages/shop/Shop.data';

export const addItemToCart = (
    cartItems: ShopItem[],
    cartItemToAdd: ShopItem
) => {
    const existingCartItem = cartItems.find(
        (item) => item.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((item) =>
            item.id === cartItemToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
