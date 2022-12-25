import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { saveCustomerTransactionOnlinePaymentAction } from '../../redux/action/payment/PaymentAction';
import Swal from 'sweetalert2'
import { history } from '../../App';

export default function PaymentResult(props) {
    console.log("PAYMENT RESULT: ", props.match.params);
    let { vnp_Amount,
        vnp_BankCode,
        vnp_BankTranNo,
        vnp_CardType,
        vnp_OrderInfo,
        vnp_PayDate,
        vnp_ResponseCode,
        vnp_TmnCode,
        vnp_TransactionNo,
        vnp_TransactionStatus,
        vnp_TxnRef,
        vnp_SecureHash } = props.match.params;
    console.log("vnp_Amount: ", vnp_Amount);
    console.log("vnp_BankCode", vnp_BankCode);
    console.log("vnp_BankTranNo", vnp_BankTranNo);
    console.log("vnp_CardType", vnp_CardType);
    console.log("vnp_OrderInfo", vnp_OrderInfo);
    console.log("vnp_PayDate", vnp_PayDate);
    console.log("vnp_ResponseCode", vnp_ResponseCode);
    console.log("vnp_TmnCode", vnp_TmnCode);
    console.log("vnp_TransactionNo", vnp_TransactionNo);
    console.log("vnp_TransactionStatus", vnp_TransactionStatus);
    console.log("vnp_TxnRef", vnp_TxnRef);
    console.log("vnp_SecureHash", vnp_SecureHash);
    const dispatch = useDispatch();

    useEffect(() => {
        alert("CÓ VÀO");
        dispatch(saveCustomerTransactionOnlinePaymentAction(vnp_Amount, vnp_BankCode, vnp_CardType, vnp_BankTranNo, vnp_OrderInfo, vnp_PayDate, vnp_TransactionNo, vnp_ResponseCode, vnp_TmnCode, vnp_TxnRef, vnp_SecureHash));
    }, [])

    return (
        <div>
            {vnp_ResponseCode == "00" ?
                Swal.fire({
                    title: 'Quý khách thực hiện thanh toán thành công',
                    width: '600px',
                    imageUrl: '/images/banner/vnpay.jpg',
                    imageWidth: '90%',
                    text: 'Đơn hàng của quý khách sẽ được kiểm duyệt và email tình trạng đơn hàng tới quý khách trong thời gian sớm nhất',
                    confirmButtonText: 'Trở về trang chủ',
                    confirmButtonColor: '#2f855a',
                    focusConfirm: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        localStorage.removeItem("cart");
                        localStorage.removeItem("deliveryDate");
                        localStorage.removeItem("deliveryTimeRange");
                        localStorage.removeItem("orderNumberPayment");
                        localStorage.setItem("transactionStatus", 1);
                        history.push("/");
                        window.location.reload();
                    }
                })
                :
                Swal.fire({
                    title: 'Quý khách thực hiện thanh toán thất bại',
                    width: '600px',
                    imageUrl: '/images/banner/vnpay.jpg',
                    imageWidth: '90%',
                    confirmButtonText: 'Trở về trang thanh toán',
                    confirmButtonColor: '#2f855a',
                    focusConfirm: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        // localStorage.removeItem("cart");
                        // localStorage.removeItem("deliveryDate");
                        // localStorage.removeItem("deliveryTimeRange");
                        localStorage.removeItem("orderNumberPayment");
                        localStorage.setItem("transactionStatus", 0);
                        history.push("/payment/1000");
                        window.location.reload();
                    }
                })
            }
        </div>
    )
}
