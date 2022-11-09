import { CLOSE_MODAL, CLOSE_MODAL_DELIVERING_SELLER, CLOSE_MODAL_PENDING_SELLER, CLOSE_MODAL_SELLER_CANCEL_ORDER, CLOSE_MODAL_SUCCESSFUL, GET_ALL_CUSTOMER_ORDERS_FOR_CUSTOMER, GET_ALL_CUSTOMER_ORDERS_FOR_SELLER, GET_ALL_CUSTOMER_SUCCESSFUL_ORDER, GET_ALL_IN_PROGRESS_ORDER, GET_ALL_PURCHASE_HISTORY_ORDER, SHOW_MODAL, SHOW_MODAL_DELIVERING_SELLER, SHOW_MODAL_IN_PROGRESS, SHOW_MODAL_PENDING_SELLER, SHOW_MODAL_SELLER_CANCEL_ORDER, SHOW_MODAL_SUCCESSFUL } from "../../type/order/OrderType"

const initialState = {
    customerOrdersForSeller: [],
    openModal: false,
    openModalSuccessful: false,
    openModalPendingSeller: false,
    openModalDeliveringSeller: false,
    openModalSellerCancelOrder: false,
    successfulOrderList: [],
    inProgressOrderList: [],
    successfulItem: {},
    pendingSellerItem: {},
    deliveringSellerItem: {},
    allCustomerOrderListForCustomer: [],
    item: {},
    inProgressItem: {},
    sellerCancelOrderItem: {}
}

export const OrderReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_CUSTOMER_ORDERS_FOR_SELLER:
            state.customerOrdersForSeller = action.customerOrdersForSellerAction;
            return { ...state }

        case SHOW_MODAL:
            state.openModal = true;
            state.item = action.itemAction;
            return { ...state }

        case SHOW_MODAL_IN_PROGRESS:
            state.openModal = true;
            state.inProgressItem = action.inProgressItemAction;
            return { ...state }

        case SHOW_MODAL_SUCCESSFUL:
            state.openModalSuccessful = true;
            state.successfulItem = action.successfulItemAction;
            return { ...state }

        case SHOW_MODAL_PENDING_SELLER:
            state.openModalPendingSeller = true;
            state.pendingSellerItem = action.pendingItemAction;
            return { ...state }

        case SHOW_MODAL_DELIVERING_SELLER:
            state.openModalDeliveringSeller = true;
            state.deliveringSellerItem = action.deliveringSellerItemAction;
            return { ...state }

        case SHOW_MODAL_SELLER_CANCEL_ORDER:
            state.openModalSellerCancelOrder = true;
            state.sellerCancelOrderItem = action.sellerCancelOrderItemAction;
            return { ...state }

        case CLOSE_MODAL:
            state.openModal = false;
            return { ...state }

        case CLOSE_MODAL_SUCCESSFUL:
            state.openModalSuccessful = false;
            return { ...state }

        case CLOSE_MODAL_DELIVERING_SELLER:
            state.openModalDeliveringSeller = false;
            return { ...state }

        case CLOSE_MODAL_PENDING_SELLER:
            state.openModalPendingSeller = false;
            return { ...state }

        case CLOSE_MODAL_SELLER_CANCEL_ORDER:
            state.openModalSellerCancelOrder = false;
            return { ...state }



        case GET_ALL_CUSTOMER_SUCCESSFUL_ORDER:
            let successfulOrderListUpdate = [...state.successfulOrderList];
            successfulOrderListUpdate = action.successfulOrderListAction;
            state.successfulOrderList = action.successfulOrderListAction;
            return { ...state }

        case GET_ALL_IN_PROGRESS_ORDER:
            let inProgressOrderListUpdate = [...state.inProgressOrderList];
            inProgressOrderListUpdate = action.inProgressOrderListAction;
            state.inProgressOrderList = action.inProgressOrderListAction;
            return { ...state }

        case GET_ALL_CUSTOMER_ORDERS_FOR_CUSTOMER:
            let allCustomerOrderListForCustomerUpdate = [...state.allCustomerOrderListForCustomer];
            allCustomerOrderListForCustomerUpdate = action.allCustomerOrderListForCustomerAction;
            state.allCustomerOrderListForCustomer = action.allCustomerOrderListForCustomerAction;
            return { ...state }

        default:
            return { ...state }
    }
}
