import { GET_PRODUCT_LIST_BY_CATEGORY_ID, GET_PRODUCT_LIST_LENGTH_BY_CATEGORY_ID } from "../../type/product/ProductType";

const initialState = {
    productListByCategoryId: [

    ],
    productListLengthByCategoryId: [

    ]
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_LIST_BY_CATEGORY_ID:
            let productListUpdate = [...state.productListByCategoryId];
            productListUpdate = action.productList;
            state.productListByCategoryId = productListUpdate;
            return { ...state }
        case GET_PRODUCT_LIST_LENGTH_BY_CATEGORY_ID:
            let productListLengthUpdate = [...state.productListLengthByCategoryId];
            productListLengthUpdate = action.productList;
            state.productListLengthByCategoryId = productListLengthUpdate;
            return { ...state }
        default:
            return { ...state }
    }
}
