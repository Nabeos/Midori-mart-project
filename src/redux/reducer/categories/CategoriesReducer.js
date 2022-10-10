import { GET_ALL_CATEGORIES } from "../../type/categories/CategoriesType"

const initialState = {
    categories: []
}

export const CategoriesReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_CATEGORIES:
            state.categories = action.categoriesList;
            return { ...state }

        default:
            return { ...state }
    }
}
