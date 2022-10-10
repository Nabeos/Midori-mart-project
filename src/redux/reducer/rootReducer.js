import { combineReducers } from 'redux'
import { CartReducer } from './cart/CartReducer'
import { CategoriesReducer } from './categories/CategoriesReducer'
import { ProductReducer } from './product/ProductReducer'
export const rootReducer = combineReducers({
    CartReducer,
    CategoriesReducer,
    ProductReducer
})