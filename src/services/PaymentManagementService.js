import { baseService } from "./baseServices";

export class PaymentManagementService extends baseService {
    constructor() {
        super();
    }

    navigateToVnpayPaymentPage = (orderNumber, totalBill) => {
        return this.postNavigateToVnpayPaymentPage(`payment-management?order_number=${orderNumber}&amountStr=${totalBill}`);
    }

    saveCustomerTransactionOnlinePayment = (vnpAmount, vnpBankCode, vnpCardType, vnpBankTranNo, vnpOrderInfo, vnpPayDate, vnpTransactionNo, vnpResponseCode, vnpTmnCode, vnpTxnRef, vnpSecureHash) => {
        return this.get(`payment-management?vnp_Amount=${vnpAmount}&vnp_BankCode=${vnpBankCode}&vnp_CardType=${vnpCardType}&vnp_BankTranNo=${vnpBankTranNo}&vnp_OrderInfo=${vnpOrderInfo}&vnp_PayDate=${vnpPayDate}&vnp_TransactionNo=${vnpTransactionNo}&vnp_ResponseCode=${vnpResponseCode}&vnp_TmnCode=${vnpTmnCode}&vnp_TxnRef=${vnpTxnRef}&vnp_SecureHash=${vnpSecureHash}`);
    }

}

export const paymentManagementService = new PaymentManagementService();