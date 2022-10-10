import { combineReducers } from 'redux'
import { CartReducer } from './cart/CartReducer'
import { CategoriesReducer } from './categories/CategoriesReducer'
export const rootReducer = combineReducers({
    CartReducer,
    CategoriesReducer
})