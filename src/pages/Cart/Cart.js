import React, { Fragment, useEffect, useState } from 'react'
import { history } from '../../App';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './Cart.module.css';
import { connect, useSelector, useDispatch } from 'react-redux'
import Table from 'react-bootstrap/Table';
import moment from 'moment';
import { Button, Form, Input, Rate, Popconfirm, message } from "antd";
import { DeleteOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { handleQuantity } from '../../redux/action/cart/CartAction';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { DELETE_ALL_PRODUCTS_FROM_CART, REMOVE_PRODUCT_FROM_CART } from '../../redux/type/cart/CartType';
import { Redirect } from 'react-router-dom';
import { USER } from "../../redux/type/user/UserType";

function Cart(props) {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    console.log("VALUES CART: ", values);
    let user = JSON.parse(localStorage.getItem(USER));
    console.log("ROLE ID IN HOMEPAGE: ", user?.roleId);
    const text = 'Quý khách muốn xóa sản phẩm này khỏi giỏ hàng?';
    const messageDeleteAllProducts = 'Quý khách muốn xóa tất cả sản phẩm khỏi giỏ hàng?'
    let productItemLocal = localStorage.getItem("productItem");
    console.log("productItemLocal: ", productItemLocal);
    //Thử nghiệm
    let [num, setNum] = useState(0);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    };
    let handleChangeThanh = (e) => {
        setNum(e.target.value);
    };




    let totalBill = 0;
    let flag = 1;
    useEffect(() => {
        localStorage.setItem("deliveryDate", "");
        localStorage.setItem("deliveryTimeRange", "");
    }, [])

    const { cartList } = useSelector(state => state.CartReducer);
    console.log("CART LIST: ", cartList);
    console.log("FIRST: ", cartList[0]);
    const dispatch = useDispatch();
    const handleReturnHomepage = () => {
        history.push("/");
    }
    const handleDeleteProductFromCart = (sku) => {
        dispatch({
            type: REMOVE_PRODUCT_FROM_CART,
            sku
        })
    }

    const handleDeleteAllProductsFromCart = () => {
        dispatch({
            type: DELETE_ALL_PRODUCTS_FROM_CART
        })
    }

    const handleProductQuantity = (slug, quantity) => {
        dispatch(handleQuantity(slug, quantity));
    }
    const handleDisplayProductsInCart = () => {
        return cartList?.map((item, index) => {
            console.log("item: ", item);
            if (item.quantity <= 0) {
                item.quantity = 1;
            }
            totalBill += ((item?.price) * (1 - (item?.discount / 100))) * item?.quantity;
            return <tr height="10px" className='pb-0' key={index} style={{ borderBottom: '1px solid rgba(166, 157, 157, 0.3)' }}>
                <td className='h-auto'>
                    <span className='d-flex'>
                        {item?.thumbnails?.map((image, index) => {
                            if (index == 0) {
                                return <img key={index} src={image} style={{ width: '75px', height: '75px' }} />

                            }
                        })}

                        <span>{item?.title}</span>
                    </span>
                </td>
                <td>
                    <span className='text-red-700 font-bold'>{((item?.price) * (1 - (item?.discount / 100)))?.toLocaleString()}</span><span className='underline text-red-700 font-bold'>đ</span>
                </td>
                <td>
                    <div className='d-flex items-center' style={{}}>

                        <button
                            className={`${styles.cart__decrease__button} btn btn-outline-secondary`}
                            type="button"
                            onClick={() => {
                                handleProductQuantity(item.slug, -1)
                            }}
                        >
                            -
                        </button>
                        <div className={`${styles.cart__quantity} p-3 text-center flex items-center justify-center shadow-none text-base`} style={{ width: "20%", height: '38px' }}>
                            {item?.quantity}
                        </div>
                        <button
                            className={`${styles.cart__increase__button} btn btn-outline-secondary`}
                            type="button"
                            onClick={() => {
                                handleProductQuantity(item.slug, 1)
                            }}
                        >
                            +
                        </button>



                    </div>

                    {/* Chỉnh lại từ 49 đến 61 */}
                </td>
                <td><span className='text-red-700 font-bold'>{(item?.quantity * ((item?.price) * (1 - (item?.discount / 100)))).toLocaleString()}</span><span className='underline text-red-700 font-bold'>đ</span></td>
                <td>

                    <Popconfirm placement="top"
                        onConfirm={(sku) => { handleDeleteProductFromCart(item.sku) }}
                        title={text}
                        okText="Yes" cancelText="No">
                        <DeleteOutlined
                            className='d-flex w-9 items-center bg-red-800 text-xl text-white p-2 hover:bg-red-900 cursor-pointer' />
                    </Popconfirm>
                </td>
            </tr >
        })
    }
    return (
        (user?.roleId == 2 || typeof (user?.roleId) == typeof undefined) ?
            ((cartList?.length > 0 && cartList[0].quantity !== undefined && cartList[0].quantity !== NaN) ? <div>
                <Header />
                <div className='bg-gray-100 p-5'>
                    <div className={styles.cart__contains__items}>
                        <div className='grid grid-cols-3 gap-12'>
                            <div className='col-span-2 bg-white p-3 h-fit' style={{ border: '1px solid rgba(0, 0, 0, 0.1)', boxShadow: '3px 4px 9px 0 rgba(0, 0, 0, 0.4)' }}>
                                <div className='d-flex justify-between mb-3'>
                                    <h3 className='text-black mb-3'>
                                        Giỏ hàng
                                    </h3>
                                    <Popconfirm placement="top"
                                        onConfirm={handleDeleteAllProductsFromCart}
                                        title={messageDeleteAllProducts}
                                        okText="Yes" cancelText="No">
                                        <button className='bg-red-800 text-white p-2 w-24 rounded-md hover:bg-red-900'>Xóa tất cả</button>
                                    </Popconfirm>

                                </div>
                                <Table className={styles.cart__table}>
                                    <thead className='bg-green-700'>
                                        <tr>
                                            <th className={styles.cart__table__title}>Sản phẩm</th>
                                            <th className={styles.cart__table__title} style={{ whiteSpace: 'nowrap' }}>Giá bán lẻ</th>
                                            <th className={styles.cart__table__title}>Số lượng</th>
                                            <th className={styles.cart__table__title} style={{ whiteSpace: 'nowrap' }}>Tổng tiền</th>
                                            <th className={styles.cart__table__title}>Xóa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {handleDisplayProductsInCart()}
                                    </tbody>
                                </Table>
                            </div>
                            <div className='p-3 bg-white h-fit' style={{ border: '1px solid rgba(0, 0, 0, 0.1)', boxShadow: '3px 4px 9px 0 rgba(0, 0, 0, 0.4)' }}>
                                <p>Thời gian giao hàng</p>
                                <form className="container-fluid" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-2 gap-3 mb-3">
                                        <div className="form-group">
                                            <input type="date" value={values.deliveryDate} onChange={e => {
                                                handleChange(e)
                                            }} placeholder='Chọn ngày giao' className={`${styles.cart__deliveryDate} form-control shadow-none`} name="deliveryDate" min={moment().format("YYYY-MM-DD")} />
                                            {errors.deliveryDate && touched.deliveryDate ? <div className='text-red-600' style={{ fontSize: '0.8rem' }}>{errors.deliveryDate}</div> : <div></div>}
                                        </div>

                                        <div className="form-group">
                                            <select value={values.deliveryTime} onChange={e => {
                                                localStorage.setItem("deliveryTimeRange", values.deliveryTime);
                                                handleChange(e)
                                            }} className={`form-select ${styles.cart__deliveryDate} shadow-none`} name="deliveryTime" style={{ padding: '6px' }}>
                                                <option value="" selected disabled>Chọn giờ giao</option>
                                                <option value="9:00 - 10:00">9:00 - 10:00</option>
                                                <option value="10:00 - 11:00">10:00 - 11:00</option>
                                                <option value="11:00 - 12:00">11:00 - 12:00</option>
                                                <option value="12:00 - 13:00">12:00 - 13:00</option>
                                                <option value="13:00 - 14:00">13:00 - 14:00</option>
                                                <option value="14:00 - 15:00">14:00 - 15:00</option>
                                                <option value="15:00 - 16:00">15:00 - 16:00</option>
                                                <option value="16:00 - 17:00">16:00 - 17:00</option>
                                                <option value="17:00 - 18:00">17:00 - 18:00</option>
                                                <option value="18:00 - 19:00">18:00 - 19:00</option>
                                                <option value="19:00 - 20:00">19:00 - 20:00</option>
                                            </select>
                                            {errors.deliveryTime && touched.deliveryTime ? <span className='text-red-600' style={{ fontSize: '0.8rem' }}>{errors.deliveryTime}</span> : <span></span>}
                                        </div>
                                    </div>
                                    <div className='d-flex justify-between mb-3'>
                                        <span>Thành tiền</span>
                                        <span>
                                            <span className='text-black text-xl'>{totalBill.toLocaleString()}</span><span className='underline text-black text-xl'>đ</span>
                                        </span>
                                    </div>
                                    <div className='mb-3'>
                                        <span className=''>Ghi chú</span>
                                        <textarea onChange={handleChange} className={`${styles.cart__deliveryDate} form-control mt-3 shadow-none`} id="notes" name="notes" rows="4" cols="50" placeholder='Quý khách vui lòng ghi chú thêm về đơn hàng nếu có thêm yêu cầu'></textarea>
                                    </div>
                                    <div className='d-flex justify-center'>
                                        <button type="submit" className='bg-green-700 hover:bg-green-800 text-white p-2 rounded-md' onSubmit={handleSubmit}>
                                            Thanh toán
                                        </button>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
                <Footer className="mt-5" />
            </div > : <div>
                <Header />
                <div className={`${styles.cart__no__items} text-center`}>
                    <div className='flex justify-center items-center mb-3'>
                        <img src={require('../../assets/images/cart.png')} style={{ width: '25%' }} />
                    </div>

                    <p className='mb-4'>Giỏ hàng chưa có sản phẩm nào</p>

                    <button className='bg-green-700 text-white p-2 mb-3 rounded-md hover:bg-green-800' onClick={handleReturnHomepage}>
                        Mua sắm ngay
                    </button>
                </div>
                <Footer />
            </div>) : user?.roleId == 4 ? <Redirect to="/ordermanagement" /> : <Redirect to="/usermanagement" />
    )
}

const CartWithFormik = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => ({
        deliveryDate: localStorage.getItem("deliveryDate"),
        deliveryTime: localStorage.getItem("deliveryTimeRange"),
        notes: ""
    }),

    // Custom sync validation
    validationSchema: Yup.object().shape({
        deliveryDate: Yup.string()
            .required("Quý khách vui lòng lựa chọn ngày nhận hàng!!!").nullable(),
        deliveryTime: Yup.string()
            .required("Quý khách vui lòng lựa chọn giờ nhận hàng !!!").nullable()
    }),


    handleSubmit: (values, { setSubmitting }) => {
        console.log("CÓ VÀO HANDLE SUBMIT");
        console.log("VALUE FORM: ", values);
        localStorage.setItem("deliveryDate", values.deliveryDate);
        localStorage.setItem("deliveryTimeRange", values.deliveryTime);
        localStorage.setItem("note", values.notes);
        history.push("/checkout/1000");
    },

    displayName: 'CartWithFormik'
})(Cart);

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, null)(CartWithFormik);
