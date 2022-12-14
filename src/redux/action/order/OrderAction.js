import axios from 'axios'
import { orderManagementForCustomerService } from '../../../services/OrderManagementForCustomerService';
import { orderManagementForSellerService } from '../../../services/OrderManagementForSellerService';
import { CLOSE_MODAL, CLOSE_MODAL_DELIVERING_SELLER, CLOSE_MODAL_PENDING_SELLER, CREATE_NEW_ORDER, GET_ALL_CANCEL_CUSTOMER_ORDERS_LENGTH_FOR_SELLER, GET_ALL_CUSTOMER_CANCEL_CUSTOMER_ORDERS_LENGTH_FOR_SELLER, GET_ALL_CUSTOMER_ORDERS_FOR_CUSTOMER, GET_ALL_CUSTOMER_ORDERS_FOR_SELLER, GET_ALL_CUSTOMER_ORDERS_LENGTH_FOR_CUSTOMER, GET_ALL_CUSTOMER_ORDERS_LENGTH_FOR_SELLER, GET_ALL_CUSTOMER_SUCCESSFUL_ORDER, GET_ALL_CUSTOMER_SUCCESSFUL_ORDER_LENGTH, GET_ALL_DELIVERING_CUSTOMER_ORDERS_LENGTH_FOR_SELLER, GET_ALL_IN_PROGRESS_ORDER, GET_ALL_IN_PROGRESS_ORDER_LENGTH, GET_ALL_PENDING_CUSTOMER_ORDERS_LENGTH_FOR_SELLER, GET_ALL_PURCHASE_HISTORY_ORDER, GET_ALL_REFUND_CUSTOMER_ORDERS_LENGTH_FOR_SELLER, GET_ALL_SUCCESSFUL_CUSTOMER_ORDERS_LENGTH_FOR_SELLER } from '../../type/order/OrderType';
import { notification } from "antd";
import Swal from 'sweetalert2'
import { history } from '../../../App';
import { paymentManagementService } from '../../../services/PaymentManagementService';
import { HIDE_LOADING, SHOW_LOADING } from '../../type/loading/LoadingType';

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
        message: `C???p nh???t tr???ng th??i ????n h??ng th??nh c??ng`,
        placement,
        duration: 2
    });
};
const openNotificationUpdateOrderStatusError = (placement) => {
    notification.error({
        message: `C???p nh???t tr???ng th??i ????n h??ng th???t b???i`,
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
        message: `C???p nh???t tr???ng th??i ????n h??ng th??nh c??ng`,
        placement,
        duration: 2
    });
};
const openNotificationStartDeliveringError = (placement) => {
    notification.error({
        message: `C???p nh???t tr???ng th??i ????n h??ng th???t b???i`,
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
        message: `C???p nh???t tr???ng th??i ????n h??ng th??nh c??ng`,
        placement,
        duration: 2
    });
};
const openNotificationFinishDeliveringError = (placement) => {
    notification.error({
        message: `C???p nh???t tr???ng th??i ????n h??ng th???t b???i`,
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

const openNotificationFinishCustomerGetInStore = (placement) => {
    notification.success({
        message: `C???p nh???t tr???ng th??i ????n h??ng th??nh c??ng`,
        placement,
        duration: 2
    });
};
const openNotificationFinishCustomerGetInStoreError = (placement) => {
    notification.error({
        message: `C???p nh???t tr???ng th??i ????n h??ng th???t b???i`,
        placement,
        duration: 2
    });
};
export const handleFinishCustomerGetInStoreOrderAction = (orderNumber, status) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForSellerService.updateCustomerOrderForSeller(orderNumber, status);
            openNotificationFinishCustomerGetInStore('bottomRight');
            console.log("UPDATE CUSTOMER GET IN STORE FOR SELLER: ", result);
            await dispatch({
                type: CLOSE_MODAL_PENDING_SELLER
            })
        } catch (error) {
            openNotificationFinishCustomerGetInStoreError('bottomRight');
            console.log('error', error);
        }
    }
}

export const handleFinishCustomerGetInStoreOutsideOrderAction = (orderNumber, status) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForSellerService.updateCustomerOrderForSeller(orderNumber, status);
            openNotificationFinishCustomerGetInStore('bottomRight');
            console.log("UPDATE CUSTOMER ORDER FOR SELLER: ", result);
            setTimeout(function () {
                window.location.reload();
            }, 500);
            await dispatch({
                type: CLOSE_MODAL_PENDING_SELLER
            })
        } catch (error) {
            openNotificationFinishCustomerGetInStoreError('bottomRight');
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
const openNotificationCancelInProgressOrderForCustomer = (placement) => {
    notification.success({
        message: `H???y ????n h??ng th??nh c??ng !`,
        placement,
        duration: 2
    });
};
const openNotificationCancelInProgressOrderForCustomerError = (placement) => {
    notification.error({
        message: `H???y ????n h??ng th???t b???i !`,
        placement,
        duration: 2
    });
};
export const cancelInProgressOrderForCustomerAction = (orderNumber, code) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForCustomerService.cancelInProgressOrderForCustomer(orderNumber, code);
            openNotificationCancelInProgressOrderForCustomer('bottomRight');
            console.log("CANCEL IN PROGRESS ORDER FOR CUSTOMER ACTION: ", result);
            dispatch({
                type: CLOSE_MODAL
            })
        } catch (error) {
            openNotificationCancelInProgressOrderForCustomerError('bottomRight');
            console.log('error', error.response.data);
        }
    }
}

