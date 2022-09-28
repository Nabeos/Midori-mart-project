import React from 'react'
import { history } from '../../App';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './Cart.module.css';
import { useSelector, useDispatch } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { DeleteOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { handleQuantity } from '../../redux/action/cart/CartAction';

export default function Cart() {
    let totalBill = 0;
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
            return <tr key={index}>
                <td>
                    <span className='d-flex'>
                        <img src={item.image} />
                        <span>{item.productName}</span>
                    </span>
                </td>
                <td>
                    <span className='text-red-700 font-bold'>{item.price.toLocaleString()}</span><span className='underline text-red-700 font-bold'>đ</span>
                </td>
                <td>
                    <div className='d-flex'>
                        <PlusOutlined onClick={() => {
                            handleProductQuantity(item.id, 1)
                        }} className='d-flex w-8 items-center mr-2 bg-green-700 text-xl text-white p-2 hover:bg-green-800 rounded-sm cursor-pointer' />
                        <span className='mr-2'>{item.quantity}</span>
                        <MinusOutlined onClick={() => {
                            handleProductQuantity(item.id, -1)
                        }} className='d-flex w-8 items-center bg-red-700 text-xl text-white p-2 hover:bg-red-800 cursor-pointer' />
                    </div>
                </td>
                <td><span className='text-red-700 font-bold'>{(item.quantity * item.price).toLocaleString()}</span><span className='underline text-red-700 font-bold'>đ</span></td>
                <td>
                    <DeleteOutlined onClick={handleDeleteProductFromCart} className='d-flex w-9 items-center bg-red-700 text-xl text-white p-2 hover:bg-red-800 cursor-pointer' />
                </td>
            </tr>
        })
    }
    return (
        cartList?.length > 0 ? <div>
            <Header />
            <div className={styles.cart__contains__items}>


                <div className='grid grid-cols-3 gap-12'>
                    <div className='col-span-2'>
                        <div className='d-flex justify-between mb-3'>
                            <h3 className='text-green-700 mb-3'>
                                Giỏ hàng
                            </h3>
                            <button className=' bg-red-700 text-white p-2 w-24 rounded-md hover:bg-red-800'>Xóa tất cả</button>
                        </div>
                        <Table className={styles.cart__table}>
                            <thead className='bg-green-700'>
                                <tr>
                                    <th className={styles.cart__table__title}>Sản phẩm</th>
                                    <th className={styles.cart__table__title}>Giá bán lẻ</th>
                                    <th className={styles.cart__table__title}>Số lượng</th>
                                    <th className={styles.cart__table__title}>Tổng tiền</th>
                                    <th className={styles.cart__table__title}>Xóa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {handleDisplayProductsInCart()}
                            </tbody>
                        </Table>
                    </div>
                    <div>
                        <p>Thời gian giao hàng</p>
                        <form className="container-fluid" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-3 mb-3">
                                <div className="form-group">
                                    <input type="date" placeholder='Chọn ngày giao' className={`${styles.cart__deliveryDate} form-control shadow-none`} name="id" />
                                </div>

                                <div className="form-group">
                                    <select className={`form-select ${styles.cart__deliveryDate} shadow-none`} name="deliveryTime">
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
                                    <span className='text-red-700 font-bold'>{totalBill.toLocaleString()}</span><span className='underline text-red-700 font-bold'>đ</span>
                                </span>
                            </div>
                            <div className='mb-3'>
                                <span className=''>Ghi chú</span>
                                <textarea className={`${styles.cart__deliveryDate} form-control mt-3 shadow-none`} id="w3review" name="w3review" rows="4" cols="50" placeholder='Quý khách vui lòng ghi chú thêm về đơn hàng nếu có thêm yêu cầu'></textarea>
                            </div>
                            <div className='d-flex justify-center'>
                                <button className='bg-red-700 text-white p-2 rounded-md hover:bg-red-800' onClick={handleNavigateToCheckoutPage}>
                                    Thanh toán
                                </button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
            <Footer />
        </div> : <div>
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
