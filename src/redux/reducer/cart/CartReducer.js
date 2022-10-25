import { BUY_NOW, DELETE_ALL_PRODUCTS_FROM_CART, HANDLE_ADD_TO_CART_QUANTITY, HANDLE_QUANTITY, REMOVE_PRODUCT_FROM_CART } from "../../type/cart/CartType"
let defaultCartList = [];
if (localStorage.getItem("cart")) {
    defaultCartList = JSON.parse(localStorage.getItem("cart"));
}
const initialState = {
    cartList: defaultCartList,
    totalBill: 0,
    totalProductQuantityInCart: 0
}

export const CartReducer = (state = initialState, action) => {
    switch (action.type) {

        case HANDLE_QUANTITY:
            let cartListUpdate = [...state.cartList]
            let productItem = cartListUpdate.find(item => item.slug == action.slug);
            if (action.quantity == -1) {
                if (productItem.quantity == 1) {
                    productItem.quantity += 0;
                } else {
                    productItem.quantity += action.quantity;
                }
            } else {
                productItem.quantity += action.quantity;
            }
            productItem = { ...productItem };
            state.cartList = cartListUpdate;
            localStorage.setItem("cart", JSON.stringify(state.cartList));
            return { ...state }
        case HANDLE_ADD_TO_CART_QUANTITY:
            console.log("ACTION PRODUCT DETAIL ADD TO CART: ", action.productDetail);
            console.log("TYPE OF: ", typeof (action.quantity));
            if (action.productDetail !== 0) {
                let cartListAddToCartUpdate = [...state.cartList];
                let cartItemAddToCartNeedUpdateAmount = cartListAddToCartUpdate.find(productItem => productItem?.slug === action.productDetail.slug);
                let indexAddToCart = cartListAddToCartUpdate.findIndex(productItem => productItem?.slug === action.productDetail.slug);
                if (indexAddToCart !== -1 && typeof (action.quantity) !== undefined && typeof (action.quantity) !== NaN) {
                    cartItemAddToCartNeedUpdateAmount.quantity += action?.quantity;
                    cartItemAddToCartNeedUpdateAmount = { ...cartItemAddToCartNeedUpdateAmount }
                } else if (indexAddToCart == -1 && typeof (action.quantity) !== undefined && typeof (action.quantity) !== NaN) {
                    let productItemAddToCartUpdate = { ...action.productDetail, quantity: action.quantity };
                    cartListAddToCartUpdate.push(productItemAddToCartUpdate);
                    state.cartList = cartListAddToCartUpdate;
                }
            }
            localStorage.setItem("cart", JSON.stringify(state.cartList));
            return { ...state }

        case BUY_NOW:
            let cartListBuyNowUpdate = [...state.cartList];
            let productItemUpdate = { ...action.productItem, quantity: action.num };
            let cartItemNeedUpdateAmount = cartListBuyNowUpdate.find(productItem => productItem.slug === action.productItem.slug);
            let indexBuyNow = cartListBuyNowUpdate.findIndex(productItem => productItem.slug === action.productItem.slug);
            if (indexBuyNow !== -1) {
                cartItemNeedUpdateAmount.quantity += action.num;
                cartItemNeedUpdateAmount = { ...cartItemNeedUpdateAmount }
            } else {
                cartListBuyNowUpdate.push(productItemUpdate);
                state.cartList = cartListBuyNowUpdate;
            }
            localStorage.setItem("cart", JSON.stringify(state.cartList));
            return { ...state }

        case REMOVE_PRODUCT_FROM_CART:
            let cartListRemoveUpdate = [...state.cartList];
            let index = cartListRemoveUpdate.findIndex(productItem => productItem.sku === action.sku);
            if (index !== -1) {
                cartListRemoveUpdate.splice(index, 1);
            }
            state.cartList = cartListRemoveUpdate;
            localStorage.setItem("cart", JSON.stringify(state.cartList));
            return { ...state }

        case DELETE_ALL_PRODUCTS_FROM_CART:
            localStorage.removeItem("cart");
            window.location.reload();
            return { ...state }

        default:
            return { ...state }
    }
}
