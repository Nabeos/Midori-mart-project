import React, { Fragment, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Checkout.module.css';
import { connect, useSelector, useDispatch } from 'react-redux'
import { history } from '../../App';
import { Checkbox } from 'antd';
import { withFormik } from 'formik';
import * as Yup from 'yup';

function Checkout(props) {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    console.log("INITIAL VALUES CHECKOUT: ", values);
    let totalBill = 0;
    let transferCost = 30000;
    let [flag, setFlag] = useState(1);
    const { cartList } = useSelector(state => state.CartReducer);

    const handleReturnToHomePage = () => {
        history.push("/");
    }
    const handleHomeDeliveryChange = () => {
        setFlag(1);
    }
    const handlePickUpChange = () => {
        setFlag(0);
    }
    // const handleNavigateToPaymentMethodPage = () => {
    //     history.push("/payment/1000");
    // }
    const handleRenderProductsInCart = () => {
        return cartList.map((item, index) => {
            totalBill += item.price * item.quantity;
            return <div className='flex justify-between mb-3' key={index}>
                <div className='flex'>
                    {item?.thumbnails?.map((image, index) => {
                        if (index == 0) {
                            return <img key={index} src={image} className="rounded-md mr-2 relative" style={{ height: '80px', width: '80px', border: '1px solid #D3D3D3' }} />
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
                        <div className="form-group mb-2">
                            <input type="text"
                                onChange={e => {
                                    props.setFieldTouched('fullName')
                                    handleChange(e)
                                }} placeholder='Họ và tên/Fullname *' className={`${styles.checkout__field} form-control pl-0 shadow-none`} name="fullName" />
                        </div>

                        {errors.fullName && touched.fullName ? <div className='text-red-600' style={{ fontSize: '0.9rem' }}>{errors.fullName}</div> : <div></div>}
                        <div className='form-group grid grid-cols-12 mb-2 flex'>
                            <div className='col-span-6 mr-2'>
                                <input type="email" placeholder='Email *' className={`${styles.checkout__field} form-control pl-0 shadow-none`} onChange={e => {
                                    props.setFieldTouched('email')
                                    handleChange(e)
                                }} name="email" />
                                {errors.email && touched.email ? <span className='text-red-600' style={{ fontSize: '0.9rem' }}>{errors.email}</span> : <span></span>}
                            </div>

                            <div className='col-span-6'>
                                <input type="tel" className={`${styles.checkout__field} form-control shadow-none`} id="phoneNumber" onChange={e => {
                                    props.setFieldTouched('phoneNumber')
                                    handleChange(e)
                                }} name="phoneNumber" placeholder="Số điện thoại/Phone *" />
                                {errors.phoneNumber && touched.phoneNumber ? <span className='text-red-600' style={{ fontSize: '0.9rem' }}>{errors.phoneNumber}</span> : <span></span>}
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
                                    <div className=''>
                                        <input type="text" placeholder='Địa chỉ giao hàng/Address *' onChange={e => {
                                            props.setFieldTouched('address')
                                            handleChange(e)
                                        }} className={`${styles.checkout__field} form-control pl-0 shadow-none`} name="address" />
                                    </div>
                                    {errors.address && touched.address ? <span className='text-red-600' style={{ fontSize: '0.9rem' }}>{errors.address}</span> : <span></span>}
                                    <div className='grid grid-cols-3 gap-3 mt-3'>
                                        <div className={styles.province__container}>
                                            <div className={styles.province__label__container}>
                                                <label className={`${styles.checkout__shipping__province} field-label`} for="checkout__shipping__province"> Tỉnh /Province</label>
                                            </div>

                                            <select className={`${styles.checkout__field} ${styles.checkout__field__province} form-select shadow-none h-14 pt-4 text-sm`} onChange={e => {
                                                handleChange(e)
                                            }} name="province">
                                                <option value="" selected disabled>Chọn tỉnh/Province</option>
                                                <option value="1">Hồ Chí Minh</option>
                                                <option value="2">Hà Nội</option>
                                                <option value="3">Đà Nẵng</option>
                                            </select>
                                            {errors.province && touched.province ? <span className='text-red-600' style={{ fontSize: '0.9rem' }}>{errors.province}</span> : <span></span>}
                                        </div>

                                        <div className={styles.district__container}>
                                            <div className={styles.district__label__container}>
                                                <label className={`${styles.checkout__shipping__district} field-label`} for="checkout__shipping__district"> Quận/Huyện(District)</label>
                                            </div>

                                            <select className={`${styles.checkout__field} ${styles.checkout__field__district} form-select shadow-none h-14 pt-4 text-sm`} onChange={e => {
                                                handleChange(e)
                                            }} name="district">
                                                <option value="" selected disabled>Chọn quận/huyện</option>
                                                <option value="1">Hoàn Kiếm</option>
                                                <option value="2">Ba Đình</option>
                                                <option value="3">Đống Đa</option>
                                            </select>
                                            {errors.district && touched.district ? <span className='text-red-600' style={{ fontSize: '0.9rem' }}>{errors.district}</span> : <span></span>}

                                        </div>

                                        <div className={styles.ward__container}>
                                            <div className={styles.ward__label__container}>
                                                <label className={`${styles.checkout__shipping__ward} field-label`} for="checkout__shipping__district"> Phường/Xã(Ward)</label>
                                            </div>
                                            <select className={`${styles.checkout__field} ${styles.checkout__field__ward} form-select shadow-none h-14 pt-4 text-sm`} onChange={e => {
                                                handleChange(e)
                                            }} name="ward">
                                                <option value="" selected disabled>Chọn phường/xã</option>
                                                <option value="1">Ngọc Khánh</option>
                                                <option value="2">Vĩnh Phúc</option>
                                                <option value="3">Giảng Võ</option>
                                            </select>
                                            {errors.ward && touched.ward ? <span className='text-red-600' style={{ fontSize: '0.9rem' }}>{errors.ward}</span> : <span></span>}
                                        </div>

                                    </div>
                                </div> : <div></div>}
                                <div className="flex items-center card-footer bg-white h-12">
                                    {flag == 0 ? <Checkbox className='mr-2' onChange={handlePickUpChange} checked={!flag}></Checkbox> : <Checkbox className='mr-2' onChange={handlePickUpChange} checked={!flag}></Checkbox>}
                                    <p className='mb-0'>Nhận tại cửa hàng/pick up at the store</p>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-4'>
                            <div></div>
                            <div className='col-span-3 text-right'>
                                <button type="submit" onSubmit={handleSubmit} className='bg-green-700 mt-2 text-white p-3 rounded-md hover:bg-green-800'>
                                    Tiếp tục đến phương thức thanh toán/Go payment method
                                </button>
                            </div>
                        </div>
                    </form>

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

const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,32}$/;
const regexAllLetter = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/;
const regexPhoneNumber = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;

const CheckoutWithFormik = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => ({
        fullName: "",
        phoneNumber: "",
        email: "",
        address: "",
        province: "",
        district: "",
        ward: ""
    }),

    // Custom sync validation
    validationSchema: Yup.object().shape({
        fullName: Yup.string()
            .required("Quý khách không được để trống tên !!!")
            .matches(regexAllLetter, "Mục tên chỉ được phép chứa chữ !!!"),
        phoneNumber: Yup.string()
            .required("Quý khách không được để trống mục số điện thoại !!!")
            .matches(regexPhoneNumber, "Quý khách vui lòng nhập đúng định dạng số điện thoại !!!"),
        email: Yup.string()
            .required("Quý khách không được để trống mục email !!!")
            .email("Quý khách vui lòng nhập đúng định dạng email !!!"),
        address: Yup.string()
            .required("Quý khách vui lòng không được để trống mục địa chỉ nhận hàng !!!"),
        province: Yup.string()
            .required("Quý khách vui lòng lựa chọn tỉnh !!!"),
        district: Yup.string()
            .required("Quý khách vui lòng lựa chọn quận/huyện !!!"),
        ward: Yup.string()
            .required("Quý khách vui lòng lựa chọn phường/xã !!!")
    }),


    handleSubmit: (values, { setSubmitting }) => {
        console.log("CÓ VÀO HANDLE SUBMIT");
        console.log("VALUE FORM: ", values);
        history.push("/payment/1000");
    },

    displayName: 'CheckoutWithFormik'
})(Checkout);

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, null)(CheckoutWithFormik);

