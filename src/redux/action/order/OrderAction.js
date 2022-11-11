import axios from 'axios'
import { orderManagementForCustomerService } from '../../../services/OrderManagementForCustomerService';
import { orderManagementForSellerService } from '../../../services/OrderManagementForSellerService';
import { CLOSE_MODAL, CLOSE_MODAL_DELIVERING_SELLER, CLOSE_MODAL_PENDING_SELLER, CREATE_NEW_ORDER, GET_ALL_CUSTOMER_ORDERS_FOR_CUSTOMER, GET_ALL_CUSTOMER_ORDERS_FOR_SELLER, GET_ALL_CUSTOMER_SUCCESSFUL_ORDER, GET_ALL_IN_PROGRESS_ORDER, GET_ALL_PURCHASE_HISTORY_ORDER } from '../../type/order/OrderType';

export const getAllCustomerOrderForSellerAction = (limit, offset, statusOrder) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForSellerService.getAllCustomerOrder(limit, offset, statusOrder);
            console.log("RESULT CUSTOMER ORDERS FOR SELLER: ", result.data.orders);
            dispatch({
                type: GET_ALL_CUSTOMER_ORDERS_FOR_SELLER,
                customerOrdersForSellerAction: result.data.orders
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const updateCustomerOrderForSellerAction = (orderNumber, status) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForSellerService.updateCustomerOrderForSeller(orderNumber, status);
            console.log("UPDATE CUSTOMER ORDER FOR SELLER: ", result);
            dispatch({
                type: CLOSE_MODAL
            })
        } catch (error) {
            console.log('error', error);
        }
    }
}

export const startDeliveringCustomerOrderAction = (orderNumber, status) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForSellerService.updateCustomerOrderForSeller(orderNumber, status);
            console.log("UPDATE CUSTOMER ORDER FOR SELLER: ", result);
            dispatch({
                type: CLOSE_MODAL_PENDING_SELLER
            })
        } catch (error) {
            console.log('error', error);
        }
    }
}

export const handleFinishDeliveringCustomerOrderAction = (orderNumber, status) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForSellerService.updateCustomerOrderForSeller(orderNumber, status);
            console.log("UPDATE CUSTOMER ORDER FOR SELLER: ", result);
            await dispatch({
                type: CLOSE_MODAL_DELIVERING_SELLER
            })
        } catch (error) {
            console.log('error', error);
        }
    }
}

export const getAllCustomerSuccessfulOrderAction = () => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForCustomerService.getAllCustomerSuccessfulOrder();
            console.log("RESULT ALL SUCCESSFUL ORDER: ", result.data.orders);
            dispatch({
                type: GET_ALL_CUSTOMER_SUCCESSFUL_ORDER,
                successfulOrderListAction: result.data.orders
            })
        } catch (error) {
            console.log('error', error);
        }
    }
}

export const getAllInProgressOrderAction = () => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForCustomerService.getAllInProgressOrder();
            console.log("RESULT ALL IN PROGRESS ORDER: ", result.data.orders);
            dispatch({
                type: GET_ALL_IN_PROGRESS_ORDER,
                inProgressOrderListAction: result.data.orders
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const getAllCustomerOrderForCustomerAction = () => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForCustomerService.getAllCustomerOrderForCustomer();
            console.log("RESULT ALL CUSTOMER ORDER FOR CUSTOMER: ", result.data.orders);
            dispatch({
                type: GET_ALL_CUSTOMER_ORDERS_FOR_CUSTOMER,
                allCustomerOrderListForCustomerAction: result.data.orders
            })
        } catch (error) {
            console.log('error', error);
        }
    }
}

export const cancelInProgressOrderForCustomerAction = (orderNumber) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForCustomerService.cancelInProgressOrderForCustomer(orderNumber);
            console.log("CANCEL IN PROGRESS ORDER FOR CUSTOMER ACTION: ", result);
            dispatch({
                type: CLOSE_MODAL
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const createNewOrderAction = (newOrderInfo) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForCustomerService.createNewOrder(newOrderInfo);
            console.log("RESULT CREATE NEW ORDER: ", result);
            dispatch({
                type: CREATE_NEW_ORDER
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}
