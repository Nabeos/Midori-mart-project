import { HANDLE_QUANTITY } from "../../type/cart/CartType";

export const handleQuantity = (id, quantity) => ({
    type: HANDLE_QUANTITY,
    id,
    quantity
})
