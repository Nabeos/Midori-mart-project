import axios from 'axios'
import { history } from '../../../App';
import { paymentManagementService } from '../../../services/PaymentManagementService';

export const navigateToVnpayPaymentPageAction = (orderNumber, totalBill) => {
    return async (dispatch) => {
        try {
            const result = await paymentManagementService.navigateToVnpayPaymentPage(orderNumber, totalBill);
            console.log("RESULT NAVIGATE TO VNPAY PAYMENT: ", result);
            window.location.href = result?.data?.payment?.data;
            // history.push(result?.data?.payment?.data);
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const saveCustomerTransactionOnlinePaymentAction = (vnpAmount, vnpBankCode, vnpCardType, vnpBankTranNo, vnpOrderInfo, vnpPayDate, vnpTransactionNo, vnpResponseCode, vnpTmnCode, vnpTxnRef, vnpSecureHash) => {
    return async (dispatch) => {
        try {
            const result = await paymentManagementService.saveCustomerTransactionOnlinePayment(vnpAmount, vnpBankCode, vnpCardType, vnpBankTranNo, vnpOrderInfo, vnpPayDate, vnpTransactionNo, vnpResponseCode, vnpTmnCode, vnpTxnRef, vnpSecureHash);
            console.log("RESULT SAVE CUSTOMER TRANSACTION ONLINE: ", result);
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}





