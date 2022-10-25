import { HANDLE_ADD_TO_CART_QUANTITY, HANDLE_QUANTITY } from "../../type/cart/CartType";

export const handleQuantity = (slug, quantity) => ({
    type: HANDLE_QUANTITY,
    slug,
    quantity
})

export const handleAddToCartQuantity = (productDetail, quantity) => ({
    type: HANDLE_ADD_TO_CART_QUANTITY,
    productDetail,
    quantity
})
