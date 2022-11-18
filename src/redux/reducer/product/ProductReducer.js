import { GET_BEST_SELLER_PRODUCT_IN_HOMEPAGE, GET_BEST_SELLER_PRODUCT_LIST_BY_CATEGORY_ID, GET_PRODUCT_DETAIL, GET_PRODUCT_LIST_BY_CATEGORY_ID, GET_PRODUCT_LIST_LENGTH_BY_CATEGORY_ID, GET_TOP_THREE_BEST_SELLER_CATEGORIES_IN_HOMEPAGE, GET_TOP_TWENTY_BEST_SELLER_PRODUCT_OF_BEST_SELLER_CATEGORIES, GET_TOP_TWENTY_BEST_SELLER_PRODUCT_OF_SECOND_BEST_SELLER_CATEGORIES, GET_TOP_TWENTY_BEST_SELLER_PRODUCT_OF_THIRD_BEST_SELLER_CATEGORIES, SEARCH_PRODUCT, SORT_PRODUCT_LIST_BY_PRICE_ASC, SORT_PRODUCT_LIST_BY_PRICE_DESC, UPDATE_STAR_RATE } from "../../type/product/ProductType";

const initialState = {
    productListByCategoryId: [

    ],
    productListLengthByCategoryId: [

    ],
    productDetail: {},
    returnSearchProductList: [],
    bestSellerProductList: [
    ],
    starRate: 0,
    bestSellerProductsInHomepage: [],
    topThreeBestSellerCategories: [],
    topTwentyBestSellerProductOfBestSellerCategoriesList: [],
    topTwentyBestSellerProductOfSecondBestSellerCategoriesList: [],
    topTwentyBestSellerProductOfThirdBestSellerCategoriesList: []
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
            // bestSellerProductListUpdate.push(action.bestSellerProductListAction);
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
        case GET_BEST_SELLER_PRODUCT_IN_HOMEPAGE:
            let bestSellerProductsInHomepageUpdate = [...state.bestSellerProductsInHomepage];
            bestSellerProductsInHomepageUpdate = action.bestSellerProductsInHomepageAction;
            state.bestSellerProductsInHomepage = bestSellerProductsInHomepageUpdate;
            return { ...state }
        case GET_TOP_THREE_BEST_SELLER_CATEGORIES_IN_HOMEPAGE:
            let topThreeBestSellerCategoriesUpdate = [...state.topThreeBestSellerCategories];
            topThreeBestSellerCategoriesUpdate = action.topThreeBestSellerCategoriesAction;
            state.topThreeBestSellerCategories = topThreeBestSellerCategoriesUpdate;
            return { ...state }
        case GET_TOP_TWENTY_BEST_SELLER_PRODUCT_OF_BEST_SELLER_CATEGORIES:
            let topTwentyBestSellerProductOfBestSellerCategoriesListUpdate = [...state.topTwentyBestSellerProductOfBestSellerCategoriesList];
            topTwentyBestSellerProductOfBestSellerCategoriesListUpdate = action.topTwentyBestSellerProductOfBestSellerCategoriesListUpdateAction;
            state.topTwentyBestSellerProductOfBestSellerCategoriesList = topTwentyBestSellerProductOfBestSellerCategoriesListUpdate;
            return { ...state }
        case GET_TOP_TWENTY_BEST_SELLER_PRODUCT_OF_SECOND_BEST_SELLER_CATEGORIES:
            let topTwentyBestSellerProductOfSecondBestSellerCategoriesListUpdate = [...state.topTwentyBestSellerProductOfSecondBestSellerCategoriesList];
            topTwentyBestSellerProductOfSecondBestSellerCategoriesListUpdate = action.topTwentyBestSellerProductOfSecondBestSellerCategoriesListUpdateAction;
            state.topTwentyBestSellerProductOfSecondBestSellerCategoriesList = topTwentyBestSellerProductOfSecondBestSellerCategoriesListUpdate;
            return { ...state }
        case GET_TOP_TWENTY_BEST_SELLER_PRODUCT_OF_THIRD_BEST_SELLER_CATEGORIES:
            let topTwentyBestSellerProductOfThirdBestSellerCategoriesListUpdate = [...state.topTwentyBestSellerProductOfThirdBestSellerCategoriesList];
            topTwentyBestSellerProductOfThirdBestSellerCategoriesListUpdate = action.topTwentyBestSellerProductOfThirdBestSellerCategoriesListUpdateAction;
            state.topTwentyBestSellerProductOfThirdBestSellerCategoriesList = topTwentyBestSellerProductOfThirdBestSellerCategoriesListUpdate;
            return { ...state }
        default:
            return { ...state }
    }
}
