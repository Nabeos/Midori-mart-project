import React, { Fragment } from 'react'
import styles from "./SuccessfulOrderDetail.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function SuccessfulOrderDetail(props) {
  const successfulItem = useSelector(state => state.OrderReducer.successfulItem);
  console.log("successfulItem: ", successfulItem);
  let totalBill = 0;
  return (
    <div className="">
      <div className="">
        <div className="text-2xl font-bold mb-2">Mã Đơn hàng: {successfulItem.orderNumber}</div>
        <div className="mb-2">
          <div className="text-base font-semibold">Thông tin khách hàng</div>
          <div className="text-base">
            Họ tên người nhận:<span> {successfulItem.fullName}</span>
          </div>
          <div className="text-base">
            Số điện thoại:<span> {successfulItem.phoneNumber}</span>
          </div>
          <div className="text-base">
            Địa chỉ:<span> {successfulItem.address.addressDetail}</span>
          </div>

          <div className="text-base">
            Ghi chú:<span> {successfulItem.notes}</span>
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
              Thời gian tạo:<span> {successfulItem.orderDate}</span>
            </div>
            <div className="text-base">
              Thời gian nhận hàng:<span> {successfulItem.deliveryDate} - {successfulItem.deliveryTimeRange}</span>
            </div>
            <div className="text-base">
              Trạng thái đơn hàng:
              <span className="text-green-700"> {successfulItem.status}</span>
            </div>
          </div>
          <div className="overflow-y-auto" style={{ height: "30rem" }}>
            <table
              className={`${styles.successfulorderdetail__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-3`}
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
                {successfulItem.orderDetail.map((item, index) => {
                  totalBill += (item.price * (1 - (item.discount / 100))) * item.quantity;
                  return <tr>
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
                      {(item.price * (1 - (item.discount / 100))).toLocaleString()}đ
                    </td>
                    <td className="border border-slate-300 text-base text-center">
                      {item.quantity}
                    </td>
                  </tr>
                })}
              </tbody>
            </table>
            <div className="flex justify-end mr-5 text-lg font-medium mb-2">
              {successfulItem?.receiveProductsMethod == "Giao Tận Nhà" ? <div>
                Phí vận chuyển: <span className="text-red-600 font-semibold">
                  30,000đ</span>
              </div> : <Fragment></Fragment>}

            </div>
            <div className="flex justify-end mr-5 text-xl font-semibold">
              {successfulItem?.receiveProductsMethod == "Giao Tận Nhà" ? <div>
                Thành tiền:<span className="text-red-600"> {(totalBill + 30000).toLocaleString()}đ</span>
              </div> : <div>
                Thành tiền:<span className="text-red-600"> {totalBill.toLocaleString()}đ</span>
              </div>}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
