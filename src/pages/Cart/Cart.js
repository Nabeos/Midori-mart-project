import React, { Fragment, useState } from 'react'
import { history } from '../../App';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './Cart.module.css';
import { useSelector, useDispatch } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { Button, Form, Input, Rate } from "antd";
import { DeleteOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { handleQuantity } from '../../redux/action/cart/CartAction';

export default function Cart() {
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
    const { cartList } = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();
    const handleReturnHomepage = () => {
        history.push("/");
    }
    const handleDeleteProductFromCart = () => {

    }
    const handleSubmit = () => {

    }
    const handleChange = () => {

    }
    const handleNavigateToCheckoutPage = () => {
        history.push("/checkout/1000");
    }
    const handleProductQuantity = (id, quantity) => {
        dispatch(handleQuantity(id, quantity));
    }
    const handleDisplayProductsInCart = () => {
        return cartList.map((item, index) => {
            totalBill += item.price * item.quantity;
            return <tr height="10px" className='pb-0' key={index} style={{ borderBottom: '1px solid rgba(166, 157, 157, 0.3)' }}>
                <td className='h-auto'>
                    <span className='d-flex'>
                        <img src={item.image} style={{ width: '75px', height: '75px' }} />
                        <span>{item.productName}</span>
                    </span>
                </td>
                <td>
                    <span className='text-red-700 font-bold'>{item.price.toLocaleString()}</span><span className='underline text-red-700 font-bold'>đ</span>
                </td>
                <td>
                    <div className='d-flex items-center' style={{}}>

                        <button
                            className={`${styles.cart__decrease__button} btn btn-outline-secondary`}
                            type="button"
                            onClick={() => {
                                handleProductQuantity(item.id, -1)
                            }}
                        >
                            -
                        </button>
                        <div className={`${styles.cart__quantity} p-3 text-center flex items-center justify-center shadow-none text-base`} style={{ width: "20%", height: '38px' }}>
                            {item.quantity}
                        </div>
                        <button
                            className={`${styles.cart__increase__button} btn btn-outline-secondary`}
                            type="button"
                            onClick={() => {
                                handleProductQuantity(item.id, 1)
                            }}
                        >
                            +
                        </button>



                    </div>

                    {/* Chỉnh lại từ 49 đến 61 */}
                </td>
                <td><span className='text-red-700 font-bold'>{(item.quantity * item.price).toLocaleString()}</span><span className='underline text-red-700 font-bold'>đ</span></td>
                <td>
                    <DeleteOutlined onClick={handleDeleteProductFromCart} className='d-flex w-9 items-center bg-red-800 text-xl text-white p-2 hover:bg-red-900 cursor-pointer' />
                </td>
            </tr >
        })
    }
    return (
        cartList?.length > 0 ? <div>
            <Header />
            <div className='bg-gray-100 p-5'>
                <div className={styles.cart__contains__items}>
                    <div className='grid grid-cols-3 gap-12'>
                        <div className='col-span-2 bg-white p-3 h-fit' style={{ border: '1px solid rgba(0, 0, 0, 0.1)', boxShadow: '3px 4px 9px 0 rgba(0, 0, 0, 0.4)' }}>
                            <div className='d-flex justify-between mb-3'>
                                <h3 className='text-black mb-3'>
                                    Giỏ hàng
                                </h3>
                                <button className=' bg-red-800 text-white p-2 w-24 rounded-md hover:bg-red-900'>Xóa tất cả</button>
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
                                        <input type="date" placeholder='Chọn ngày giao' className={`${styles.cart__deliveryDate} form-control shadow-none`} name="id" />
                                    </div>

                                    <div className="form-group">
                                        <select className={`form-select ${styles.cart__deliveryDate} shadow-none`} name="deliveryTime" style={{ padding: '6px' }}>
                                            <option value="" selected disabled>Chọn giờ giao</option>
                                            <option value="">9:00 - 10:00</option>
                                            <option value="">10:00 - 11:00</option>
                                            <option value="">11:00 - 12:00</option>
                                            <option value="">12:00 - 13:00</option>
                                            <option value="">13:00 - 14:00</option>
                                            <option value="">14:00 - 15:00</option>
                                            <option value="">15:00 - 16:00</option>
                                            <option value="">16:00 - 17:00</option>
                                            <option value="">17:00 - 18:00</option>
                                            <option value="">18:00 - 19:00</option>
                                            <option value="">19:00 - 20:00</option>
                                        </select>

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
                                    <textarea className={`${styles.cart__deliveryDate} form-control mt-3 shadow-none`} id="w3review" name="w3review" rows="4" cols="50" placeholder='Quý khách vui lòng ghi chú thêm về đơn hàng nếu có thêm yêu cầu'></textarea>
                                </div>
                                <div className='d-flex justify-center'>
                                    <button className='bg-green-700 hover:bg-green-800 text-white p-2 rounded-md' onClick={handleNavigateToCheckoutPage}>
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
        </div>
    )
}
