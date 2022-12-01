import React from 'react'
import { Button, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CancelOrderDetail.module.css";

export default function CancelOrderDetail(props) {
  let totalBill = 0;
  const dispatch = useDispatch();
  const sellerCancelOrderItem = useSelector(state => state.OrderReducer.sellerCancelOrderItem);
  console.log("sellerCancelOrderItem: ", sellerCancelOrderItem);
  return (
    <div className="">
      <div className="">
        <div className="text-2xl font-bold mb-2">Mã Đơn hàng: {sellerCancelOrderItem.orderNumber}</div>
        <div className="mb-2">
          <div className="text-base font-semibold">Thông tin khách hàng</div>
          <div className="text-base">
            Họ tên người nhận:<span> {sellerCancelOrderItem.fullName}</span>
          </div>
          <div className="text-base">
            Số điện thoại:<span> {sellerCancelOrderItem.phoneNumber}</span>
          </div>
          <div className="text-base">
            {/* Địa chỉ:<span> {sellerCancelOrderItem.address.addressDetail}</span> */}
          </div>

          <div className="text-base">
            Ghi chú:<span> {sellerCancelOrderItem.notes}</span>
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
              Thời gian tạo:<span> {sellerCancelOrderItem.orderDate}</span>
            </div>
            <div className="text-base">
              Thời gian nhận hàng:<span> {sellerCancelOrderItem.deliveryDate} - {sellerCancelOrderItem.deliveryTimeRange}</span>
            </div>
            <div className="text-base">
              Trạng thái đơn hàng:
              <span className="text-red-700"> {sellerCancelOrderItem.status}</span>
            </div>
          </div>
          <div className="overflow-y-auto" style={{ height: "30rem" }}>
            <table
              className={`${styles.cancelorderdetail__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-3`}
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
                {sellerCancelOrderItem.orderDetail.map((item, index) => {
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
            {/* <div className="flex justify-end mr-5 text-lg font-medium mb-2">
              <div>
                Phí vận chuyển:<span> 23tr</span>
              </div>
            </div> */}
            <div className="flex justify-end mr-5 text-xl font-semibold">
              <div>
                Thành tiền:<span className="text-red-600"> {sellerCancelOrderItem?.totalBill?.toLocaleString()}đ</span>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-end items-center mt-3" style={{ width: "98%" }}>
            <Button className="text-lg rounded-md bg-green-700 border-green-700 text-white no-shadow hover:bg-green-700 hover:border-green-700 hover:text-white focus:bg-green-700 focus:border-green-700 focus:text-white">Xác nhận</Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