export const cancelInProgressOrderForGuestAction = (orderNumber, code) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForCustomerService.cancelInProgressOrderForCustomer(orderNumber, code);
            Swal.fire({
                icon: 'success',
                title: 'Qu?? kh??ch h???y ????n h??ng th??nh c??ng !',
                // text: 'Qu?? kh??ch h???y ????n h??ng th??nh c??ng !',
            }).then((result) => {
                if (result.isConfirmed) {
                    history.push("/");
                }
            })
            console.log("CANCEL IN PROGRESS ORDER FOR CUSTOMER ACTION: ", result);
            dispatch({
                type: CLOSE_MODAL
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Qu?? kh??ch h???y ????n h??ng th???t b???i. ????n h??ng ???? ???????c ng?????i b??n h??ng duy???t !',
                // text: 'Vui l??ng li??n h??? t???i c???a h??ng ????? bi???t th??m chi ti???t',
            }).then((result) => {
                if (result.isConfirmed) {
                    history.push("/");
                }
            })
            console.log('error', error.response.data);
        }
    }
}

const openNotificationRefundOrderForCustomer = (placement) => {
    notification.success({
        message: `Ho??n tr??? ????n h??ng th??nh c??ng !`,
        placement,
        duration: 2
    });
};
const openNotificationRefundOrderForCustomerError = (placement) => {
    notification.error({
        message: `Ho??n tr??? ????n h??ng th???t b???i !`,
        placement,
        duration: 2
    });
};
export const refundOrderForCustomerAction = (orderNumber, code) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForCustomerService.cancelInProgressOrderForCustomer(orderNumber, code);
            openNotificationRefundOrderForCustomer('bottomRight');
            console.log("REFUND ORDER FOR CUSTOMER ACTION: ", result);
            dispatch({
                type: CLOSE_MODAL
            })
        } catch (error) {
            openNotificationRefundOrderForCustomerError('bottomRight');
            console.log('error', error.response.data);
        }
    }
}

export const refundOrderForGuestAction = (orderNumber, code) => {
    return async (dispatch) => {
        try {
            const result = await orderManagementForCustomerService.cancelInProgressOrderForCustomer(orderNumber, code);
            Swal.fire({
                icon: 'success',
                title: 'Qu?? kh??ch ho??n tr??? ????n h??ng th??nh c??ng !',
            }).then((result) => {
                if (result.isConfirmed) {
                    history.push("/");
                }
            })
            console.log("REFUND ORDER FOR CUSTOMER ACTION: ", result);
            dispatch({
                type: CLOSE_MODAL
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Qu?? kh??ch ho??n tr??? ????n h??ng th???t b???i !',
            }).then((result) => {
                if (result.isConfirmed) {
                    history.push("/");
                }
            })
            console.log('error', error.response.data);
        }
    }
}

export const createNewOrderAction = (newOrderInfo) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SHOW_LOADING })
            const result = await orderManagementForCustomerService.createNewOrder(newOrderInfo);
            await dispatch({ type: HIDE_LOADING });
            console.log("RESULT CREATE NEW ORDER: ", result);
            // localStorage.setItem("orderNumberPayment", result?.data?.order_response?.orderNumber);
            Swal.fire({
                title: 'C???m ??n qu?? kh??ch ???? ?????t h??ng',
                width: '700px',
                imageUrl: 'https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/Grocery%20delivery%20GettyImages-1216930551.jpg?itok=GWW_MNb0',
                imageWidth: '90%',
                text: '????n h??ng c???a qu?? kh??ch s??? ???????c ki???m duy???t v?? email t??nh tr???ng ????n h??ng t???i qu?? kh??ch trong th???i gian s???m nh???t',
                confirmButtonText: 'Tr??? v??? trang ch???',
                confirmButtonColor: '#2f855a',
                focusConfirm: false
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("cart");
                    localStorage.removeItem("deliveryDate");
                    localStorage.removeItem("deliveryTimeRange");
                    localStorage.removeItem("orderNumberPayment");
                    history.push("/");
                    window.location.reload();
                }
            })
            dispatch({
                type: CREATE_NEW_ORDER
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: "S??? l?????ng h??ng trong kho kh??ng c??n ?????. Mong qu?? kh??ch th??ng c???m !",
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("cart");
                    localStorage.removeItem("deliveryDate");
                    localStorage.removeItem("deliveryTimeRange");
                    history.push("/");
                    window.location.reload();
                }
            })
            console.log('error', error.response.data);
        }
    }
}

export const createNewOrderVnpayAction = (newOrderInfo) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SHOW_LOADING })
            const result = await orderManagementForCustomerService.createNewOrder(newOrderInfo);
            //PH???N N??Y M???I TH??M NH??
            const result1 = await paymentManagementService.navigateToVnpayPaymentPage(result?.data?.order_response?.orderNumber, localStorage.getItem("totalBill"));
            await dispatch({ type: HIDE_LOADING });
            window.location.href = result1.data.payment.data;
            //END
            console.log("RESULT CREATE NEW ORDER: ", result);
            localStorage.setItem("orderNumberPayment", result?.data?.order_response?.orderNumber);
            dispatch({
                type: CREATE_NEW_ORDER
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: "S??? l?????ng h??ng trong kho kh??ng ????? ho???c kh??ng t??m th???y ????n h??ng. Mong qu?? kh??ch th??ng c???m !",
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("cart");
                    localStorage.removeItem("deliveryDate");
                    localStorage.removeItem("deliveryTimeRange");
                    history.push("/");
                    window.location.reload();
                }
            })
            console.log('error', error.response.data);
        }
    }
}