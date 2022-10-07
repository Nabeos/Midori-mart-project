import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Checkout.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { history } from '../../App';
import { Checkbox } from 'antd';

export default function Checkout(props) {
    let totalBill = 0;
    let transferCost = 30000;
    let [flag, setFlag] = useState(1);
    const { cartList } = useSelector(state => state.CartReducer);
    const handleSubmit = () => {

    }
    const handleReturnToHomePage = () => {
        history.push("/");
    }
    const handleHomeDeliveryChange = () => {
        setFlag(1);
    }
    const handlePickUpChange = () => {
        setFlag(0);
    }
    const handleNavigateToPaymentMethodPage = () => {
        history.push("/payment/1000");
    }
    const handleRenderProductsInCart = () => {
        return cartList.map((item, index) => {
            totalBill += item.price * item.quantity;
            return <div className='flex justify-between mb-3' key={index}>
                <div className='flex'>
                    <img src={item.image} className="rounded-md mr-2 relative" style={{ height: '80px', width: '80px', border: '1px solid #D3D3D3' }} />
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
                        <li className={styles.breadcrumb_item}>
                            <NavLink to="/cart" className="text-black no-underline">Giỏ hàng/Cart</NavLink>
                        </li>
                        <li className={`${styles.breadcrumb_item} breadcrumb-item-current`}>
                            Thông tin giao hàng/Information
                        </li>
                        <li className={`${styles.breadcrumb_item_inactive}`}>
                            Phương thức thanh toán/Payment method
                        </li>
                    </ul>
                    <h6 className='font-bold mb-3'>Thông tin/Information</h6>
                    <p>
                        <span className='mr-1'>Bạn đã có tài khoản?(Do you have account?)</span>
                        <NavLink to="/login" className="text-black no-underline">Đăng nhập/Login</NavLink>
                    </p>
                    <form className="mb-3" onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <input type="text" placeholder='Họ và tên/Fullname *' className={`${styles.checkout__field} form-control pl-0 shadow-none`} name="fullName" />
                        </div>
                        <div className='form-group grid grid-cols-3 mb-3'>
                            <div className='col-span-2 mr-2'>
                                <input type="email" placeholder='Email *' className={`${styles.checkout__field} form-control pl-0 shadow-none`} name="email" />
                            </div>
                            <div>
                                <input type="tel" className={`${styles.checkout__field} form-control shadow-none`} id="phoneNumber" name="phoneNumber" placeholder="Số điện thoại/Phone *" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div class="card text-black">
                                <div className='flex items-center card-header bg-white h-12'>
                                    {flag == 1 ? <Checkbox className='mr-2' onChange={handleHomeDeliveryChange} checked={flag}></Checkbox> : <Checkbox className='mr-2' onChange={handleHomeDeliveryChange} checked={flag}></Checkbox>}

                                    <p className='mb-0'>
                                        Giao tận nơi/Home delivery: Biểu phí giao hàng
                                    </p>
                                </div>
                                {flag == 1 ? <div className="card-body p-3">
                                    <div className='mb-3'>
                                        <input type="text" placeholder='Địa chỉ giao hàng/Address *' className={`${styles.checkout__field} form-control pl-0 shadow-none`} name="address" />
                                    </div>

                                    <div className='grid grid-cols-3 gap-3'>
                                        <label className={`${styles.checkout__shipping__province} field-label`} for="checkout__shipping__province"> Tỉnh /Province</label>
                                        <select className={`${styles.checkout__field} ${styles.checkout__field__province} form-select shadow-none h-14 pt-4 text-sm`} name="province">
                                            <option value="" selected disabled>Chọn tỉnh/Province</option>
                                            <option value="">Hồ Chí Minh</option>
                                            <option value="">Hà Nội</option>
                                            <option value="">Đà Nẵng</option>
                                        </select>

                                        <label className={`${styles.checkout__shipping__district} field-label`} for="checkout__shipping__district"> Quận/Huyện(District)</label>
                                        <select className={`${styles.checkout__field} ${styles.checkout__field__district} form-select shadow-none h-14 pt-4 text-sm`} name="district">
                                            <option value="" selected disabled>Chọn quận/huyện</option>
                                            <option value="">Hoàn Kiếm</option>
                                            <option value="">Ba Đình</option>
                                            <option value="">Đống Đa</option>
                                        </select>

                                        <label className={`${styles.checkout__shipping__ward} field-label`} for="checkout__shipping__district"> Phường/Xã(Ward)</label>
                                        <select className={`${styles.checkout__field} ${styles.checkout__field__ward} form-select shadow-none h-14 pt-4 text-sm`} name="ward">
                                            <option value="" selected disabled>Chọn phường/xã</option>
                                            <option value="">Ngọc Khánh</option>
                                            <option value="">Vĩnh Phúc</option>
                                            <option value="">Giảng Võ</option>
                                        </select>
                                    </div>
                                </div> : <div></div>}
                                <div className="flex items-center card-footer bg-white h-12">
                                    {flag == 0 ? <Checkbox className='mr-2' onChange={handlePickUpChange} checked={!flag}></Checkbox> : <Checkbox className='mr-2' onChange={handlePickUpChange} checked={!flag}></Checkbox>}
                                    <p className='mb-0'>Nhận tại cửa hàng/pick up at the store</p>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className='grid grid-cols-4'>
                        <div></div>
                        <div className='col-span-3 text-right'>
                            <button className='bg-green-700 text-white p-3 rounded-md hover:bg-green-800' onClick={handleNavigateToPaymentMethodPage}>
                                Tiếp tục đến phương thức thanh toán/Go payment method
                            </button>
                        </div>
                    </div>
                </div >
                <div className={`${styles.checkout__right} col-span-5`}>
                    <div className='flex flex-col'>
                        <div className='mb-3 mt-5'>
                            {handleRenderProductsInCart()}
                        </div>
                        <div className='flex justify-between mb-3'>
                            <div className='flex-grow mr-2'>
                                <form className="mb-3" onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <input type="text" placeholder='Mã giảm giá/Voucher' className={`${styles.checkout__voucher} form-control pl-0 shadow-none`} name="voucher" />
                                    </div>
                                </form>
                            </div>
                            <div className='text-right'>
                                <button className='bg-green-700 text-white p-2 rounded-md hover:bg-green-800'>
                                    Sử dụng/Use
                                </button>
                            </div>


                        </div>
                        <div className={`flex justify-between h-12 items-center mb-3 ${styles.checkout__totalBill}`}>
                            <p className='mb-0'>Tạm tính/Notional price</p>
                            <p className='mb-0'>{totalBill.toLocaleString()}<span className='underline'>đ</span></p>
                        </div>
                        <div className={`flex justify-between h-12 items-center mb-3 ${styles.checkout__totalBill}`}>
                            <p className='pr-5 mb-0'>Phí vận chuyển tạm tính/Transfer costs</p>
                            <p className='mb-0'>{transferCost.toLocaleString()}<span className='underline'>đ</span></p>
                        </div>
                        <div className={`flex justify-between ${styles.checkout__totalBill}`}>
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

