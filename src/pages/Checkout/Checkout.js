import React, { Fragment, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Checkout.module.css';
import { connect, useSelector, useDispatch } from 'react-redux'
import { history } from '../../App';
import { Checkbox, Radio } from 'antd';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { getUserProfileInformationAction } from '../../redux/action/user/UserAction';
import { SET_HOME_DELIVERY_CHANGE, SET_PICK_UP_CHANGE } from '../../redux/type/order/OrderType';
import { USER } from '../../redux/type/user/UserType';
import { Redirect } from 'react-router-dom';

function Checkout(props) {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    console.log("VALUES.FLAG = ", values.flag);
    const dispatch = useDispatch();
    let user = JSON.parse(localStorage.getItem(USER));
    console.log("ROLE ID IN HOMEPAGE: ", user?.roleId);
    useEffect(() => {
        dispatch(getUserProfileInformationAction());
    }, [])



    const userProfileInfo = useSelector(state => state.UserReducer.userProfileInfo);
    console.log("USER PROFILE INFO CHECKOUT: ", userProfileInfo);


    console.log("INITIAL VALUES CHECKOUT: ", values);
    let totalBill = 0;
    let transferCost = 30000;
    // let [flag, setFlag] = useState(state.OrderReducer.flag);
    const flag = useSelector(state => state.OrderReducer.flag);
    const { cartList } = useSelector(state => state.CartReducer);

    const handleReturnToHomePage = () => {
        history.push("/");
    }
    const handleHomeDeliveryChange = () => {
        dispatch({
            type: SET_HOME_DELIVERY_CHANGE
        })
    }
    const handlePickUpChange = () => {
        dispatch({
            type: SET_PICK_UP_CHANGE
        })
    }
    // const handleNavigateToPaymentMethodPage = () => {
    //     history.push("/payment/1000");
    // }
    const handleRenderProductsInCart = () => {
        return cartList.map((item, index) => {
            totalBill += ((item.price) * (1 - (item.discount / 100))) * item.quantity;
            if (index == cartList.length - 1) {
                if (values.flag == 1) {
                    localStorage.setItem("totalBill", totalBill + transferCost);
                } else if (values.flag == 0) {
                    localStorage.setItem("totalBill", totalBill);
                }
            }
            return <div className='flex justify-between mb-3' key={index}>
                <div className='flex'>
                    {item?.thumbnails?.map((image, index) => {
                        if (index == 0) {
                            return <img key={index} src={image} className="rounded-md mr-2 relative" style={{ height: '80px', width: '80px', border: '1px solid #D3D3D3' }} />
                        }
                    })}

                    <div>
                        <span className='text-sm pr-14'>{item.productName}</span>
                        <p className='text-xs' style={{ color: 'rgb(130, 134, 158)' }}>S??? l?????ng: {item.quantity}</p>
                    </div>
                </div>
                <div>
                    {((item.price * (1 - (item.discount / 100))) * item.quantity).toLocaleString()}<span className='underline'>??</span>
                </div>
            </div >
        })
    }



    return (
        (user?.roleId == 2 || typeof (user?.roleId) == typeof undefined) ?
            <div style={{ width: '75%', margin: '0 auto' }}>
                <div className='grid grid-cols-12 gap-16'>
                    <div className='col-span-7'>
                        <h3 className="font-normal mt-5 mb-3 cursor-pointer" onClick={handleReturnToHomePage}>Midori Mart</h3>
                        <ul className="breadcrumb mb-3" style={{ fontSize: '0.8rem' }}>
                            <li className={styles.breadcrumb_item}>
                                <NavLink to="/cart" className="text-black no-underline">Gi??? h??ng/Cart</NavLink>
                            </li>
                            <li className={`${styles.breadcrumb_item} breadcrumb-item-current`}>
                                Th??ng tin giao h??ng/Information
                            </li>
                            <li className={`${styles.breadcrumb_item_inactive}`}>
                                Ph????ng th???c thanh to??n/Payment method
                            </li>
                        </ul>
                        <h6 className='font-bold mb-3'>Th??ng tin/Information</h6>
                        <p>
                            <span className='mr-1'>B???n ???? c?? t??i kho???n?(Do you have account?)</span>
                            <NavLink to="/login" className="text-black no-underline">????ng nh???p/Login</NavLink>
                        </p>
                        <form className="mb-3" onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <input type="text"
                                    value={values.fullName}
                                    onChange={e => {
                                        props.setFieldTouched('fullName')
                                        handleChange(e)
                                    }} placeholder='H??? v?? t??n/Fullname *' className={`${styles.checkout__field} form-control pl-0 shadow-none`} name="fullName" />
                            </div>

                            {errors.fullName && touched.fullName ? <div className='text-red-600 mt-0' style={{ fontSize: '0.9rem' }}>{errors.fullName}</div> : <div></div>}
                            <div className='form-group grid grid-cols-12 mb-3 mt-1 flex'>
                                <div className='col-span-6 mr-2'>
                                    <input value={values.email} type="email" placeholder='Email *' className={`${styles.checkout__field} form-control pl-0 shadow-none`} onChange={e => {
                                        props.setFieldTouched('email')
                                        handleChange(e)
                                    }} name="email" />
                                    {errors.email && touched.email ? <span className='text-red-600' style={{ fontSize: '0.9rem' }}>{errors.email}</span> : <span></span>}
                                </div>

                                <div className='col-span-6'>
                                    <input type="text" value={values.phoneNumber} className={`${styles.checkout__field} form-control shadow-none`} id="phoneNumber" onChange={e => {
                                        props.setFieldTouched('phoneNumber')
                                        handleChange(e)
                                    }} name="phoneNumber" placeholder="S??? ??i???n tho???i/Phone *" />
                                    {errors.phoneNumber && touched.phoneNumber ? <span className='text-red-600' style={{ fontSize: '0.9rem' }}>{errors.phoneNumber}</span> : <span></span>}
                                </div>

                            </div>
                            <div className="form-group mb-3">
                                <div class="card text-black">
                                    <div className='flex items-center card-header bg-white h-12'>
                                        {flag == 1 ? <Radio className='mr-2' onChange={handleHomeDeliveryChange} checked={flag}></Radio> : <Radio className='mr-2' onChange={handleHomeDeliveryChange} checked={flag}></Radio>}

                                        <p className='mb-0'>
                                            Giao t???n n??i/Home delivery: Bi???u ph?? giao h??ng
                                        </p>
                                    </div>
                                    {flag == 1 ? <div className="card-body p-3">
                                        <div className=''>
                                            <input type="text" value={values.address} placeholder='?????a ch??? giao h??ng/Address *' onChange={e => {
                                                props.setFieldTouched('address')
                                                handleChange(e)
                                            }} className={`${styles.checkout__field} form-control pl-0 shadow-none`} name="address" />
                                        </div>
                                        {errors.address && touched.address ? <span className='text-red-600' style={{ fontSize: '0.9rem' }}>{errors.address}</span> : <span></span>}

                                        {/* <div className='grid grid-cols-3 gap-3 mt-3'>
                                        <div className={styles.province__container}>
                                            <div className={styles.province__label__container}>
                                                <label className={`${styles.checkout__shipping__province} field-label`} for="checkout__shipping__province"> T???nh /Province</label>
                                            </div>

                                            <select className={`${styles.checkout__field} ${styles.checkout__field__province} form-select shadow-none h-14 pt-4 text-sm`} onChange={e => {
                                                handleChange(e)
                                            }} name="province">
                                                <option value="" selected disabled>Ch???n t???nh/Province</option>
                                                <option value="1">H??? Ch?? Minh</option>
                                                <option value="2">H?? N???i</option>
                                                <option value="3">???? N???ng</option>
                                            </select>
                                            {errors.province && touched.province ? <span className='text-red-600' style={{ fontSize: '0.9rem' }}>{errors.province}</span> : <span></span>}
                                        </div>

                                        <div className={styles.district__container}>
                                            <div className={styles.district__label__container}>
                                                <label className={`${styles.checkout__shipping__district} field-label`} for="checkout__shipping__district"> Qu???n/Huy???n(District)</label>
                                            </div>

                                            <select className={`${styles.checkout__field} ${styles.checkout__field__district} form-select shadow-none h-14 pt-4 text-sm`} onChange={e => {
                                                handleChange(e)
                                            }} name="district">
                                                <option value="" selected disabled>Ch???n qu???n/huy???n</option>
                                                <option value="1">Ho??n Ki???m</option>
                                                <option value="2">Ba ????nh</option>
                                                <option value="3">?????ng ??a</option>
                                            </select>
                                            {errors.district && touched.district ? <span className='text-red-600' style={{ fontSize: '0.9rem' }}>{errors.district}</span> : <span></span>}

                                        </div>

                                        <div className={styles.ward__container}>
                                            <div className={styles.ward__label__container}>
                                                <label className={`${styles.checkout__shipping__ward} field-label`} for="checkout__shipping__district"> Ph?????ng/X??(Ward)</label>
                                            </div>
                                            <select className={`${styles.checkout__field} ${styles.checkout__field__ward} form-select shadow-none h-14 pt-4 text-sm`} onChange={e => {
                                                handleChange(e)
                                            }} name="ward">
                                                <option value="" selected disabled>Ch???n ph?????ng/x??</option>
                                                <option value="1">Ng???c Kh??nh</option>
                                                <option value="2">V??nh Ph??c</option>
                                                <option value="3">Gi???ng V??</option>
                                            </select>
                                            {errors.ward && touched.ward ? <span className='text-red-600' style={{ fontSize: '0.9rem' }}>{errors.ward}</span> : <span></span>}
                                        </div>

                                    </div> */}
                                    </div> : <div></div>}
                                    <div className="flex items-center card-footer bg-white h-12">
                                        {flag == 0 ? <Radio className='mr-2' onChange={handlePickUpChange} checked={!flag}></Radio> : <Radio className='mr-2' onChange={handlePickUpChange} checked={!flag}></Radio>}
                                        <p className='mb-0'>Nh???n t???i c???a h??ng/pick up at the store</p>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-4'>
                                <div></div>
                                <div className='col-span-3 text-right'>
                                    <button type="submit" onSubmit={handleSubmit} className='bg-green-700 mt-2 text-white p-3 rounded-md hover:bg-green-800'>
                                        Ti???p t???c ?????n ph????ng th???c thanh to??n/Go payment method
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
                                            <input type="text" placeholder='M?? gi???m gi??/Voucher' className={`${styles.checkout__voucher} form-control pl-0 shadow-none`} name="voucher" />
                                        </div>
                                    </form>
                                </div>
                                <div className='text-right'>
                                    <button className='bg-green-700 text-white p-2 rounded-md hover:bg-green-800'>
                                        S??? d???ng/Use
                                    </button>
                                </div>


                            </div>
                            <div className={`flex justify-between h-12 items-center mb-3 ${styles.checkout__totalBill}`}>
                                <p className='mb-0'>T???m t??nh/Notional price</p>
                                <p className='mb-0'>{totalBill.toLocaleString()}<span className='underline'>??</span></p>
                            </div>
                            {flag == 1 ? <div className={`flex justify-between h-12 items-center mb-3 ${styles.checkout__totalBill}`}>
                                <p className='pr-5 mb-0'>Ph?? v???n chuy???n t???m t??nh/Transfer costs</p>
                                <p className='mb-0'>{transferCost.toLocaleString()}<span className='underline'>??</span></p>
                            </div> : <Fragment></Fragment>}

                            <div className={`flex justify-between ${styles.checkout__totalBill}`}>
                                <span className='flex items-center'>
                                    <p className='pr-5'>T???ng c???ng/Total</p>
                                </span>
                                <span className='flex'>
                                    <span className='mr-2 text-xs mt-2' style={{ color: '#969696' }}>VND</span>
                                    {flag == 1 ? <p className='text-2xl'>{(totalBill + transferCost).toLocaleString()}<span className='underline'>??</span></p> : <p className='text-2xl'>{(totalBill).toLocaleString()}<span className='underline'>??</span></p>}


                                </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div > : user?.roleId == 4 ? <Redirect to="/ordermanagement" /> : <Redirect to="/usermanagement" />
    )
}

const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,32}$/;
const regexAllLetter = /^[a-zA-Z??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ]+$/;
const regexPhoneNumber = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;

