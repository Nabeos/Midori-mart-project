import { GET_PRODUCT_LIST_BY_CATEGORY_ID } from "../../type/product/ProductType";

const initialState = {
    productListByCategoryId: []
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_LIST_BY_CATEGORY_ID:
            state.productListByCategoryId = action.productList;
            return { ...state }

        default:
            return { ...state }
    }
}
