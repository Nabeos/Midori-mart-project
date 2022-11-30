import axios from 'axios'
import { orderManagementForCustomerService } from '../../../services/OrderManagementForCustomerService';
import { orderManagementForSellerService } from '../../../services/OrderManagementForSellerService';
import { CLOSE_MODAL, CLOSE_MODAL_DELIVERING_SELLER, CLOSE_MODAL_PENDING_SELLER, CREATE_NEW_ORDER, GET_ALL_CANCEL_CUSTOMER_ORDERS_LENGTH_FOR_SELLER, GET_ALL_CUSTOMER_CANCEL_CUSTOMER_ORDERS_LENGTH_FOR_SELLER, GET_ALL_CUSTOMER_ORDERS_FOR_CUSTOMER, GET_ALL_CUSTOMER_ORDERS_FOR_SELLER, GET_ALL_CUSTOMER_ORDERS_LENGTH_FOR_CUSTOMER, GET_ALL_CUSTOMER_ORDERS_LENGTH_FOR_SELLER, GET_ALL_CUSTOMER_SUCCESSFUL_ORDER, GET_ALL_CUSTOMER_SUCCESSFUL_ORDER_LENGTH, GET_ALL_DELIVERING_CUSTOMER_ORDERS_LENGTH_FOR_SELLER, GET_ALL_IN_PROGRESS_ORDER, GET_ALL_IN_PROGRESS_ORDER_LENGTH, GET_ALL_PENDING_CUSTOMER_ORDERS_LENGTH_FOR_SELLER, GET_ALL_PURCHASE_HISTORY_ORDER, GET_ALL_REFUND_CUSTOMER_ORDERS_LENGTH_FOR_SELLER, GET_ALL_SUCCESSFUL_CUSTOMER_ORDERS_LENGTH_FOR_SELLER } from '../../type/order/OrderType';
import { notification } from "antd";

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

