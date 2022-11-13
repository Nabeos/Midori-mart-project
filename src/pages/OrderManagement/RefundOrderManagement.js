import React, { useEffect, useState } from 'react'
import styles from "./RefundOrderManagement.module.css";
import { Button, Form, Modal, Popover, Pagination, Input, Tabs } from "antd";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaEye } from "react-icons/fa";
import RefundOrderDetail from './RefundOrderDetail';
import { getAllCustomerOrderForSellerAction } from '../../redux/action/order/OrderAction';
import { CLOSE_MODAL_REFUND_SELLER_ORDER, SHOW_MODAL_REFUND_SELLER_ORDER } from '../../redux/type/order/OrderType';
export default function RefundOrderManagement() {
    const openModalRefundSellerOrder = useSelector(state => state.OrderReducer.openModalRefundSellerOrder);
    console.log("openModalRefundSellerOrder", openModalRefundSellerOrder);
    const dispatch = useDispatch();
    const showModal = (sellerRefundOrderItemAction) => {
        dispatch({
            type: SHOW_MODAL_REFUND_SELLER_ORDER,
            sellerRefundOrderItemAction
        })
    };
    const handleCancel = () => {
        dispatch({
            type: CLOSE_MODAL_REFUND_SELLER_ORDER
        })

    };
    useEffect(() => {
        dispatch(getAllCustomerOrderForSellerAction(1000, 0, 5));
    }, [])
    const customerOrdersForSeller = useSelector(state => state.OrderReducer.customerOrdersForSeller);
    console.log("REFUND CUSTOMER ORDERS FOR SELLER: ", customerOrdersForSeller);

    return (
        (customerOrdersForSeller.length) > 0 ? <div>
            <div className="flex flex-row">
                <div
                    className=" mt-3 ml-2 text-xl font-semibold"
                    style={{ width: "100%" }}
                >
                    Có <span className="text-green-800"> {customerOrdersForSeller.length} </span> đơn hàng trả lại
                </div>
                <div
                    className="rounded-md mt-3 flex justify-end mr-3 text-black"
                    style={{ width: "100%" }}
                >
                    <Form>
                        <Input
                            placeholder="Tìm kiếm"
                            className="shadow-none hover:border-green-700 focus:border-green-700"
                            style={{ width: "100%", height: "2.5rem" }}
                        />
                    </Form>
                </div>
            </div>

            <div className="flex justify-center">
                <table
                    className={`${styles.refundordermanagement__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
                    style={{ width: "80%", minHeight: "350px" }}
                >
                    <thead>
                        <tr>
                            <th className="border border-slate-300 p-4 text-lg text-center">
                                {" "}
                                STT
                            </th>
                            <th className="border border-slate-300 p-4 text-lg text-center">
                                {" "}
                                Mã đơn hàng
                            </th>
                            <th className="border border-slate-300 p-4 text-lg text-center">
                                Địa chỉ giao hàng
                            </th>
                            <th className="border border-slate-300 p-4 text-lg text-center">
                                Thời gian tạo
                            </th>
                            <th className="border border-slate-300 p-4 text-lg text-center">
                                Thời gian giao hàng
                            </th>
                            <th className="border border-slate-300 p-4 text-lg text-center">
                                Trạng thái đơn hàng
                            </th>
                            <th className="border border-slate-300 p-4 text-lg text-center">
                                Xem chi tiết
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {customerOrdersForSeller.map((item, index) => {
                            return <tr>
                                <td className="border border-slate-300 text-center">{index + 1}</td>
                                <td className="border border-slate-300 text-center">
                                    {item.orderNumber}
                                </td>
                                <td className="border border-slate-300 text-center" style={{ padding: '1rem' }}>
                                    {item.address.addressDetail}
                                </td>
                                <td className="border border-slate-300 text-center">
                                    <span className='p-2'>{item.orderDate}</span>
                                </td>
                                <td className="border border-slate-300 text-center">
                                    <span className='p-2'>{item.deliveryDate}</span>
                                </td>
                                <td className="border border-slate-300 text-center"><span className="p-2 bg-yellow-600 rounded-md text-white">{item.status}</span></td>

                                <td className="border border-slate-300 text-center">

                                    <Button
                                        type=""
                                        className=" text-green-700 no-shadow border-none font-bold text-base focus:text-green-700 hover:text-green-700"
                                        onClick={() => { showModal(item) }}
                                    >
                                        <FaEye />
                                    </Button>
                                    <Modal
                                        open={openModalRefundSellerOrder}
                                        title="Chi tiết đơn hàng của khách hàng"
                                        onCancel={handleCancel}
                                        footer={[]}
                                        width={900}
                                    >
                                        <RefundOrderDetail refundDetailInfo={item} />
                                    </Modal>
                                </td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
            <div className="flex justify-end mb-4" style={{ width: "90%" }}>
                <Pagination
                    className="hover:text-green-800 focus:border-green-800"
                    defaultCurrent={1}
                    total={50}
                />
            </div>
        </div> : <div style={{ minHeight: "485px" }}>
            <div className="text-center" style={{
                width: "80%",
                margin: "30px auto 0 auto",
            }}>
                <div className='flex justify-center items-center mb-3'>
                    <img src={require('../../assets/images/cart.png')} style={{ width: '300px' }} />
                </div>

                <p className='mb-4 text-lg'>Hiện tại chưa có đơn hàng nào yêu cầu hoàn trả</p>

            </div>
        </div >
    );
}