const CheckoutWithFormik = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => ({
        fullName: props.userProfileInfo.fullname,
        phoneNumber: props.userProfileInfo.phonenumber,
        email: props.userProfileInfo.email,
        address: props.flag == 1 ? props?.userProfileInfo?.address?.addressDetail : "Kh??ch t??? ?????n c???a h??ng l???y ?????",
        flag: props.flag
        // province: "",
        // district: "",
        // ward: ""
    }),

    // Custom sync validation
    validationSchema: Yup.object().shape({
        fullName: Yup.string()
            .required("Qu?? kh??ch kh??ng ???????c ????? tr???ng t??n !!!").trim()
            .matches(regexAllLetter, "M???c t??n ch??? ???????c ph??p ch???a ch??? !!!"),
        phoneNumber: Yup.string()
            .required("Qu?? kh??ch kh??ng ???????c ????? tr???ng m???c s??? ??i???n tho???i !!!")
            .matches(regexPhoneNumber, "Qu?? kh??ch vui l??ng nh???p s??? ??i???n tho???i theo ????ng ?????nh d???ng nh?? m???ng Vi???t Nam !!!"),
        email: Yup.string()
            .required("Qu?? kh??ch kh??ng ???????c ????? tr???ng m???c email !!!")
            .email("Qu?? kh??ch vui l??ng nh???p ????ng ?????nh d???ng email !!!"),
        address: Yup.string()
            .required("Qu?? kh??ch vui l??ng kh??ng ???????c ????? tr???ng m???c ?????a ch??? nh???n h??ng !!!").trim(),
        // province: Yup.string()
        //     .required("Qu?? kh??ch vui l??ng l???a ch???n t???nh !!!"),
        // district: Yup.string()
        //     .required("Qu?? kh??ch vui l??ng l???a ch???n qu???n/huy???n !!!"),
        // ward: Yup.string()
        //     .required("Qu?? kh??ch vui l??ng l???a ch???n ph?????ng/x?? !!!")
    }),


    handleSubmit: (values, { setSubmitting }) => {
        console.log("C?? V??O HANDLE SUBMIT CHECKOUT");
        console.log("VALUE FORM CHECKOUT: ", values);
        // let addressArr = [];
        let address = {
            "provinceId": "H?? N???i",
            "districtId": "Ba ????nh",
            "wardId": "Ng???c Kh??nh",
            "addressDetail": values.address
        }
        // addressArr.push("H?? N???i");
        // addressArr.push("Ba ????nh");
        // addressArr.push("Ng???c Kh??nh");
        // addressArr.push(values.address);
        localStorage.setItem("address", JSON.stringify(address));
        localStorage.setItem("email", values.email);
        localStorage.setItem("fullName", values.fullName);
        localStorage.setItem("phoneNumber", values.phoneNumber);
        localStorage.setItem("receiveProductsMethod", values.flag);
        history.push("/payment/1000");
    },

    displayName: 'CheckoutWithFormik'
})(Checkout);

const mapStateToProps = (state) => {
    return {
        userProfileInfo: state.UserReducer.userProfileInfo,
        flag: state.OrderReducer.flag
    }
}

export default connect(mapStateToProps, null)(CheckoutWithFormik);

