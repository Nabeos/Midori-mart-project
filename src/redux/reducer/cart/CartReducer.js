import { BUY_NOW, DELETE_ALL_PRODUCTS_FROM_CART, HANDLE_ADD_TO_CART_QUANTITY, HANDLE_QUANTITY, REMOVE_PRODUCT_FROM_CART } from "../../type/cart/CartType"
let defaultCartList = [];
if (localStorage.getItem("cart")) {
    defaultCartList = JSON.parse(localStorage.getItem("cart"));
}
const initialState = {
    cartList: defaultCartList,
    // cartListLocalStorage: defaultCartList,
    totalBill: 0,
    totalProductQuantityInCart: 0
}

export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_QUANTITY:
            let cartListUpdate = [...state.cartList]
            let productItem = cartListUpdate.find(item => item.slug == action.slug);
            console.log("CÓ VÀO HANDLE QUANTITY");
            console.log("productItem.quantity = ", productItem.quantity);
            console.log("productItem.quantityInStock = ", productItem.quantityInStock);
            if (action.quantity == -1) {
                if (productItem.quantity == 1) {
                    productItem.quantity += 0;
                } else {
                    productItem.quantity += action.quantity;
                }
            } else {
                if (productItem.quantity <= productItem.quantityInStock - 1) {
                    productItem.quantity += action.quantity;
                }
            }
            productItem = { ...productItem };
            state.cartList = cartListUpdate;
            localStorage.setItem("cart", JSON.stringify(state.cartList));
            return { ...state }
        case HANDLE_ADD_TO_CART_QUANTITY:
            let quantityReal = 0;
            console.log("ACTION PRODUCT DETAIL ADD TO CART: ", action.productDetail);
            console.log("QUANTITY: ", action.quantity);
            console.log("QUANTITY IN STOCK: ", action.productDetail.quantity);
            console.log("CART LOCAL STORAGE: ", JSON.parse(localStorage.getItem("cart")));
            JSON.parse(localStorage.getItem("cart"))?.map((item, index) => {
                console.log("ỈA RA MÁU: ", item);
                if (item?.id == action?.productDetail?.id) {
                    quantityReal = item?.quantity;
                }
            })
            console.log("QUANTITY REAL: ", quantityReal);
            if (action.productDetail !== 0) {
                let cartListAddToCartUpdate = [...state.cartList];
                let cartItemAddToCartNeedUpdateAmount = cartListAddToCartUpdate.find(productItem => productItem?.slug === action.productDetail.slug);
                let indexAddToCart = cartListAddToCartUpdate.findIndex(productItem => productItem?.slug === action.productDetail.slug);
                if (indexAddToCart !== -1 && typeof (action.quantity) !== undefined && typeof (action.quantity) !== NaN) {
                    if (quantityReal <= action.productDetail.quantity - 1) {
                        cartItemAddToCartNeedUpdateAmount.quantity += action?.quantity;
                        cartItemAddToCartNeedUpdateAmount = { ...cartItemAddToCartNeedUpdateAmount }
                    }
                } else if (indexAddToCart == -1 && typeof (action.quantity) !== undefined && typeof (action.quantity) !== NaN) {
                    let productItemAddToCartUpdate = { ...action.productDetail, quantity: action.quantity, quantityInStock: action.productDetail.quantity };
                    cartListAddToCartUpdate.push(productItemAddToCartUpdate);
                    state.cartList = cartListAddToCartUpdate;
                }
            }
            console.log("STATE.CART LIST HANDLE_ADD_TO_CART: ", state.cartList);
            localStorage.setItem("cart", JSON.stringify(state.cartList));
            return { ...state }
        case BUY_NOW:
            let cartListBuyNowUpdate = [...state.cartList];
            console.log("ACTION.PRODUCT ITEM: ", action.productItem);
            let productItemUpdate = { ...action.productItem, quantity: action.num, quantityInStock: action.productItem.quantity };
            // let productItemUpdate = { productId: action.productItem.id, quantity: action.num, price: action.productItem.price, totalPrice: action.num * action.productItem.price };
            let cartItemNeedUpdateAmount = cartListBuyNowUpdate.find(productItem => productItem.slug === action.productItem.slug);
            let indexBuyNow = cartListBuyNowUpdate.findIndex(productItem => productItem.slug === action.productItem.slug);
            if (indexBuyNow !== -1) {
                cartItemNeedUpdateAmount.quantity += action.num;
                cartItemNeedUpdateAmount = { ...cartItemNeedUpdateAmount }
            } else {
                cartListBuyNowUpdate.push(productItemUpdate);
                state.cartList = cartListBuyNowUpdate;
            }
            // let cartListBuyNowUpdateLocalStorage = [...state.cartListLocalStorage];
            // let totalPriceDesired = 0;
            // totalPriceDesired = action.num * action.productItem.price;
            // let productItemUpdateLocalStorage = { productId: action.productItem.id, quantity: action.num, price: action.productItem.price, totalPrice: totalPriceDesired };
            // let cartItemNeedUpdateAmountLocalStorage = cartListBuyNowUpdateLocalStorage.find(productItem => productItem.productId === action.productItem.id);
            // let indexBuyNowLocalStorage = cartListBuyNowUpdateLocalStorage.findIndex(productItem => productItem.productId === action.productItem.id);
            // if (indexBuyNowLocalStorage !== -1) {
            //     cartItemNeedUpdateAmountLocalStorage.quantity += action.num;
            //     cartItemNeedUpdateAmountLocalStorage = { ...cartItemNeedUpdateAmountLocalStorage }
            // } else {
            //     cartListBuyNowUpdateLocalStorage.push(productItemUpdateLocalStorage);
            //     state.cartListLocalStorage = cartListBuyNowUpdateLocalStorage;
            // }
            localStorage.setItem("cart", JSON.stringify(state.cartList));
            // localStorage.setItem("cart", JSON.stringify(state.cartListLocalStorage));
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