export const getAllCustomerOrderLengthForSellerAction = (limit, offset, statusOrder) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForSellerService.getAllCustomerOrder(limit, offset, statusOrder);
            console.log("RESULT CUSTOMER ORDERS LENGTH FOR SELLER: ", result);
            dispatch({
                type: GET_ALL_CUSTOMER_ORDERS_LENGTH_FOR_SELLER,
                customerOrdersLengthForSellerAction: result.data.orders
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const getAllPendingCustomerOrderLengthForSellerAction = (limit, offset) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForSellerService.getAllCustomerOrder(limit, offset, localStorage.getItem("keyOrder"));
            console.log("RESULT PENDING CUSTOMER ORDERS LENGTH FOR SELLER: ", result);
            dispatch({
                type: GET_ALL_PENDING_CUSTOMER_ORDERS_LENGTH_FOR_SELLER,
                pendingCustomerOrdersLengthForSellerAction: result.data.orders
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const getAllDeliveringCustomerOrderLengthForSellerAction = (limit, offset) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForSellerService.getAllCustomerOrder(limit, offset, localStorage.getItem("keyOrder"));
            console.log("RESULT DELIVERING CUSTOMER ORDERS LENGTH FOR SELLER: ", result);
            dispatch({
                type: GET_ALL_DELIVERING_CUSTOMER_ORDERS_LENGTH_FOR_SELLER,
                deliveringCustomerOrdersLengthForSellerAction: result.data.orders
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const getAllSuccessfulCustomerOrderLengthForSellerAction = (limit, offset) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForSellerService.getAllCustomerOrder(limit, offset, localStorage.getItem("keyOrder"));
            console.log("RESULT SUCCESSFUL CUSTOMER ORDERS LENGTH FOR SELLER: ", result);
            dispatch({
                type: GET_ALL_SUCCESSFUL_CUSTOMER_ORDERS_LENGTH_FOR_SELLER,
                successfulCustomerOrdersLengthForSellerAction: result.data.orders
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const getAllCancelCustomerOrderLengthForSellerAction = (limit, offset) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForSellerService.getAllCustomerOrder(limit, offset, localStorage.getItem("keyOrder"));
            console.log("RESULT CANCEL CUSTOMER ORDERS LENGTH FOR SELLER: ", result);
            dispatch({
                type: GET_ALL_CANCEL_CUSTOMER_ORDERS_LENGTH_FOR_SELLER,
                cancelCustomerOrdersLengthForSellerAction: result.data.orders
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const getAllRefundCustomerOrderLengthForSellerAction = (limit, offset) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForSellerService.getAllCustomerOrder(limit, offset, localStorage.getItem("keyOrder"));
            console.log("RESULT REFUND CUSTOMER ORDERS LENGTH FOR SELLER: ", result);
            dispatch({
                type: GET_ALL_REFUND_CUSTOMER_ORDERS_LENGTH_FOR_SELLER,
                refundCustomerOrdersLengthForSellerAction: result.data.orders
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const getAllCustomerCancelCustomerOrderLengthForSellerAction = (limit, offset) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForSellerService.getAllCustomerOrder(limit, offset, localStorage.getItem("keyOrder"));
            console.log("RESULT CUSTOMER CANCEL CUSTOMER ORDERS LENGTH FOR SELLER: ", result);
            dispatch({
                type: GET_ALL_CUSTOMER_CANCEL_CUSTOMER_ORDERS_LENGTH_FOR_SELLER,
                customerCancelCustomerOrdersLengthForSellerAction: result.data.orders
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}
const openNotification = (placement) => {
    notification.success({
        message: `Cập nhật trạng thái đơn hàng thành công`,
        placement,
        duration: 2
    });
};
const openNotificationUpdateOrderStatusError = (placement) => {
    notification.error({
        message: `Cập nhật trạng thái đơn hàng thất bại`,
        placement,
        duration: 2
    });
};
export const updateCustomerOrderForSellerAction = (orderNumber, status) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForSellerService.updateCustomerOrderForSeller(orderNumber, status);
            console.log("UPDATE CUSTOMER ORDER FOR SELLER: ", result);
            openNotification('bottomRight');
            // localStorage.setItem("flagOrderOutside", orderNumber);
            dispatch({
                type: CLOSE_MODAL
            })
        } catch (error) {
            openNotificationUpdateOrderStatusError('bottomRight');
            console.log('error', error);
        }
    }
}

export const updateCustomerOrderForSellerOutsideAction = (orderNumber, status) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForSellerService.updateCustomerOrderForSeller(orderNumber, status);
            console.log("UPDATE CUSTOMER ORDER FOR SELLER: ", result);
            openNotification('bottomRight');
            localStorage.setItem("flagOrderOutside", orderNumber);
            setTimeout(function () {
                window.location.reload();
            }, 500);
        } catch (error) {
            openNotificationUpdateOrderStatusError('bottomRight');
            console.log('error', error);
        }
    }
}

const openNotificationStartDelivering = (placement) => {
    notification.success({
        message: `Cập nhật trạng thái đơn hàng thành công`,
        placement,
        duration: 2
    });
};
const openNotificationStartDeliveringError = (placement) => {
    notification.error({
        message: `Cập nhật trạng thái đơn hàng thất bại`,
        placement,
        duration: 2
    });
};
export const startDeliveringCustomerOrderAction = (orderNumber, status) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForSellerService.updateCustomerOrderForSeller(orderNumber, status);
            console.log("UPDATE CUSTOMER ORDER FOR SELLER: ", result);
            openNotificationStartDelivering('bottomRight');
            dispatch({
                type: CLOSE_MODAL_PENDING_SELLER
            })
        } catch (error) {
            openNotificationStartDeliveringError('bottomRight');
            console.log('error', error);
        }
    }
}

export const startDeliveringCustomerOutsideOrderAction = (orderNumber, status) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForSellerService.updateCustomerOrderForSeller(orderNumber, status);
            console.log("UPDATE CUSTOMER ORDER FOR SELLER: ", result);
            openNotificationStartDelivering('bottomRight');
            setTimeout(function () {
                window.location.reload();
            }, 500);
            // setTimeout(function () {
            //     localStorage.setItem("keyOrder", 1);
            // }, 10);
            // dispatch({
            //     type: CLOSE_MODAL_PENDING_SELLER
            // })
        } catch (error) {
            openNotificationStartDeliveringError('bottomRight');
            console.log('error', error);
        }
    }
}

const openNotificationFinishDelivering = (placement) => {
    notification.success({
        message: `Cập nhật trạng thái đơn hàng thành công`,
        placement,
        duration: 2
    });
};
const openNotificationFinishDeliveringError = (placement) => {
    notification.error({
        message: `Cập nhật trạng thái đơn hàng thất bại`,
        placement,
        duration: 2
    });
};
export const handleFinishDeliveringCustomerOrderAction = (orderNumber, status) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForSellerService.updateCustomerOrderForSeller(orderNumber, status);
            openNotificationFinishDelivering('bottomRight');
            console.log("UPDATE CUSTOMER ORDER FOR SELLER: ", result);
            await dispatch({
                type: CLOSE_MODAL_DELIVERING_SELLER
            })
        } catch (error) {
            openNotificationFinishDeliveringError('bottomRight');
            console.log('error', error);
        }
    }
}

