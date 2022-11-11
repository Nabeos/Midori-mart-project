import { GET_ALL_CATEGORIES, GET_BEST_SELLER_CATEGORIES } from "../../type/categories/CategoriesType";
import axios from 'axios'
import { categoriesManagementServices } from "../../../services/CategoriesManagementServices";

export const getAllCategoriesAction = () => {
    return async (dispatch) => {
        try {
            const result = await categoriesManagementServices.getAllCategories();
            dispatch({
                type: GET_ALL_CATEGORIES,
                categoriesList: result.data.categories
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const getBestSellerCategoriesAction = () => {
    return async (dispatch) => {
        try {
            const result = await categoriesManagementServices.getBestSellerCategories();
            console.log("BEST SELLER CATEGORIES LIST: ", result);
            dispatch({
                type: GET_BEST_SELLER_CATEGORIES,
                bestSellerCategoriesList: result
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}



