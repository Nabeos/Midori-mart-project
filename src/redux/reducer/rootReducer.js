import { combineReducers } from 'redux'
import { AddressReducer } from './address/AddressReducer'
import { CartReducer } from './cart/CartReducer'
import { CategoriesReducer } from './categories/CategoriesReducer'
import { ProductReducer } from './product/ProductReducer'
import { UserReducer } from './user/UserReducer'
export const rootReducer = combineReducers({
    CartReducer,
    CategoriesReducer,
    ProductReducer,
    UserReducer,
    AddressReducer
})