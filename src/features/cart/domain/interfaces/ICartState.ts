/**
 * Interface representing an item in the shopping cart
 * @interface CartItem
 * @property {number} id - Unique identifier for the cart item
 * @property {string} name - Name or description of the item
 */
export interface ICartItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

/**
 * Interface representing the state of the shopping cart
 * @interface ICartState
 * @property {CartItem[]} items - Array of items currently in the cart
 */
export interface ICartState {
    items: ICartItem[];
}