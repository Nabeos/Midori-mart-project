import { productManagementService } from "../../../services/ProductManagementService";
import { GET_PRODUCT_LIST_BY_CATEGORY_ID } from "../../type/product/ProductType";

export const getProductListByCategoryIdAction = (categoryId, limit, offset) => {
    return async (dispatch) => {
        console.log("categoryId: ", categoryId);
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



