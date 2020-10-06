import { ShopItem } from '../../redux/shop/shop.data';

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

export const removeItemFromCart = (
    cartItems: ShopItem[],
    cartItemToRemove: ShopItem
) => {
    const existingCartItem = cartItems.find(
        (item) => item.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== cartItemToRemove.id
        );
    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};
