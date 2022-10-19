import { HANDLE_ADD_TO_CART_QUANTITY, HANDLE_QUANTITY } from "../../type/cart/CartType";

export const handleQuantity = (id, quantity) => ({
    type: HANDLE_QUANTITY,
    id,
    quantity
})

export const handleAddToCartQuantity = (quantity) => ({
    type: HANDLE_ADD_TO_CART_QUANTITY,
    quantity
})
