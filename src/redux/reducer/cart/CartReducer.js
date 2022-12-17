import { BUY_NOW, DELETE_ALL_PRODUCTS_FROM_CART, HANDLE_ADD_TO_CART_QUANTITY, HANDLE_QUANTITY, REMOVE_PRODUCT_FROM_CART } from "../../type/cart/CartType"
import { notification } from "antd";
import { history } from "../../../App";
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
    const openNotification = (placement) => {
        notification.success({
            message: `Thêm sản phẩm vào giỏ hàng thành công`,
            placement,
            duration: 2
        });
    };
    const openNotificationAddToCartError = (placement) => {
        notification.error({
            message: `Thêm sản phẩm vào giỏ hàng thất bại`,
            placement,
            duration: 2
        });
    };

    const openNotificationBuyNow = (placement) => {
        notification.success({
            message: `Thêm sản phẩm vào giỏ hàng thành công`,
            placement,
            duration: 2
        });
    };
    const openNotificationBuyNowError = (placement) => {
        notification.error({
            message: `Thêm sản phẩm vào giỏ hàng thất bại`,
            placement,
            duration: 2
        });
    };
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
                if (item?.id == action?.productDetail?.id) {
                    quantityReal = item?.quantity;
                }
            })
            console.log("Số lượng có thể mua: ", action.productDetail.quantity - quantityReal);
            if (action.productDetail !== 0) {
                let cartListAddToCartUpdate = [...state.cartList];
                let cartItemAddToCartNeedUpdateAmount = cartListAddToCartUpdate.find(productItem => productItem?.slug === action.productDetail.slug);
                let indexAddToCart = cartListAddToCartUpdate.findIndex(productItem => productItem?.slug === action.productDetail.slug);
                if (indexAddToCart !== -1 && typeof (action.quantity) !== undefined && typeof (action.quantity) !== NaN) {
                    if (quantityReal <= action.productDetail.quantity - 1) {
                        if (action?.quantity <= action.productDetail.quantity - quantityReal) {
                            cartItemAddToCartNeedUpdateAmount.quantity += action?.quantity;
                            cartItemAddToCartNeedUpdateAmount = { ...cartItemAddToCartNeedUpdateAmount }
                            openNotification('bottomRight');
                        } else {
                            cartItemAddToCartNeedUpdateAmount.quantity += action.productDetail.quantity - quantityReal;
                            cartItemAddToCartNeedUpdateAmount = { ...cartItemAddToCartNeedUpdateAmount }
                            openNotification('bottomRight');
                        }
                    } else {
                        openNotificationAddToCartError('bottomRight');
                    }
                } else if (indexAddToCart == -1 && typeof (action.quantity) !== undefined && typeof (action.quantity) !== NaN) {
                    let productItemAddToCartUpdate = { ...action.productDetail, quantity: action.quantity, quantityInStock: action.productDetail.quantity };
                    cartListAddToCartUpdate.push(productItemAddToCartUpdate);
                    openNotification('bottomRight');
                    state.cartList = cartListAddToCartUpdate;
                }
            }
            console.log("STATE.CART LIST HANDLE_ADD_TO_CART: ", state.cartList);
            localStorage.setItem("cart", JSON.stringify(state.cartList));
            return { ...state }
        case BUY_NOW:
            let cartListBuyNowUpdate = [...state.cartList];
            let quantityRealBuyNow = 0;
            console.log("QUANTITY BUY NOW: ", action.num);
            console.log("QUANTITY IN STOCK BUY NOW: ", action.productItem.quantity);
            JSON.parse(localStorage.getItem("cart"))?.map((item, index) => {
                console.log("ITEM BUY NOW IN LOCAL STORAGE: ", item);
                if (item?.id == action?.productItem?.id) {
                    quantityRealBuyNow = item?.quantity;
                }
            })
            console.log("QUANTITY REAL BUY NOW: ", quantityRealBuyNow);
            console.log("Hàng trong kho trừ hàng trong giỏ: ", action.productItem.quantity - quantityRealBuyNow);
            let productItemUpdate = { ...action.productItem, quantity: action.num, quantityInStock: action.productItem.quantity };
            let cartItemNeedUpdateAmount = cartListBuyNowUpdate.find(productItem => productItem.slug === action.productItem.slug);
            let indexBuyNow = cartListBuyNowUpdate.findIndex(productItem => productItem.slug === action.productItem.slug);
            if (indexBuyNow !== -1) {
                if (quantityRealBuyNow <= action.productItem.quantity - 1) {
                    if (action.num <= action.productItem.quantity - quantityRealBuyNow) {
                        history.push("/cart");
                        openNotificationBuyNow('bottomRight');
                        cartItemNeedUpdateAmount.quantity += action.num;
                        cartItemNeedUpdateAmount = { ...cartItemNeedUpdateAmount }
                    } else {
                        history.push("/cart");
                        openNotificationBuyNow('bottomRight');
                        cartItemNeedUpdateAmount.quantity += action.productItem.quantity - quantityRealBuyNow;
                        cartItemNeedUpdateAmount = { ...cartItemNeedUpdateAmount }
                    }
                } else {
                    openNotificationBuyNowError('bottomRight');
                }
            } else {
                history.push("/cart");
                openNotificationBuyNow('bottomRight');
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
