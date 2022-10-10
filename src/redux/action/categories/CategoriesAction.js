import { GET_ALL_CATEGORIES } from "../../type/categories/CategoriesType";
import axios from 'axios'
import { categoriesManagementServices } from "../../../services/CategoriesManagementServices";

export const getAllCategoriesAction = () => {
    return async (dispatch) => {
        try {
            const result = await categoriesManagementServices.getAllCategories();
            console.log("RESULT DUY ANH: ", result);
            dispatch({
                type: GET_ALL_CATEGORIES,
                categoriesList: result.data.content
            })
        } catch (error) {
            console.log('error', error)
        }
    }
}



