import React, { useEffect, useState } from 'react'
import styles from './PaymentMethod.module.css';
import { history } from '../../App';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { Checkbox } from 'antd';
import { Alert } from 'antd';
import Swal from 'sweetalert2'
import { SET_PAYMENT_BY_COD, SET_PAYMENT_BY_MOMO } from '../../redux/type/order/OrderType';
import { createNewOrderAction } from '../../redux/action/order/OrderAction';

export default function PaymentMethod() {
    let totalBill = 0;
    let transferCost = 30000;
    const { cartList } = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();
    const flagPayment = useSelector(state => state.OrderReducer.flagPayment);
    console.log("FLAG PAYMENT: ", flagPayment);
    // const handleSubmit = () => {

    // }
    const handleReturnToHomePage = () => {
        history.push("/");
    }
    const handlePaymentByCODChange = () => {
        dispatch({
            type: SET_PAYMENT_BY_COD
        })
    }
    const handlePaymentByMomoChange = () => {
        dispatch({
            type: SET_PAYMENT_BY_MOMO
        })
    }
    const handleFinishOrder = () => {
        if (flagPayment == 1) {
            Swal.fire({
                title: 'Cảm ơn quý khách đã đặt hàng',
                width: '700px',
                imageUrl: 'https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/Grocery%20delivery%20GettyImages-1216930551.jpg?itok=GWW_MNb0',
                imageWidth: '90%',
                text: 'Đơn hàng của quý khách sẽ được kiểm duyệt và email tình trạng đơn hàng tới quý khách trong thời gian sớm nhất',
                confirmButtonText: 'Trở về trang chủ',
                confirmButtonColor: '#2f855a',
                focusConfirm: false
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("cart");
                    history.push("/");
                }
            })
            localStorage.setItem("paymentMethod", flagPayment);
            let cartListPaymentMethod = JSON.parse(localStorage.getItem("cart"));
            let cartListPaymentMethodCustom = cartListPaymentMethod.map((item, index) => {
                return item = {
                    "productId": item.id,
                    "quantity": item.quantity,
                    "price": item.price,
                    "totalPrice": item.quantity * item.price
                }
            })
            console.log("CART LIST PAYMENT METHOD CUSTOM: ", cartListPaymentMethodCustom);
            let data = {
                "orderinformation": {
                    "fullName": localStorage.getItem("fullName"),
                    "email": localStorage.getItem("email"),
                    "phoneNumber": localStorage.getItem("phoneNumber"),
                    "receiveProductsMethod": localStorage.getItem("receiveProductsMethod"),
                    "address": JSON.parse(localStorage.getItem("address")),
                    "paymentMethod": localStorage.getItem("paymentMethod"),
                    "deliveryDate": localStorage.getItem("deliveryDate"),
                    "deliveryTimeRange": localStorage.getItem("deliveryTimeRange"),
                    "cart": cartListPaymentMethodCustom,
                    "note": localStorage.getItem("note"),
                    "totalBill": localStorage.getItem("totalBill")
                }

            }
            console.log("data create new order: ", data);
            dispatch(createNewOrderAction(data));

        } else {
            localStorage.setItem("paymentMethod", flagPayment);
            history.push("/paymentByMomo/1000");
        }
    }
    const handleRenderProductsInCart = () => {
        return cartList.map((item, index) => {
            totalBill += item.price * item.quantity;
            return <div className='flex justify-between mb-3' key={index}>
                <div className='flex'>
                    {item?.thumbnails?.map((image, index) => {
                        if (index == 0) {
                            return <img key={index} src={image}
                                className="rounded-md mr-2 relative"
                                style={{ height: '80px', width: '80px', border: '1px solid #D3D3D3' }} />
                        }
                    })}

                    <div>
                        <span className='text-sm pr-14'>{item.productName}</span>
                        <p className='text-xs' style={{ color: 'rgb(130, 134, 158)' }}>Số lượng: {item.quantity}</p>
                    </div>
                </div>
                <div>
                    {(item.price * item.quantity).toLocaleString()}<span className='underline'>đ</span>
                </div>
            </div >
        })
    }

    return (
        <div style={{ width: '75%', margin: '0 auto' }}>
            <div className='grid grid-cols-12 gap-16'>
                <div className='col-span-7'>
                    <h3 className="font-normal mt-5 mb-3 cursor-pointer" onClick={handleReturnToHomePage}>Midori Mart</h3>
                    <ul className="breadcrumb mb-3" style={{ fontSize: '0.8rem' }}>
                        <li className={styles.payment__breadcrumb_item}>
                            <NavLink to="/cart" className="text-black no-underline">Giỏ hàng/Cart</NavLink>
                        </li>
                        <li className={`${styles.payment__breadcrumb_item} breadcrumb-item-current`}>
                            <NavLink to="/checkout/1000" className="text-black no-underline">Thông tin giao hàng/Information</NavLink>

                        </li>
                        <li className="">
                            Phương thức thanh toán/Payment method
                        </li>

                    </ul>
                    <p className='font-bold mb-3 text-lg'>Phương thức vận chuyển/Transportation method</p>
                    <div class="card text-black mb-5">
                        <div className="card-body p-3">
                            <div className='flex justify-between grid grid-cols-4'>
                                <div className='col-span-3' style={{ fontSize: '0.9rem' }}>
                                    <Checkbox className={`${styles.payment__checkbox} mr-2`} checked></Checkbox>
                                    <span>Phí ship tạm tính - Midori Mart sẽ gọi xác nhận lại với quý khách</span><br />
                                    <span>(Temporary shipping fee - Midori Mart will call to confirm with you)</span>
                                </div>
                                <div className='text-right'>{transferCost.toLocaleString()}<span className='underline'>đ</span></div>
                            </div>
                        </div>


                    </div>

                    <p className='font-bold mb-3 text-lg'>Phương thức thanh toán/Payment method</p>
                    <div class="card text-black mb-3">
                        <div className='flex items-center card-header bg-white h-16'>
                            {flagPayment == 1 ? <Checkbox className={`${styles.payment__checkbox} mr-2`} onChange={handlePaymentByCODChange} checked={flagPayment}></Checkbox> : <Checkbox className={`${styles.payment__checkbox} mr-2`} onChange={handlePaymentByCODChange} checked={flagPayment}></Checkbox>}

                            <div className='flex mb-0 items-center'>
                                <img src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=1" style={{ width: '50px' }} />
                                <p className='ml-3 mb-0'>Thanh toán khi giao hàng (Cash On Delivery)</p>
                            </div>
                        </div>

                        <div className="flex items-center card-footer bg-white h-16">
                            {flagPayment == 0 ? <Checkbox className='mr-2' onChange={handlePaymentByMomoChange} checked={!flagPayment}></Checkbox> : <Checkbox className='mr-2' onChange={handlePaymentByMomoChange} checked={!flagPayment}></Checkbox>}
                            <div className='flex items-center'>
                                <img src="https://hstatic.net/0/0/global/design/seller/image/payment/momo.svg?v=1" style={{ width: '50px' }} />
                                <p className='mb-0 ml-3'>Thanh toán online qua ví MoMo (Pay with MoMo E-Wallet)</p>
                            </div>

                        </div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='flex items-center'>
                            <NavLink to="/checkout/1000" className="text-black no-underline" style={{ fontSize: '0.95rem' }}>Quay lại thông tin giao hàng/Back information</NavLink>
                        </div>
                        <div className='text-right'>
                            <button className='bg-green-700 text-white p-3 rounded-md hover:bg-green-800' onClick={handleFinishOrder}>
                                Hoàn tất đơn hàng/Finished
                            </button>
                        </div>
                    </div>
                </div >
                <div className={`${styles.payment__right} col-span-5`}>
                    <div className='flex flex-col'>
                        <div className='mb-3 mt-5'>
                            {handleRenderProductsInCart()}
                        </div>
                        <div className='flex justify-between mb-3'>
                            <div className='flex-grow mr-2'>
                                <form className="mb-3">
                                    <div className="form-group mb-3">
                                        <input type="text" placeholder='Mã giảm giá/Voucher' className={`${styles.payment__voucher} form-control pl-0 shadow-none`} name="voucher" />
                                    </div>
                                </form>
                            </div>
                            <div>
                                <button className='bg-green-700 text-white p-2 rounded-md hover:bg-green-800'>
                                    Sử dụng/Use
                                </button>
                            </div>


                        </div>
                        <div className={`flex justify-between h-12 items-center mb-3 ${styles.payment__totalBill}`}>
                            <p className='mb-0'>Tạm tính/Notional price</p>
                            <p className='mb-0'>{totalBill.toLocaleString()}<span className='underline'>đ</span></p>
                        </div>
                        <div className={`flex justify-between h-12 items-center mb-3 ${styles.payment__totalBill}`}>
                            <p className='pr-5 mb-0'>Phí vận chuyển tạm tính/Transfer costs</p>
                            <p className='mb-0'>{transferCost.toLocaleString()}<span className='underline'>đ</span></p>
                        </div>
                        <div className={`flex justify-between ${styles.payment__totalBill}`}>
                            <span className='flex items-center'>
                                <p className='pr-5'>Tổng cộng/Total</p>
                            </span>
                            <span className='flex'>
                                <span className='mr-2 text-xs mt-2' style={{ color: '#969696' }}>VND</span>
                                <p className='text-2xl'>{(totalBill + transferCost).toLocaleString()}<span className='underline'>đ</span></p>
                            </span>

                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
