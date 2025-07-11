/**
 * Interface representing an item in the shopping cart
 * @interface CartItem
 * @property {number} id - Unique identifier for the cart item
 * @property {string} name - Name or description of the item
 */
export interface IProductItems {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
    stock: number;
    isActive: boolean;
}

/**
 * Interface representing the state of the shopping cart
 * @interface ICartState
 * @property {CartItem[]} items - Array of items currently in the cart
 */
export interface ICatalogoState {
    items: IProductItems[];
}