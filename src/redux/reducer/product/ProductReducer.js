import { GET_BEST_SELLER_PRODUCT_LIST_BY_CATEGORY_ID, GET_PRODUCT_DETAIL, GET_PRODUCT_LIST_BY_CATEGORY_ID, GET_PRODUCT_LIST_LENGTH_BY_CATEGORY_ID, SEARCH_PRODUCT, SORT_PRODUCT_LIST_BY_PRICE_ASC, SORT_PRODUCT_LIST_BY_PRICE_DESC, UPDATE_STAR_RATE } from "../../type/product/ProductType";

const initialState = {
    productListByCategoryId: [

    ],
    productListLengthByCategoryId: [

    ],
    productDetail: {},
    returnSearchProductList: [],
    bestSellerProductList: [],
    starRate: 0
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
        case GET_PRODUCT_DETAIL:
            let productDetailUpdate = { ...state.productDetail };
            productDetailUpdate = action.productDetail;
            state.productDetail = productDetailUpdate;
            return { ...state }
        case SEARCH_PRODUCT:
            let returnSearchProductListUpdate = [...state.returnSearchProductList];
            returnSearchProductListUpdate = action.searchProductList;
            state.returnSearchProductList = returnSearchProductListUpdate;
            return { ...state }
        case UPDATE_STAR_RATE:
            console.log("CÓ VÀO UPDATE_STAR_RATE");
            state.starRate = action.starRateUpdate;
            return { ...state }
        case GET_BEST_SELLER_PRODUCT_LIST_BY_CATEGORY_ID:
            let bestSellerProductListUpdate = [...state.bestSellerProductList];
            bestSellerProductListUpdate = action.bestSellerProductListAction;
            state.bestSellerProductList = bestSellerProductListUpdate;
            return { ...state }
        case SORT_PRODUCT_LIST_BY_PRICE_ASC:
            let productListSortAscUpdate = [...state.productListByCategoryId];
            productListSortAscUpdate = action.productListByPriceAscAction;
            state.productListByCategoryId = productListSortAscUpdate;
            return { ...state }
        case SORT_PRODUCT_LIST_BY_PRICE_DESC:
            let productListSortDescUpdate = [...state.productListByCategoryId];
            productListSortDescUpdate = action.productListByPriceDescAction;
            state.productListByCategoryId = productListSortDescUpdate;
            return { ...state }
        default:
            return { ...state }
    }
}