export const handleFinishDeliveringOutsideCustomerOrderAction = (orderNumber, status) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForSellerService.updateCustomerOrderForSeller(orderNumber, status);
            openNotificationFinishDelivering('bottomRight');
            console.log("UPDATE CUSTOMER ORDER FOR SELLER: ", result);
            setTimeout(function () {
                window.location.reload();
            }, 500);
            await dispatch({
                type: CLOSE_MODAL_DELIVERING_SELLER
            })
        } catch (error) {
            openNotificationFinishDeliveringError('bottomRight');
            console.log('error', error);
        }
    }
}

export const getAllCustomerSuccessfulOrderAction = (limit, offset) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForCustomerService.getAllCustomerSuccessfulOrder(limit, offset);
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

export const getAllCustomerSuccessfulOrderLengthAction = (limit, offset) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForCustomerService.getAllCustomerSuccessfulOrder(limit, offset);
            console.log("RESULT ALL SUCCESSFUL ORDER LENGTH: ", result.data.orders);
            dispatch({
                type: GET_ALL_CUSTOMER_SUCCESSFUL_ORDER_LENGTH,
                successfulOrderListLengthAction: result.data.orders
            })
        } catch (error) {
            console.log('error', error);
        }
    }
}

export const getAllInProgressOrderAction = (limit, offset) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForCustomerService.getAllInProgressOrder(limit, offset);
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

export const getAllInProgressOrderLengthAction = (limit, offset) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForCustomerService.getAllInProgressOrder(limit, offset);
            console.log("RESULT ALL IN PROGRESS ORDER LENGTH: ", result.data.orders);
            dispatch({
                type: GET_ALL_IN_PROGRESS_ORDER_LENGTH,
                inProgressOrderListLengthAction: result.data.orders
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const getAllCustomerOrderForCustomerAction = (limit, offset) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForCustomerService.getAllCustomerOrderForCustomer(limit, offset);
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

export const getAllCustomerOrderLengthForCustomerAction = (limit, offset) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForCustomerService.getAllCustomerOrderForCustomer(limit, offset);
            console.log("RESULT ALL CUSTOMER ORDER FOR CUSTOMER: ", result.data.orders);
            dispatch({
                type: GET_ALL_CUSTOMER_ORDERS_LENGTH_FOR_CUSTOMER,
                allCustomerOrderListLengthForCustomerAction: result.data.orders
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
