import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { history } from '../../App';
import { saveCustomerTransactionOnlinePaymentAction } from '../../redux/action/payment/PaymentAction';
import styles from './PageNotFound.module.css';

export default function PageNotFound(props) {
    console.log("PROPS: ", (props.location.search));
    const search = props.location.search; // could be '?foo=bar'
    const params = new URLSearchParams(search);
    const vnp_Amount = params.get('vnp_Amount'); // bar
    const vnp_BankCode = params.get('vnp_BankCode'); // bar
    const vnp_BankTranNo = params.get('vnp_BankTranNo'); // bar
    const vnp_CardType = params.get('vnp_CardType'); // bar
    const vnp_OrderInfo = params.get('vnp_OrderInfo'); // bar
    const vnp_PayDate = params.get('vnp_PayDate'); // bar
    const vnp_ResponseCode = params.get('vnp_ResponseCode'); // bar
    const vnp_SecureHash = params.get('vnp_SecureHash'); // bar
    const vnp_TmnCode = params.get('vnp_TmnCode'); // bar
    const vnp_TransactionNo = params.get('vnp_TransactionNo'); // bar
    const vnp_TransactionStatus = params.get('vnp_TransactionStatus'); // bar
    const vnp_TxnRef = params.get('vnp_TxnRef'); // bar

    console.log("VNP_AMOUNT: ", vnp_Amount);
    console.log("VNP_BANKCODE: ", vnp_BankCode);
    console.log("VNP_BANKTRANNO: ", vnp_BankTranNo);
    console.log("VNP_CARDTYPE: ", vnp_CardType);
    console.log("vnp_OrderInfo: ", vnp_OrderInfo);
    console.log("vnp_PayDate: ", vnp_PayDate);
    console.log("vnp_ResponseCode: ", vnp_ResponseCode);
    console.log("vnp_TmnCode: ", vnp_TmnCode);
    console.log("vnp_TransactionNo: ", vnp_TransactionNo);
    console.log("vnp_TransactionStatus: ", vnp_TransactionStatus);
    console.log("vnp_TxnRef: ", vnp_TxnRef);
    console.log("vnp_SecureHash: ", vnp_SecureHash);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(saveCustomerTransactionOnlinePaymentAction(vnp_Amount, vnp_BankCode, vnp_CardType, vnp_BankTranNo, vnp_OrderInfo, vnp_PayDate, vnp_TransactionNo, vnp_ResponseCode, vnp_TmnCode, vnp_TxnRef, vnp_SecureHash));
        history.push(`/paymentresult/${vnp_Amount}/${vnp_BankCode}/${vnp_BankTranNo}/${vnp_CardType}/${vnp_OrderInfo}/${vnp_PayDate}/${vnp_ResponseCode}/${vnp_TmnCode}/${vnp_TransactionNo}/${vnp_TransactionStatus}/${vnp_TxnRef}/${vnp_SecureHash}`);

    }, [])

    return (
        <div>PageNotFound</div>
    )
}
