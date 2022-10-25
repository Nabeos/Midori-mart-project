import { productManagementService } from "../../../services/ProductManagementService";
import { GET_PRODUCT_DETAIL, GET_PRODUCT_LIST_BY_CATEGORY_ID, GET_PRODUCT_LIST_LENGTH_BY_CATEGORY_ID, SEARCH_PRODUCT } from "../../type/product/ProductType";

export const getProductListByCategoryIdAction = (categoryId, limit, offset) => {
    return async (dispatch) => {
        try {
            const result = await productManagementService.getProductListByCategoryId(categoryId, limit, offset);
            dispatch({
                type: GET_PRODUCT_LIST_BY_CATEGORY_ID,
                productList: result.data.product
            })
        } catch (error) {
            console.log('error', error)
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
            console.log('error', error)
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
            console.log('error', error)
        }
    }
}

export const searchProductAction = (keyWord) => {
    return async (dispatch) => {
        try {
            const result = await productManagementService.searchProduct(keyWord);
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





