import React from 'react'
import styles from "./RefundOrderDetail.module.css";
import { Button, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";

export default function RefundOrderDetail(props) {
    let totalBill = 0;
    const dispatch = useDispatch();
    const sellerRefundOrderItem = useSelector(state => state.OrderReducer.sellerRefundOrderItem);
    console.log("sellerRefundOrderItem: ", sellerRefundOrderItem);
    return (
        <div className="">
            <div className="">
                <div className="text-2xl font-bold mb-2">Mã Đơn hàng: {sellerRefundOrderItem.orderNumber}</div>
                <div className="mb-2">
                    <div className="text-base font-semibold">Thông tin khách hàng</div>
                    <div className="text-base">
                        Họ tên người nhận:<span> {sellerRefundOrderItem.fullName}</span>
                    </div>
                    <div className="text-base">
                        Số điện thoại:<span> {sellerRefundOrderItem.phoneNumber}</span>
                    </div>
                    <div className="text-base">
                        Địa chỉ:<span> {sellerRefundOrderItem.address.addressDetail}</span>
                    </div>

                    <div className="text-base">
                        Ghi chú:<span> {sellerRefundOrderItem.notes}</span>
                    </div>
                </div>
                {/* <div className="mb-2">
                    <div className="text-base font-semibold">Thông tin shipper</div>
                    <div className="text-base">
                        Shipper: <span> Nguyen Van A</span>
                    </div>
                </div> */}
                <div>
                    <div className="text-base font-semibold">Thông tin đơn hàng</div>
                    <div>
                        <div className="text-base">
                            Thời gian tạo:<span> {sellerRefundOrderItem.orderDate}</span>
                        </div>
                        <div className="text-base">
                            Thời gian nhận hàng:<span> {sellerRefundOrderItem.deliveryDate} - {sellerRefundOrderItem.deliveryTimeRange}</span>
                        </div>
                        <div className="text-base">
                            Trạng thái đơn hàng:
                            <span className="text-yellow-600"> {sellerRefundOrderItem.status}</span>
                        </div>
                    </div>
                    <div className="overflow-y-auto" style={{ height: "30rem" }}>
                        <table
                            className={`${styles.refundorderdetail__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-3`}
                        >
                            <thead>
                                <tr>
                                    <th className="border border-slate-300 p-4 text-base text-center">
                                        STT
                                    </th>
                                    <th className="border border-slate-300 p-4 text-base text-center">
                                        Ảnh sản phẩm
                                    </th>
                                    <th className="border border-slate-300 p-4 text-base text-center">
                                        Tên sản phẩm
                                    </th>
                                    <th className="border border-slate-300 p-4 text-base text-center">
                                        Mã sản phẩm
                                    </th>
                                    <th className="border border-slate-300 p-4 text-base text-center">
                                        Giá tiền
                                    </th>
                                    <th className="border border-slate-300 p-4 text-base text-center">
                                        Số lượng
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {sellerRefundOrderItem?.orderDetail.map((item, index) => {
                                    totalBill += item.price * item.quantity;
                                    return <tr key={index}>
                                        <td className="border border-slate-300 text-base text-center">
                                            {index + 1}
                                        </td>
                                        <td className="border border-slate-300 text-base text-center">
                                            <img src={item.thumbnails} />
                                        </td>
                                        <td className="border border-slate-300 text-base text-center">
                                            {item.productName}
                                        </td>
                                        <td className="border border-slate-300 text-base text-center">
                                            {item.sku}
                                        </td>
                                        <td className="border border-slate-300 text-base text-center">
                                            {item.price.toLocaleString()}đ
                                        </td>
                                        <td className="border border-slate-300 text-base text-center">
                                            {item.quantity}
                                        </td>
                                    </tr>
                                })}

                            </tbody>
                        </table>
                        <div className="flex justify-end mr-5 text-lg font-medium mb-2">
                            <div>
                                Phí vận chuyển:<span className="text-red-600 font-semibold"> 30,000đ</span>
                            </div>
                        </div>
                        <div className="flex justify-end mr-5 text-xl font-semibold">
                            <div>
                                Thành tiền:<span className="text-red-600"> {sellerRefundOrderItem?.totalBill?.toLocaleString()}đ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
