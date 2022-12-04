import { productManagementService } from "../../../services/ProductManagementService";
import { GET_BEST_SELLER_PRODUCT_IN_HOMEPAGE, GET_BEST_SELLER_PRODUCT_LIST_BY_CATEGORY_ID, GET_PRODUCT_DETAIL, GET_PRODUCT_LIST_BY_CATEGORY_ID, GET_PRODUCT_LIST_BY_ORIGIN, GET_PRODUCT_LIST_LENGTH_BY_CATEGORY_ID, GET_PRODUCT_LIST_LENGTH_BY_ORIGIN, GET_TOP_THREE_BEST_SELLER_CATEGORIES_IN_HOMEPAGE, GET_TOP_TWENTY_BEST_SELLER_PRODUCT_OF_BEST_SELLER_CATEGORIES, GET_TOP_TWENTY_BEST_SELLER_PRODUCT_OF_SECOND_BEST_SELLER_CATEGORIES, GET_TOP_TWENTY_BEST_SELLER_PRODUCT_OF_THIRD_BEST_SELLER_CATEGORIES, SEARCH_PRODUCT, SEARCH_PRODUCT_LENGTH, SORT_PRODUCT_LIST_BY_PRICE_ASC, SORT_PRODUCT_LIST_BY_PRICE_DESC, SORT_PRODUCT_LIST_LENGTH_BY_PRICE } from "../../type/product/ProductType";

