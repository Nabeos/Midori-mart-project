import { HANDLE_QUANTITY } from "../../type/cart/CartType"

const initialState = {
    cartList: [
        { id: 1, productName: 'PHÔ MAI GOUDA 100G', price: 37590, image: '/images/khoai_tay.jpg', quantity: 1 },
        { id: 2, productName: 'SỮA CHUA NHA ĐAM DALAT MILK', price: 11000, image: '/images/dalatmilk.jpg', quantity: 1 },
        { id: 3, productName: 'THỊT JAMBON HEO MUỐI J-LAFARGUE 100G', price: 104400, image: '/images/jambon.jpg', quantity: 2 }
    ],
    totalBill: 0
}

export const CartReducer = (state = initialState, action) => {
    switch (action.type) {

        case HANDLE_QUANTITY:
            let cartListUpdate = [...state.cartList]
            let productItem = cartListUpdate.find(item => item.id == action.id);
            if (action.quantity == -1) {
                if (productItem.quantity == 1) {
                    productItem.quantity += 0;
                } else {
                    productItem.quantity += action.quantity;
                }
            } else {
                productItem.quantity += action.quantity;
            }

            return { ...state }

        default:
            return { ...state }
    }
}