export const getProductListByCategoryIdAction = (categoryId, limit, offset) => {
    return async (dispatch) => {
        try {
            const result = await productManagementService.getProductListByCategoryId(categoryId, limit, offset);
            console.log("GET PRODUCT LIST BY CATE ID ACTION RESULT: ", result);
            dispatch({
                type: GET_PRODUCT_LIST_BY_CATEGORY_ID,
                productList: result.data.product
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const getProductListByOriginAction = (categoryId, origin1, origin2, origin3, origin4, origin5, limit, offset) => {
    return async (dispatch) => {
        try {
            const result = await productManagementService.getProductListByOrigin(categoryId, origin1, origin2, origin3, origin4, origin5, limit, offset);
            console.log("RESULT FILTER BY ORIGIN: ", result);
            dispatch({
                type: GET_PRODUCT_LIST_BY_ORIGIN,
                productFilterByOriginListAction: result.data.product
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const getProductListLengthByOriginAction = (categoryId, origin1, origin2, origin3, origin4, origin5, limit, offset) => {
    return async (dispatch) => {
        try {
            const result = await productManagementService.getProductListByOrigin(categoryId, origin1, origin2, origin3, origin4, origin5, limit, offset);
            console.log("RESULT ORIGIN LENGTH BY ORIGIN: ", result);
            dispatch({
                type: GET_PRODUCT_LIST_LENGTH_BY_ORIGIN,
                productFilterByOriginListLengthAction: result.data.product
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const getProductListLengthByCategoryIdAction = (categoryId, limit, offset) => {
    return async (dispatch) => {
        console.log("categoryId: ", categoryId);
        try {
            const result = await productManagementService.getProductListByCategoryId(categoryId, limit, offset);
            dispatch({
                type: GET_PRODUCT_LIST_LENGTH_BY_CATEGORY_ID,
                productList: result.data.product
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const getProductDetailAction = (slug) => {
    return async (dispatch) => {
        try {
            const result = await productManagementService.getProductDetail(slug);
            console.log("RESULT PRODUCT DETAIL: ", result);
            dispatch({
                type: GET_PRODUCT_DETAIL,
                productDetail: result.data.product
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const searchProductAction = (keyWord, offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await productManagementService.searchProduct(keyWord, offset, limit);
            console.log("result", result);
            dispatch({
                type: SEARCH_PRODUCT,
                searchProductList: result.data.products
            })
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const searchProductLengthAction = (keyWord, offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await productManagementService.searchProduct(keyWord, offset, limit);
            console.log("result", result);
            dispatch({
                type: SEARCH_PRODUCT_LENGTH,
                searchProductListLengthAction: result.data.products
            })
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const getBestSellerProductListByCategoryIdAction = (categoryId) => {
    return async (dispatch) => {
        try {
            const result = await productManagementService.getBestSellerProductListByCategoryId(categoryId);
            console.log("RESULT BEST SELLER: ", result.data.products);
            dispatch({
                type: GET_BEST_SELLER_PRODUCT_LIST_BY_CATEGORY_ID,
                bestSellerProductListAction: result.data.products
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const sortProductListByPriceAscAction = (categoryId, limit, offset) => {
    return async (dispatch) => {
        try {
            const result = await productManagementService.sortProductListByPriceAsc(categoryId, limit, offset);
            console.log("RESULT PRICE ASC: ", result.data.product);
            dispatch({
                type: SORT_PRODUCT_LIST_BY_PRICE_ASC,
                productListByPriceAscAction: result.data.product
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const sortProductListLengthByPriceAction = (categoryId, limit, offset) => {
    return async (dispatch) => {
        try {
            const result = await productManagementService.sortProductListByPriceAsc(categoryId, limit, offset);
            console.log("RESULT SORT PRODUCT LIST LENGTH BY PRICE: ", result);
            dispatch({
                type: SORT_PRODUCT_LIST_LENGTH_BY_PRICE,
                productListLengthByPriceAction: result.data.product
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const sortProductListByPriceDescAction = (categoryId, limit, offset) => {
    return async (dispatch) => {
        try {
            const result = await productManagementService.sortProductListByPriceDesc(categoryId, limit, offset);
            console.log("RESULT PRICE DESC: ", result.data.product);
            dispatch({
                type: SORT_PRODUCT_LIST_BY_PRICE_DESC,
                productListByPriceDescAction: result.data.product
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const getBestSellerProductInHomepageAction = () => {
    return async (dispatch) => {
        try {
            const result = await productManagementService.getBestSellerProductsInHomePage();
            console.log("RESULT BEST SELLER PRODUCTS IN HOMEPAGE: ", result.data.products);
            dispatch({
                type: GET_BEST_SELLER_PRODUCT_IN_HOMEPAGE,
                bestSellerProductsInHomepageAction: result.data.products
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const getTopThreeBestSellerCategoriesInHomepageAction = () => {
    return async (dispatch) => {
        try {
            const result = await productManagementService.getTopThreeBestSellerCategoriesInHomePage();
            console.log("RESULT TOP THREE BEST SELLER CATEGORIES IN HOMEPAGE: ", result.data.categories);
            dispatch({
                type: GET_TOP_THREE_BEST_SELLER_CATEGORIES_IN_HOMEPAGE,
                topThreeBestSellerCategoriesAction: result.data.categories
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const getTopTwentyBestSellerProductsOfBestSellerCategoriesAction = (categoryId) => {
    return async (dispatch) => {
        try {
            const result = await productManagementService.getTopTwentyBestSellerProductOfBestSellerCategories(categoryId);
            console.log("RESULT TOP THREE BEST SELLER CATEGORIES IN HOMEPAGE: ", result.data.products);
            dispatch({
                type: GET_TOP_TWENTY_BEST_SELLER_PRODUCT_OF_BEST_SELLER_CATEGORIES,
                topTwentyBestSellerProductOfBestSellerCategoriesListUpdateAction: result.data.products
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const getTopTwentyBestSellerProductsOfSecondBestSellerCategoriesAction = (categoryId) => {
    return async (dispatch) => {
        try {
            const result = await productManagementService.getTopTwentyBestSellerProductOfSecondBestSellerCategories(categoryId);
            console.log("RESULT SECOND TOP THREE BEST SELLER CATEGORIES IN HOMEPAGE: ", result);
            dispatch({
                type: GET_TOP_TWENTY_BEST_SELLER_PRODUCT_OF_SECOND_BEST_SELLER_CATEGORIES,
                topTwentyBestSellerProductOfSecondBestSellerCategoriesListUpdateAction: result.data.products
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const getTopTwentyBestSellerProductsOfThirdBestSellerCategoriesAction = (categoryId) => {
    return async (dispatch) => {
        try {
            const result = await productManagementService.getTopTwentyBestSellerProductOfThirdBestSellerCategories(categoryId);
            console.log("RESULT THIRD TOP THREE BEST SELLER CATEGORIES IN HOMEPAGE: ", result);
            dispatch({
                type: GET_TOP_TWENTY_BEST_SELLER_PRODUCT_OF_THIRD_BEST_SELLER_CATEGORIES,
                topTwentyBestSellerProductOfThirdBestSellerCategoriesListUpdateAction: result.data.products
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}






